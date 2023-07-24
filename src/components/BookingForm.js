import React from 'react'
import './BookingForm.css'
import {
    FormControl,
    FormLabel,
    FormErrorMessage,
    FormHelperText,
    Input,
    Select,
    Button,
  } from '@chakra-ui/react'

const BookingForm = () => {
    return (
    <FormControl width='400px'>
        <FormLabel htmlFor='res-date'>Choose date</FormLabel>
        <Input type='date' id='res-date' />
        <FormLabel htmlFor='res-time'>Choose time</FormLabel>
        <Select placeholder='select...' id='res-time'>
            <option>17:00</option>
            <option>18:00</option>
            <option>19:00</option>
            <option>20:00</option>
            <option>21:00</option>
            <option>22:00</option>
        </Select>
        <FormLabel htmlFor='guests'>Number of guests</FormLabel>
        <Input type='number' placeholder='1' min='1' max='10' id='guests'/>
        <FormLabel htmlFor='occasion'>Occasion</FormLabel>
        <Select>
            <option>Birthday</option>
            <option>Anniversary</option>
        </Select>
        <Button mt={4} colorScheme='yellow' type='submit'>Submit</Button>
    </FormControl>
    )
}

export default BookingForm