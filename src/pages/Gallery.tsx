import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import galleryWallImg from "@/assets/gallery-wall.jpg";
import heroCastImg from "@/assets/hero-cast.jpg";
import silverCastImg from "@/assets/silver-cast.jpg";
import castingProcessImg from "@/assets/casting-process.jpg";
import { useState } from "react";

const categories = ["All", "Hands", "Feet", "Newborn", "Siblings", "Silver", "Framed"];

const galleryItems = [
  {
    image:
      "https://babyimprints.in/wp-content/uploads/2024/12/242718042_2160747107399942_1955443156177678551_n.jpg",
    category: "Framed",
    title: "Gallery Wall Display",
  },
  {
    image:
      "https://babyimprints.in/wp-content/uploads/2024/12/IMG-20241130-WA0032-150x150.jpg",
    category: "Feet",
    title: "Footprints",
  },
  {
    image:
      "https://babyimprints.in/wp-content/uploads/2024/12/249464040_2190122401129079_2267233956350364694_n.jpg",
    category: "Newborn",
    title: "Hand & Foot Set",
  },
  {
    image:
      "https://babyimprints.in/wp-content/uploads/2024/12/243025729_2163696457105007_2582017175075551084_n.jpg",
    category: "Newborn",
    title: "Hand & Foot Set",
  },
  {
    image:
      "https://babyimprints.in/wp-content/uploads/2024/12/278875065_2327924187348899_7854657581870170372_n.jpg",
    category: "Siblings",
    title: "Sibling Casts",
  },
  {
    image:
      "https://babyimprints.in/wp-content/uploads/2024/12/IMG-20241130-WA0014-300x300.jpg",
    category: "Hands",
    title: "Hand Set",
  },
  {
    image:
      "https://i.pinimg.com/1200x/bb/ab/1e/bbab1ecf992c941743bb75af077d43c7.jpg",
    category: "Framed",
    title: "Hand & Foot Set",
  },
  {
    image:
      "https://babyimprints.in/wp-content/uploads/2024/12/FB_IMG_1732615919912-1.jpg",
    category: "Newborn",
    title: "Hand & Foot Set",
  },
  {
    image:
      "https://babyimprints.in/wp-content/uploads/2024/12/FB_IMG_1732615888383.jpg",
    category: "Hands",
    title: "Hand & Foot Set",
  },
  {
    image:
      "https://babyimprints.in/wp-content/uploads/2024/12/IMG-20241130-WA0021-150x150.jpg",
    category: "Framed",
    title: "Gallery Wall Display",
  },
  {
    image:
      "https://babyimprints.in/wp-content/uploads/2024/12/FB_IMG_1732615881767-1.jpg",
    category: "Hands",
    title: "Hand & Foot Set",
  },
];

const Gallery = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredItems = activeCategory === "All" 
    ? galleryItems 
    : galleryItems.filter(item => item.category === activeCategory);

  return (
    <div className="min-h-screen">
      <Navigation />
      
      <section className="pt-32 pb-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-serif font-bold mb-6">
              Our Gallery
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Browse through our collection of beautiful baby casts and keepsakes
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map((category) => (
              <Button
                key={category}
                variant={activeCategory === category ? "default" : "outline"}
                onClick={() => setActiveCategory(category)}
              >
                {category}
              </Button>
            ))}
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {filteredItems.map((item, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
                  <div>
                    <p className="text-background font-semibold">{item.title}</p>
                    <p className="text-background/80 text-sm">{item.category}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center bg-accent rounded-2xl p-12">
            <h2 className="text-2xl md:text-3xl font-serif font-bold mb-4">
              Ready to Create Your Own?
            </h2>
            <p className="text-muted-foreground mb-6">
              Book a session today and let us capture your precious memories
            </p>
            <Button asChild size="lg">
              <Link to="/contact">Book Now</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Gallery;
