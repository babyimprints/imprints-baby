import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Baby, Hand, Frame, Sparkles, Gift, Users } from "lucide-react";

const services = [
  {
    icon: Hand,
    title: "Baby Hand & Foot Casts",
    description: "Capture those tiny hands and feet in stunning 3D detail. Safe for newborns and toddlers.",
  },
  {
    icon: Baby,
    title: "3D Face Casts",
    description: "Preserve your baby's adorable features with our safe and comfortable face casting process.",
  },
  {
    icon: Sparkles,
    title: "Silver Casts",
    description: "Luxurious silver-plated casts that add a touch of elegance to your precious memories.",
  },
  {
    icon: Frame,
    title: "Framed Keepsakes",
    description: "Beautiful custom frames that showcase your baby's casts as art pieces for your home.",
  },
  {
    icon: Gift,
    title: "Occasion Gifts",
    description: "Perfect gifts for baby showers, birthdays, and christenings. Thoughtful and memorable.",
  },
  {
    icon: Users,
    title: "Sibling Casts",
    description: "Create beautiful memories by capturing siblings' hands together in one special keepsake.",
  },
];

const Services = () => {
  return (
    <section className="py-20 bg-accent">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">
            Our Services
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Professional casting services designed to create lasting memories of your baby's precious moments
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                    <Icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                  <p className="text-muted-foreground">{service.description}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="text-center">
          <Button asChild size="lg">
            <Link to="/services">Explore All Services</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Services;
