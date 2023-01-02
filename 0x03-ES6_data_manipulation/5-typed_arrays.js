export default function createInt8TypedArray(length, position, value) {
  if (length - 1 < position || position < 0) {
    throw Error('Position outside range');
  }

  if (value > 255 || value < 0) {
    throw Error('Position outside range');
  }

  const buff = new ArrayBuffer(length);
  const arrInt8view = new Int8Array(buff);
  arrInt8view[position] = value;
  return buff;
}
