import { ProfilePhoto } from "./ProfilePhoto"
import { ProfileName } from "./ProfileName"
import { Description } from "./Description"
import { Skills } from "./Skills"

export function Profile(){
    return (
        <div className="min-h-96 w-full">
            <div className="flex flex-col justify-center items-start h-96 before:content-[''] before:h-44 before:w-full before:bg-cyan-400 before:absolute before:top-20">
                <ProfilePhoto />
                <div className="w-full flex flex-col justify-between items-start px-5">
                    <ProfileName name="Victory C. Cuevas Jimenez"/>
                    <p className="text-slate-600 font-bold">Desarrollador Front-End</p>
                </div>
                
            </div>
            <div className="min-h-96 flex flex-col gap-5">
                <Description />
                <Skills />
                
            </div>
        </div>
    )
}
