import { Dialog, DialogContent, DialogTrigger } from "@radix-ui/react-dialog";
import { ModalDesc } from "./ModalDesc";
import { ModalBtn } from "./ModalBtn";
import { Button } from "../ui/button";

export const Modal = ({ title="", info="", openModalBtnText="", modalBtnText="", modalBtnOnClick, children }) => {
    return (
        <Dialog>
            <DialogTrigger asChild>
            <Button variant="outline">{ openModalBtnText }</Button>
            </DialogTrigger>
            <DialogContent className="fixed left-0 right-0 top-0 bottom-0 bg-black/80 modal-bg transition" style={ { pointerEvents: "none" } }>
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 sm:max-w-[425px] bg-white p-6 rounded-md" style={ { pointerEvents: "all" } }>
                <ModalDesc title={ title } info={ info } />
                <div className="grid gap-4 py-4">
                    { children }
                </div>
                <ModalBtn text={ modalBtnText } onClick={ modalBtnOnClick } />
            </div>
            </DialogContent>
        </Dialog>
    );
};