import { Hexagon, ShieldCheck } from "lucide-react"
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar"

function ProfileAvatar() {
    return (
        <div className="flex justify-center">
            <div className="relative w-24 h-24 border-[#fb2c36] border-2 rounded-full">
                <Avatar className="w-full h-full rounded-full border-2 border-white">
                    <AvatarImage src="https://avatars.githubusercontent.com/u/124599?v=4" />
                    <AvatarFallback className="text-white">ME</AvatarFallback>
                </Avatar>
                <div className="">
                    <Hexagon className="absolute -top-1.5 -right-1.5   text-red-500" />
                </div>
            </div>
        </div>
    )
}

export default ProfileAvatar