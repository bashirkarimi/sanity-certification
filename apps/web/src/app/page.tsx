import { PageBuilder } from "@/components/page-builder";
import { sanityFetch } from "@/sanity/live";
import { HOME_PAGE_QUERY } from "@/sanity/lib/queries";
import type { Metadata } from "next";
import { urlFor } from "@/sanity/image";

type RouteProps = {
  params: Promise<{ slug: string }>;
};

const getPage = async (params: RouteProps["params"]) =>
  sanityFetch({
    query: HOME_PAGE_QUERY,
    params: await params,
  });

export async function generateMetadata({
  params,
}: RouteProps): Promise<Metadata> {
  const { data: page } = await getPage(params);

  if(!page) {};

  const metadata: Metadata = {
    title: page?.homePage?.seo?.title,
    description: page?.homePage?.seo?.description,
  };


  metadata.openGraph = {
    images: {
      url: page?.homePage?.seo?.image
        ? urlFor(page.homePage.seo.image).width(1200).height(630).url()
        : `/api/og?id=${page?.homePage?._id}`,
      width: 800,
      height: 600,
    },
  };


  if(page?.homePage?.seo?.noIndex) {
    metadata.robots = "noindex"
  }

  return metadata;
}

export default async function Page({ params }: RouteProps) {
  const { data: page } = await getPage(params);

  return page?.homePage?.content ? (
    <>
      <PageBuilder content={page?.homePage.content} />
    </>
  ) : null;
}
