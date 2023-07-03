import { Box, TextField, FormControl, InputLabel, Select, MenuItem  } from "@mui/material";
import useMediaQuery from "@mui/material/useMediaQuery";


const Personal= ({ values, handleChange, handleBlur, touched, errors }) => {
    const isNonMobile = useMediaQuery("(min-width:600px)");

    return (
        <Box m="20px">
             <Box
                    display="grid"
                    gap="30px"
                    gridTemplateColumns="repeat(4, minmax(0, 1fr))"
                    sx={{
                        "& > div": { gridColumn: isNonMobile ? undefined : "span 4" },
                    }}
                    >
                        <TextField
                            fullWidth
                            variant="filled"
                            type="text"
                            label="Name"
                            onBlur={handleBlur}
                            onChange={handleChange}
                            value={values.Name}
                            name="Name"
                            error={!!touched.Name && !!errors.Name}
                            helperText={touched.Name && errors.Name}
                            sx={{ gridColumn: "span 2" }}
                        />
                       
                        <TextField
                            fullWidth
                            variant="filled"
                            type="text"
                            label="Email"
                            onBlur={handleBlur}
                            onChange={handleChange}
                            value={values.email}
                            name="email"
                            error={!!touched.email && !!errors.email}
                            helperText={touched.email && errors.email}
                            sx={{ gridColumn: "span 2" }}
                        />
                         <TextField
                            fullWidth
                            variant="filled"
                            type="text"
                            label="Title"
                            onBlur={handleBlur}
                            onChange={handleChange}
                            value={values.title}
                            name="title"
                            error={!!touched.title && !!errors.title}
                            helperText={touched.title && errors.title}
                            sx={{ gridColumn: "span 2" }}
                        />
                        <TextField
                            fullWidth
                            variant="filled"
                            type="number"
                            label="Mobile No"
                            onBlur={handleBlur}
                            onChange={handleChange}
                            value={values.contact}
                            name="contact"
                            error={!!touched.contact && !!errors.contact}
                            helperText={touched.contact && errors.contact}
                            sx={{ gridColumn: "span 2" }}
                        />
                        <TextField
                            fullWidth
                            variant="filled"
                            type="text"
                            label="Address 1"
                            onBlur={handleBlur}
                            onChange={handleChange}
                            value={values.address1}
                            name="address1"
                            error={!!touched.address1 && !!errors.address1}
                            helperText={touched.address1 && errors.address1}
                            sx={{ gridColumn: "span 4" }}
                        />
                        <TextField
                            fullWidth
                            variant="filled"
                            type="text"
                            label="Address 2"
                            onBlur={handleBlur}
                            onChange={handleChange}
                            value={values.address2}
                            name="address2"
                            error={!!touched.address2 && !!errors.address2}
                            helperText={touched.address2 && errors.address2}
                            sx={{ gridColumn: "span 4" }}
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
                    </Box>
            
        </Box>
    );
};

export default Personal;