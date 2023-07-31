import React from "react";

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

const getStream = async ({ id }: { id: string }) => {
  const resp = await fetch(
    `https://api-genime.vercel.app/anime/gogoanime/watch/${id}`,
    { cache: "no-store" }
  );

  if (!resp.ok) {
    throw new Error("Failed to fetch data!" + resp.statusText);
  }

  return resp.json();
};

const Watch = async ({ params }: { params: { slug: string; id: string } }) => {
  const data = await getStream({ id: params.id });
  const dataAnime = await getAnimeDetail({ slug: params.slug });

  return (
    <div className="bg-slate-50 mt-12 p-4 rounded-md">
      <div className="overflow-hidden">
        <h5>Streaming : {params.id}</h5>
        <iframe
          className="mt-2 overflow-hidden mx-auto w-3/4 aspect-video"
          src={data?.headers.Referer}
        ></iframe>
      </div>
    </div>
  );
};

export default Watch;
