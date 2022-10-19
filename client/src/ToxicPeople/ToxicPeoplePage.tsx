import React, { useEffect, useState } from 'react';
import { Typography, Grid } from '@mui/material';
import ScreenGrid from '../components/ScreenGrid';
import IToxicPerson from '../util/types/toxicperson';
import { useData } from '../util/api';

/**
 * map to cards
 * for each card, get toxic traits
 */
function ToxicPeoplePage() {
  const [peopleList, setPeopleList] = useState<IToxicPerson[]>([]);
  const people = useData('toxicperson');

  return (
    <ScreenGrid>
      <Grid
        item
        direction="column"
        justifyContent="flex-start"
        alignItems="stretch"
      >
        <Typography variant="h2">Welcome to Hack4Impact!</Typography>
      </Grid>
    </ScreenGrid>
  );
}

export default ToxicPeoplePage;
