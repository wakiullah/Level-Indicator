import { Hexagon, ShieldCheck } from "lucide-react"
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar"
import { Awakener, Trailblazer, BodyAdvocate } from "./icons/badges"
import { cn } from "@/lib/utils"
import AvatarBadge from "./AvatarBadge"

function ProfileAvatar({ level, config, totalPoints, currentPoints }) {
    const color = '#FF2687'
    return (
        <div className="flex flex-col items-center mb-5">
            <div className={cn("relative w-24 h-24  outline-3 rounded-full outline-offset-2 ", config.outline)}>
                <Avatar className="w-full h-full rounded-full    ">
                    <AvatarImage src="https://avatars.githubusercontent.com/u/124599?v=4" />
                    <AvatarFallback className="text-white">ME</AvatarFallback>
                </Avatar>
                <AvatarBadge level={level} colors={config.colors} className={'absolute w-8 h-8 -top-2 -right-2'} />

            </div>
            <div className='text-center'>
                <h2 className='text-2xl font-semibold mt-2 text-[#636363]'>Body Advocate - <span className={cn(config.textColor)}>Level {level}</span></h2>
                <p className="text-md text-gray-600 mt-1" >
                    You’re a Body Advocate! {totalPoints - currentPoints} more points to <br /> become Fearless Sister 💪
                </p>
            </div>
        </div>
    )
}

export default ProfileAvatar