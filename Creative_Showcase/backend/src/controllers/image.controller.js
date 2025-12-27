import getCloudinary from "../config/cloudinary.js";
import Image from "../models/Image.model.js";
import User from "../models/User.model.js";

// UPLOAD IMAGE
export const uploadImage = async (req, res) => {
  try {
    const { image, title } = req.body;

    if (!image) {
      return res.status(400).json({ message: "Image is required" });
    }

    const cloudinary = getCloudinary();

    if (!cloudinary) {
      return res
        .status(500)
        .json({ message: "Cloudinary configuration error" });
    }

    const uploadResult = await cloudinary.uploader.upload(image, {
      folder: "creative_showcase",
      resource_type: "image",
    });

    const newImage = await Image.create({
      user: req.userId,
      imageUrl: uploadResult.secure_url,
      publicId: uploadResult.public_id,
      title,
    });

    res.status(201).json({
      message: "Image uploaded successfully",
      image: newImage,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Image upload failed" });
  }
};

// GET USER IMAGES (PRIVATE)
export const getMyImages = async (req, res) => {
  try {
    const images = await Image.find({ user: req.userId }).sort({
      createdAt: -1,
    });
    res.json(images);
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch images" });
  }
};

// GET PUBLIC USER IMAGES
export const getUserImages = async (req, res) => {
  try {
    const { username } = req.params;

    const user = await User.findOne({ username }).select("_id");
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    const images = await Image.find({ user: user._id }).sort({ createdAt: -1 });
    res.json(images);
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch profile images" });
  }
};

// DELETE IMAGE
export const deleteImage = async (req, res) => {
  try {
    const image = await Image.findById(req.params.id);

    if (!image || image.user.toString() !== req.userId) {
      return res.status(403).json({ message: "Unauthorized" });
    }

    const cloudinary = getCloudinary();

    if (!cloudinary) {
      return res
        .status(500)
        .json({ message: "Cloudinary configuration error" });
    }

    await cloudinary.uploader.destroy(image.publicId);
    await image.deleteOne();

    res.json({ message: "Image deleted" });
  } catch (error) {
    res.status(500).json({ message: "Delete failed" });
  }
};

// RANDOM IMAGES (LANDING)
export const getRandomImages = async (req, res) => {
  try {
    const images = await Image.aggregate([
      { $sample: { size: 20 } },
      {
        $lookup: {
          from: "users",
          localField: "user",
          foreignField: "_id",
          as: "user",
        },
      },
      { $unwind: "$user" },
      {
        $project: {
          imageUrl: 1,
          title: 1,
          createdAt: 1,
          "user.username": 1,
        },
      },
    ]);

    res.json(images);
  } catch (error) {
    res.status(500).json({ message: "Failed to load images" });
  }
};
