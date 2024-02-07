import { Article } from "@/types/article";
import { Category } from "@/types/category";

import Image from "next/image";

const ArticleWrapper = ({
  article,
  category,
}: {
  article: Article;
  category: Category;
}) => {
  return (
    <div>
      <h1>{article.title}</h1>

      <h3>{article.content}</h3>

      <p style={{ color: category.color }}>
        My color is {category.color} of category {category.name}
      </p>

      <Image
        src={article.main_photo}
        alt={article.title}
        width={500}
        height={500}
      />
    </div>
  );
};

export default ArticleWrapper;
