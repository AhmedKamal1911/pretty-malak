import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./ui/Dialog";

const MessagesDialog = ({ buttonLabel = "open", dialogTitle, desc }) => {
  return (
    <Dialog>
      <DialogTrigger className="bg-main text-white px-3 py-2 rounded-sm">
        {buttonLabel}
      </DialogTrigger>
      <DialogContent className="bg-white">
        <DialogHeader>
          <DialogTitle>{dialogTitle}</DialogTitle>
          <DialogDescription className="text-[17px]">{desc}</DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};

export default MessagesDialog;
