import 'bootstrap/dist/css/bootstrap.min.css'
import { Container } from 'react-bootstrap'
import { Routes, Route, Navigate } from 'react-router-dom'
import { NewTrip } from './NewTrip'
import { useLocalStorage } from './useLocalStorage'
import { useMemo } from 'react'
import { v4 as uuidV4 } from 'uuid'

export type Trip = {
  id: string
} & TripData

export type RawTrip = {
  id: string
} & RawTripData

export type RawTripData = {
  title: string
  notes: string
  tagIds: string[]
}

export type TripData = {
  title: string
  notes: string
  tags: Tag[]
}

export type Tag = {
  id: string
  label: string
}

function App() {
  const [trips, setTrips] = useLocalStorage<RawTrip[]>('TRIPS', [])
  const [tags, setTags] = useLocalStorage<Tag[]>('TAGS', [])

  const tripsWithTags = useMemo(() => {
    return trips.map(trip => {
      return { ...trip, tags: tags.filter(tag => trip.tagIds.includes(tag.id))}
    })
  }, [trips, tags])

  function onCreateTrip({ tags, ...data }: TripData) {
    setTrips(prevTrips => {
      return [...prevTrips, { ...data, id: uuidV4(), tagsIds: tags.map(tag => tag.id) }]
    })
  }
  return (
    <Container className='my-4'>
      <Routes>
        <Route path="/" element={<h1>Home</h1>} />
        <Route path="/new" element={<NewTrip onSubmit={onCreateTrip} />} />
        <Route path='/:id'>
          <Route index element={<h1>Show</h1>} />
          <Route path='edit' element={<h1>Edit</h1>} />
        </Route>
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Container>
  )
}

export default App
