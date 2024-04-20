import { Button } from "@modules/shared/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@modules/shared/components/ui/dialog";
import { type Dispatch, type SetStateAction } from "react";

type GetTheFontDialogProps = {
  readonly isDialogOpen: boolean;
  readonly setIsDialogOpen: Dispatch<SetStateAction<boolean>>;
};

export function GetTheFontDialog({
  isDialogOpen,
  setIsDialogOpen,
}: GetTheFontDialogProps) {
  return (
    <Dialog
      open={isDialogOpen}
      onOpenChange={(open) => {
        setIsDialogOpen(open);
      }}
    >
      <DialogContent className="rounded-xl w-[300px] h-[200px]">
        <DialogHeader>
          <DialogTitle>Get the font</DialogTitle>
        </DialogHeader>
        <DialogDescription>
          <p>Download the font and use it in your projects.</p>
        </DialogDescription>
        <DialogFooter>
          <Button>Download</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
