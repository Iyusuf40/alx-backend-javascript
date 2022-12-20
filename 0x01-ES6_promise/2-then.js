export default function handleResponseFromAPI(promise) {
  const success = {
    status: 200,
    body: 'success',
  };

  return (promise.then(() => console.log('Got a response from the API'))
    .then(() => success)
    .catch(() => (new Error()))
  );
}
