"use client";

import { useEffect, useState } from "react";
import { doc, onSnapshot } from "firebase/firestore";

import { db } from "@/config/firebase";
import { ContentScheme } from "@/types/schemes";
import { Article } from "@/types/article";

import ArticleWrapper from "@/components/content/articles/ArticleWrapper";

const ArticlesWrapper = () => {
  const [content, setContent] = useState<ContentScheme | null>(null);

  useEffect(() => {
    const content_document = doc(db, "shakuf", "content");

    onSnapshot(content_document, (doc: any) => {
      setContent(doc.data());
    });
  }, []);

  if (!content) {
    return <div>Getting content...</div>;
  }

  return (
    <div>
      {content.articles.map((article: Article) => {
        const category = content.categories[article.category];

        return (
          <ArticleWrapper
            key={article.id}
            article={article}
            category={category}
          />
        );
        // return <p key="a">{article}</p>;
      })}
    </div>
  );
};

export default ArticlesWrapper;
