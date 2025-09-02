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
    "seo": {
      ...,
      "title": coalesce(seo.title, title, ""),
      "description": coalesce(seo.description, ""),
      "image": seo.image,
      "noIndex": seo.noIndex
    },
    content[]{
      ...,
      _key,
      _type,
      _type == "reference" => {
        "resolved": @-> {...}
        },
      }
  }
}`);
