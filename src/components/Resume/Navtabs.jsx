import React, { useState } from 'react';
import { Tabs, Tab, Box } from '@mui/material';
import Personal from './Personal'
import Summary from './Summary'
import Skills from  './Skills'
import Education from './Education'
import  Work from './Work'

export default function NavTabs() {
  const [activeTab, setActiveTab] = useState(0);
  const [resumeData, setResumeData] = useState({});

  const handleTabChange = (event, newValue) => {
    setActiveTab(newValue);
  };

  const handleDataChange = (data) => {
    setResumeData((prevData) => ({ ...prevData, ...data }));
  };

  console.log(resumeData);


  const formComponents = [
    { label: 'Personal', component: <Personal onDataChange={handleDataChange} /> ,  },
    { label: 'Summary', component: <Summary onDataChange={handleDataChange} /> },
    { label: 'Skills', component: <Skills onDataChange={handleDataChange}  /> },
    { label: 'Education', component: <Education onDataChange={handleDataChange} /> },
    { label: 'Work', component: <Work onDataChange={handleDataChange} /> },
  ]

  return (
    <Box  sx={{backgroundColor: 'primary', width: '100%'  }}>
      <Tabs value={activeTab} onChange={handleTabChange}>
        {formComponents.map((form, index) => (
          <Tab key={index} label={form.label} />
        ))}
      </Tabs>
      <Box sx={{ p: 3 }}>{formComponents[activeTab].component}</Box>
    </Box>
  );
}
