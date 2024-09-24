export function NavButton({title = "Button"}) {
    return (
        <button className="text-slate-700 hover:text-cyan-400 transition-colors">
            {title}
        </button>
    );
}