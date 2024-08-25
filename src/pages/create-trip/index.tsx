import { FormEvent, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { InviteGuestsModal } from './inviteGuestsModal'
import { ConfirmTripModal } from './confirmTripModal'
import { DestinationDataSteps } from './steps/destination-and-date-step'
import { InviteGuestsStep } from './steps/invite-guests-step'

export function CreateTripPage() {
    const nav = useNavigate()
    const [isGuestsInputOpen, setIsGuestsInputOpen] = useState(false)
    const [isGuestsModalOpen, setGuestsModalOpen] = useState(false)
    const [isConfirmTripModalOpen, setConfirmTripModalOpen] = useState(false)

    const [emailToInvite, setEmailToinvite] = useState(['seu.email@.com'])

    function openGuests() {
        setIsGuestsInputOpen(true)
    }

    function closeGuestsInputs() {
        setIsGuestsInputOpen(false)
    }

    function openGuestsModal() {
        setGuestsModalOpen(true)
    }

    function closeGuestsModal() {
        setGuestsModalOpen(false)
    }

    function openConfirmTripModalOpen() {
        setConfirmTripModalOpen(true)
    }

    function closeConfirmTripModalOpen() {
        setConfirmTripModalOpen(false)
    }



    function addNewEmailToInvite(event: FormEvent<HTMLFormElement>) {
        event.preventDefault()

        const data = new FormData(event.currentTarget)

        const email = data.get('email')?.toString()

        if (!email) {
            return
        }

        if (emailToInvite.includes(email)) {
            return
        }

        setEmailToinvite([
            ...emailToInvite,
            email
        ])

        event.currentTarget.reset()
    }

    function removeEmailFromInvites(emailToRemove: string) {
        const newEmailList = emailToInvite.filter(email => email !== emailToRemove)

        setEmailToinvite(newEmailList)
    }

    function createTrip(event: FormEvent<HTMLFormElement>) {
        event.preventDefault()
        nav('trips/:tripId')
    }

    return (
        <div className="h-screen flex items-center justify-center bg-pattern bg-no-repeat bg-center">
            <div className="max-w-3xl w-full px-6 text-center space-y-10">
                <div className='flex flex-col items-center gap-3'>
                    <img src='/logo.svg' alt='plann.er'></img>
                    <p className="text-zinc-300 text-lg">Convide seus amigos e planje sua proxima viagem!</p>
                </div>

                <div className='space-y-4'>

                    <DestinationDataSteps
                    closeGuestsInputs={closeGuestsInputs}
                    isGuestsInputOpen={isGuestsInputOpen}
                    openGuests={openGuests}
                    
                    />

                    {isGuestsInputOpen && (
                        <InviteGuestsStep
                        emailToInvite={emailToInvite}
                        openConfirmTripModalOpen={openConfirmTripModalOpen}
                        openGuestsModal={openGuestsModal}
                        />
                    )}

                </div>

                <p className="text-sm text-zinc-500">
                    Ao planejar sua viagem pela plann.er voce automaticamente concorda <br />
                    com nossos <a className="text-zinc-300 underline" href="#">termos de uso</a> e <a className="text-zinc-300 underline" href="#">politicas de privacidade</a>
                </p>
            </div>

            {isGuestsModalOpen && (
                <InviteGuestsModal 
                    emailToInvite={emailToInvite}
                    addNewEmailToInvite={addNewEmailToInvite}
                    closeGuestsModal={closeGuestsModal}
                    removeEmailFromInvites={removeEmailFromInvites}
                />
            )}

            {isConfirmTripModalOpen && (
                <ConfirmTripModal
                    closeConfirmTripModalOpen={closeConfirmTripModalOpen}
                    createTrip={createTrip}
                />
            )
            }

        </div >
    )
}