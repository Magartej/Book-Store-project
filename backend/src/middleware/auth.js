const jwt = require('jsonwebtoken');
const User = require('../users/user.model');

// Environment variables
const JWT_SECRET = process.env.JWT_SECRET_KEY;

// Middleware to verify JWT token
const verifyToken = async (req, res, next) => {
  try {
    // Get the token from the authorization header
    const authHeader = req.headers.authorization;
    
    if (!authHeader || !authHeader.startsWith('Bearer ')) {
      return res.status(401).json({ message: 'Access denied. No token provided.' });
    }
    
    const token = authHeader.split(' ')[1];
    
    if (!token) {
      return res.status(401).json({ message: 'Access denied. No token provided.' });
    }
    
    try {
      // Verify the token
      const decoded = jwt.verify(token, JWT_SECRET);
      
      // Add the user info to the request
      req.user = decoded;
      next();
    } catch (error) {
      return res.status(401).json({ message: 'Invalid token.' });
    }
  } catch (error) {
    console.error('Error in verifyToken middleware:', error);
    return res.status(500).json({ message: 'Internal server error.' });
  }
};

// Middleware to verify admin role
const verifyAdmin = async (req, res, next) => {
  try {
    // Check if user exists in request (set by verifyToken middleware)
    if (!req.user) {
      return res.status(401).json({ message: 'Authentication required.' });
    }
    
    // Check if user has admin role
    if (req.user.role !== 'admin') {
      return res.status(403).json({ message: 'Access denied. Admin privileges required.' });
    }
    
    next();
  } catch (error) {
    console.error('Error in verifyAdmin middleware:', error);
    return res.status(500).json({ message: 'Internal server error.' });
  }
};

module.exports = {
  verifyToken,
  verifyAdmin
}; 