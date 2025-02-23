"use client";
import { toast } from "sonner";
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
  _id?: string; // Added _id since MongoDB will include it
  name: string;
  comment: string;
  rating: number;
  createdAt?: string; // Added since we added timestamps in schema
}

export const TestimonialSection = () => {
  const [reviews, setReviews] = useState<ReviewProps[]>([]);
  const [name, setName] = useState("");
  const [comment, setComment] = useState("");
  const [rating, setRating] = useState(0);
  const [isLoading, setIsLoading] = useState(false); // Added loading state

  // Fetch reviews
  useEffect(() => {
    const fetchReviews = async () => {
      try {
        setIsLoading(true);
        const response = await fetch("/api/reviews", {
          method: "GET", 
          headers: {
            "Content-Type": "application/json",
          },
        });

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        
        if (Array.isArray(data)) {
          setReviews(data);
        } else {
          console.error("Unexpected data format:", data);
          toast.error("Failed to load reviews. Please try again.");
        }
      } catch (error) {
        console.error("Error fetching reviews:", error);
        toast.error("Error fetching reviews. Please try again.");
      } finally {
        setIsLoading(false);
      }
    };

    fetchReviews();
  }, []);

  // Submit review
  const handleSubmit = async () => {
    if (!name || !comment || !rating) {
      toast.error("Please fill in all fields before submitting.");
      return;
    }

    setIsLoading(true);
    const newReview: ReviewProps = { name, comment, rating };

    try {
      const response = await fetch("/api/reviews", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(newReview),
      });

      const data = await response.json();

      if (response.ok) {
        // Update reviews list with the new review from the response
        setReviews((prev) => [...prev, data.data]);
        setName("");
        setComment("");
        setRating(0);
        toast.success("We appreciate your feedback! Thanks ❤️");
      } else {
        throw new Error(data.error || "Failed to submit review");
      }
    } catch (error) {
      console.error("Error submitting the review:", error);
      toast.error("Error submitting the review. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section id="testimonials" className="container py-24 sm:py-32 px-10 mx-auto">
      <div className="text-center mb-8">
        <SparklesText 
          text="Reviews" 
          className="mb-4 text-center text-4xl sm:text-5xl text-primary" 
        />
        <TypingAnimation 
          className="text-center text-2xl sm:text-3xl"
        >
          Hear What Our Clients Say
        </TypingAnimation>
      </div>

      {isLoading ? (
        <div className="text-center text-gray-500">Loading reviews...</div>
      ) : reviews.length > 0 ? (
        <Carousel className="relative mx-auto w-[80%] sm:w-[90%] lg:max-w-screen-xl">
          <CarouselContent>
            {reviews.map((review) => ( // Removed index as key since we have _id
              <CarouselItem key={review._id || review.name} className="md:basis-1/2 lg:basis-1/3">
                <Card className="bg-muted/50 dark:bg-card h-60 overflow-y-auto">
                  <CardContent className="pt-6 pb-0">
                    <div className="flex gap-1 pb-6">
                      {[...Array(5)].map((_, i) => (
                        <Star 
                          key={i} 
                          className={`size-4 ${i < review.rating ? "fill-primary text-primary" : "text-gray-400"}`}
                        />
                      ))}
                    </div>
                    <p className="text-sm">{review.comment}</p>
                  </CardContent>
                  <CardHeader>
                    <div className="flex flex-row items-center gap-4">
                      <div className="flex flex-col">
                        <CardTitle className="text-lg">{review.name}</CardTitle>
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
      ) : (
        <div className="text-center text-gray-500">No reviews yet.</div>
      )}

      {/* Feedback Form */}
      <div className="bg-muted/50 dark:bg-card p-6 rounded-lg mb-10 max-w-xl mx-auto mt-10">
        <h3 className="text-2xl font-semibold mb-4 text-center">Share Your Feedback</h3>
        <Input 
          placeholder="Your Name" 
          value={name} 
          onChange={(e) => setName(e.target.value)} 
          className="mb-4"
          disabled={isLoading}
        />
        <Textarea 
          placeholder="Your Feedback" 
          value={comment} 
          onChange={(e) => setComment(e.target.value)} 
          className="mb-4"
          disabled={isLoading}
        />
        <div className="flex gap-1 mb-4">
          {[1, 2, 3, 4, 5].map((star) => (
            <Star
              key={star}
              className={`size-5 cursor-pointer ${rating >= star ? "fill-primary text-primary" : "text-gray-400"}`}
              onClick={() => !isLoading && setRating(star)}
            />
          ))}
        </div>
        <Button 
          onClick={handleSubmit} 
          className="w-full" 
          disabled={isLoading}
        >
          {isLoading ? "Submitting..." : "Submit Feedback"}
        </Button>
      </div>
    </section>
  );
};