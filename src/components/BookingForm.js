import React, { useState, useEffect } from 'react'
import './BookingForm.css'
import {
    FormControl,
    FormLabel,
    FormErrorMessage,
    // FormHelperText,
    Input,
    Select,
    Button,
  } from '@chakra-ui/react'
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { fetchAPI, submitAPI } from './Api';
import { useHistory } from 'react-router-dom';

const BookingForm = () => {
    const [availableTimes, setAvailableTimes] = useState([]);

    const history = useHistory();

    const formik = useFormik({
        initialValues: {
			res_date: '',
            res_time: '',
            guests: '',
            occasion: '',
        },
		onSubmit: values => {
			// run submit function
            
            const formDate = JSON.stringify(values, null, 2);
            console.log(formDate);
            submitAPI(formDate);
            history.push('/ConfirmedBooking');
		},
		validationSchema: Yup.object().shape({
            res_date: Yup.string().required(),
            res_time: Yup.string().required(),
            guests: Yup.number().required().positive().integer(),
            occasion: Yup.string().required(),
		}),
    });

    useEffect(()=>{
        if(formik.values.res_date === ''){
            setAvailableTimes(fetchAPI(new Date()));
        }else{
            setAvailableTimes(fetchAPI(new Date(formik.values.res_date)));
        }
    },[formik.values.res_date])

    return (
    <form onSubmit={formik.handleSubmit}>
        <FormControl isInvalid={!!formik.errors.res_date && formik.touched.res_date}>
            <FormLabel htmlFor='res-date'>Choose date</FormLabel>
            <Input type='date' id='res-date' placeholder="Select Date" {...formik.getFieldProps("res_date")} />
            <FormErrorMessage>{formik.errors.res_date}</FormErrorMessage>
        </FormControl>
        <FormControl isInvalid={!!formik.errors.res_time && formik.touched.res_time}>
            <FormLabel htmlFor='res-time'>Choose time</FormLabel>
            <Select id='res-time' placeholder='select...' {...formik.getFieldProps("res_time")}>
                {availableTimes.map(time=><option key={time}>{time}</option>)}
            </Select>
            <FormErrorMessage>{formik.errors.res_time}</FormErrorMessage>
        </FormControl>
        <FormControl isInvalid={!!formik.errors.guests && formik.touched.guests}>
            <FormLabel htmlFor='guests'>Number of guests</FormLabel>
            <Input type='number' placeholder='1' min='1' max='10' id='guests' {...formik.getFieldProps("guests")} />
            <FormErrorMessage>{formik.errors.guests}</FormErrorMessage>
        </FormControl>
        <FormControl isInvalid={!!formik.errors.occasion && formik.touched.occasion}>
            <FormLabel htmlFor='occasion'>Occasion</FormLabel>
            <Select id='occasion'  placeholder='select...' {...formik.getFieldProps("occasion")}>
                <option>None</option>
                <option>Birthday</option>
                <option>Anniversary</option>
            </Select>
            <FormErrorMessage>{formik.errors.occasion}</FormErrorMessage>
        </FormControl>
        <Button mt={4} colorScheme='yellow' type='submit'>Submit</Button>
    </form>
    )
}

export default BookingForm