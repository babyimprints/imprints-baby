import { Link } from "react-router-dom";
import { Heart, Phone, Mail, MapPin, Facebook, Instagram, Youtube } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-secondary text-secondary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-serif font-bold mb-4">Baby Imprints</h3>
            <p className="text-sm mb-4">
              Capturing your baby's precious moments since 2005. Over 20 years
              of experience in Hyderabad.
            </p>
            <div className="flex items-center gap-2 text-sm">
              <Heart className="h-4 w-4 text-primary" />
              <span>3000+ Happy Parents</span>
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <div className="flex flex-col gap-2 text-sm">
              <Link
                to="/about"
                className="hover:text-primary transition-colors"
              >
                About Us
              </Link>
              <Link
                to="/services"
                className="hover:text-primary transition-colors"
              >
                Services
              </Link>
              <Link
                to="/gallery"
                className="hover:text-primary transition-colors"
              >
                Gallery
              </Link>
              <Link
                to="/contact"
                className="hover:text-primary transition-colors"
              >
                Book Session
              </Link>
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Services</h4>
            <div className="flex flex-col gap-2 text-sm">
              <span>3D Hand & Foot Casts</span>
              <span>3D Face Casts</span>
              <span>Silver Casts</span>
              <span>Framed Keepsakes</span>
              <span>Baby Gifts</span>
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <div className="flex flex-col gap-3 text-sm">
              <div className="flex items-start gap-2">
                <MapPin className="h-4 w-4 mt-1 flex-shrink-0" />
                <span>Hyderabad, India</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4" />
                <a
                  href="tel:+919866937777"
                  className="text-primary transition-colors"
                >
                  +91 9866937777
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4" />
                <a
                  href="mailto:babyimprints@gmail.com"
                  className="text-primary transition-colors"
                >
                  babyimprints@gmail.com
                </a>
              </div>
              <div className="flex items-center gap-4 text-primary">
                <a
                  href="https://www.facebook.com/babyimprintsindia"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Visit our Facebook page"
                  className="hover:text-primary/80 transition-colors"
                >
                  <Facebook className="h-5 w-5" />
                </a>
                <a
                  href="https://www.instagram.com/babyimprints.in/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Visit our Instagram profile"
                  className="hover:text-primary/80 transition-colors"
                >
                  <Instagram className="h-5 w-5" />
                </a>
                <a
                  href="https://www.youtube.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Visit our YouTube channel"
                  className="hover:text-primary/80 transition-colors"
                >
                  <Youtube className="h-5 w-5" />
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-border/20 mt-8 pt-8 text-center text-sm">
          <p>
            &copy; {new Date().getFullYear()} Baby Imprints Studio. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
