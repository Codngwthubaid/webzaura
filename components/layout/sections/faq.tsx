"use client"
import { SparklesText } from "@/components/magicui/sparkles-text";
import { TypingAnimation } from "@/components/magicui/typing-animation";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

interface FAQProps {
  question: string;
  answer: string;
  value: string;
}

const FAQList: FAQProps[] = [
  {
    question: "Will you maintain my site for me?",
    answer: "At WebZaura, you will get proper and professional website maintenance in addition to development as it supports in achieving stabilized growth, keeping your business inclined.",
    value: "item-1",
  },
  {
    question: "Will my website be mobile-friendly?",
    answer: "Yes, we ensure to develop a responsive website that would make your visitors appealing and deliver an optimized browsing experience.",
    value: "item-2",
  },
  {
    question: "Why do I need digital marketing for my business?",
    answer: "Having a website is not enough these days. The internet has become one of the most competitive spaces and everyone is competing with the mass amounts of traffic and users online. While a website is extremely important and serves as the foundation for your online marketing presence, it is just that, a foundation. Promotion of your website via other digital marketing channels is important to set your business apart and give you every opportunity to attract a new visitors, which will hopefully turn into new customer. Digital marketing is the promotion of your brand and the service you need to battle against competitors that do not only exist locally, but now exist nationally and internationally against your business. With a strong online presence and digital marketing strategy, the opportunity to scale your business successfully is enormous. Digital marketing presents opportunity for exponential business growth and return multiples that are better than any other advertising opportunity.",
    value: "item-3",
  },
  {
    question: "Why should I hire WebZaura to perform digital marketing services for my business?",
    answer: "WebZaura is focused on performance marketing and advertising strategy. Our goal is drive incredible ROI for your business and have you continue to invest in marketing services because our solutions work. We provide comprehensive digital marketing and advertising plans and we will be your right-hand marketing team.",
    value: "item-4",
  },
  {
    question: "What is the general cost for developing a business website?",
    answer: "Each and every business website is completely different. Websites will fall anywhere in the range of $1,000 to $1,500 depending on the complexity of the project. Sites that require customization will be on the higher end of the spectrum versus websites that only require basic information and minimal functionality.",
    value: "item-5",
  },
  {
    question: "Do I get a say in the creative design of my business website?",
    answer: "Of course! All of our projects start with a design phase that is based on a website questionnaire that takes into account your likes and tastes. The other great part? We design until we get it right, which means no revision limitations like most other companies place on their website designs.",
    value: "item-6",
  },
  {
    question: "Why is SEO so important?",
    answer: "SEO is important because it helps to make your presence and visibility online much more prominent. When performing SEO efforts, we are creating valuable information and social proof that leads online users back to your business. This inbound marketing strategy is so incredibly valuable and will allow you to reach potential customers that you might not have ever reached in the past. A strong SEO strategy can take your business from zero to one hundred and create an impenetrable force online.",
    value: "item-7",
  },
  {
    question: "Do you send me monthly reports or how will I know the efforts are working?",
    answer: "Yes, we also set you up on our state-of-the-art reporting dashboard that compiles your entire online presence and puts it into one central place for you. This dashboard is incredible and let’s you get a snapshot of your business presence online and instantly. The dashboard comes with 24/7/365, up-to-the-minute reporting.",
    value: "item-8",
  },
  {
    question: "Why is it important for my business to be active on social media?",
    answer: "Social media is an incredible way to tap into potential customers over and over again. It is also a great platform to increase brand exposure and awareness. It is said that we must interact with a customer almost 17 times before they are ready to take-action with our business. Social media is a great way to keep a consistent message and presence with your potential customers. Your customer expects you to be on social media and the platform allows you an opportunity to get people talking about your business. Social media is a great way to connect and interact with existing customers and influence potential ones.",
    value: "item-9",
  },
  {
    question: "Why is content marketing so important?",
    answer: "Content marketing is so important because it drives potential customers to your website. By creating valuable pieces of content you are able to show potential customers that you are an expert in your industry and might offer products or services that can help them. Think of the content that is created for content marketing as a lead magnet. This content, in the form of blog posts, videos, or email campaigns, is used to supply valuable information to your potential customer in hopes that they come to your site and then see that you can solve their problem with your own products or services. Content marketing is also a great way to increase SEO rankings and it gives us something to post on social media that will allow us to continuously tap into our followers or new potential followers.",
    value: "item-10",
  },
];

export const FAQSection = () => {

  return (
    <section id="faq" className="container md:w-[700px] py-24 px-10 sm:py-32 mx-auto">
      <div className="text-center mb-8">
        <SparklesText text="FAQS" className="text-4xl sm:text-5xl mb-4 text-center text-primary" />
        <TypingAnimation className="text-center text-2xl sm:text-3xl">Common Questions</TypingAnimation>
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