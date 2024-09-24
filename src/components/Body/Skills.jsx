import { SkillButton } from "./SkillButton";


export function Skills(){
    return (
        <div className="px-5 flex flex-col gap-5">
            <h3 className="font-bold text-cyan-600 text-xl">Skills</h3>
            <div className="max-w-2xl flex items-center justify-start px-5 gap-5 flex-wrap min-h-10">
                <SkillButton title="Html"/>
                <SkillButton title="Css"/>
                <SkillButton title="JavaScript"/>
                <SkillButton title="React Js"/>
                <SkillButton title="Tailwind css"/>
                

            </div>
        </div>
    );
}