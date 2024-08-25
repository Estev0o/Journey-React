import { CircleCheck } from "lucide-react";

export function Activities() {
    return (
        <div className="space-y-8">
            <div className="space-y-2.5">
                <div className="flex gap-2 items-baseline">
                    <span className="text-xl text-zinc-300 font-semibold">Dia 17</span>
                    <span className="text-xs text-zinc-500">Sabado</span>
                </div>
                <p className="text-sm text-zinc-500">Nenhuma atividade cadastrada nessa data.</p>
            </div>


            <div className="space-y-2.5">
                <div className="flex gap-2 items-baseline">
                    <span className="text-xl text-zinc-300 font-semibold">Dia 18</span>
                    <span className="text-xs text-zinc-500">Doomingo</span>
                </div>
                <div className="space-y-2.5">
                    <div className="flex items-center px-4 py-2.5 bg-zinc-900 rounded-xl shadow-shape gap-3">
                        <CircleCheck className="size-5 text-lime-300"></CircleCheck>
                        <span className="text-zinc-100">Academia em grupo</span>
                        <span className="text-zinc-100 text-sm ml-auto">08h:00</span>
                    </div>
                </div>
            </div>
        </div>
    )
}