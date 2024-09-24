
import { Nav } from "./Nav";
export function Header() {

    return (
        <header className="w-full flex flex-row items-center justify-around py-5 row-start-1">
            <h1 className="font-bold font-custom text-3xl text-cyan-500">Portafolio</h1>
            <Nav/>            
        </header>
    );
}