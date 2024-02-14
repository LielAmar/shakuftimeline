import Image from "next/image";

import { Article } from "@/types/article";

const ArticleWrapper = ({
  article,
  index,
}: {
  article: Article;
  index: number;
}) => {
  return (
    <div
      className={`col-start-3 col-end-3 row-start-${index} row-end-${index}`}
    >
      <p>This is an article</p>
      <h1>{article.title}</h1>

      <h3>{article.content}</h3>

      <a href={`${article.full_article}`}>Read more</a>
    </div>
  );
};

export default ArticleWrapper;
