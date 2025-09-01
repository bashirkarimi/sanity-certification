import { Event } from "./event";
import { Hero } from "./hero";
import { Features } from "./features";

import { HOME_PAGE_QUERYResult } from "@/sanity/types";

export function PageBuilder({
  content,
}: {
  content: HOME_PAGE_QUERYResult extends { content?: any[] } ? HOME_PAGE_QUERYResult["content"] : any[];
}) {
  if (!Array.isArray(content)) {
    return null;
  }

  return (
    <main className="container mx-auto">
      {content.map((block) => {
        switch (block._type) {
          case "hero":
            return <Hero key={block._key} {...block} />;
          case "reference":
            if (!block?.resolved) {
              return <div key={block._key}>Loading...</div>;
            } else if (block.resolved._type === "event") {
              return <Event key={block._key} {...block.resolved} />;
            }
          case "features":
            return <Features key={block._key} {...block} />;
          default:
            // This is a fallback for when we don't have a block type
            return <div key={block._key}>Block not found: {block._type}</div>;
        }
      })}
    </main>
  );
}
