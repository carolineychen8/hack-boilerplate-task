/**
 * Interface for the toxic person data type return from the backend
 */
interface IToxicPerson {
  _id: string;
  firstName: string;
  lastName: string;
  pictureUrl: string;
  toxicTraits: [string];
}

export default IToxicPerson;
