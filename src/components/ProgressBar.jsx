import { cn } from '@/lib/utils'
import { Progress } from './ui/progress'

function ProgressBar({ progress, currentPoints, totalPoints, level, nextLevel }) {
    console.log(progress, currentPoints, totalPoints)

    const levelColors = {
        1: {
            gradient: '[&>*]:from-[#EF4444] [&>*]:to-[#F87171]',
            bg: 'bg-[#EF4444]',
            bgLight: 'bg-[#FEF2F2]',
            textColor: 'text-[#FCA5A5]'
        },
        2: {
            gradient: '[&>*]:from-[#F59E0B] [&>*]:to-[#FBBF24]',
            bg: 'bg-[#F59E0B]',
            bgLight: 'bg-[#FFFBEB]',
            textColor: 'text-[#FCD34D]'
        },
        3: {
            gradient: '[&>*]:from-[#3B82F6] [&>*]:to-[#60A5FA]',
            bg: 'bg-[#3B82F6]',
            bgLight: 'bg-[#EFF6FF]',
            textColor: 'text-[#93C5FD]'
        },
        4: {
            gradient: '[&>*]:from-[#10B981] [&>*]:to-[#34D399]',
            bg: 'bg-[#10B981]',
            bgLight: 'bg-[#ECFDF5]',
            textColor: 'text-[#6EE7B7]'
        }
    }


    const applyedColor = levelColors[level] || levelColors[1]

    return (
        <>
            <div className={cn("relative w-full h-14 p-1.5 rounded-full", applyedColor.bgLight)}>

                <Progress value={progress}
                    className={cn(" w-full h-full rounded-full [&>*]:bg-gradient-to-l [&>*]:rounded-full", applyedColor.gradient, applyedColor.bgLight)}
                    style={{ backgroundColor: 'transparent' }} />

                <span
                    className={`absolute top-1/2 transform -translate-x-1/2 -translate-y-1/2 text-xs md:text-sm font-medium text-[#FFD7D1]`}
                    style={{ left: `${progress / 2}%` }}
                >
                    {currentPoints > 0 && '★'} {currentPoints > 1000 ? ` ${currentPoints}/${totalPoints} – Stay strong!` : `${progress}%`}
                </span>
            </div>
            <div className="absolute inset-0 flex items-center justify-center">
                <div className="absolute top-0 left-0 p-1.5 w-full h-full flex justify-between ">
                    <div className={cn("w-[44px] h-[44px] flex items-center justify-center rounded-full   font-bold shadow", applyedColor.bg, applyedColor.textColor)}>
                        {level}
                    </div>
                    <div className={cn("w-[44px] h-[44px] flex items-center justify-center rounded-full bg-[#FF9D93]  font-bold shadow", applyedColor.bg, applyedColor.textColor)}>
                        {nextLevel}
                    </div>
                </div>
            </div>
        </>
    )
}

export default ProgressBar