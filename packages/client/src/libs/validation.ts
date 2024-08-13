import { z } from "zod";

export function validateEmail(input: string): boolean {
  const emailSchema = z.string().email();

  try {
    emailSchema.parse(input);
    return true;
  } catch (e) {
    return false;
  }
}

export function validatePhoneNumber(input: string): boolean {
  const phoneNumberSchema = z.string().regex(/[0-9]/);

  try {
    phoneNumberSchema.parse(input);
    return true;
  } catch (e) {
    return false;
  }
}

export function validatePassword(
  input: string,
): "PASS" | "LENGTH" | "UPPER" | "SMALL" | "SPECIAL" {
  const passwordLengthSchema = z.string().min(8);
  const passwordUpperSchema = z.string().regex(/[A-Z]/);
  const passwordSmallSchema = z.string().regex(/[a-z]/);
  const passwordSpecialSchema = z.string().regex(/[!@#$%^&*(),.?":{}|<>]/);

  try {
    passwordLengthSchema.parse(input);
  } catch (e) {
    return "LENGTH";
  }

  try {
    passwordUpperSchema.parse(input);
  } catch (e) {
    return "UPPER";
  }

  try {
    passwordSmallSchema.parse(input);
  } catch (e) {
    return "SMALL";
  }

  try {
    passwordSpecialSchema.parse(input);
  } catch (e) {
    return "SPECIAL";
  }

  return "PASS";
}
