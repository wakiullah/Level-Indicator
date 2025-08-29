import { Awakener, BodyAdvocate, Trailblazer } from "./icons/badges"


const badgeObject = {
    1: Awakener,
    2: Trailblazer,
    3: BodyAdvocate,
    4: Awakener,
    5: Trailblazer,
    6: BodyAdvocate
}


function AvatarBadge({ level = 1, className, colors }) {

    const Badge = badgeObject[level]

    return (
        <Badge className={className} colors={colors} />
    )
}

export default AvatarBadge