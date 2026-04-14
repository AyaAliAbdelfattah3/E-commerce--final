import React from "react";

const Faqs = () => {
  const questions = [
    {
      question: "How long does shipping take?",
      answer: "Orders are delivered within 3–5 business days.",
    },
    {
      question: "Are your products original?",
      answer:
        "Yes, we guarantee the quality and authenticity of all our products.",
    },
    {
      question: "What if I receive a damaged item?",
      answer: "Please contact us immediately and we will replace it..",
    },
    {
      question: "When will I get my refund?",
      answer: "Refunds are processed within 5–7 business days after approval.",
    },
    {
      question: "How can I contact for support?",
      answer:
        "You can reach us through the contact page on our website, and our customer support team will be happy to assist you.",
    },
  ];

  return (
    <div className="min-h-screen p-[50px]">
      <h2 className="text-3xl font-bold text-[#6e19a0] mb-8 text-center underline dark:text-white mt-[50px]">
        Frequently Asked Questions
      </h2>
      {questions.map((quest) => (
        <>
          <div className="mt-[50px]">
            <h1 className="text-[#9c197e] font-bold text-2xl">
              ✨{quest.question}
            </h1>

            <p>{quest.answer}</p>
          </div>
        </>
      ))}
    </div>
  );
};

export default Faqs;
