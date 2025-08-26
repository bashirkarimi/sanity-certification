import { DocumentHandle, useEditDocument, useUsers } from "@sanity/sdk-react";
import { Inline, Avatar, Stack, Text, Button } from "@sanity/ui";

type AssigneeProps = {
  value: string
  handle: DocumentHandle;
};

export function Assignee({ value, handle }: AssigneeProps) {
  const {data: users } = useUsers();
  const editAssignee = useEditDocument({...handle, path: "assignee" });

  return (
    <Stack space={4}>
      <Text >Assignee</Text>
      <Inline space={3}>
        {users?.map((user) => (
          <Button
            key={user.sanityUserId}
            padding={0}
            mode="bleed"
            onClick={() => editAssignee(user.sanityUserId)}
          >
            <Avatar 
              status={value=== user.sanityUserId ? "online" : "inactive"}
              size={2} 
              src={user.profile?.imageUrl}>
            </Avatar>
          </Button>
        ))}
      </Inline>
    </Stack>
  );
}
