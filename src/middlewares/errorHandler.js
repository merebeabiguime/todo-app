export function errorHandler(err, req, res, next) {
  // Log the error (use a proper logger library)
  console.error("Unhandled error:", err);

  // Check if the error is a known error (e.g., one that you've thrown intentionally)
  if (err instanceof Error) {
    // Send an appropriate response for known errors
    return res.status(400).json({ error: err.message }); // Assuming you want to send the error message to the client
  }

  // If it's not a known error, send a generic internal server error response
  res.status(500).json({ error: "Internal server error" });
}
