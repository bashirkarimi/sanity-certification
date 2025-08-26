import { Button, Grid } from "@sanity/ui";

type StatusSelectorProps = {
  status: string;
  setStatus: (newValue: string) => void;
};

const STATUS = ["All", "Pending", "Approved", "Spam"];

export function StatusSelector({ status, setStatus }: StatusSelectorProps) {
  return (
    <Grid columns={4} gap={2}>
      {STATUS.map((statusOption) => (
        <Button
          key={statusOption}
          mode={
            statusOption.toLocaleLowerCase() === status.toLocaleLowerCase()
              ? "default"
              : "ghost"
          }
          onClick={() => setStatus(statusOption.toLocaleLowerCase())}
          text={statusOption}
        />
      ))}
    </Grid>
  );
}
