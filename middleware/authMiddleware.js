// middleware/authMiddleware.js
const jwt = require('jsonwebtoken');

function authenticateToken(req, res, next) {
    // Get token from header
    console.log('Request headers:', JSON.stringify(req.headers, null, 2));
    const authHeader = req.headers['authorization'];
    console.log('Raw Authorization header:', authHeader);
    
    if (!authHeader) {
        console.log('No Authorization header found');
        return res.sendStatus(401);
    }

    // In authMiddleware.js
const token = authHeader.split(' ').pop();  // This will get the last part after splitting by spaces
console.log('Extracted token:', token ? `${token.substring(0, 10)}...` : 'EMPTY');

    if (!token) {
        console.log('No token found in Authorization header');
        return res.sendStatus(401);
    }

    // Verify token
    jwt.verify(token, process.env.JWT_SECRET, {
        issuer: process.env.CXO_ISSUER,
        audience: process.env.EXPECTED_AUDIENCE
      }, (err, user) => {
        // console.log("error: ", err, "user: ", user);
        console.log('Received token:', token);
        if (err) {
          console.log('Token verification failed:', err.message);
          return res.sendStatus(403);
        }
        console.log('Received token2:', token);
        req.user = user;
        next();
      });
}

// Alternative: Validate token by making a request to auth service
async function validateWithAuthService(token) {
    try {
        const response = await fetch('http://localhost:4000/api/auth/validate', {
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${token}`
            }
        });
        return response.ok;
    } catch (error) {
        console.error('Auth service validation failed:', error);
        return false;
    }
}

module.exports = { authenticateToken };