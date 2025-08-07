import { compare, hash } from "bcrypt";

async function hashPassword(password) {
  const hashedPassword = await hash(password, 12);
  return hashedPassword;
}

async function verifyPassword(password, secretKey) {
  const isValid = await compare(password, secretKey);

  return isValid;
}

export { hashPassword, verifyPassword };
