import { defineLive } from "next-sanity";
import  client  from "@/sanity/client";
import { clientToken, serverToken } from "@/sanity/lib/token";

export const { sanityFetch, SanityLive } = defineLive({
  client,
  browserToken: clientToken || undefined,
  serverToken: serverToken || undefined
});
