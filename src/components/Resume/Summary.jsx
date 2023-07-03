import React from 'react'
import { TextField } from  "@mui/material";;

function Summary({ values, handleChange, handleBlur, touched, errors }) {
  return (
    <div>
      <TextField
        label="Summary"
        name="summary"
        value={values.summary}
        onChange={handleChange}
        onBlur={handleBlur}
        multiline
        rows={4}
        error={touched.summary && !!errors.summary}
        helperText={touched.summary && errors.summary}
      />
    </div>
  )
}

export default Summary