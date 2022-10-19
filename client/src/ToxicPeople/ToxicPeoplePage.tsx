import React, { useEffect, useState } from 'react';
import { Box, Container, Typography, TextField } from '@mui/material';
import Grid from '@mui/material/Unstable_Grid2';
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

  const [searchQuery, setSearchQuery] = useState<string>('');

  const navigate = useNavigate();

  return (
    <Box sx={{ paddingLeft: 20, paddingRight: 20, paddingTop: 5 }}>
      <Container sx={{ textAlign: 'center', marginBottom: 10 }}>
        <Typography variant="h2">Toxic Traits</Typography>
        <TextField
          id="outlined-basic"
          label="Search for people"
          variant="outlined"
          value={searchQuery}
          sx={{ height: 30 }}
          fullWidth
          onChange={(e) => {
            setSearchQuery(e.target.value);
          }}
        />
      </Container>
      <Grid container spacing={2}>
        {people?.data
          .filter((person: IToxicPerson) =>
            searchQuery
              ? person.firstName
                  .toLocaleLowerCase()
                  .includes(searchQuery.toLocaleLowerCase()) ||
                person.lastName
                  .toLocaleLowerCase()
                  .includes(searchQuery.toLocaleLowerCase())
              : true,
          )
          .map((person: IToxicPerson) => {
            console.log(person);
            return (
              <Grid xs={4} sx={{ display: 'flex', justifyContent: 'center' }}>
                <ToxicCard person={person} navigate={navigate} />
              </Grid>
            );
          })}
      </Grid>
    </Box>
  );
}

export default ToxicPeoplePage;
