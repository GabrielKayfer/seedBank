import { HttpError } from "../utils/HttpError.js";
import { FAKE_AUTH_TOKEN } from "../data/fakeAuthData.js";

export function requireFakeAuth(req, _res, next) {
  const authorizationHeader = req.headers.authorization;

  if (!authorizationHeader) {
    return next(new HttpError(401, "Authentication token is required."));
  }

  const [scheme, token] = authorizationHeader.split(" ");

  if (scheme !== "Bearer" || !token) {
    return next(new HttpError(401, "Invalid authorization header."));
  }

  if (token !== FAKE_AUTH_TOKEN) {
    return next(new HttpError(401, "Invalid authentication token."));
  }

  req.auth = { token };

  return next();
}
