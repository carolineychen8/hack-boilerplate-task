import React, { useState } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

interface personCardPage {
  firstName: string;
  lastName: string;
  pictureUrl: string;
}

/**
 * Returns person in card format
 */
function createCard({ firstName, lastName, pictureUrl }: personCardPage) {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia component="img" height="140" image={pictureUrl} />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {firstName} + ` ` + {lastName}
        </Typography>
      </CardContent>
    </Card>
  );
}

export default createCard;
