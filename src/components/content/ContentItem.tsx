import { useState } from "react";

import Image from "next/image";

import ArticleWrapper from "@/components/content/article/ArticleWrapper";

import { Content } from "@/types/content";
import { Article } from "@/types/article";

const ContentItem = ({ content }: { content: Content }) => {
  const [isOpen, setIsOpen] = useState(false);

  const getFullHeight = () => (isOpen ? "h-[38.5rem]" : "h-[4.5rem]");
  const getPartialHeight = () => (isOpen ? "h-[37.5rem]" : "h-[4rem]");

  return (
    <div className={`flex flex-row w-full ${getFullHeight()}`}>
      {/* Event */}
      <div
        className={`relative right-[0.9rem]
                   flex flex-row 
                   w-[26rem] ${getPartialHeight()}
                   gap-[1rem] z-10`}
      >
        {content.type === "event" && (
          <>
            <div className="self-center w-[6rem]">
              <p className="text-md font-medium text-black">{content.date}</p>
            </div>

            <div className="self-center w-[12rem]">
              <p className="text-md font-medium text-black">{content.title}</p>
            </div>

            <div className="self-center w-[6rem]">
              <Image
                src="images/line2.svg"
                alt="line"
                width={100}
                height={100}
              />
            </div>
          </>
        )}
      </div>

      {/* Timeline Vertical Line */}
      <div className="z-1">
        <div className={`w-[.4rem] z-0 ${getFullHeight()} bg-blue-400`}>‎</div>
      </div>

      {/* Article */}
      <div
        className={`relative left-[0.6rem]
                   flex flex-row
                   w-[37rem] ${getPartialHeight()}
                   gap-[1rem] z-10`}
      >
        {content.type === "article" && (
          <>
            <div className="self-center w-[6rem]">
              <Image
                src="images/line.svg"
                alt="line"
                width={100}
                height={100}
              />
            </div>

            <ArticleWrapper
              article={content as Article}
              isOpen={isOpen}
              setIsOpen={setIsOpen}
            />
          </>
        )}
      </div>
    </div>
  );
};

export default ContentItem;
