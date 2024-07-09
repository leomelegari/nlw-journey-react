import { Link2, Plus } from "lucide-react";
import { Button } from "../../components/button";

export function ImportantLinks() {
  return (
    <div className="space-y-6">
      <h2 className="text-xl font-semibold">Links importantes</h2>

      <div className="space-y-5">
        <div className="flex items-center justify-between gap-4">
          <div className="flex-1 space-y-1.5">
            <span className="block font-medium text-zinc-100">
              Reserva do airbnb
            </span>
            <a
              href="#"
              className="block truncate text-sm text-zinc-400 hover:text-zinc-200"
            >
              https://www.airbnb.com.br/rooms/104700011asddf555??sdfsdf
            </a>
          </div>
          <Link2 className="size-5 text-zinc-400" />
        </div>

        <div className="flex items-center justify-between gap-4">
          <div className="flex-1 space-y-1.5">
            <span className="block font-medium text-zinc-100">
              Reserva do airbnb
            </span>
            <a
              href="#"
              className="block truncate text-sm text-zinc-400 hover:text-zinc-200"
            >
              https://www.airbnb.com.br/rooms/104700011asddf555??sdfsdf
            </a>
          </div>
          <Link2 className="size-5 text-zinc-400" />
        </div>
      </div>

      <Button size="full" variant="secondary">
        <Plus className="size-5" />
        Cadastrar novo link
      </Button>
    </div>
  );
}
