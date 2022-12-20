export default function divideFunction(numerator, denominator) {
  try {
    if (!denominator) {
      throw Error();
    }
    return (numerator / denominator);
  } catch (e) {
    throw Error('cannot divide by 0');
  }
}
