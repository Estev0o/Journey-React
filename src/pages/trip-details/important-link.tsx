import { Link2, Plus } from "lucide-react";
import { Button } from "../../components/global/button";

export function ImportantLinks() {
    return (
        <div className="space-y-6">
            <h2 className="font-semibold text-xl">Links importantess</h2>
            <div className="space-y-5">
                <div className="flex items-center justify-between gap-4">
                    <div className="space-y-1.5 ">
                        <span className="block font-medium text-zinc-100">Teste</span>
                        <a href="#" className="block text-xs text-zinc-400 truncate hover:text-zinc-200">https://www.google.com</a>
                    </div>
                    <Link2 className="size-5 text-zinc-500 flex-shrink-0"></Link2>
                </div>

                <div className="flex items-center justify-between gap-4">
                    <div className="space-y-1.5 ">
                        <span className="block font-medium text-zinc-100">Teste</span>
                        <a href="#" className="block text-xs text-zinc-400 truncate hover:text-zinc-200">https://www.google.com</a>
                    </div>
                    <Link2 className="size-5 text-zinc-500 flex-shrink-0"></Link2>
                </div>
            </div>

            <Button variant='secondary' size='full'>
                Cadastrar novo link
                <Plus className="size" />
            </Button>
        </div>
    )
}