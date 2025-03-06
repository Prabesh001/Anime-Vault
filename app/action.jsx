"use server";

import AnimeCard from "@/components/AnimeCard";

export const fetchAnime = async (page) => {
  const response = await fetch(
    `https://shikimori.one/api/animes?page=${page}&limit=8&order=popularity`
  );
  const data = await response.json();

  return data.map((item, index) => (
    <AnimeCard key={item.id} anime={item} index={index} />
  ));
};
