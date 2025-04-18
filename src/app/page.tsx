"use client";
import Image from "next/image";
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";
import React, { ElementType, HTMLAttributes, ReactNode, AnchorHTMLAttributes } from "react";

interface CardItemProps extends HTMLAttributes<HTMLDivElement> {
  as?: ElementType<any>;
  translateZ?: string | number;
  rotateZ?: string | number;
  children: ReactNode;
  href?: string; // Add href for anchor elements
  target?: string; // Add target for anchor elements
}

type AnchorProps = AnchorHTMLAttributes<HTMLAnchorElement>;

function LocalCardItem({
  as: Component = "div",
  href,
  target,
  ...props
}: CardItemProps & (AnchorProps | {})) {
  return <Component href={href} target={target} {...props} />;
}
export function ThreeDCardDemo() {
  return (
    <CardContainer className="inter-var">
      <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border  ">
        <LocalCardItem
          translateZ="50"
          className="text-xl font-bold text-neutral-600 dark:text-white"
        >
          Make things float in air
        </LocalCardItem>
        <LocalCardItem
          as="p"
          translateZ="60"
          className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
        >
          Hover over this card to unleash the power of CSS perspective
        </LocalCardItem>
        <LocalCardItem translateZ="100" className="w-full mt-4">
          <Image
            src="https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=2560&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            height="1000"
            width="1000"
            className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
            alt="thumbnail"
          />
        </LocalCardItem>
        <div className="flex justify-between items-center mt-20">
          <LocalCardItem
            translateZ={20}
            as="a"
            href="https://twitter.com/mannupaaji"
            target="_blank"
            className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white"
          >
            Try now →
          </LocalCardItem>
          <LocalCardItem
            translateZ={20}
            as="button"
            className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
          >
            Sign up
          </LocalCardItem>
        </div>
      </CardBody>
    </CardContainer>
  );
}
export default ThreeDCardDemo;