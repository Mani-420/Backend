import { asyncHandler } from '../utils/asyncHandler.js';
import { ApiError } from '../utils/apiError.js';
import { User } from '../models/user.model.js';
import { uploadOnCloudinary } from '../utils/cloudinary.js';
import { ApiResponse } from '../utils/ApiResponse.js';

generateAccessAndRefreshTokens = async (userId) => {
  try {
    const user = await User.findById(userId);
    const accessToken = user.generateAccessToken();
    const refreshToken = user.generateRefreshToken();
  } catch (error) {
    throw new ApiError(
      500,
      'Something went wring while generating access and refresh tokens'
    );
  }
};

const registerUser = asyncHandler(async (req, res) => {
  // get user details from the frontend
  // validations that name, username or email are not empty
  // check if user already exists in the database (username and email should be unique)
  // check for images and avatar
  // upload them to cloudainary, avatar
  // create user Object - create entry in db
  // remove password and refresh token from the response
  // check if user is created successfully
  // send response to the frontend with user details

  const { fullName, email, username, password } = req.body;
  // console.log(fullName, email, username, password);

  if (
    [fullName, email, username, password].some((field) => field?.trim() === '')
  ) {
    throw new ApiError(400, 'Please provide all the required fields');
  }

  const existerUser = await User.findOne({
    $or: [{ username }, { email }]
  });

  if (existerUser) {
    throw new ApiError(409, 'Username or email already exists');
  }

  console.log('REQ.FILES:', req.files);
  console.log('REQ.body:', req.body);
  const avatarLocalPath = req.files?.avatar[0]?.path;
  const coverImageLocalPath = req.files?.coverImage[0]?.path;

  if (!avatarLocalPath) {
    throw new ApiError(400, 'Avatar is required');
  }

  const avatar = await uploadOnCloudinary(avatarLocalPath);
  const coverImage = await uploadOnCloudinary(coverImageLocalPath);

  if (!avatar) {
    throw new ApiError(400, 'Avatar file is required');
  }

  console.log('avatarLocalPath:', avatarLocalPath);

  const user = await User.create({
    username: username.toLowerCase(),
    email,
    fullName,
    password,
    avatar: avatar.url,
    coverImage: coverImage?.url || ''
  });

  const createdUser = await User.findById(user._id).select(
    '-password -refreshToken'
  );

  if (!createdUser) {
    throw new ApiError(500, 'Error creating user');
  }

  return res
    .status(201)
    .json(new ApiResponse(200, 'User created successfully', createdUser));
});

const loginUser = asyncHandler(async (req, res) => {
  // req.body -> data
  // access username or email
  // find the user
  // password check
  // access and refresh token will be generated if password is correct
  // send cookie

  const { email, username, password } = req.body;

  if (!username || !email) {
    throw new ApiError(400, 'Username or email is required');
  }

  const user = await User.findOne({
    $or: [{ username }, { email }]
  });

  if (!user) {
    throw new ApiError(404, 'User does not exist');
  }

  const isPasswordValid = await user.isPasswordCorrect(password);

  if (!isPasswordValid) {
    throw new ApiError(401, 'Invalid Credentials');
  }
});

export { registerUser, loginUser };
