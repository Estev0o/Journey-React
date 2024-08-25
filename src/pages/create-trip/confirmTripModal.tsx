import { Mail, User, X } from "lucide-react";
import { FormEvent } from "react";
import { Button } from "../../components/global/button";

interface ConfirmTripModalProps {
    closeConfirmTripModalOpen: () => void,
    createTrip: (event: FormEvent<HTMLFormElement>) => void

}

export function ConfirmTripModal({
    closeConfirmTripModalOpen,
    createTrip }
    : ConfirmTripModalProps) {
    return (
        <div className='fixed inset-0 bg-black/60 flex items-center justify-center'>
            <div className='w-[640px] rounded-xl py-5 px-6 shadow-shape bg-zinc-950 space-y-5'>
                <div className='space-y-2'>
                    <div className='flex items-center justify-between'>
                        <h2 className='text-lg font-semibold'>Confirmar criação de viagem</h2>
                        <button type='button' onClick={closeConfirmTripModalOpen}>
                            <X className='size-5 text-zinc-400'></X>
                        </button>
                    </div>
                    <p className='text-sm text-zinc-400'>
                        Para concluir a criação da viagem para <span className='font font-semibold text-zinc-100'>Florianópolis</span>, Brasil nas datas de <span className='font font-semibold text-zinc-100'>16 a 27 de Agosto de 2024.</span>
                        Para confirmar sua presença na viagem, preencha os dados abaixo:
                    </p>
                </div>

                <form onSubmit={createTrip} className='space-y-3'>
                    <div className='h-14 px-4 bg-zinc-950 border border-zinc-800 rounded-lg flex items-center gap-2'>
                        <User className='size-5 text-zinc-400'></User>
                        <input
                            type="text"
                            name='Nome'
                            placeholder="Seu nome completo"
                            className="bg-transparent text-lg placeholder-zinc-400 outline-none flex-1" />
                    </div>

                    <div className='h-14 px-4 bg-zinc-950 border border-zinc-800 rounded-lg flex items-center gap-2'>
                        <Mail className='size-5 text-zinc-400'></Mail>
                        <input
                            type="text"
                            name='Nome'
                            placeholder="Seu nome completo"
                            className="bg-transparent text-lg placeholder-zinc-400 outline-none flex-1" />
                    </div>

                    <Button variant='primary' size='full'>
                        Confirmar criação da viagem
                    </Button>

                </form>

            </div>
        </div >
    )
}