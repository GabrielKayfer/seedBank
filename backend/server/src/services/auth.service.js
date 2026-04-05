import {
  FAKE_AUTH_TOKEN,
  fakeAuthUser,
  fakeClientProfile,
} from "../data/fakeAuthData.js";
import { HttpError } from "../utils/HttpError.js";

function normalizeCredential(value) {
  return typeof value === "string" ? value.trim().toLowerCase() : "";
}

export function loginWithFakeCredentials({ login, email, password }) {
  const credential = normalizeCredential(login || email);
  const normalizedEmail = normalizeCredential(fakeAuthUser.email);

  if (!credential || !password) {
    throw new HttpError(400, "Login/email and password are required.");
  }

  const isCredentialValid = credential === normalizedEmail;
  const isPasswordValid = password === fakeAuthUser.password;

  if (!isCredentialValid || !isPasswordValid) {
    throw new HttpError(401, "Invalid credentials.");
  }

  return {
    token: FAKE_AUTH_TOKEN,
    user: {
      id: fakeAuthUser.id,
      fullName: fakeAuthUser.fullName,
      email: fakeAuthUser.email,
    },
  };
}

export function getFakeAuthenticatedProfile(token) {
  if (!token) {
    throw new HttpError(401, "Authentication token is required.");
  }

  if (token !== FAKE_AUTH_TOKEN) {
    throw new HttpError(401, "Invalid authentication token.");
  }

  return fakeClientProfile;
}

export function logoutFakeSession(token) {
  if (!token) {
    throw new HttpError(401, "Authentication token is required.");
  }

  if (token !== FAKE_AUTH_TOKEN) {
    throw new HttpError(401, "Invalid authentication token.");
  }

  return {
    message: "Session ended successfully.",
  };
}
