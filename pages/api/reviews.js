import dbConnect from "@/lib/dbConnect";
import Review from "@/models/ReviewSchema";

export default async function handler(req, res) {
  try {
    await dbConnect();

    if (req.method === "POST") {
      const { name, comment, rating } = req.body;

      if (!name || !comment || !rating) {
        return res.status(400).json({ error: "All fields are required" });
      }

      if (typeof rating !== "number" || rating < 1 || rating > 5) {
        return res.status(400).json({ error: "Rating must be a number between 1 and 5" });
      }

      const newReview = new Review({
        name,
        comment,
        rating,
      });

      const savedReview = await newReview.save();
      res.status(201).json({ 
        message: "Review added successfully!",
        data: savedReview 
      });
    } else if (req.method === "GET") {
      const reviews = await Review.find().sort({ createdAt: -1 });
      res.status(200).json(reviews);
    } else {
      res.setHeader("Allow", ["POST", "GET"]);
      res.status(405).json({ error: `Method ${req.method} Not Allowed` });
    }
  } catch (error) {
    console.error("API Error:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
}