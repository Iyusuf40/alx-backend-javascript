import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default function handleProfileSignup(firstName, lastName, fileName) {
  // const res = [];
  return (Promise.allSettled([signUpUser(firstName, lastName), uploadPhoto(fileName)])
    .then((data) => data)
  );
}
