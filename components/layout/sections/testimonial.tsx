"use client"
import { toast } from "sonner"
import { useState, useEffect } from "react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { SparklesText } from "@/components/magicui/sparkles-text";
import { TypingAnimation } from "@/components/magicui/typing-animation";

interface ReviewProps {
  name: string;
  comment: string;
  rating: number;
}

export const TestimonialSection = () => {
  const [reviews, setReviews] = useState<ReviewProps[]>([]);
  const [name, setName] = useState("");
  const [comment, setComment] = useState("");
  const [rating, setRating] = useState(0);

  useEffect(() => {
    const storedReviews = localStorage.getItem("reviews");
    if (storedReviews) {
      setReviews(JSON.parse(storedReviews));
    }
  }, []);

  const handleSubmit = () => {
    if (name && comment) {
      const newReview: ReviewProps = { name, comment, rating };
      const updatedReviews = [newReview, ...reviews];
      setReviews(updatedReviews);
      localStorage.setItem("reviews", JSON.stringify(updatedReviews));
      setName("");
      setComment("");
      setRating(0);
      toast("We apprieciate your feedback! Thanks ❤️");
    }
  };

  return (
    <section id="testimonials" className="container py-24 sm:py-32 px-10 mx-auto">
      <div className="text-center mb-8">
        <SparklesText text="Reviews" className="mb-4 text-center text-3xl  sm:text-5xl text-primary" />
        <TypingAnimation className="text-center text-2xl sm:text-3xl">Hear What Our Clients Say</TypingAnimation>

      </div>

      {reviews.length > 0 && (
        <Carousel className="relative w-[80%] sm:w-[90%] lg:max-w-screen-xl">
          <CarouselContent>
            {reviews.map((review, index) => (
              <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                <Card className="bg-muted/50 dark:bg-card h-60 overflow-y-auto">
                  <CardContent className="pt-6 pb-0">
                    <div className="flex gap-1 pb-6">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className={`size-4 ${i < review.rating ? "fill-primary text-primary" : "text-gray-400"}`} />
                      ))}
                    </div>
                    <p>{review.comment}</p>
                  </CardContent>
                  <CardHeader>
                    <div className="flex flex-row items-center gap-4">
                      <div className="flex flex-col">
                        <CardTitle className="text-lg align-bottom">{review.name}</CardTitle>
                      </div>
                    </div>
                  </CardHeader>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      )}

      {/* Feedback Form */}
      <div className="bg-muted/50 dark:bg-card p-6 rounded-lg mb-10 max-w-xl mx-auto mt-10">
        <h3 className="text-2xl font-semibold mb-4 text-center">Share Your Feedback</h3>
        <Input placeholder="Your Name" value={name} onChange={(e) => setName(e.target.value)} className="mb-4" />
        <Textarea placeholder="Your Feedback" value={comment} onChange={(e) => setComment(e.target.value)} className="mb-4" />
        <div className="flex gap-1 mb-4">
          {[1, 2, 3, 4, 5].map((star) => (
            <Star
              key={star}
              className={`size-5 cursor-pointer ${rating >= star ? "fill-primary text-primary" : "text-gray-400"}`}
              onClick={() => setRating(star)}
            />
          ))}
        </div>
        <Button onClick={handleSubmit} className="w-full" disabled={!rating}>Submit Feedback</Button>
      </div>

      {/* Testimonials Carousel */}
    </section>
  );
};
