import { Card, CardContent } from "@/components/ui/card";
import { Calendar, Heart, Sparkles, Truck } from "lucide-react";

const steps = [
  {
    icon: Calendar,
    title: "Book Your Session",
    description: "Choose a convenient time for your casting session. We work around your baby's schedule.",
  },
  {
    icon: Heart,
    title: "Casting Session",
    description: "Our gentle, safe process takes 15-20 minutes. Completely comfortable for your baby.",
  },
  {
    icon: Sparkles,
    title: "Expert Crafting",
    description: "We carefully craft and finish your keepsake with premium materials and attention to detail.",
  },
  {
    icon: Truck,
    title: "Delivery",
    description: "Receive your beautiful, ready-to-display keepsake within 10-14 days.",
  },
];

const Process = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">
            How It Works
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Simple, safe, and stress-free process from start to finish
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <Card key={index} className="relative">
                <CardContent className="p-6 text-center">
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold">
                    {index + 1}
                  </div>
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 mt-2">
                    <Icon className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                  <p className="text-muted-foreground text-sm">{step.description}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Process;
