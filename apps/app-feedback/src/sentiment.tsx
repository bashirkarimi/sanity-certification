import { DocumentHandle, useEditDocument } from "@sanity/sdk-react";
import { Radio, Text, Inline, Stack } from "@sanity/ui";

type SentimentProps = {
  value: string;
  handle: DocumentHandle;
};

const SENTIMENT = ["Positive", "Neutral", "Negative"];

export function Sentiment({ value, handle }: SentimentProps) {
  const editSentiment = useEditDocument({ ...handle, path: "sentiment" });

  return (
    <Stack space={4}>
      <Text weight="medium">Sentiment</Text>
      <Inline space={3}>
        {SENTIMENT.map((sentiment) => (
          <Inline key={sentiment} as="label" space={1} htmlFor={sentiment}>
            <Radio
              id={sentiment}
              checked={value === sentiment.toLocaleLowerCase()}
              onChange={(e) => editSentiment(e.currentTarget.value)}
              name="sentiment"
              value={sentiment.toLocaleLowerCase()}
            />
            <Text size={1}>{sentiment}</Text>
          </Inline>
        ))}
      </Inline>
    </Stack>
  );
}
