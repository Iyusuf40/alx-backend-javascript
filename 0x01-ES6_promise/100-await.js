import { uploadPhoto, createUser } from './utils';

export default async function asyncUploadUser() {
  const photo = await uploadPhoto().catch(() => null);
  const user = await createUser().catch(() => null);
  if (!photo || !user) {
    return { photo: null, user: null };
  }
  return { photo, user };
}
