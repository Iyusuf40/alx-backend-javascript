import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default async function handleProfileSignup(firstName, lastName, fileName) {
  const x = await Promise.all(([signUpUser(firstName, lastName),
    uploadPhoto(fileName)])).then((data) => {
    const payload1 = data[0];
    const payload2 = data[1];
    const res1 = {
      status: 'success',
      value: payload1,
    };

    const res2 = {
      status: 'success',
      value: payload2,
    };

    return [res1, res2];
  })
    .catch((e) => (e));
  return x;
}
