import { postData, putData, getData } from '../util/api';

/**
 * Sends a request to the server to create a person
 * @param json object of person's info
 * @returns true if successful, false otherwise
 */
async function createPerson(
  firstName: string,
  lastName: string,
  pictureUrl: string,
  toxicTraits: [string],
) {
  const res = await postData(`toxicperson`, {
    firstName,
    lastName,
    pictureUrl,
    toxicTraits,
  });
  if (res.error) return false;
  return true;
}

/**
 * Sends a request to the server to add a toxic trait
 * @param id - the id of the person
 * @returns true if successful, false otherwise
 */
async function addTrait(id: string, trait: string) {
  const res = await putData(`toxicperson/${id}`, { trait });
  if (res.error) return false;
  return true;
}

/**
 * Sends a request to the server to get all people
 * @returns all users if successful, false otherwise
 */
async function getAll() {
  const res = await getData(`toxicperson`);
  if (res.error) return false;
  return res;
}

/**
 * Sends a request to the server to get a person's toxic trait
 * @param id - the id of the person
 * @returns traits if successful, false otherwise
 */
async function getTraits(id: string) {
  const res = await getData(`toxicperson/${id}`);
  if (res.error) return false;
  return res;
}

export { createPerson, addTrait, getAll, getTraits };
