import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Award, Heart, Shield, Users } from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      
      <section className="pt-32 pb-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-serif font-bold mb-6 text-center">
              Our Story
            </h1>
            <p className="text-xl text-muted-foreground text-center mb-12">
              Over 20 years of capturing precious moments in Hyderabad
            </p>

            <div className="prose prose-lg max-w-none mb-16">
              <p className="text-lg leading-relaxed">
                Baby Imprints Studio was established in Hyderabad in 2004 with a simple mission: 
                to help parents preserve their most precious memories. What started as a small passion 
                project has grown into a trusted name for baby casting services across the city.
              </p>
              <p className="text-lg leading-relaxed">
                With over 20 years of experience and 3,000+ happy families, we've perfected the art 
                of creating beautiful, safe, and lasting keepsakes. Our gentle process is completely 
                safe for newborns, and our attention to detail ensures every cast is a work of art.
              </p>
              <p className="text-lg leading-relaxed">
                We believe that every tiny hand and foot tells a story – a story of love, growth, 
                and precious moments that pass too quickly. Our mission is to help you hold onto 
                those moments forever.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Card>
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Award className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-semibold mb-2">20+ Years</h3>
                  <p className="text-sm text-muted-foreground">Experience in Hyderabad</p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Users className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-semibold mb-2">3000+</h3>
                  <p className="text-sm text-muted-foreground">Happy Parents</p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Shield className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-semibold mb-2">100% Safe</h3>
                  <p className="text-sm text-muted-foreground">For Newborns</p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Heart className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-semibold mb-2">Premium</h3>
                  <p className="text-sm text-muted-foreground">Quality & Finishing</p>
                </CardContent>
              </Card>
            </div>

            <div className="mt-16 bg-accent rounded-2xl p-8">
              <h2 className="text-2xl font-serif font-bold mb-4">Why Choose Us?</h2>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-primary-foreground text-xs">✓</span>
                  </div>
                  <span>Hygienic and safe materials, approved for newborns and babies</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-primary-foreground text-xs">✓</span>
                  </div>
                  <span>Quick and comfortable process – typically 15-20 minutes</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-primary-foreground text-xs">✓</span>
                  </div>
                  <span>Premium finishing with custom framing options</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-primary-foreground text-xs">✓</span>
                  </div>
                  <span>Experienced team with thousands of successful castings</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-primary-foreground text-xs">✓</span>
                  </div>
                  <span>Personalization options including names, dates, and special messages</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
