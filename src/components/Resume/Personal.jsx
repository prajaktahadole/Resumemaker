import React from 'react';
import { TextField, FormControl, InputLabel, Select, MenuItem } from  "@mui/material";

const Personal= ({ values, handleChange, handleBlur, touched, errors }) => {
  return (
    <div>
      <TextField
        label="Full Name"
        name="fullName"
        value={values.fullName}
        onChange={handleChange}
        onBlur={handleBlur}
        error={touched.fullName && !!errors.fullName}
        helperText={touched.fullName && errors.fullName}
      />
      <FormControl>
        <InputLabel>Gender</InputLabel>
        <Select
          name="gender"
          value={values.gender}
          onChange={handleChange}
          onBlur={handleBlur}
          error={touched.gender && !!errors.gender}
        >
          <MenuItem value="">Select</MenuItem>
          <MenuItem value="male">Male</MenuItem>
          <MenuItem value="female">Female</MenuItem>
          <MenuItem value="other">Other</MenuItem>
        </Select>
      </FormControl>
      <FormControl>
        <InputLabel>Marital Status</InputLabel>
        <Select
          name="maritalStatus"
          value={values.maritalStatus}
          onChange={handleChange}
          onBlur={handleBlur}
          error={touched.maritalStatus && !!errors.maritalStatus}
        >
          <MenuItem value="">Select</MenuItem>
          <MenuItem value="single">Single</MenuItem>
          <MenuItem value="married">Married</MenuItem>
          <MenuItem value="divorced">Divorced</MenuItem>
          <MenuItem value="widowed">Widowed</MenuItem>
        </Select>
      </FormControl>
      {/* Add more fields for other personal details */}
    </div>
  );
};

export default Personal;
