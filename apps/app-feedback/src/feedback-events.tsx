import { DocumentEvent, useDocumentEvent } from "@sanity/sdk-react";
import { useToast } from "@sanity/ui";

export function FeedbackEvents() {
  const toast = useToast();

  const onEvent = (documentEvent: DocumentEvent) => {
    if (documentEvent.type === "published") {
      toast.push({
        status: "success",
        title: "Feedback processed",
        description: `Your feedback has been processed successfully.`,
      });
    } else if (documentEvent.type === "deleted") {
      toast.push({
        status: "error",
        title: "Feedback deleted",
        description: `Your feedback has been deleted.`,
      });
    }
  };

  useDocumentEvent({ onEvent });

  return null;
}