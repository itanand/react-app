import React from 'react'
import Sidebar from '../components/Sidebar';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

const Dashboard = () => {
  return (
    <>
    <Box sx={{display : "flex"}}>
    <Sidebar />
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <Typography >
            Dashboard
        </Typography>
      </Box>
    </Box>
    </>
  )
}

export default Dashboard