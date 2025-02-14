"use client"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { useTheme } from "next-themes";

interface FAQProps {
  question: string;
  answer: string;
  value: string;
}

const FAQList: FAQProps[] = [
  {
    question: "Ques 1",
    answer: "Vel eius vitae deleniti saepe eligendi officiis, molestiae doloremque dolor at nostrum cumque modi nihil voluptatem dolorum, ab quos minus veritatis nesciunt?",
    value: "item-1",
  },
  {
    question: "Ques 2",
    answer: "Vel eius vitae deleniti saepe eligendi officiis, molestiae doloremque dolor at nostrum cumque modi nihil voluptatem dolorum, ab quos minus veritatis nesciunt?",
    value: "item-2",
  },
  {
    question: "Ques 3",
    answer: "Vel eius vitae deleniti saepe eligendi officiis, molestiae doloremque dolor at nostrum cumque modi nihil voluptatem dolorum, ab quos minus veritatis nesciunt?",
    value: "item-3",
  },
  {
    question: "Ques 4",
    answer: "Vel eius vitae deleniti saepe eligendi officiis, molestiae doloremque dolor at nostrum cumque modi nihil voluptatem dolorum, ab quos minus veritatis nesciunt?",
    value: "item-4",
  },
  {
    question: "Ques 5",
    answer: "Vel eius vitae deleniti saepe eligendi officiis, molestiae doloremque dolor at nostrum cumque modi nihil voluptatem dolorum, ab quos minus veritatis nesciunt?",
    value: "item-5",
  },
];

export const FAQSection = () => {

  return (
    <section id="faq" className="container md:w-[700px] py-24 px-10 sm:py-32 mx-auto">
      <div className="text-center mb-8">
        <h2 className="text-lg text-primary text-center mb-2 tracking-wider">
          FAQS
        </h2>

        <h2 className="text-3xl md:text-4xl text-center font-bold">
          Common Questions
        </h2>
      </div>

      <Accordion type="single" collapsible className="AccordionRoot">
        {FAQList.map(({ question, answer, value }) => (
          <AccordionItem
            key={value}
            value={value}
            className="border px-3 my-5 rounded-md"
            style={{ backgroundColor: 'var(--faq-bg)' }}
          >
            <AccordionTrigger className="text-base">
              {question}
            </AccordionTrigger>

            <AccordionContent className="text-base">
              {answer}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </section>
  );
};