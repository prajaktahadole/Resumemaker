import React from 'react'
import {Box} from "@mui/material";
import Header from "../../components/Individual/Header";
import LinkTab from './Navtabs'



function Resume() {



  return (
    <Box m="20px">
    <Box display="flex" justifyContent="space-between" alignItems="center">
      <Header title="Create Resume" subtitle="Welcome to your Create Resume" />
    </Box>
    <LinkTab></LinkTab>
 
   </Box>
  )
}

export default Resume