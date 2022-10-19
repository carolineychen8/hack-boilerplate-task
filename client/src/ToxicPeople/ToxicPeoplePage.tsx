import React, { useState, useEffect } from 'react';
import { Typography, Box, Container, Card, TextField } from '@mui/material';
import Grid from '@mui/material/Unstable_Grid2';
import { useNavigate } from 'react-router-dom';

import { useData } from '../util/api';
import ToxicCard from './ToxicCard';

import IToxicPerson from '../util/types/toxicperson';

const people = [
  {
    _id: 0,
    firstName: 'Brian',
    lastName: 'Williams',
    pictureUrl: 'none',
    toxicTraits: ['toxic trait', 'something else'],
  },
  {
    _id: 1,
    firstName: 'Bekzat',
    lastName: 'Amirbay',
    pictureUrl: 'none',
    toxicTraits: ['overspends on food', 'unironically has a mullet'],
  },
  {
    _id: 2,
    firstName: 'Caroline',
    lastName: 'Chen',
    pictureUrl: 'none',
    toxicTraits: ['toxic trait', 'something else'],
  },
];

/**
 * A page to display cards for all of the "toxic people" that have been added
 */
function ToxicPeoplePage() {
  const [toxicPeopleList, setToxicPeopleList] = useState<IToxicPerson[]>([]);
  const toxicPeople = useData('toxicperson/all');
  console.log(toxicPeople);

  const [searchQuery, setSearchQuery] = useState<string>('');

  const navigate = useNavigate();

  useEffect(() => {
    console.log(toxicPeople);
    setToxicPeopleList(
      toxicPeople?.data.filter((entry: IToxicPerson) => {
        return entry && entry.firstName && entry.lastName;
      }),
    );
  }, [toxicPeople]);

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
        {toxicPeopleList
          .filter((person) =>
            searchQuery
              ? person.firstName
                  .toLocaleLowerCase()
                  .includes(searchQuery.toLocaleLowerCase()) ||
                person.lastName
                  .toLocaleLowerCase()
                  .includes(searchQuery.toLocaleLowerCase())
              : true,
          )
          .map((person) => (
            <Grid xs={4} sx={{ display: 'flex', justifyContent: 'center' }}>
              <ToxicCard person={person} navigate={navigate} />
            </Grid>
          ))}
      </Grid>
    </Box>
  );
}

export default ToxicPeoplePage;
