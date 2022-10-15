/*
 * TODO: Fill this out with the service layer for your toxic person! Hint: tale a look at user.service.ts and see how that service
 * uses the User model to save and update to the database.
 */

import { ToxicPerson } from '../models/toxicperson.model';

const findPersonByName = async (firstName: string, lastName: string) => {
  const result = await ToxicPerson.find({
    firstName,
    lastName,
  });
  return result;
};

/**
 * Creates a new person in the database.
 */
const createPerson = async (
  firstName: string,
  lastName: string,
  pictureUrl: string,
  toxicTraits: [string],
) => {
  const newPerson = new ToxicPerson({
    firstName,
    lastName,
    pictureUrl,
    toxicTraits,
  });
  const user = await newPerson.save();
  return user;
};

export { findPersonByName, createPerson };
