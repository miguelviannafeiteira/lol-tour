/* eslint-disable react-hooks/exhaustive-deps */
'use client'

import { useEffect, useMemo } from "react";
import { formatDate } from "@/domain/dayForm";
import { useGobalContext } from "@/context/globalContext";
import { Match as MatchComponent } from "@/components/Match";
import { getCompletedEvents } from "@/api/getCompletedEvents";
import { CompletedEventsUseCase } from "@/useCases/CompletedEventsUseCase";

export default function Home() {
  const { useCompletedEventsHook } = useGobalContext()
  const getCompletedEventsApi = useMemo(() => new CompletedEventsUseCase(getCompletedEvents, useCompletedEventsHook), [])

  useEffect(() => {
    getCompletedEventsApi.execute()
  }, [])

  return (
    <div className=" bg-[#2A2E35] w-screen overflow-x-hidden h-screen justify-center gap-5">
      <ul className="grid grid-cols-4 gap-5 m-5">
        {useCompletedEventsHook.events.map((event) => (
          <li key={event.id} className="bg-[#12181B] w-[320px] h-[180px] rounded-md p-3 ">
            <span className="flex justify-center mb-5">
              {formatDate(event.time)}
            </span>

            <div className="flex items-center justify-around">
              {event.teams.map((team, idx) => (
                <div key={team.name} className="flex  items-center gap-10">
                  <MatchComponent team={team} key={team.name} won={event.wonTheMatch(team)} />

                  {!(idx % 2) &&
                    <h1 className="font-bold text-[#B2BECD] text-3xl">VS</h1>
                  }
                </div>
              ))}
            </div>
          </li>
        ))}
      </ul >
    </div>
  );
}
