"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

import { doc, onSnapshot } from "firebase/firestore";

import { db } from "@/config/firebase";
import { DetailsScheme } from "@/types/schemes";

const Header = () => {
  const [details, setDetails] = useState<DetailsScheme | null>(null);

  useEffect(() => {
    const details_document = doc(db, "shakuf", "details");

    onSnapshot(details_document, (doc: any) => {
      setDetails(doc.data());
    });
  }, []);

  if (!details) {
    // TODO: change this loading screel
    return <div>Getting content...</div>;
  }

  return (
    // <div
    //   className="grid grid-cols-9 grid-rows-2
    //     self-start grid-flow-col place-items-center"
    // >
    //   <Image
    //     className="col-start-1 col-end-1 row-start-1 row-end-1"
    //     src={details.logo_url}
    //     alt="logo"
    //     width={75}
    //     height={75}
    //   />

    //   <p
    //     className="text-3xl font-bold break-all text-black w-[9rem]
    //       col-start-2 col-end-2 row-start-1 row-end-1"
    //   >
    //     {details.page_title}
    //   </p>

    //   <p
    //     className="text-s text-[#3477DD]
    //       col-start-2 col-end-6 row-start-2 row-end-2"
    //   >
    //     {details.header.text}
    //   </p>
    // </div>

    <div className="flex flex-col flex-start w-full">
      <div className="flex flex-row items-start gap-10">
        <Image
          className=""
          src={details.logo_url}
          alt="logo"
          width={75}
          height={75}
        />

        <p className="text-3xl font-bold break-all text-black w-[9rem]">
          {details.page_title}
        </p>
      </div>

      {/* TODO: break to two lines */}
      <p className="w-2/5 text-xs mr-[7.25rem] mt-2 text-[#3477DD]">
        {details.header.text}
      </p>

      {/* <div className="w-20"> */}
      {/* </div> */}
    </div>
  );
};

export default Header;
