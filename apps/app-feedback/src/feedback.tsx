import { Suspense, useState } from "react";
import { DocumentHandle } from "@sanity/sdk-react";
import { Card, Flex, Grid, Spinner } from "@sanity/ui"
import { styled } from "styled-components";

import {FeedbackList} from "./feedback-list";

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

  return (
    <Grid columns={5}>
      <ScreenHeightCard columnStart={1} columnEnd={3}>
        <Suspense fallback={<Loading />}>
          <FeedbackList setSelectedFeedback={setSelectedFeedback} selectedFeedback={selectedFeedback} />
        </Suspense>
      </ScreenHeightCard>
    </Grid>
  )
}
