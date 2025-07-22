import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';

const TestimonialsCarousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const testimonials = [
    {
      name: "Priya Sharma",
      role: "Student, Koramangala",
      text: "RentFlex saved me from borrowing money from family. I moved into my dream PG without any stress about the deposit.",
      rating: 5
    },
    {
      name: "Rajesh Kumar",
      role: "PG Owner, Whitefield",
      text: "Since partnering with RentFlex, my occupancy rate increased by 40%. Tenants love the deposit-free option!",
      rating: 5
    },
    {
      name: "Anjali Patel",
      role: "Working Professional, BTM Layout",
      text: "The process was so smooth. Within 2 days, I had my rental sorted without paying a huge deposit upfront.",
      rating: 5
    },
    {
      name: "Vikram Singh",
      role: "Landlord, Indiranagar",
      text: "RentFlex brings quality tenants and I get my deposit immediately. It's a win-win for everyone involved.",
      rating: 5
    },
    {
      name: "Meera Reddy",
      role: "Student, HSR Layout",
      text: "No more waiting for parents to transfer deposit money. RentFlex made my college accommodation hassle-free!",
      rating: 5
    },
    {
      name: "Amit Gupta",
      role: "Tech Professional, Electronic City",
      text: "Moving to a new city for work was stressful enough. RentFlex removed the biggest hurdle - the huge security deposit.",
      rating: 5
    },
    {
      name: "Sunita Joshi",
      role: "PG Owner, Jayanagar",
      text: "My PG is always full now. Students prefer us because of the RentFlex partnership. Best decision I made!",
      rating: 5
    },
    {
      name: "Karthik Rao",
      role: "Student, Malleswaram", 
      text: "RentFlex made my transition to Bangalore so easy. No more hassle with huge deposits!",
      rating: 5
    },
    {
      name: "Deepa Nair",
      role: "Working Professional, Marathahalli",
      text: "Finally found a solution that works! Moving cities for work is now stress-free with RentFlex.",
      rating: 5
    },
    {
      name: "Ravi Prasad",
      role: "Landlord, Hebbal",
      text: "RentFlex has transformed my rental business. Quality tenants and instant deposits - what more could I ask for!",
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