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
import { useFormik, Form } from 'formik';
import * as Yup from 'yup';

const BookingForm = () => {
    const formik = useFormik({
        initialValues: {
			res_date: '',
            res_time: '',
            guests: '',
            occasion: '',
        },
		onSubmit: values => {
			// run submit function
            alert(JSON.stringify(values, null, 2));
		},
		validationSchema: Yup.object().shape({
            res_date: Yup.string().required(),
            guests: Yup.number().required().positive().integer(),
		}),
    });

    return (
    <form onSubmit={formik.handleSubmit}>
        <FormControl isInvalid={!!formik.errors.res_date && formik.touched.res_date}>
            <FormLabel htmlFor='res-date'>Choose date</FormLabel>
            <Input type='date' id='res-date' placeholder="Select Date" {...formik.getFieldProps("res_date")} />
            <FormErrorMessage>{formik.errors.res_date}</FormErrorMessage>
        </FormControl>
        <FormControl>
            <FormLabel htmlFor='res-time'>Choose time</FormLabel>
            <Select id='res-time' {...formik.getFieldProps("res_time")}>
                <option>17:00</option>
                <option>18:00</option>
                <option>19:00</option>
                <option>20:00</option>
                <option>21:00</option>
                <option>22:00</option>
            </Select>
        </FormControl>
        <FormControl isInvalid={!!formik.errors.guests && formik.touched.guests}>
            <FormLabel htmlFor='guests'>Number of guests</FormLabel>
            <Input type='number' placeholder='1' min='1' max='10' id='guests' {...formik.getFieldProps("guests")}/>
            <FormErrorMessage>{formik.errors.guests}</FormErrorMessage>
        </FormControl>
        <FormControl>
            <FormLabel htmlFor='occasion'>Occasion</FormLabel>
            <Select {...formik.getFieldProps("occasion")}>
                <option>None</option>
                <option>Birthday</option>
                <option>Anniversary</option>
            </Select>
        </FormControl>
        <Button mt={4} colorScheme='yellow' type='submit'>Submit</Button>
    </form>
    )
}

export default BookingForm