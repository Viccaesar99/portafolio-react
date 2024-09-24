export function SkillButton({title = "Empty"}) {
    return (
        <button className="bg-slate-200 font-semibold text-gray-600 min-w-20 h-7 rounded-full px-3 ">
            {title}
        </button>
    )
}