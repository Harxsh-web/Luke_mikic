import { Card, CardContent } from "@/components/ui/card";


export default function GuaranteeSection() {
  // Static default values
  const section = {
    title: "Our 100% Satisfaction Guarantee & Money - Back Promise",
    subtitle: "We want the investment in me to be an absolute no-brainer for you – if you’re actually going to do the work 😉",
    content: `If for whatever reason you aren’t 100% happy with your experience, drop us an email and we’ll happily refund your entire payment.`,
    backgroundColor: "#F9F9F7"
  };

  // Split content into paragraphs if needed
  const contentParagraphs = section.content 
    ? section.content.split('\n\n').filter(p => p.trim() !== '')
    : [];

  return (
    <section
      id="guarantee-section"
      className="py-16 md:py-24"
      style={{ backgroundColor: section.backgroundColor || '#F9F9F7' }}
    >
      <div className="container px-4 md:px-6 mx-auto max-w-4xl">
        <Card className="rounded-xl border-none shadow-lg overflow-hidden bg-white">
          <CardContent className="p-8 md:p-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center md:text-left">
              {section.title}
            </h2>

            <p className="text-lg md:text-xl mb-6 text-center md:text-left">
              {section.subtitle}
            </p>

            <div className="space-y-4">
              {(contentParagraphs && contentParagraphs.length > 0)
                ? contentParagraphs.map((paragraph, i) => (
                  <p key={i} className="text-gray-700">
                    {paragraph}
                  </p>
                ))
                : (
                  <p className="text-gray-700">
                    If for whatever reason you aren’t 100% happy with your experience, drop us an email and we’ll happily refund your entire payment.
                  </p>
                )
              }
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}