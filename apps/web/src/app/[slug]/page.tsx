import { sanityFetch } from "@/sanity/live";
import { PAGE_QUERY } from "@/sanity/lib/queries";

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { data: page } = await sanityFetch({
    query: PAGE_QUERY,
    params: await params,
  });

  if (!page) {
    return <div>Page not found</div>;
  }
  return ( <div>{JSON.stringify(page)}</div>);
}
