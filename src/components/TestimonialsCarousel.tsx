import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';

const TestimonialsCarousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const testimonials = [
    {
      name: "Priya Sharma",
      role: "Student, Whitefield, Bangalore",
      text: "RentFlex saved me from borrowing money from family. I moved into my dream PG without any stress about the deposit.",
      rating: 5
    },
    {
      name: "Rajesh Kumar",
      role: "PG Owner, Koramangala, Bangalore",
      text: "Since partnering with RentFlex, my occupancy rate increased by 40%. Tenants love the deposit-free option!",
      rating: 5
    },
    {
      name: "Anjali Patel",
      role: "Working Professional, HSR Layout, Bangalore",
      text: "The process was so smooth. Within 2 days, I had my rental sorted without paying a huge deposit upfront.",
      rating: 5
    },
    {
      name: "Vikram Singh",
      role: "Landlord, Indiranagar, Bangalore",
      text: "RentFlex brings quality tenants and I get my deposit immediately. It's a win-win for everyone involved.",
      rating: 5
    },
    {
      name: "Sneha Reddy",
      role: "Software Engineer, Electronic City, Bangalore",
      text: "Moving to Bangalore was stress-free with RentFlex. No huge upfront costs, just smooth monthly payments.",
      rating: 5
    },
    {
      name: "Arjun Nair",
      role: "Student, Jayanagar, Bangalore",
      text: "As a student, paying large deposits was impossible. RentFlex made my accommodation dreams come true!",
      rating: 5
    },
    {
      name: "Meera Shah",
      role: "Property Owner, BTM Layout, Bangalore",
      text: "RentFlex ensures I get reliable tenants and immediate deposit security. Highly recommend to all landlords!",
      rating: 5
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % testimonials.length);
    }, 8000);
    return () => clearInterval(timer);
  }, []);

  const nextTestimonial = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="section-padding bg-muted/30">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Why Tenants & PG Owners Love RentFlex
          </h2>
          <p className="text-xl text-muted-foreground">
            Real stories from our community
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          {/* Main testimonial */}
          <div className="testimonial-card text-center">
            <Quote className="w-12 h-12 text-secondary mx-auto mb-6" />
            <p className="text-xl md:text-2xl text-foreground mb-8 leading-relaxed italic">
              "{testimonials[activeIndex].text}"
            </p>
            <div className="border-t pt-6">
              <h4 className="font-bold text-lg text-foreground">
                {testimonials[activeIndex].name}
              </h4>
              <p className="text-muted-foreground">
                {testimonials[activeIndex].role}
              </p>
              <div className="flex justify-center mt-2 space-x-1">
                {[...Array(testimonials[activeIndex].rating)].map((_, i) => (
                  <span key={i} className="text-secondary text-xl">★</span>
                ))}
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default TestimonialsCarousel;