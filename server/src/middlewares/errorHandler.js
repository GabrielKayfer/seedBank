export function errorHandler(error, _req, res, _next) {
  console.error("Unhandled route error:", error);

  return res.status(error.statusCode || 500).json({
    error: error.message || "Internal server error.",
  });
}
