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

// Import all images from the folder
const images = import.meta.glob('@/assets/babyimprints-imgs/*.jpg', { eager: true, as: 'url' });

// Create gallery items from the imported images
const galleryItems = Object.values(images).map((imagePath, index) => {
  // Cycle through categories (excluding "All")
  const categoryIndex = index % (categories.length - 1);
  const category = categories[categoryIndex + 1]; // +1 to skip "All"

  return {
    image: imagePath,
    category: category,
    title: `${category} Cast`, // Simple title based on category
  };
});

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
