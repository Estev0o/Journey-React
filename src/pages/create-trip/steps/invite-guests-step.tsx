import { ArrowRight, UserRoundPlus } from "lucide-react";
import { Button } from "../../../components/global/button";

interface InviteGuestsStepProps {
    openGuestsModal: () => void,
    emailToInvite: string[]
    openConfirmTripModalOpen: () => void,
}

export function InviteGuestsStep({
    openGuestsModal,
    emailToInvite,
    openConfirmTripModalOpen,
}: InviteGuestsStepProps) {
    return (
        <div className="h-16 bg-zinc-900 px-4 rounded-xl flex items-center shadow-shape gap-3">
            <button type='button' onClick={openGuestsModal} className='flex items-center gap-2 flex-1'>
                <UserRoundPlus className="size-5 text-zinc-400" />
                {emailToInvite.length > 0 ? (
                    <span className='text-zinc-400 text-lg flex-1 text-left'>
                        {emailToInvite.length} pessoa(s) convidada(s)
                    </span>
                ) : (
                    <span className='text-zinc-400 text-lg flex-1 text-left'>Quem estara na viagem?</span>
                )}
            </button>

            <div className='w-px h-6 bg-zinc-800 '></div>

            <Button onClick={openConfirmTripModalOpen} variant='primary'>
                Confirmar viagem
                <ArrowRight className='size-5' />
            </Button>
        </div>
    )
}