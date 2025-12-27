import express from "express";
import rateLimit from "express-rate-limit";
import {
  uploadImage,
  getMyImages,
  getUserImages,
  deleteImage,
  getRandomImages,
} from "../controllers/image.controller.js";
import authMiddleware from "../middlewares/auth.middleware.js";

const imageRoutes = express.Router();

const imageUploadLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 20, // limit to 10 uploads per window
  message: "Too many image uploads. Please try again later.",
});

imageRoutes.post("/upload", authMiddleware, imageUploadLimiter, uploadImage);
imageRoutes.get("/myimages", authMiddleware, getMyImages);
imageRoutes.get("/user/:username", getUserImages);
imageRoutes.delete("/:id", authMiddleware, deleteImage);
imageRoutes.get("/random", getRandomImages);

export default imageRoutes;
