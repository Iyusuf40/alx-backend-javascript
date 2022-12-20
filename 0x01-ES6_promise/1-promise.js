export default function getFullResponseFromAPI(success) {
  const successObj = {
    status: 200,
    body: 'Success',
  };

  const err = new Error('The fake API is not working currently');
  return new Promise((res, rej) => {
    if (success) {
      res(successObj);
    } else {
      rej(err);
    }
  });
}
