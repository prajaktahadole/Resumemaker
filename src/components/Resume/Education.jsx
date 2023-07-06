import React from 'react'
import { Button, TextField} from  "@mui/material";

function Education({ values, handleChange, handleBlur, touched, errors, push, remove }) {

  const handleAddEducation = () => {
    push({ degree: '', institution: '', year: '' });
  };

  const handleRemoveEducation = (index) => {
    remove(index);
  };

  return (
  
    <div>
    {/* Mapping through education details */}
    {values.education.map((education, index) => (
      <div key={index}>
        <TextField
          label="Degree"
          name={`education[${index}].degree`}
          value={education.degree}
          onChange={handleChange}
          onBlur={handleBlur}
          error={touched.education && touched.education[index] && !!errors.education?.[index]?.degree}
          helperText={touched.education && touched.education[index] && errors.education?.[index]?.degree}
        />
        <TextField
          label="Institution"
          name={`education[${index}].institution`}
          value={education.institution}
          onChange={handleChange}
          onBlur={handleBlur}
          error={touched.education && touched.education[index] && !!errors.education?.[index]?.institution}
          helperText={touched.education && touched.education[index] && errors.education?.[index]?.institution}
        />
        <TextField
          label="Year"
          name={`education[${index}].year`}
          value={education.year}
          onChange={handleChange}
          onBlur={handleBlur}
          error={touched.education && touched.education[index] && !!errors.education?.[index]?.year}
          helperText={touched.education && touched.education[index] && errors.education?.[index]?.year}
        />

        <Button variant="outlined" color="secondary" onClick={() => handleRemoveEducation(index)}>
          Remove Education
        </Button>
      </div>
    ))}

    <Button variant="outlined" color="primary" onClick={handleAddEducation}>
      Add Education
    </Button>
  </div>
  )
}

export default Education