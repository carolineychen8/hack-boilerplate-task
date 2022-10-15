/*
 * TODO: Fill this out with the routes layer for your toxic person! Hint: tale a look at admin.route.ts and see how that file
 * defines the routes that will be hit by the backend, and which functions they call from the controller layer to perform the
 * desired function.
 */
import express from 'express';
import { postPerson, getAll } from '../controllers/toxicperson.controller';
import 'dotenv/config';

const router = express.Router();

/**
 * Creates a new person in the database.
 */
router.post('/', postPerson);

/**
 * Gets all people  from the database.
 */
router.get('/', getAll);

export default router;
