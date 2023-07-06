import React from 'react'
import { Formik, Form,FieldArray  } from 'formik';
import * as Yup from 'yup';
import {Box} from "@mui/material";
import Header from "../../components/Individual/Header";
import  Personal from './Personal'
import Summary from './Summary'
import Skills from './Skills'
import Work from './Work';
import Education from './Education';
import Other from './Other';

function Resume() {
  const initialValues = {
    fullName: '',
    summary: '',
    gender: '',
    maritalStatus: '',
    education: [], // Initialize education as an empty array
    skills: ''
  };

  const validationSchema = Yup.object().shape({
    fullName: Yup.string().required('Full Name is required'),
    summary: Yup.string().required('Summary is required'),
    gender: Yup.string().required('Gender is required'),
    maritalStatus: Yup.string().required('Marital Status is required'),
    education: Yup.array().of(
      Yup.object().shape({
        degree: Yup.string().required('Degree is required'),
        institution: Yup.string().required('Institution is required'),
        year: Yup.string().required('Year is required')
      })
    ),
    skills: Yup.string().required('Skills are required')
  });

  const handleSubmit = (values) => {
    console.log(values); // Handle form submission here
  };


  return (
    <Box m="20px">
    <Box display="flex" justifyContent="space-between" alignItems="center">
      <Header title="Create Resume" subtitle="Welcome to your Create Resume" />
    </Box>
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      {({ values, errors, handleChange, handleBlur, touched }) => (
        <Form>

    <Personal
     values={values}
     errors={errors}
     handleChange={handleChange}
     handleBlur={handleBlur}
     touched={touched}
    ></Personal>

    <Summary
     values={values}
     errors={errors}
     handleChange={handleChange}
     handleBlur={handleBlur}
     touched={touched}>
     </Summary>

     <FieldArray name="education">
            {({ push, remove }) => (
              <Education
                values={values}
                errors={errors}
                handleChange={handleChange}
                handleBlur={handleBlur}
                touched={touched}
                push={push}
                remove={remove}
              />
            )}
    </FieldArray>

    <Skills
     values={values}
     errors={errors}
     handleChange={handleChange}
     handleBlur={handleBlur}
     touched={touched}
     ></Skills>

    <Work
     values={values}
     errors={errors}
     handleChange={handleChange}
     handleBlur={handleBlur}
     touched={touched}>
     </Work>

    <Other 
     values={values}
     errors={errors}
     handleChange={handleChange}
     handleBlur={handleBlur}
     touched={touched}
     ></Other>

    <button type="submit">Submit</button>
    </Form>
    )}
    </Formik>
   </Box>
  )
}

export default Resume