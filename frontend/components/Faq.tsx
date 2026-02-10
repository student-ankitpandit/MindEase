import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

import { IconNumber1 } from "@tabler/icons-react";

function Faq() {
  return (
    <div className="bg-black/[0.90] antialiased bg-grid-white/[0.02] w-full py-10 px-4 md:px-0 flex flex-col items-center justify-center space-y-6">
      <h2 className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl">
        FAQ's
      </h2>
      <div className="w-full px-4 py-4 flex flex-col rounded-md max-w-2xl">
        <Accordion type="single" collapsible>
          <AccordionItem value="item-1">
            <AccordionTrigger>Is It actually works</AccordionTrigger>
            <AccordionContent>
              Yes, We tested it out on some people's and it actually works,
              People's shared their reviews with us that they really like it.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
        <Accordion type="single" collapsible>
          <AccordionItem value="item-2">
            <AccordionTrigger>How does it's works</AccordionTrigger>
            <AccordionContent>
              We use state-of-the-art AI algorithms to analyze your mental
              health data and provide personalized recommendations and support.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
        <Accordion type="single" collapsible>
          <AccordionItem value="item-3">
            <AccordionTrigger>Why should I use it</AccordionTrigger>
            <AccordionContent>
              Because it is free to use and you can get help anytime you want.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
        <Accordion type="single" collapsible>
          <AccordionItem value="item-4">
            <AccordionTrigger>What if it's doesn't work for me</AccordionTrigger>
            <AccordionContent>
              If it doesn't work for you, you can tell us through the chat or you can contact with our support team and they'll
              will first understand your situation and will try their best to find the solution.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
        {/* <Accordion type="single" collapsible>
          <AccordionItem value="item-5">
            <AccordionTrigger>How does</AccordionTrigger>
            <AccordionContent>
              Yes. It adheres to the WAI-ARIA design pattern.
            </AccordionContent>
          </AccordionItem>
        </Accordion> */}
      </div>
    </div>
  );
}

export default Faq;
