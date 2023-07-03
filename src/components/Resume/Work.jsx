import React, { useState } from 'react';
import { TextField, Button, Container, Typography } from '@mui/material';
import { ThemeProvider, createTheme } from '@mui/material/styles';

const theme = createTheme();

function Work({ values, handleChange, handleBlur, touched, errors }) {
  const [companies, setCompanies] = useState([{ company: '', position: '', startDate: '', endDate: '', projects: [{ name: '', startDate: '', endDate: '' }] }]);

  const handleCompanyChange = (index, event) => {
    const updatedCompanies = [...companies];
    updatedCompanies[index].company = event.target.value;
    setCompanies(updatedCompanies);
  };

  const handlePositionChange = (index, event) => {
    const updatedCompanies = [...companies];
    updatedCompanies[index].position = event.target.value;
    setCompanies(updatedCompanies);
  };

  const handleStartDateChange = (index, event) => {
    const updatedCompanies = [...companies];
    updatedCompanies[index].startDate = event.target.value;
    setCompanies(updatedCompanies);
  };

  const handleEndDateChange = (index, event) => {
    const updatedCompanies = [...companies];
    updatedCompanies[index].endDate = event.target.value;
    setCompanies(updatedCompanies);
  };

  const handleProjectNameChange = (companyIndex, projectIndex, event) => {
    const updatedCompanies = [...companies];
    updatedCompanies[companyIndex].projects[projectIndex].name = event.target.value;
    setCompanies(updatedCompanies);
  };

  const handleProjectStartDateChange = (companyIndex, projectIndex, event) => {
    const updatedCompanies = [...companies];
    updatedCompanies[companyIndex].projects[projectIndex].startDate = event.target.value;
    setCompanies(updatedCompanies);
  };

  const handleProjectEndDateChange = (companyIndex, projectIndex, event) => {
    const updatedCompanies = [...companies];
    updatedCompanies[companyIndex].projects[projectIndex].endDate = event.target.value;
    setCompanies(updatedCompanies);
  };

  const addCompany = () => {
    setCompanies([...companies, { company: '', position: '', startDate: '', endDate: '', projects: [{ name: '', startDate: '', endDate: '' }] }]);
  };

  const addProject = (companyIndex) => {
    const updatedCompanies = [...companies];
    updatedCompanies[companyIndex].projects.push({ name: '', startDate: '', endDate: '' });
    setCompanies(updatedCompanies);
  };

  const removeCompany = (index) => {
    const updatedCompanies = [...companies];
    updatedCompanies.splice(index, 1);
    setCompanies(updatedCompanies);
  };

  const removeProject = (companyIndex, projectIndex) => {
    const updatedCompanies = [...companies];
    updatedCompanies[companyIndex].projects.splice(projectIndex, 1);
    setCompanies(updatedCompanies);
  };
      
  return (
    <ThemeProvider theme={theme}>
      <Container maxWidth="sm" sx={{ mt: 4, mb: 4 }}>
        <Typography variant="h4" component="h1" align="center">
          Resume Maker
        </Typography>

        {/* Personal Details */}
        {/* ... Personal details fields ... */}

        {/* Summary */}
        {/* ... Summary field ... */}

        {/* Education Details */}
        {/* ... Education details fields ... */}

        {/* Skills */}
        {/* ... Skills fields ... */}

        {/* Employment History */}
        <Typography variant="h6" component="h2" sx={{ mt: 4 }}>
          Employment History
        </Typography>
        {companies.map((company, companyIndex) => (
          <div key={companyIndex} sx={{ mt: 2 }}>
            <TextField
              label="Company"
              value={company.company}
              onChange={(event) => handleCompanyChange(companyIndex, event)}
              fullWidth
              sx={{ my: 2 }}
            />
            <TextField
              label="Position"
              value={company.position}
              onChange={(event) => handlePositionChange(companyIndex, event)}
              fullWidth
              sx={{ my: 2 }}
            />
            <TextField
              type="date"
              label="Start Date"
              value={company.startDate}
              onChange={(event) => handleStartDateChange(companyIndex, event)}
              fullWidth
              sx={{ my: 2 }}
            />
            <TextField
              type="date"
              label="End Date"
              value={company.endDate}
              onChange={(event) => handleEndDateChange(companyIndex, event)}
              fullWidth
              sx={{ my: 2 }}
            />

            {company.projects.map((project, projectIndex) => (
              <div key={projectIndex} sx={{ mt: 2 }}>
                <TextField
                  label="Project"
                  value={project.name}
                  onChange={(event) => handleProjectNameChange(companyIndex, projectIndex, event)}
                  fullWidth
                  sx={{ my: 2 }}
                />
                <TextField
                  type="date"
                  label="Start Date"
                  value={project.startDate}
                  onChange={(event) => handleProjectStartDateChange(companyIndex, projectIndex, event)}
                  fullWidth
                  sx={{ my: 2 }}
                />
                <TextField
                  type="date"
                  label="End Date"
                  value={project.endDate}
                  onChange={(event) => handleProjectEndDateChange(companyIndex, projectIndex, event)}
                  fullWidth
                  sx={{ my: 2 }}
                />
                <Button
                  variant="outlined"
                  onClick={() => removeProject(companyIndex, projectIndex)}
                  sx={{ height: 40 }}
                >
                  Remove Project
                </Button>
              </div>
            ))}

            <Button
              variant="outlined"
              onClick={() => addProject(companyIndex)}
              sx={{ mt: 2 }}
            >
              Add Project
            </Button>

            <Button
              variant="outlined"
              onClick={() => removeCompany(companyIndex)}
              sx={{ mt: 2 }}
            >
              Remove Company
            </Button>
          </div>
        ))}

        <Button variant="outlined" onClick={addCompany} sx={{ mt: 2 }}>
          Add Company
        </Button>

        {/* Submit button */}
        {/* ... Submit button ... */}
      </Container>
    </ThemeProvider>
  )
}

export default Work