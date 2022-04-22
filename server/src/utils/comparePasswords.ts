import bcrypt from "bcrypt";

export async function comparePassword(
  candidatePassword: string,
  userPassword: string
) {
  const isMatch = await bcrypt.compare(candidatePassword, userPassword);
  return isMatch;
}
