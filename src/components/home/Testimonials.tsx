import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Priya Sharma",
    role: "Mother of twins",
    content:
      "Absolutely beautiful work! They captured my twins' hands perfectly. The process was so gentle and quick. Highly recommend!",
    rating: 5,
  },
  {
    name: "Rajesh Kumar",
    role: "First-time dad",
    content:
      "Best gift we could give our parents! The silver cast is stunning and the frame quality is exceptional. Worth every penny.",
    rating: 5,
  },
  {
    name: "Sneha Reddy",
    role: "Mother of 3",
    content:
      "I've done this for all three of my children. The team is professional, patient, and the results are always perfect. Thank you!",
    rating: 5,
  },
];

const Testimonials = () => {
  return (
    <section className="py-20 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4 text-secondary-foreground">
            What Parents Say
          </h2>
          <p className="text-lg text-secondary-foreground/80 max-w-2xl mx-auto">
            Join thousands of happy parents who have preserved their precious memories with us
          </p>
        </div>

        {/* Smooth marquee with edge fade mask */}
        <div className="relative overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
          <div className="flex gap-6 px-10 animate-[marquee_10s_linear_infinite] hover:[animation-play-state:paused]">

            {[...Array(2)].map((_, loopIndex) =>
              testimonials.map((testimonial, index) => (
                <Card
                  key={`${loopIndex}-${index}`}
                  className="min-w-[280px] max-w-sm flex-shrink-0 bg-card"
                >
                  <CardContent className="p-6">
                    <div className="flex gap-1 mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star
                          key={i}
                          className="h-5 w-5 fill-primary text-primary"
                        />
                      ))}
                    </div>

                    <p className="text-muted-foreground mb-4 italic">
                      "{testimonial.content}"
                    </p>

                    <div>
                      <p className="font-semibold">{testimonial.name}</p>
                      <p className="text-sm text-muted-foreground">
                        {testimonial.role}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              ))
            )}

          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
