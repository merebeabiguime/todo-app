export function errorHandler(err, req, res, next) {
  // Log the error (use a proper logger library)
  console.error("Unhandled error:", err);

  // Send an appropriate response
  res.status(500).json({ error: "Internal server error" });
}
