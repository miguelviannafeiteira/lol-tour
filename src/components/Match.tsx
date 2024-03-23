import Link from "next/link"
import Image from "next/image"
import { Team } from "../types/completedGames"

type Props = {
    team: Team
    won: boolean
}

export function Match({ team, won }: Props) {
    const wonStyle = won ? "bg-green-800" : "bg-[#2A2E35]"

    return (
        <Link href={`teamStatus/${team.code}`}>
            <Image title={team.name} src={team.image} alt={team.name} className={`${wonStyle} rounded-md p-2`} width={60} height={60} />

            <div className={`flex flex-col justify-start gap-5`}>
                <span className=" text-md truncate max-w-16 text-center mt-4" title={team.name}>{team.code}</span>{" "}
            </div>
        </Link>
    )
}