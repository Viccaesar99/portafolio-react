
import { NavButton } from "./NavButton"
export function Nav() {
    return(
        <nav className="flex flex-row gap-10 font-bold font-sans">
            <NavButton title="Inicio"/>
            <NavButton title="Proyectos"/>
            <NavButton title="Sobre mi"/>
            <NavButton title="Contacto"/>
        </nav>
    )
}