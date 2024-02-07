import { Article } from "@/types/article";
import { Category } from "@/types/category";

export type DetailsScheme = {
  page_name: string;
  
  page_title: string;
  cover_photo: string;

  header: {
    text: string;
  }

  footer: {
    text: string;
  }
}

export type ContentScheme = {
  categories: {
    [key: string]: Category;
  }

  articles: Article[]
}

export type StatisticsScheme = {

}