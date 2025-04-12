import { asyncHandler } from '../utils/asyncHandler.js';
import { ApiError } from '../utils/ApiError.js';
import jwt from 'jsonwebtoken';
import { User } from '../models/user.model.js';

export const verifyJWT = asyncHandler(async (req, _, next) => {
  try {
    const token =
      req.cookies.accessToken ||
      req.header('Authorization')?.replace('Bearer ', '');

    console.log('Token received:', token);

    if (!token) {
      throw new ApiError(401, 'Unauthorized access');
    }

    const decodedToken = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);

    const user = await User.findById(decodedToken?.id).select(
      '-password -refreshToken'
    );

    if (!user) {
      throw new ApiError(401, 'Unauthorized access');
    }

    req.user = user; // Attach user to request object
    next();
  } catch (error) {
    console.error('JWT Error:', error.message);
    throw new ApiError(401, 'Invalid access token');
  }
});
