import { TripForm } from "./TripForm"
import { TripData } from "./App"

type NewTripProps = {
    onSubmit: (data: TripData) => void
}

export function NewTrip({ onSubmit }: NewTripProps) {
    return (
        <>
        <h1 className="mb-4">New Trip</h1>
        <TripForm onSubmit={onSubmit} />
        </>
    )
}