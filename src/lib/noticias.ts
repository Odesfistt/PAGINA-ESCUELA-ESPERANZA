import { getCollection, type CollectionEntry } from "astro:content";

export type Noticia = CollectionEntry<"noticias">;

export async function listarNoticiasPublicas() {
  const noticias = await getCollection("noticias");
  return noticias.sort(
    (a, b) => b.data.date.getTime() - a.data.date.getTime()
  );
}

export async function listarUltimasNoticias(limit = 3) {
  const noticias = await listarNoticiasPublicas();
  return noticias.slice(0, limit);
}

export function getNewsImage(image?: string) {
  return image || "/images/slide3.png";
}

export function formatNewsDate(date: Date) {
  return date.toLocaleDateString("es-CL", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
    timeZone: "UTC"
  });
}

export function truncateNewsText(text: string, maxLength = 150) {
  if (text.length <= maxLength) return text;
  return `${text.slice(0, maxLength).trimEnd()}...`;
}
