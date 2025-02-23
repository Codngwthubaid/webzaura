// import dbConnect from "@/lib/dbConnect";
// import Review from "@/models/ReviewSchema";

// export default async function handler(req, res) {
//   try {
//     await dbConnect();

//     if (req.method === "POST") {
//       const { name, comment, rating } = req.body;

//       if (!name || !comment || !rating) {
//         return res.status(400).json({ error: "All fields are required" });
//       }

//       if (typeof rating !== "number" || rating < 1 || rating > 5) {
//         return res.status(400).json({ error: "Rating must be a number between 1 and 5" });
//       }

//       const newReview = new Review({
//         name,
//         comment,
//         rating,
//       });

//       const savedReview = await newReview.save();
//       res.status(201).json({ 
//         message: "Review added successfully!",
//         data: savedReview 
//       });
//     } else if (req.method === "GET") {
//       const reviews = await Review.find().sort({ createdAt: -1 });
//       res.status(200).json(reviews);
//     } else {
//       res.setHeader("Allow", ["POST", "GET"]);
//       res.status(405).json({ error: `Method ${req.method} Not Allowed` });
//     }
//   } catch (error) {
//     console.error("API Error:", error);
//     res.status(500).json({ error: "Internal Server Error" });
//   }
// }








import dbConnect from "@/lib/dbConnect";
import Review from "@/models/ReviewSchema";
import Cors from 'cors';

const cors = Cors({ methods: ["GET", "POST"] });

function runMiddleware(req, res, fn) {
  return new Promise((resolve, reject) => {
    fn(req, res, (result) => (result instanceof Error ? reject(result) : resolve(result)));
  });
}

export default async function handler(req, res) {
  await runMiddleware(req, res, cors);
  try {
    await dbConnect();

    if (req.method === "POST") {
      const { name, comment, rating: rawRating } = req.body;
      const rating = Number(rawRating);

      if (!name || !comment || isNaN(rating) || rating < 1 || rating > 5) {
        return res.status(400).json({ error: "All fields are required, and rating must be between 1 and 5" });
      }

      const newReview = new Review({ name, comment, rating });
      const savedReview = await newReview.save();

      res.status(201).json({ message: "Review added successfully!", data: savedReview });
    } else if (req.method === "GET") {
      const reviews = await Review.find().sort({ createdAt: -1 });
      res.status(200).json(reviews);
    } else {
      res.setHeader("Allow", ["POST", "GET"]);
      res.status(405).json({ error: `Method ${req.method} Not Allowed` });
    }
  } catch (error) {
    res.status(500).json({ error: error.message || "Internal Server Error" });
  }
}


