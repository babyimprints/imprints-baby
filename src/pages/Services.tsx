import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import silverCastImg from "@/assets/silver-cast.jpg";
import heroCastImg from "@/assets/hero-cast.jpg";
import castingProcessImg from "@/assets/casting-process.jpg";
import galleryWallImg from "@/assets/gallery-wall.jpg";

const services = [
  {
    title: "Baby Hand & Foot Casts",
    description:
      "Our most popular service captures those tiny hands and feet in stunning 3D detail. Perfect for newborns to toddlers, this gentle process creates a beautiful keepsake you'll treasure forever.",
    image: heroCastImg,
    features: [
      "Safe for newborns (0-12 months ideal)",
      "Quick 15-20 minute process",
      "Multiple finishing options",
      "Custom color choices",
      "Includes basic mounting",
    ],
  },
  {
    title: "3D Face Casts",
    description:
      "Preserve your baby's adorable features with our specialized face casting service. Using baby-safe materials and a comfortable process, we create a detailed replica of your little one's precious face.",
    image:
      "https://i.pinimg.com/1200x/fb/0b/13/fb0b139f02df532e353ecad86d5c6341.jpg",
    features: [
      "Completely safe and comfortable",
      "Best for babies 6+ months",
      "Professional finishing",
      "Wall-mountable display",
      "Protective coating included",
    ],
  },
  {
    title: "Silver Casts",
    description:
      "Add a touch of luxury with our silver-plated casting service. Your baby's hand or foot is captured and finished with genuine silver plating for an elegant, timeless keepsake.",
    image: silverCastImg,
    features: [
      "Genuine silver plating",
      "Premium velvet display box",
      "Anti-tarnish coating",
      "Perfect for gifting",
      "Lifetime quality guarantee",
    ],
  },
  {
    title: "Framed Keepsakes",
    description:
      "Transform your baby's casts into beautiful art pieces with our custom framing service. Choose from various frame styles, backgrounds, and personalization options.",
    image: galleryWallImg,
    features: [
      "Multiple frame styles",
      "Custom backgrounds",
      "Name & date engraving",
      "UV-protected glass",
      "Ready to hang",
    ],
  },
  {
    title: "Sibling Casts",
    description:
      "Capture the bond between siblings with our special sibling casting service. We create beautiful compositions featuring hands of multiple children together.",
    image: castingProcessImg,
    features: [
      "Up to 3 siblings in one cast",
      "Creative positioning options",
      "Family name engraving",
      "Large frame options",
      "Perfect family heirloom",
    ],
  },
  {
    title: "Baby Gifts",
    description:
      "Looking for a unique baby shower or christening gift? Our gift packages make thoughtful presents that new parents will cherish forever.",
    image:
      "https://i.pinimg.com/1200x/bb/ab/1e/bbab1ecf992c941743bb75af077d43c7.jpg",
    features: [
      "Gift packaging available",
      "Gift certificates offered",
      "Multiple package options",
      "Personalized gift cards",
      "Perfect for any occasion",
    ],
  },
];

const Services = () => {
  return (
    <div className="min-h-screen">
      <Navigation />

      <section className="pt-32 pb-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-serif font-bold mb-6">
              Our Services
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Professional casting services designed to create lasting memories
              of your baby's precious moments
            </p>
          </div>

          <div className="max-w-6xl mx-auto space-y-8">
            {services.map((service, index) => (
              <Card key={index}>
                <CardContent className="p-8">
                  <div className="grid md:grid-cols-3 gap-6">
                    <div className="md:col-span-2">
                      <h2 className="text-2xl font-serif font-bold mb-3">
                        {service.title}
                      </h2>
                      <p className="text-muted-foreground mb-6">
                        {service.description}
                      </p>
                      <ul className="space-y-2">
                        {service.features.map((feature, idx) => (
                          <li key={idx} className="flex items-start gap-2">
                            <div className="w-5 h-5 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                              <span className="text-primary text-xs">✓</span>
                            </div>
                            <span className="text-sm">{feature}</span>
                          </li>
                        ))}
                      </ul>
                      <Button asChild className="mt-6">
                        <Link
                          to={`/contact?service=${encodeURIComponent(
                            service.title,
                          )}`}
                        >
                          Book This Service
                        </Link>
                      </Button>
                    </div>
                    {service.image && (
                      <div className="rounded-lg overflow-hidden">
                        <img
                          src={service.image}
                          alt={service.title}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button asChild size="lg">
              <Link to="/contact">Book Your Session</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Services;
