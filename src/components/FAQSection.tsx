import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQSection = () => {
  const faqs = [
    {
      question: "Who is eligible?",
      answer: "Students and working professionals aged 18-35 with a steady income source or enrolled in recognized educational institutions. We verify income, employment, and educational credentials as part of our eligibility process."
    },
    {
      question: "Is RentFlex a loan?",
      answer: "No, RentFlex is not a traditional loan. We provide a deposit financing service where we pay your security deposit upfront, and you repay us in convenient monthly installments. There's no compound interest or hidden fees."
    },
    {
      question: "Do owners need to sign anything?",
      answer: "Yes, owners sign a simple partnership agreement with RentFlex that ensures they receive their full deposit amount immediately. The agreement outlines the terms of our collaboration and tenant verification process."
    },
    {
      question: "What documents are required?",
      answer: "For tenants: ID proof, income/employment documents, and bank statements. For students: college ID and guardian's income proof. For owners: property documents, bank details, and rental agreement template."
    }
  ];

  return (
    <section id="faq" className="section-padding bg-background">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Everything you need to know about RentFlex
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <Accordion type="single" collapsible className="w-full space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="bg-card rounded-2xl px-6 shadow-soft border-0"
              >
                <AccordionTrigger className="text-left text-lg md:text-xl font-semibold py-6 hover:no-underline">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground text-base md:text-lg leading-relaxed pb-6">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;