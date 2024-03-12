"use client";

import { Article } from "@/types/article";
import Image from "next/image";
import ArticleCard from "./ArticleCard";
import { useEffect, useState } from "react";

const TimelineArticle = ({
  article,
  isOpen,
  setIsOpen,
}: {
  article: Article;
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}) => {
  const [hasRead, setHasRead] = useState(false);

  return (
    <div
      className="flex flex-row items-center
              relative left-[1.05rem] z-10
              w-full"
    >
      <Image
        src={
          hasRead ? "images/article_line_read.svg" : "images/article_line.svg"
        }
        alt="article_line"
        width={240}
        height={32}
      />

      <div className="w-full" onClick={() => setIsOpen(!isOpen)}>
        <ArticleCard
          article={article}
          isOpen={isOpen}
          setHasRead={setHasRead}
        />
      </div>
    </div>
  );
};

export default TimelineArticle;
