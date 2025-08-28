'use client'
import { useState } from "react";
import { Progress } from "./ui/progress";
import { cn } from "@/lib/utils";
import { Button } from "./ui/button";
import { toast } from "sonner";
import ProgressBar from "./ProgressBar";


function LevelIndicator() {
    const nextLevel = 4;
    const totalPoints = 3000;
    const IncOrDecBy = 100
    const [currentPoints, setCurrentPoints] = useState(2200)
    const progress = Math.floor((currentPoints / totalPoints) * 100)
    const currentLevel = Math.ceil((currentPoints / totalPoints) * 4)

    const handleAddPoints = () => {
        if (currentPoints + IncOrDecBy >= totalPoints) {
            toast.success('Congratulations! You reached the maximum level!')
            setCurrentPoints(3000)
        } else {
            setCurrentPoints(prev => prev + IncOrDecBy)
            toast.success('Point added!')
        }
    }
    const handleRemovePoints = () => {
        if (currentPoints - IncOrDecBy <= 0) {
            toast.error('You are already at minimum points!')
            setCurrentPoints(0)
        } else {
            setCurrentPoints(prev => prev - IncOrDecBy)
        }
    }

    return (
        <div>
            <div className='text-center'>
                <h2 className='text-2xl font-semibold mt-2 text-[#636363]'>Body Advocate - <span className="text-[#fb2c36]">Level {currentLevel}</span></h2>
                <p className="text-md text-gray-600 mt-1" >
                    You’re a Body Advocate! {totalPoints - currentPoints} more points to <br /> become Fearless Sister 💪
                </p>
            </div>
            <div className="mt-5 relative">
                <ProgressBar progress={progress} currentPoints={currentPoints} totalPoints={totalPoints} level={currentLevel} nextLevel={nextLevel} />

            </div>

            <div className="flex gap-5 justify-center mt-16">
                <Button onClick={handleRemovePoints} variant={'outline'}>Decrease {IncOrDecBy}</Button>
                <Button onClick={handleAddPoints} variant={'outline'}>Increase {IncOrDecBy}</Button>
            </div>

        </div>
    )
}

export default LevelIndicator