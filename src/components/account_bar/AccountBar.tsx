import { Avatar, AvatarFallback, AvatarImage } from "@radix-ui/react-avatar";

export const AccountBar = (props) => {
    return (
        <div>
            <Avatar>
                <AvatarImage src={ props.avatar } />
                <AvatarFallback>AV</AvatarFallback>
            </Avatar>
        </div>
    )
};