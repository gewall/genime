import Button from "@/components/button/button";
import type { GetStaticProps, InferGetStaticPropsType } from "next";
import Image from "next/image";
import Link from "next/link";
import List from "./_components/pages/List";

// type TopAirings = {
//   currentPage: number;
//   hasNextPage: any;
//   results: any;
// };

// const getTopAirings = async (): Promise<TopAirings | null> => {
//   const resp = await fetch(
//     "https://api-genime.vercel.app/anime/gogoanime/top-airing",
//     { cache: "no-store" }
//   );

//   if (!resp.ok) {
//     throw new Error("Failed to fetch data!");
//   }

//   return resp.json();
// };

export default async function Home() {
  // const data = { topAiring: await getTopAirings() };

  return (
    <div className="bg-slate-50 mt-12 p-4 rounded-md">
      <div className="flex flex-row w-full">
        <h5 className="text-lg">Top Airing</h5>
        <Link href={"#"} className="ml-auto underline text-sm">
          See All
        </Link>
      </div>
      <List />
    </div>
  );
}

