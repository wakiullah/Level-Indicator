import { cn } from '@/lib/utils'
import { Progress } from './ui/progress'

function ProgressBar({ progress, currentPoints, totalPoints, level, nextLevel, config }) {
    console.log(config)
    return (
        <>
            <div className={cn(`relative w-full h-14 p-1.5 rounded-full `, config.bgLight)}>

                <Progress value={progress}
                    className={cn(" w-full h-full rounded-full [&>*]:bg-gradient-to-l [&>*]:rounded-full", config.progressbar, config.bgLight)}
                    style={{ backgroundColor: 'transparent' }} />

                <span
                    className={`absolute top-1/2 transform -translate-x-1/2 -translate-y-1/2 text-xs md:text-sm font-medium text-[#FFD7D1]`}
                    style={{ left: `${progress / 2}%` }}
                >
                    {currentPoints > 0 && '★'} {currentPoints > 1000 ? ` ${currentPoints}/${totalPoints} – Stay strong!` : `${progress}%`}
                </span>
                <div className="absolute top-0 left-0 p-1.5 w-full h-full flex justify-between ">
                    <div className={cn("w-[44px] h-[44px] flex items-center justify-center rounded-full   font-bold shadow", `${config.bg} text-white`)}>
                        {level}
                    </div>
                    <div className={cn("w-[44px] h-[44px] flex items-center justify-center rounded-full bg-[#FF9D93]  font-bold shadow", `${config.bg} text-white`)}>
                        {nextLevel}
                    </div>
                </div>
            </div>
        </>
    )
}

export default ProgressBar