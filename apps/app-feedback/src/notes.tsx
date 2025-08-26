import { type DocumentHandle, useEditDocument } from "@sanity/sdk-react";
import { TextArea, Text, Stack } from "@sanity/ui";

type NotesProps = {
  value: string;
  handle: DocumentHandle;
};

export function Notes({ value, handle }: NotesProps) {
  const editNotes = useEditDocument({ ...handle, path: "notes" });

  return (
    <Stack space={4}>
      <Text weight="medium">Notes</Text>
      <TextArea
        value={value}
        onChange={(e) => editNotes(e.currentTarget.value)}
        placeholder="Enter your notes here..."
        rows={3}
      />
    </Stack>
  );
}
