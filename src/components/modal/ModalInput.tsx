import { Label } from "@radix-ui/react-label";
import { Input } from "../ui/input";

export const ModalInput = ({ label="", type="text", handleChange }) => {
    return (
        <div className="grid grid-cols-4 items-center gap-4">
            <Label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-right">
                { label }
            </Label>
            <Input className="col-span-3" type={ type } onChange={ handleChange } />
        </div>
    );
};