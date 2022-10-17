import React from 'react';
import { Typography, Grid, Box } from '@mui/material';

/**
 * A page only accessible to admins that displays all users in a table and allows
 * Admin to delete users from admin and promote users to admin.
 */
function ToxicPeoplePage() {
  return (
    <Box>
      <Grid
        item
        direction="column"
        justifyContent="flex-start"
        alignItems="stretch"
      >
        <Typography variant="h2">Welcome to the toxic page</Typography>
      </Grid>
    </Box>
  );
}

export default ToxicPeoplePage;
