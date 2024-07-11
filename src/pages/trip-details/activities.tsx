import { CircleCheck } from "lucide-react";
import { useParams } from "react-router-dom";
import { api } from "../../lib/axios";
import { useEffect, useState } from "react";
import { format } from "date-fns";
import { ptBR } from "date-fns/locale";

interface ActivityProps {
  date: string;
  activities: {
    id: string;
    title: string;
    occurs_at: string;
  }[];
}

export function Activities() {
  const { tripId } = useParams();
  const [activities, setParticipants] = useState<ActivityProps[]>([]);

  useEffect(() => {
    api
      .get(`/trips/${tripId}/activities`)
      .then((response) => setParticipants(response.data.activities));
  }, [tripId, activities]);

  return (
    <div className="space-y-8">
      {activities.map((category) => (
        <div key={category.date} className="space-y-2.5">
          <div className="flex items-baseline gap-2">
            <span className="text-xl text-zinc-300">
              Dia {format(category.date, "dd")}
            </span>
            <span className="text-xs font-semibold text-zinc-500">
              {format(category.date, "EEEE", { locale: ptBR })}
            </span>
          </div>
          {category.activities.length > 0 ? (
            <div className="space-y-2.5">
              {category.activities.map((activity) => (
                <div key={activity.id} className="space-y-2.5">
                  <div className="flex items-center gap-3 rounded-xl bg-zinc-900 px-4 py-2.5 shadow-shape">
                    <CircleCheck className="size-5 text-lime-300" />
                    <span className="text-zinc-100">{activity.title}</span>
                    <span className="ml-auto text-sm text-zinc-400">
                      {format(activity.occurs_at, "HH:mm")}h
                    </span>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <p className="text-sm text-zinc-500">
              Nenhuma atividade cadastrada nessa data.
            </p>
          )}
        </div>
      ))}

      {/* <div className="space-y-2.5">
        <div className="flex items-baseline gap-2">
          <span className="text-xl text-zinc-300">Dia 18</span>
          <span className="text-xs font-semibold text-zinc-500">Domingo</span>
        </div>

        <div className="space-y-2.5">
          <div className="flex items-center gap-3 rounded-xl bg-zinc-900 px-4 py-2.5 shadow-shape">
            <CircleCheck className="size-5 text-lime-300" />
            <span className="text-zinc-100">Academia em grupo</span>
            <span className="ml-auto text-sm text-zinc-400">08:00h</span>
          </div>
        </div>

        <div className="space-y-2.5">
          <div className="flex items-center gap-3 rounded-xl bg-zinc-900 px-4 py-2.5 shadow-shape">
            <CircleCheck className="size-5 text-lime-300" />
            <span className="text-zinc-100">Academia em grupo</span>
            <span className="ml-auto text-sm text-zinc-400">08:00h</span>
          </div>
        </div>
      </div> */}
    </div>
  );
}
