import { useState } from "react";

import Image from "next/image";

import { Article } from "@/types/article";

const ArticleCard = ({
  article,
  isOpen,
  setHasRead,
}: {
  article: Article;
  isOpen: boolean;
  setHasRead: (hasRead: boolean) => void;
}) => {
  const [isHovering, setIsHovering] = useState(true);
  const [isImageLoaded, setIsImageLoaded] = useState(false);

  return (
    <div
      className={`
      border-[1px] rounded ${isHovering ? "border-black" : "border-[#EE583F]"}
      h-full w-full p-[1rem]
      cursor-pointer
      transition-all duration-300 ease-in-out`}
      onMouseEnter={() => setIsHovering(false)}
      onMouseLeave={() => setIsHovering(true)}
      onClick={() => setIsHovering(true)}
    >
      <div
        className={`flex 
        ${isOpen ? "flex-col-reverse" : "flex-row"} 
        gap-[1rem]
        transition-all duration-1000 ease-in-out`}
      >
        <div className={isOpen ? "w-[full] flex justify-center" : ""}>
          <div
            className={`
            ${!isOpen && isImageLoaded && "bg-red-600"}
            ${isOpen ? "w-[460px] h-[300px]" : "w-[160px] h-[130px]"}
            transition-all duration-300 ease-in-out`}
          >
            <Image
              src={article.main_picture}
              alt="article_picture"
              width={1000}
              height={1000}
              className={`
                object-cover
                ${isOpen ? "w-[460px] h-[300px]" : "w-[160px] h-[130px]"}
                ${!isOpen && !isHovering && "opacity-75"}
                grayscale
                transition-all duration-300 ease-in-out`}
              onLoad={() => setIsImageLoaded(true)}
            />
          </div>
        </div>

        {isOpen && (
          <div className="w-[full] flex justify-end">
            <a
              href={article.full_article}
              target="_blank"
              rel="noreferrer noopener"
              className="text-[16px] font-bold 
              text-black hover:text-[#EE583F]
              leading-tight font-sans"
              onClick={(event) => {
                event.stopPropagation(); // Stop the article card from being closed
                setHasRead(true);
              }}
            >
              לכתבה המלאה
            </a>
          </div>
        )}

        <div className="flex flex-col gap-[1rem]">
          {/* Date & Author */}
          <div className="flex flex-row gap-[1rem]">
            <p
              className={`
              ${isOpen ? "text-[16px]" : "text-[20px]"}
              ${isOpen ? "text-black" : "text-[#EE583F]"} 
              font-normal 
              leading-tight font-sans`}
            >
              {new Date(article.date).toLocaleDateString("en-GB")}
            </p>

            {isOpen && (
              <>
                <p
                  className="text-[16px] font-normal 
                  text-black 
                  leading-tight font-sans"
                >
                  |
                </p>

                <p
                  className="text-[16px] font-normal 
                  text-black 
                  leading-tight font-sans"
                >
                  {article.author}
                </p>
              </>
            )}
          </div>

          {/* Title */}
          <p
            className={`text-[20px] 
              ${isOpen ? "font-bold" : "font-medium"} 
              ${!isOpen && isHovering ? "text-black" : "text-[#EE583F]"} 
              leading-tight font-sans`}
          >
            {article.title}
          </p>

          {/* Content */}
          {isOpen && (
            <p
              className="text-[18px] font-normal 
              text-black 
              leading-tight font-sans"
            >
              {article.content}
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default ArticleCard;
