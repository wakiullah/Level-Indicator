'use client'
import Levels from "@/components/Levels";
import ProfileAvatar from "@/components/ProfileAvatar";
import ProgressBar from "@/components/ProgressBar";
import { Button } from "@/components/ui/button";
import { levelConfig } from "@/utils/lavelConfigs";
import { useState } from "react";

export default function Home() {

  const nextLevel = 4;
  const totalPoints = 3000;
  const [currentPoints, setCurrentPoints] = useState(3000)
  const progress = Math.floor((currentPoints / totalPoints) * 100)
  const currentLevel = Math.ceil((currentPoints / totalPoints) * 4)
  const activeLevelConfig = levelConfig[currentLevel]


  return (
    <div className="max-w-xl mx-auto py-5 px-2 md:px-5">
      <ProfileAvatar level={currentLevel} config={activeLevelConfig} totalPoints={totalPoints} currentPoints={currentPoints} />
      <ProgressBar progress={progress} level={currentLevel} config={activeLevelConfig} totalPoints={totalPoints} currentPoints={currentPoints} nextLevel={nextLevel} />
      <Levels level={currentLevel} configs={levelConfig} />

      <div className="mt-10 text-center">
        {/* //2 button increes and decrees the current point */}
        <Button onClick={() => setCurrentPoints(prev => prev + 100)} className="mr-2">Add Points</Button>
        <Button onClick={() => setCurrentPoints(prev => prev - 100)} variant="outline">Remove Points</Button>
      </div>
    </div>
  );
}
