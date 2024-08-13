import { Navbar } from "@/components/navbar/Navbar";
import { queryCache } from "@/utils/queryCache";

export const MainPage = () => {
    const token = queryCache.find({ queryKey: ["token"] });

    console.log(`Token: ${ token }`);
    
    return (
        <Navbar token={ token } />
    );
}