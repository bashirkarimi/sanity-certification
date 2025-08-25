import { useRef } from "react";
import { DocumentHandle, useDocumentProjection } from "@sanity/sdk-react";
import { Box, Stack, Text } from "@sanity/ui";
import { StatusBadge } from "./status-badge";

type FeedbackPreviewProps = {
  _createdAt: string;
  content: string | null;
  author: string | null;
  email: string | null;
  status: string;
};

export function FeedbackPreview(props: DocumentHandle) {
  const previewRef = useRef(null);
  const { data, isPending } =
    useDocumentProjection<FeedbackPreviewProps>({
      ...props,
      ref: previewRef,
      projection: `{
        _createdAt,
        content,
        author,
        email,
        "status": coalesce(status, "PENDING")
      }`,
    });

  const showPlaceholder = isPending || !data;
  const status = data?.status || "PENDING";

  return (
    <Stack space={3}>
      <Text size={2} weight="semibold" textOverflow="ellipsis">
        {showPlaceholder ? "..." : data.author || "No author"}
      </Text>
      <Text muted size={1} textOverflow="ellipsis">
        {showPlaceholder ? "..." : data.email || " "}  {showPlaceholder ? "..." : data._createdAt.split("T")[0]}
      </Text>
      <Text muted size={1} textOverflow="ellipsis">
        {showPlaceholder ? "..." : data.content || ""}
      </Text>
      <Box marginTop={2}>
        <StatusBadge status={data.status} fontSize={1} />
      </Box>
    </Stack>
  );
}
