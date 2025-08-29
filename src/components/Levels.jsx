import { Awakener, BodyAdvocate, Trailblazer } from "./icons/badges"

const badgeObject = {
    1: Awakener,
    2: Trailblazer,
    3: BodyAdvocate,
    4: Awakener,
    5: Trailblazer,
    6: BodyAdvocate
}

function Levels({ level, configs }) {
    return (
        <div className="grid grid-cols-3 mt-10">
            {Object.entries(badgeObject).map(([key, Badge]) => {
                const config = level >= key ? configs[key] : {}
                return (
                    <div key={key} className="flex flex-col items-center gap-2 mb-2">
                        <Badge colors={config.colors} className={'w-28 h-28'} />
                        <p className="text-sm text-gray-600">Level {key}</p>
                    </div>)
            })
            }
        </div>
    )
}

export default Levels