import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { useEffect, useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { useSearchParams } from "react-router-dom";

const Contact = () => {
  const { toast } = useToast();
  const [searchParams] = useSearchParams();
  const selectedServiceParam = searchParams.get("service") ?? "";
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    babyAge: "",
    service: "",
    message: "",
  });

  useEffect(() => {
    if (selectedServiceParam) {
      setFormData((prev) =>
        prev.service === selectedServiceParam ? prev : { ...prev, service: selectedServiceParam },
      );
    }
  }, [selectedServiceParam]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // WhatsApp integration
    const message = `New Booking Request:
Name: ${formData.name}
Phone: ${formData.phone}
Email: ${formData.email}
Baby's Age: ${formData.babyAge}
Service: ${formData.service}
Message: ${formData.message}`;
    
    const whatsappUrl = `https://wa.me/919866937777?text=${encodeURIComponent(
      message
    )}`;
    window.open(whatsappUrl, '_blank');
    
    toast({
      title: "Redirecting to WhatsApp",
      description: "We'll get back to you shortly!",
    });
    
    // Reset form
    setFormData({
      name: "",
      phone: "",
      email: "",
      babyAge: "",
      service: "",
      message: "",
    });
  };

  return (
    <div className="min-h-screen">
      <Navigation />

      <section className="pt-32 pb-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-serif font-bold mb-6">
              Book a Session
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Ready to create lasting memories? Fill out the form below or
              contact us directly
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="lg:col-span-2">
              <Card>
                <CardContent className="p-8">
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label
                          htmlFor="name"
                          className="block text-sm font-medium mb-2"
                        >
                          Your Name *
                        </label>
                        <Input
                          id="name"
                          required
                          value={formData.name}
                          onChange={(e) =>
                            setFormData({ ...formData, name: e.target.value })
                          }
                          placeholder="Enter your name"
                        />
                      </div>
                      <div>
                        <label
                          htmlFor="phone"
                          className="block text-sm font-medium mb-2"
                        >
                          Phone Number *
                        </label>
                        <Input
                          id="phone"
                          type="tel"
                          required
                          value={formData.phone}
                          onChange={(e) =>
                            setFormData({ ...formData, phone: e.target.value })
                          }
                          placeholder="+91 98765 43210"
                        />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label
                          htmlFor="email"
                          className="block text-sm font-medium mb-2"
                        >
                          Email
                        </label>
                        <Input
                          id="email"
                          type="email"
                          value={formData.email}
                          onChange={(e) =>
                            setFormData({ ...formData, email: e.target.value })
                          }
                          placeholder="your@email.com"
                        />
                      </div>
                      <div>
                        <label
                          htmlFor="babyAge"
                          className="block text-sm font-medium mb-2"
                        >
                          Baby's Age *
                        </label>
                        <Input
                          id="babyAge"
                          required
                          value={formData.babyAge}
                          onChange={(e) =>
                            setFormData({
                              ...formData,
                              babyAge: e.target.value,
                            })
                          }
                          placeholder="e.g., 3 months"
                        />
                      </div>
                    </div>

                    <div>
                      <label
                        htmlFor="service"
                        className="block text-sm font-medium mb-2"
                      >
                        Service Interested In *
                      </label>
                      <Input
                        id="service"
                        required
                        value={formData.service}
                        onChange={(e) =>
                          setFormData({ ...formData, service: e.target.value })
                        }
                        placeholder="e.g., Hand & Foot Cast"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="message"
                        className="block text-sm font-medium mb-2"
                      >
                        Message
                      </label>
                      <Textarea
                        id="message"
                        value={formData.message}
                        onChange={(e) =>
                          setFormData({ ...formData, message: e.target.value })
                        }
                        placeholder="Any specific requirements or questions?"
                        rows={5}
                      />
                    </div>

                    <Button type="submit" size="lg" className="w-full">
                      Send Booking Request
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            <div className="space-y-6">
              <Card>
                <CardContent className="p-6">
                  <h3 className="font-semibold mb-4">Contact Information</h3>
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <Phone className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="font-medium">Phone</p>
                        <a
                          href="tel:+919866937777"
                          className="text-sm text-muted-foreground hover:text-primary"
                        >
                          +91 9866937777
                        </a>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Mail className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="font-medium">Email</p>
                        <a
                          href="mailto:info@babyimprints.in"
                          className="text-sm text-muted-foreground hover:text-primary"
                        >
                          babyimprits@gmail.com
                        </a>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <MapPin className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="font-medium">Location</p>
                        <p className="text-sm text-muted-foreground">
                          Hyderabad, Telangana, India
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Clock className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="font-medium">Hours</p>
                        <p className="text-sm text-muted-foreground">
                          Mon-Sat: 10 AM - 6 PM
                          <br />
                          Sunday: By appointment
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-accent">
                <CardContent className="p-6">
                  <h3 className="font-semibold mb-2">Quick Response</h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    We typically respond within 2-4 hours during business hours
                  </p>
                  <Button asChild className="w-full" variant="outline">
                    <a
                      href="https://wa.me/919866937777"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Chat on WhatsApp
                    </a>
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;
