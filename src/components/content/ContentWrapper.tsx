"use client";

import { useEffect, useState } from "react";
import { doc, getDoc, onSnapshot } from "firebase/firestore";

import { db } from "@/config/firebase";

const ContentWrapper = () => {
  const [data, setData] = useState<any | null>(null);

  // const shakufCollection = collection(db, "shakuf");

  const object = {
    title: "Hello",
    subtitle: "Bye",
    content: [
      {
        title: "Content1",
        main_picture: "https://picsum.photos/200/300",
        pictures: [
          "https://picsum.photos/200/300",
          "https://picsum.photos/200/300",
          "https://picsum.photos/200/300",
        ],
        paragraph: "This is a paragraph",
      },
      {
        title: "Content2",
        main_picture: "https://picsum.photos/200/300",
        subparagph: "This is a subparagph",
      },
    ],
  };

  useEffect(() => {
    const document = doc(db, "shakuf", "1");
    // ===== Get the document data once =====
    // getDoc(document).then((doc: any) => {
    //   console.log("Document data:", doc.data());
    //   setData(doc.data());
    //   // querySnapshot.forEach((doc: any) => {
    //   //   console.log(`${doc.id} => ${doc.data()}`);
    //   //   console.log(doc.data());
    //   // });
    // });
    onSnapshot(document, (doc: any) => {
      console.log("Document data:", doc.data());
      setData(doc.data());
    });
  }, []);

  if (!data) {
    return <div>Getting data...</div>;
  }

  return <p>{data.title}</p>;
};

export default ContentWrapper;
