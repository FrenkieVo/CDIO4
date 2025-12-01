const express = require('express');
const { PrismaClient } = require('./generated/client');
const app = express();
const prisma = new PrismaClient();
const cors = require("cors");
const path = require("path");

//   Xử lý JSON data
app.use(express.json());
//  // Xử lý x-www-form-urlencoded data
app.use(express.urlencoded({ extended: true }))

// CORS: cho phép frontend truy cập API
const FRONTEND_URL = process.env.FRONTEND_URL || 'http://localhost:3001';
app.use(cors({
	origin: FRONTEND_URL,
	methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
	credentials: true
}));

// Public thư mục UPLOADS cho FE truy cập
app.use("/uploads", express.static(path.join(__dirname, "../uploads")));

app.use('/api', require('./router/api'));

app.get('/', (req, res) => {
 res.send('Hello World');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
	console.log(`Server is running on port ${PORT}`);
	console.log(`Allowed frontend origin: ${FRONTEND_URL}`);
});
