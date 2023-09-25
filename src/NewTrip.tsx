import { TripForm } from "./TripForm"
import { TripData, Tag } from "./App"

type NewTripProps = {
    onSubmit: (data: TripData) => void
    onAddTag: (tag: Tag) => void
    availableTags: Tag[]
}

export function NewTrip({ onSubmit, onAddTag, availableTags }: NewTripProps) {
    return (
        <>
        <h1 className="mb-4">New Trip</h1>
        <TripForm onSubmit={onSubmit}
        onAddTag={onAddTag}
        availableTags={availableTags} />
        </>
    )
}