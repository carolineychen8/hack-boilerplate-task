/*
 * TODO: Fill this out with the controller layer for your toxic person! Hint: Look at how admin.controller.ts
 * works in the controller layer, how it deals with the interface of IUser, and how it utilizes functions from the service layer.
 */

import express from 'express';
import ApiError from '../util/apiError';
import StatusCode from '../util/statusCode';
// import { IToxicPerson, ToxicPerson } from '../models/toxicperson.model';
import {
  // findPersonByName,
  createPerson,
  getAllPeopleFromDB,
} from '../services/toxicperson.service';

/**
 * Create new person. Upon success, send the 200 OK status code and new person's info.
 */
const postPerson = async (
  req: express.Request,
  res: express.Response,
  next: express.NextFunction,
) => {
  const { firstName } = req.body;
  const { lastName } = req.body;
  const { pictureUrl } = req.body;
  const { toxicTraits } = req.body;

  if (!firstName) {
    next(ApiError.missingFields(['firstName']));
    return;
  }

  createPerson(firstName, lastName, pictureUrl, toxicTraits)
    .then(() => {
      res.sendStatus(StatusCode.OK);
    })
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    .catch((e) => {
      next(ApiError.internal('Unexpected error occurred.'));
    });
};

/**
 * Get all toxic people. Upon success, send the a list of all users in the res body with 200 OK status code.
 */
const getAll = async (
  req: express.Request,
  res: express.Response,
  next: express.NextFunction,
) => {
  return (
    getAllPeopleFromDB()
      .then((userList) => {
        res.status(StatusCode.OK).send(userList);
      })
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      .catch((e) => {
        next(ApiError.internal('Unable to retrieve all users'));
      })
  );
};

export { postPerson, getAll };
