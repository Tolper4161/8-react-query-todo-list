import { AccountBar } from "../account_bar/AccountBar";
import { Authorization } from "../authorization/Authorization";
import { Logo } from "../logo/Logo";
import { Button } from "../ui/button";

export const Navbar = (props) => {
    return (
        <nav className="md:container md:mx-auto">
            <div className="w-full inline-flex items-center justify-between">
                <Logo />
                <div>
                    <Button variant="link">Link</Button>
                </div>
                { 
                    props.token === undefined 
                        ? <Authorization />
                        : <AccountBar />
                }
            </div>
        </nav>
    );
};