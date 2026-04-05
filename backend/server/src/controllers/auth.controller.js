import {
  getFakeAuthenticatedProfile,
  loginWithFakeCredentials,
  logoutFakeSession,
} from "../services/auth.service.js";

export function login(req, res, next) {
  try {
    const session = loginWithFakeCredentials(req.body ?? {});
    return res.status(200).json(session);
  } catch (error) {
    return next(error);
  }
}

export function getMe(req, res, next) {
  try {
    const profile = getFakeAuthenticatedProfile(req.auth?.token);
    return res.status(200).json(profile);
  } catch (error) {
    return next(error);
  }
}

export function logout(req, res, next) {
  try {
    const result = logoutFakeSession(req.auth?.token);
    return res.status(200).json(result);
  } catch (error) {
    return next(error);
  }
}
