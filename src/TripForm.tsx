import { Form, Stack, Row, Col, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import CreatableReactSelect from 'react-select'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';

export function TripForm() {
    return (
        <Form>
            <Stack gap={4}>
                <Row>
                    <Col>
                        <Form.Group controlId="title">
                            <Form.Label>Title</Form.Label>
                            <Form.Control required />
                        </Form.Group>
                    </Col>

                    <Col>
                        <Form.Group controlId="tags">
                            <Form.Label>Tags</Form.Label>
                            <CreatableReactSelect isMulti />
                        </Form.Group>
                    </Col>
                </Row>

                    <Stack direction='horizontal' gap={4}>
                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                        <DatePicker label="Select start date" sx={{ width: '100%' }} />
                    </LocalizationProvider>
                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                        <DatePicker label="Select end date" sx={{ width: '100%' }} />
                    </LocalizationProvider>
                    </Stack>

                <Form.Group controlId="notes">
                    <Form.Label>Trip Details</Form.Label>
                    <Form.Control required as="textarea" rows={8} />
                </Form.Group>

                <Stack direction='horizontal' gap={2} className='justify-content-end'>
                    <Button type='submit' variant='primary'>Save</Button>
                    <Link to='..'>
                        <Button type='button' variant='outline-secondary'>Cancel</Button>
                    </Link>
                </Stack>
            </Stack>
        </Form>
    )
}