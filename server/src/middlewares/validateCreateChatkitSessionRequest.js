export function validateCreateChatkitSessionRequest(req, res, next) {
  const { deviceId } = req.body ?? {};

  if (!deviceId || typeof deviceId !== "string" || !deviceId.trim()) {
    return res.status(400).json({
      error: "deviceId e obrigatorio.",
    });
  }

  req.body.deviceId = deviceId.trim();
  next();
}
