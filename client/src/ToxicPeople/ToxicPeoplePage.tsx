import React, { useEffect, useState } from 'react';
import { Typography, Grid } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import ScreenGrid from '../components/ScreenGrid';
import IToxicPerson from '../util/types/toxicperson';
import { useData, getData } from '../util/api';
import { useAppSelector } from '../util/redux/hooks';
import { selectUser } from '../util/redux/userSlice';
import ToxicCard from './personCard';
import { getAll } from './api';

/**
 * map to cards
 * for each card, get toxic traits
 */
function ToxicPeoplePage() {
  const [peopleList, setPeopleList] = useState<IToxicPerson[]>([]);
  const people = useData('toxicperson/all');
  console.log(people?.data);
  const list = people?.data;

  const navigate = useNavigate();

  return (
    <ScreenGrid>
      <Grid container spacing={2} item direction="row" justifyContent="center">
        <Typography variant="h2">Welcome to Hack4Impact!</Typography>
        {list?.map((person: any) => (
          <Grid xs={4} sx={{ display: 'flex', justifyContent: 'center' }}>
            <ToxicCard person={person} navigate={navigate} />
          </Grid>
        ))}

        {/* {list?.map((person: IToxicPerson) =>
          createCard({
            firstName: person.firstName,
            lastName: person.lastName,
            pictureUrl: person.pictureUrl,
          }),
        )} */}
      </Grid>
    </ScreenGrid>
  );
}

export default ToxicPeoplePage;
