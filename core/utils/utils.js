/**
 * Normalize a port into a number, string, or false.
 */
normalizePort = (value) => {
  const port = parseInt(value, 10);
  
  if (isNaN(port)) {
    return value; // Pipe
  }
  
  if (port >= 0) {
    return port;
  }
  
  return false;
};

module.exports = { 
  normalizePort
};
