import Image from "next/image";
import React from "react";
import Card from "../card/card";

type TopAirings = {
  currentPage: number;
  hasNextPage: any;
  results: any;
};

const getTopAirings = async (): Promise<TopAirings | null> => {
  const resp = await fetch(
    "https://api-genime.vercel.app/anime/gogoanime/top-airing"
  );

  if (!resp.ok) {
    throw new Error("Failed to fetch data!");
  }

  return resp.json();
};

const List = async () => {
  const data = { topAiring: await getTopAirings() };
  return (
    <div className="py-4">
      <div className="flex flex-row flex-wrap justify-between ">
        {data?.topAiring?.results.slice(0, 8).map((item: any) => (
          <Card key={item.id} {...item} />
        ))}
      </div>
    </div>
  );
};

export default List;
