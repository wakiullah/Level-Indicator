import LevelIndicator from "@/components/LevelIndicator";
import ProfileAvatar from "@/components/ProfileAvatar";
import Image from "next/image";

export default function Home() {
  return (
    <div className="max-w-xl mx-auto py-5 px-2 md:px-5">
      <ProfileAvatar />
      <LevelIndicator />
    </div>
  );
}
