import { defineQuery } from "next-sanity";

export const PAGE_QUERY =
  defineQuery(`*[_type == "page" && slug.current == $slug][0] {
  _id,
  title,
  slug,
  content
}`);

export const HOME_PAGE_QUERY = defineQuery(`*[_id == "siteSettings"][0]{
    homePage->{
      ...,
      content[]{
        ...,
      }
    }
  }`);
