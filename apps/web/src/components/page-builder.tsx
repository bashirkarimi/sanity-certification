import { Event } from "./event";
import { Hero } from "./hero";

import { PAGE_QUERYResult } from "@/sanity/types";

type ReferenceBlock = {
  _ref: string;
  _type: "reference";
  _weak?: boolean;
  _key: string;
  resolved?: {
    _type: string;
    [key: string]: any;
  };
};

type PageBuilderProps = {
  content: (NonNullable<PAGE_QUERYResult>["content"][number] | ReferenceBlock)[];
};

export function PageBuilder({ content }: PageBuilderProps) {
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
          default:
            // This is a fallback for when we don't have a block type
            return <div key={block._key}>Block not found: {block._type}</div>;
        }
      })}
    </main>
  );
}
