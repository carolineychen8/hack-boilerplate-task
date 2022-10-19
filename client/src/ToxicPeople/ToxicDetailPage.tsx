import React, { useEffect, useState } from 'react';
import { Typography, Grid, Box } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import ScreenGrid from '../components/ScreenGrid';
import IToxicPerson from '../util/types/toxicperson';
import { useData, getData } from '../util/api';
import { useAppSelector } from '../util/redux/hooks';
import { selectUser } from '../util/redux/userSlice';
import ToxicCard from './personCard';
import { getAll } from './api';

function ToxicDetailPage() {
  return (
    <Box>
      <Grid
        item
        direction="column"
        justifyContent="flex-start"
        alignItems="stretch"
      >
        <Typography variant="h2">Welcome to the toxic detail page</Typography>
      </Grid>
    </Box>
  );
}

export default ToxicDetailPage;
