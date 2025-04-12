import { asyncHandler } from '../utils/asyncHandler';
import { ApiError } from '../utils/ApiError';
import jwt from 'jsonwebtoken';
import { User } from '../models/user.model';

export const verifyJWT = asyncHandler(async (req, _, next) => {
  try {
    const token =
      req.cookies.accessToken ||
      req.headers('Authorization')?.replace('Bearer ', '');

    if (!token) {
      throw new ApiError(401, 'Unauthorized access');
    }

    const decodedToken = jwt.verify(token, process.env.JWT.SECRET);

    const user = await User.findById(decodedToken?._id).select(
      '-password -refreshToken'
    );

    if (!user) {
      throw new ApiError(401, 'Unauthorized access');
    }

    req.user = user; // Attach user to request object
    next();
  } catch (error) {
    throw new ApiError(401, 'Invalid Access');
  }
});
