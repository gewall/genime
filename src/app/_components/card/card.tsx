import React from "react";
import { CardProps } from "./card.types";
import Image from "next/image";
import Link from "next/link";

const Card: React.FC<CardProps> = (data) => {
  return (
    <Link href={`anime/${data.id}`}>
      <div className="rounded-md md:w-64 overflow-hidden m-2 group-hover:opaciti-100  group ">
        <div className="relative w-full h-52">
          <Image
            alt={data.id}
            src={data.image}
            objectFit="cover"
            // width={150}
            // height={150}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="brightness-50 group-hover:brightness-100 transition-all ease-in-out duration-150"
          />
          <div className="my-2 absolute z-10 -bottom-2 bg-slate-800 px-2 py-4 w-full opacity-0 group-hover:opacity-100 bg-opacity-80 transition-all ease-in-out duration-150">
            <p className="text-white">{data.title}</p>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Card;
