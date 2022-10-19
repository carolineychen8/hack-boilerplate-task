import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import { styled } from '@mui/material/styles';

import { useNavigate, NavigateFunction } from 'react-router-dom';

import IToxicPerson from '../util/types/toxicperson';

interface ToxicCardProps {
  person: IToxicPerson;
  navigate: NavigateFunction;
}

const HoverCard = styled(Card)`
  transition: all 0.2s ease;

  &:hover {
    transform: scale(1.05);
  }
`;

export default function ToxicCard({ person, navigate }: ToxicCardProps) {
  const { firstName, lastName, _id } = person;

  return (
    <HoverCard sx={{ maxWidth: 345 }}>
      <CardActionArea onClick={() => navigate(`/toxic/${_id}`)}>
        <CardMedia
          component="img"
          height="140"
          image="/static/images/cards/contemplative-reptile.jpg"
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {firstName} {lastName}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography>
        </CardContent>
      </CardActionArea>
    </HoverCard>
  );
}
