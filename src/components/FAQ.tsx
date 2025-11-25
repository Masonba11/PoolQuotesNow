interface FAQProps {
  faqs: Array<{ question: string; answer: string }>;
}

export default function FAQ({ faqs }: FAQProps) {
  return (
    <section className="mt-12">
      <h2 className="text-3xl font-bold text-gray-900 mb-6">
        Frequently Asked Questions
      </h2>
      <div className="space-y-6">
        {faqs.map((faq, index) => (
          <div key={index} className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              {faq.question}
            </h3>
            <p className="text-gray-600">{faq.answer}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
