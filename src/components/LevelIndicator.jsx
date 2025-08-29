'use client'
import { useState } from "react";
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
            
            <div className="mt-5 relative">
                <ProgressBar progress={progress} currentPoints={currentPoints} totalPoints={totalPoints} level={currentLevel} nextLevel={nextLevel} />

            </div>


        </div>
    )
}

export default LevelIndicator