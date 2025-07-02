const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const path = require("path");
const connectDB = require("./config/db");

// Load env vars from correct path
dotenv.config({ path: path.join(__dirname, '.env') });

// Connect to database
connectDB();

const app = express();

// Middleware
app.use(express.json());
app.use(cors({
  origin: ['http://localhost:3000','https://3ea7-2400-adc7-182-d400-b02d-6e2d-a708-f0dc.ngrok-free.app'],
  credentials: true
}));

// Serve PDF uploads as static files
app.use('/uploads/pdfs', express.static(__dirname + '/uploads/pdfs'));

app.use('/uploads', express.static(path.join(__dirname, 'uploads')));
// Routes
app.use("/api/auth", require("./routes/authRoutes"));
app.use('/api/courses', require('./routes/courseRoutes'));
app.use('/api/content', require('./routes/content'));
app.use('/api/video-reports', require('./routes/VideoReport'));
app.use('/api/feedback', require('./routes/Feedback'))
app.use('/api/instructors', require('./routes/Instructor'));
app.use('/api/student', require('./routes/Student'));
app.use('/api/results', require('./routes/Result'));  
app.use("/api/listening-progress", require('./routes/ListeningProgress'));
// Error handling middleware
app.use((err, req, res, next) => {  
  console.error(err.stack);
  res.status(500).json({ message: "Something went wrong!", error: err.message });
});

// Handle 404
app.use((req, res) => {
  res.status(404).json({ message: "Route not found" });
});

const PORT = process.env.PORT || 5000;

// Function to start server
const startServer = (port) => {
  try {
    const server = app.listen(port, () => {
      console.log(`🚀 Server running on port which is good ${port}`);
    });

    // Handle server errors
    server.on('error', (error) => {
      if (error.code === 'EADDRINUSE') {
        console.log(`⚠️ Port ${port} is busy, trying ${port + 1}...`);
        startServer(port + 1);
      } else {
        console.error('❌ Server error:', error);
      }
    });   

    // Handle unhandled promise rejections
    process.on('unhandledRejection', (err) => {
      console.error('❌ Unhandled Rejection:', err);
      // Close server & exit process
      server.close(() => process.exit(1));
    });
  } catch (error) {
    console.error('❌ Failed to start server:', error);
    process.exit(1);
  }
};

// Start the server
startServer(PORT);
