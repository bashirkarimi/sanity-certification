export const serverToken = process.env.SANITY_API_READ_TOKEN;
export const clientToken = process.env.NEXT_PUBLIC_API_READ_TOKEN;

if (!serverToken) {
  throw new Error("Missing SANITY_API_READ_TOKEN");
}
