import mongoose from "mongoose";

const reviewSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Name is required"],
    trim: true,
    maxlength: [100, "Name cannot be more than 100 characters"]
  },
  comment: {
    type: String,
    required: [true, "Comment is required"],
    trim: true,
    maxlength: [500, "Comment cannot be more than 500 characters"]
  },
  rating: {
    type: Number,
    required: [true, "Rating is required"],
    min: [1, "Rating must be at least 1"],
    max: [5, "Rating cannot be more than 5"]
  },
}, {
  timestamps: true // Adds createdAt and updatedAt fields
});

const Review = mongoose.models.Review || mongoose.model("Review", reviewSchema);

export default Review;