import { DialogDescription, DialogTitle } from "@radix-ui/react-dialog";
import { DialogHeader } from "../ui/dialog";

export const ModalDesc = (props) => (
    <DialogHeader>
        <DialogTitle className="text-lg font-semibold leading-none tracking-tight">{ props.title }</DialogTitle>
        <DialogDescription className="text-sm text-muted-foreground">
            { props.info }
        </DialogDescription>
    </DialogHeader>
);