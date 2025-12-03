import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Heart, Award, Shield } from "lucide-react";
import heroImage from "@/assets/hero-cast.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-20">
      <div className="container mx-auto px-4 py-12">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full text-sm font-medium text-primary">
              <Award className="h-4 w-4" />
              20+ Years of Excellence
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-foreground leading-tight">
              Capture Your Baby's Precious Moments Forever
            </h1>
            
            <p className="text-lg text-muted-foreground">
              Professional 3D hand, foot, and face casting services in Hyderabad. 
              Safe, beautiful, and cherished for a lifetime.
            </p>

            <div className="flex flex-wrap gap-6 text-sm">
              <div className="flex items-center gap-2">
                <Shield className="h-5 w-5 text-primary" />
                <span className="font-medium">Safe for Newborns</span>
              </div>
              <div className="flex items-center gap-2">
                <Heart className="h-5 w-5 text-primary" />
                <span className="font-medium">3000+ Happy Parents</span>
              </div>
            </div>

            <div className="flex flex-wrap gap-4">
              <Button asChild size="lg" className="text-lg">
                <Link to="/contact">Book a Session</Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="text-lg">
                <Link to="/gallery">View Gallery</Link>
              </Button>
            </div>
          </div>

          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src={heroImage}
                alt="Beautiful baby foot cast in premium frame"
                className="w-full h-auto object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 bg-card p-6 rounded-xl shadow-xl border border-border max-w-xs">
              <p className="text-sm font-medium mb-1">Premium Quality</p>
              <p className="text-xs text-muted-foreground">
                Handcrafted with love and precision
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
