import { Switch, Inline, Text, Card, Label } from "@sanity/ui";
import { useCurrentUser } from "@sanity/sdk-react";
import { Dispatch, SetStateAction } from "react";

type OnlyMineProps = {
  userId: string | null;
  setUserId: Dispatch<SetStateAction<string | null>>;
};

export function OnlyMine({ userId, setUserId }: OnlyMineProps) {
  const currentUser = useCurrentUser();

  return (
    <Card padding={4}>
      <Inline space={3}>
        <Text size={1} as={Label} htmlFor="only-mine">Show only my feedback</Text>
        <Switch 
          id="only-mine"
          disabled={!currentUser}
          checked={userId === currentUser?.id}
          onClick={() => {
            if(currentUser) {
              setUserId(userId === currentUser?.id ? null : currentUser?.id);
            }
          }}
        />
      </Inline>
    </Card>
  );
}
