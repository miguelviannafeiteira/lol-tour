/* eslint-disable react-hooks/exhaustive-deps */
"use client"

import { useEffect, useMemo } from "react"
import { getGameDetails } from "@/api/getGameDetails"
import { useGobalContext } from "@/context/globalContext"
import { getCompletedEvents } from "@/api/getCompletedEvents"
import { GamesDetailsUseCase } from "@/useCases/GameDetailsUseCase"
import { CompletedEventsUseCase } from "@/useCases/CompletedEventsUseCase"
import { TeamStatusEntity } from "../../../domain/entities/TeamStatus"

interface Props {
    params: {
        id: string
    }
}

export default function TeamStatus({ params }: Props) {
    const { useCompletedEventsHook, useTeamStatusHook } = useGobalContext()
    const getCompletedEventsApi = useMemo(() => new CompletedEventsUseCase(getCompletedEvents, useCompletedEventsHook), [])

    const getGameDetailsApi = new GamesDetailsUseCase(getGameDetails)
    const statusEntity = new TeamStatusEntity()

    const events = statusEntity.findGames(useCompletedEventsHook.events, params.id)
    console.log(statusEntity.getMatchIds());

    useEffect(() => {
        getCompletedEventsApi.execute()
    }, [])

    // console.log(useCompletedEventsHook.events);
    return (
        <h1>{params.id}</h1>
    )
}