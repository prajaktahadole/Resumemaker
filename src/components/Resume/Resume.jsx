import React , {useState} from 'react'
import { Box, Button } from "@mui/material";
import Header from "../../components/Individual/Header";
import Personal from './Personal'
import Summary from './Summary';
import Skills from './Skills';
import Education from './Education';
import Work from './Work';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';

function Resume() {

  const initialValues = {
    fullName: '',
    summary: '',
   
  };

  const validationSchema = Yup.object().shape({
    fullName: Yup.string().required('Full Name is required'),
    summary: Yup.string().required('Summary is required'),
  });

  const handleSubmit = (values) => {
    console.log(values); 
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
         touched={touched}>
        </Personal>

        <Summary 
         values={values}
         errors={errors}
         handleChange={handleChange}
         handleBlur={handleBlur}
         touched={touched}>
         </Summary>

        <Skills 
         values={values}
         errors={errors}
         handleChange={handleChange}
         handleBlur={handleBlur}
         touched={touched}>
         </Skills>

        <Education 
         values={values}
         errors={errors}
         handleChange={handleChange}
         handleBlur={handleBlur}
         touched={touched} ></Education>
        <Work 
        values={values}
        errors={errors}
        handleChange={handleChange}
        handleBlur={handleBlur}
        touched={touched}></Work>
        <Box display="flex" justifyContent="end" mt="20px">
           <Button type="submit" color="secondary" variant="contained">
                  Create New User
            </Button>
     </Box>
    </Form>
      )}
    </Formik>
   </Box>
  )
}

export default Resume