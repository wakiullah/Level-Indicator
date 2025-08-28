'use client'
import { useState } from "react";
import { Progress } from "./ui/progress";
import { cn } from "@/lib/utils";
import { Button } from "./ui/button";


function LevelIndicator() {
    const currentLevel = 3;
    const nextLevel = 4;
    const totalPoints = 3000;
    const [currentPoints, setCurrentPoints] = useState(2200)
    const progress = Math.floor((currentPoints / totalPoints) * 100)


    return (
        <div>
            <div className='text-center'>
                <h2 className='text-2xl font-semibold mt-2 text-[#636363]'>Body Advocate - <span className="text-[#fb2c36]">Level {currentLevel}</span></h2>
                <p className="text-md text-gray-600 mt-1" >
                    You’re a Body Advocate! {totalPoints - currentPoints} more points to <br /> become Fearless Sister 💪
                </p>
            </div>
            <div className="mt-5 relative">
                <div className="relative w-full h-14 p-1.5 bg-[#FEDFDC] rounded-full">
                    <Progress value={progress} className={cn(" w-full h-full rounded-full bg-[#FEDFDC] [&>*]:bg-gradient-to-l [&>*]:from-[#FF6B5D] [&>*]:to-[#FB897B] [&>*]:rounded-full")} />

                    {/* <Progress value={progress} className={cn(" w-full h-full rounded-full bg-red-200 [&>*]:bg-[#FF6B5D] [&>*]:rounded-full")} /> */}

                    <span
                        className={`absolute top-1/2 transform -translate-x-1/2 -translate-y-1/2 text-xs md:text-sm font-medium text-[#FFD7D1]`}
                        style={{ left: `${progress / 2}%` }}
                    >
                        ★ {currentPoints > 1000 ? ` ${currentPoints}/${totalPoints} – Stay strong!` : `${progress}%`}
                    </span>
                </div>
                <div className="absolute inset-0 flex items-center justify-center">
                    <div className="absolute top-0 left-0 p-1.5 w-full h-full flex justify-between ">
                        <div className="w-[44px] h-[44px] flex items-center justify-center rounded-full bg-[#FD6454] text-[#6E6263] font-bold shadow">
                            {currentLevel}
                        </div>
                        <div className="w-[44px] h-[44px] flex items-center justify-center rounded-full bg-[#FF9D93] text-[#be948f] font-bold shadow">
                            {nextLevel}
                        </div>
                    </div>
                </div>
            </div>

            <div className="flex gap-5 justify-center mt-16">
                <Button onClick={() => setCurrentPoints(prev => prev - 100)} variant={'outline'}>Decrease 100</Button>
                <Button onClick={() => setCurrentPoints(prev => prev + 100)} variant={'outline'}>Increase 100</Button>
            </div>

        </div>
    )
}

export default LevelIndicator