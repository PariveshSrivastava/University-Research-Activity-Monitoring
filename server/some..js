const express = require('express');
const jwt = require('jsonwebtoken');

const app = express();
const port = 3000;

// A secret key used to sign and verify tokens
const secretKey = 'secretKey';

app.post('/login', (req, res) => {
    // Authenticate the user and get their information
    const user = { id: 123, name: 'John Doe' };

    // Create a token using the user information and the secret key
    const token = jwt.sign(user, secretKey, { expiresIn: '1h' });

    res.json({ token });
});

// A middleware function to validate tokens
const validateToken = (req, res, next) => {
    // Get the token from the request headers
    const token = req.headers['x-access-token'];

    // Verify the token using the secret key
    jwt.verify(token, secretKey, (error, decoded) => {
        if (error) {
            return res.status(401).json({ error: 'Invalid token' });
        }

        req.user = decoded;
        next();
    });
};

app.get('/secure', validateToken, (req, res) => {
    res.json({ message: 'Access granted', user: req.user });
});


app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});