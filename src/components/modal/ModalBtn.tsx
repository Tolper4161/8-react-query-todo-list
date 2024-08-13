import { Button } from "../ui/button";
import { DialogFooter } from "../ui/dialog";

export const ModalBtn = (props) => (
    <DialogFooter>
        <Button type="submit" onClick={ props.onClick }>{ props.text }</Button>
    </DialogFooter>
);