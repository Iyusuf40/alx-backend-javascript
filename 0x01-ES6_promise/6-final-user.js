import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default async function handleProfileSignup(firstName, lastName, fileName) {
  let res = [];
  await signUpUser(firstName, lastName)
    .then((data) => {
      const response = {
        status: 'fulfilled',
        value: data,
      };
      res.push(response);
      return res;
    });

  await uploadPhoto(fileName)
    .then((data) => {
      const response = {
        status: 'fulfilled',
        value: data,
      };
      res.push(response);
      return res;
    })
    .catch((e) => {
      const response = {
        status: 'rejected',
        value: e,
      };
      res = [];
      res.push(response);
      return res;
    });
  return res;
}
