import { CheckCircle2, CircleDashed, UserCog } from "lucide-react";
import { Button } from "../../components/button";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { api } from "../../lib/axios";

interface ParticipantProps {
  id: string;
  name: string;
  email: string;
  is_confirmed: boolean;
}

export function Guests() {
  const { tripId } = useParams();
  const [participants, setParticipants] = useState<ParticipantProps[]>([]);

  useEffect(() => {
    api
      .get(`/trips/${tripId}/participants`)
      .then((response) => setParticipants(response.data.participants));
  }, [tripId]);
  return (
    <div className="space-y-6">
      <h2 className="text-xl font-semibold">Convidados</h2>

      <div className="space-y-5">
        {participants.map((participant, index) => (
          <div
            key={participant.id}
            className="flex items-center justify-between gap-4"
          >
            <div className="flex-1 space-y-1.5">
              <span className="block font-medium text-zinc-100">
                {participant.name ?? `Convidado ${index}`}
              </span>
              <span className="block truncate text-sm text-zinc-400">
                {participant.email}
              </span>
            </div>
            {participant.is_confirmed ? (
              <CheckCircle2 className="size-5 text-green-400" />
            ) : (
              <CircleDashed className="size-5 text-zinc-400" />
            )}
          </div>
        ))}
      </div>

      <Button size="full" variant="secondary">
        <UserCog className="size-5" />
        Gerenciar convidados
      </Button>
    </div>
  );
}
