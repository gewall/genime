import type { Metadata } from "next";
import Image from "next/image";
import React, { useState } from "react";
import Text from "./_components/text/text";
import Link from "next/link";

type AnimeDetail = {
  [key: string]: any;
};

const getAnimeDetail = async ({
  slug,
}: {
  slug: string;
}): Promise<AnimeDetail | null> => {
  const resp = await fetch(
    `https://api-genime.vercel.app/anime/gogoanime/info/${slug}`
  );

  if (!resp.ok) {
    throw new Error("Failed to fetch data!" + resp.statusText);
  }

  return resp.json();
};

export const metadata: Metadata = {
  title: "Genime",
  description: "Find your favorite anime",
};

const Detail = async ({ params }: { params: { slug: string } }) => {
  const data = await getAnimeDetail({ slug: params.slug });

  console.log(data);

  return (
    <div className="bg-slate-50 mt-12 p-4 rounded-md">
      <div className="flex flex-col md:flex-row">
        <div className="mx-auto">
          <Image alt={data?.id} src={data?.image} width={250} height={250} />
        </div>
        <div className="mx-4" />
        <div className="flex-1">
          <table className="table-autp">
            <tbody>
              <Text heading="Title" text={data?.title} />
              <Text heading="Genre" text={data?.genres.join(", ")} />
              <Text heading="Description" text={data?.description} />
              <Text heading="Status" text={data?.status} />
              <Text heading="Current Episodes" text={data?.episodes.length} />
            </tbody>
          </table>
        </div>
      </div>
      <div className="mt-4">
        <h5 className="font-medium">List Episodes :</h5>
        <div className="mt-2 flex flex-row flex-wrap space-x-2">
          {data?.episodes.map((item: any) => (
            <Link
              href={`/anime/${params.slug}/${item.id}`}
              key={item?.id}
              target="_blank"
            >
              <div className="bg-slate-200 p-2 rounded-md max-w-xs">
                Episode {item?.number}
              </div>
            </Link>
          ))}
        </div>
      </div>
      {/* <div>
        <h5>Streaming :</h5>
        <iframe
          className="w-full aspect-video ..."
          src="https://gotaku1.com/embedplus?id=MTg0MTQx&token=F9QhjcJ05xIRETZOLO7EgQ&expires=1690624543"
        ></iframe>
      </div> */}
    </div>
  );
};

export default Detail;
