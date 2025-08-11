const express = require('express');
const router = express.Router();
const patientController = require('../controllers/patientController');
const { authenticateToken } = require('../middleware/authMiddleware'); // Add this line

// Now use authenticateToken as middleware
router.get('/', authenticateToken, patientController.getAll);
router.get('/:id', authenticateToken, patientController.getById);
router.post('/', authenticateToken, patientController.create);
router.put('/:id', authenticateToken, patientController.update);
router.delete('/:id', authenticateToken, patientController.delete);

// Your existing routes
router.get('/items', authenticateToken, (req, res) => {
    // Only logged-in users will reach here
    console.log(req.user);
    res.json({ message: `User ID: ${req.user.userId}` });
});

router.post('/items', authenticateToken, async (req, res) => {
    // Create logic here
    console.log(req.user);
    res.json({ message: `User ID: ${req.user.userId}` });
});

module.exports = router;