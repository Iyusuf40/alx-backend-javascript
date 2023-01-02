export default function createInt8TypedArray(length, position, value) {
  if (position >= length || position < 0) {
    throw Error('Position outside range');
  }

  const buff = new ArrayBuffer(length);
  const arrInt8view = new DataView(buff);
  arrInt8view.setInt8(position, value);
  return arrInt8view;
}
