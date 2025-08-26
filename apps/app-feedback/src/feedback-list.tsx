import { type DocumentHandle, useDocuments } from "@sanity/sdk-react";
import { Stack, Button, Spinner } from "@sanity/ui";
import { Suspense, useState } from "react";
import { FeedbackPreview } from "./feedback-preview";
import { OnlyMine } from "./only-mine";
import { StatusSelector } from "./status-selector";
import { FeedbackPreviewSelected } from "./feedback-preview-selected";

type FeedbackListProps = {
  selectedFeedback: DocumentHandle | null;
  setSelectedFeedback: (feedback: DocumentHandle | null) => void;
};

export function FeedbackList({
  selectedFeedback,
  setSelectedFeedback,
}: FeedbackListProps) {
  const [userId, setUserId] = useState<string | null>(null);
  const [status, setStatus] = useState<string>("all");
  const { data, hasMore, loadMore } = useDocuments({
    documentType: "feedback",
    filter: `
      select(defined($userId) => assignee == $userId, true)
      && select(
        $status == "pending" => !defined(status) || status == "pending",
        $status == "spam" =>  status == "spam",
        $status == "approved" => status == "approved",
        true
      )
    `,
    params: { userId, status },
    orderings: [{field: "_createdAt", direction: "desc"}],
    batchSize: 10,
  });


  return (
    <Stack space={2} padding={5}>
      <StatusSelector status={status} setStatus={setStatus} />
      <OnlyMine userId={userId} setUserId={setUserId} />
      {data?.map((feedback) => {
        const isSelected = selectedFeedback?.documentId === feedback.documentId;
        return (
          <Button
            key={feedback.documentId}
            mode={isSelected ? "ghost" : "bleed"}
            tone={isSelected ? "primary" : "default"}
            onClick={() => setSelectedFeedback(isSelected ? null : feedback)}
            justify="flex-start"
          >
            <Suspense fallback={<Spinner />}>
              {isSelected ? (
                <FeedbackPreviewSelected {...feedback} />
              ) : (
                <FeedbackPreview {...feedback} />
              )}
            </Suspense>
          </Button>
        );
      })}
      {hasMore && <Button onClick={loadMore} text="Load more" />}
    </Stack>
  );
}


