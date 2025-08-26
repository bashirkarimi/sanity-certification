import { Suspense, useState, startTransition } from "react";
import { DocumentHandle } from "@sanity/sdk-react";
import { Card, Flex, Grid, Spinner } from "@sanity/ui"
import { styled } from "styled-components";

import {FeedbackList} from "./feedback-list";
import { FeedbackEdit } from "./feedback-edit";

const ScreenHeightCard = styled(Card)`
  height: 100vh;
  overflow: scroll;
`;

function Loading() {
  return (
    <Flex direction="column" padding={4}>
      <Spinner />
    </Flex>
  )
};

export function Feedback() {
  const [selectedFeedback, setSelectedFeedback] = useState<DocumentHandle | null>(null);
  const updateSelectedFeedback = (handle: DocumentHandle | null) => {
    startTransition(() => {
      setSelectedFeedback(handle);
    });
  };

  return (
    <Grid columns={6}>
      <ScreenHeightCard columnStart={1} columnEnd={4}>
        <Suspense fallback={<Loading />}>
          <FeedbackList
            setSelectedFeedback={updateSelectedFeedback}
            selectedFeedback={selectedFeedback}
          />
        </Suspense>
      </ScreenHeightCard>
      <ScreenHeightCard columnStart={4} columnEnd={8}>
        <Suspense fallback={<Loading />}>
          {selectedFeedback && (
            <FeedbackEdit selectedFeedback={selectedFeedback} />
          )}
        </Suspense>
      </ScreenHeightCard>
    </Grid>
  );
}
