import { CircleDashed, UserCog } from "lucide-react";
import { Button } from "../../components/button";

export function Guests() {
  return (
    <div className="space-y-6">
      <h2 className="text-xl font-semibold">Convidados</h2>

      <div className="space-y-5">
        <div className="flex items-center justify-between gap-4">
          <div className="flex-1 space-y-1.5">
            <span className="block font-medium text-zinc-100">
              Leonardo Melegari
            </span>
            <span className="block truncate text-sm text-zinc-400">
              leo@mail.com
            </span>
          </div>
          <CircleDashed className="size-5 text-zinc-400" />
        </div>

        <div className="flex items-center justify-between gap-4">
          <div className="flex-1 space-y-1.5">
            <span className="block font-medium text-zinc-100">
              Angela Carvalho
            </span>
            <span className="block truncate text-sm text-zinc-400">
              angela@mail.com
            </span>
          </div>
          <CircleDashed className="size-5 text-zinc-400" />
        </div>
      </div>

      <Button size="full" variant="secondary">
        <UserCog className="size-5" />
        Gerenciar convidados
      </Button>
    </div>
  );
}
