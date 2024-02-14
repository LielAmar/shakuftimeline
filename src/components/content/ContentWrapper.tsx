"use client";

import { Fragment, useEffect, useState } from "react";
import { doc, onSnapshot } from "firebase/firestore";

import { db } from "@/config/firebase";

import { Content } from "@/types/content";
import { Article } from "@/types/article";
import { Event } from "@/types/event";

const Timeline = ({ content }: { content: Content[] }) => {
  return (
    <div>
      <div className="flex flex-col gap-y-3 w-full my-4 h-full after:absolute after:bg-red-500">
        <Pillar />

        {content.map((event, key) => {
          return (
            <Fragment key={key}>
              <div className="grid grid-cols-[1fr_auto_1fr] gap-x-2 items-center mx-auto">
                {event.type === "event" ? (
                  <EventCard title={event.title} subtitle={event.date} />
                ) : (
                  <div />
                )}

                <Circle />

                {event.type === "article" ? (
                  <EventCard title={event.title} subtitle={event.date} />
                ) : (
                  <div />
                )}
              </div>
              {key < content.length - 1 ? <Pillar /> : null}
            </Fragment>
          );
        })}
        {/* <Pillar /> */}
      </div>
    </div>
  );
};

const Circle = () => {
  return <div className="rounded-full w-4 h-4 bg-blue-500 mx-auto"></div>;
};

const Pillar = () => {
  return (
    <div className="right-0 left-0 ml-auto mr-auto w-0 h-full">
      <div className="absolute rounded-t-full rounded-b-full w-1 h-full bg-blue-500 mx-auto">
        ‎
      </div>
    </div>
  );
};

const EventCard = ({
  title,
  subtitle,
}: {
  title: string;
  subtitle: string;
}) => {
  return (
    <div className="flex flex-col gap-y-2 border shadow-md rounded-xl p-4">
      <div className="text-blue-800 font-bold text-lg border-b">{title}</div>
      <div className="text-sm text-gray-700">{subtitle}</div>
    </div>
  );
};

const ArticlesWrapper = () => {
  const [content, setContent] = useState<Content[] | null>(null);

  useEffect(() => {
    const content_document = doc(db, "shakuf", "content");

    onSnapshot(content_document, (doc: any) => {
      const articles = doc
        .data()
        .articles.map((article: Article) => ({ ...article, type: "article" }));
      const events = doc
        .data()
        .events.map((event: Event) => ({ ...event, type: "event" }));

      const full_content = [...articles, ...events];

      const sorted_content = full_content.sort((a: Content, b: Content) => {
        return new Date(a.date).getTime() - new Date(b.date).getTime();
      });

      console.log(sorted_content);

      setContent(sorted_content);
    });
  }, []);

  if (!content) {
    return <div>Getting content...</div>;
  }

  return (
    <div className="mt-5 max-w-[75%]">
      <div>
        <Timeline content={content} />
        {/* {content.map((contentPeice: Content, index: number) => {
          if (contentPeice.type === "article") {
            return (
              <div className="flex flex-row w-1/2">
                <div
                  className={`bg-violet-400 col-start-2 col-end-2 row-start-${index} row-end-${index}`}
                >
                  a
                </div>
                ;
                <ArticleWrapper
                  article={contentPeice as Article}
                  index={index}
                />
              </div>
            );
          } else {
            return (
              <div className="flex flex-row w-1/2">
                <EventWrapper event={contentPeice as Event} index={index} />;
                <div
                  className={`bg-violet-400 col-start-2 col-end-2 row-start-${index} row-end-${index}`}
                >
                  a
                </div>
              </div>
            );
          }
        })} */}
      </div>

      {/* 
      Category: o --- date
      

      
      */}

      {/* Handles line */}
      {/* <div className=""> */}
      {/* Handle single row */}
      {/* <div> */}
      {/* Row components */}
      {/* <div class="w-36 h-36 bg-red-600 rounded-full"></div> */}
      {/* </div> */}
      {/* </div> */}

      {/* {content.articles.map((article: Article) => {
        const category = content.categories[article.category];

        return (
          <ArticleWrapper
            key={article.id}
            article={article}
            category={category}
          />
        );
        // return <p key="a">{article}</p>;
      })} */}
    </div>
  );
};

export default ArticlesWrapper;
