# Backend Interview Preparation Guide - SEED Projects (Node.js + Express + MySQL)

## Table of Contents
1. [Project Overview](#project-overview)
2. [Technology Stack](#technology-stack)
3. [Backend Architecture](#backend-architecture)
4. [Node.js Fundamentals](#nodejs-fundamentals)
5. [Express.js Best Practices](#expressjs-best-practices)
6. [MySQL Database Design](#mysql-database-design)
7. [API Design & RESTful Principles](#api-design--restful-principles)
8. [Authentication & Authorization](#authentication--authorization)
9. [Middleware Patterns](#middleware-patterns)
10. [Error Handling](#error-handling)
11. [Interview Questions & Answers](#interview-questions--answers)
12. [Coding Challenges](#coding-challenges)
13. [Performance Optimization](#performance-optimization)
14. [Security Best Practices](#security-best-practices)
15. [Testing](#testing)

---

## Project Overview

### SEED Projects Backend Stack
All 5 SEED projects use:
- **Runtime:** Node.js
- **Framework:** Express.js
- **Database:** MySQL
- **Authentication:** JWT (JSON Web Tokens)
- **Real-time:** Socket.io
- **Cloud Services:** AWS S3, Google Cloud APIs
- **Email:** Nodemailer
- **Task Scheduling:** node-cron

### Common Features Across Projects
1. User Authentication & Authorization
2. Multi-language Support (English, Hungarian)
3. File Upload & Management (AWS S3)
4. Email Notifications
5. Real-time Updates (Socket.io)
6. Database Query Optimization
7. Error Handling & Logging
8. Performance Monitoring

---

## Technology Stack

### Core Backend
```
Node.js Environment:
├── Node.js Runtime (v14+)
├── npm / yarn (Package Manager)
├── Express.js ^4.17+ (Web Framework)
└── Nodemon (Development)

Database Layer:
├── MySQL ^2.18.1 (Primary)
├── MySQL2 ^3.11+ (Advanced Driver)
├── Connection Pooling
└── Query Builders

Authentication & Security:
├── JWT (jsonwebtoken ^9.0.0)
├── MD5 (md5 ^2.3.0)
├── bcrypt (for password hashing)
├── express-session ^1.17+
└── express-basic-auth

API & Communication:
├── Body Parser ^1.19+
├── Compression ^1.7+
├── CORS
├── Socket.io ^4.8+
├── Axios ^1.6+
├── Nodemailer ^6.6+

Utilities:
├── Moment.js (Date/Time)
├── dotenv (Environment Variables)
├── Morgan (HTTP Logging)
├── Debug (Debugging)
└── Validator (Input Validation)

Development & Testing:
├── Jest (Testing Framework)
├── Supertest (HTTP Testing)
├── ESLint (Linting)
└── Prettier (Code Formatting)
```

---

## Backend Architecture

### MVC Pattern (Model-View-Controller)

```
Express Application
├── Routes (Entry points)
│   ├── auth/
│   ├── courses/
│   ├── users/
│   └── admin/
├── Controllers (Business Logic)
│   ├── courseController.js
│   ├── userController.js
│   └── authController.js
├── Models (Database)
│   ├── Course.js
│   ├── User.js
│   └── Quiz.js
├── Middleware (Processing)
│   ├── authMiddleware.js
│   ├── validationMiddleware.js
│   └── errorHandler.js
├── Services (Reusable Logic)
│   ├── courseService.js
│   ├── emailService.js
│   └── fileService.js
└── Config
    ├── database.js
    ├── auth.js
    └── env.js
```

### Project Structure

```
backend/
├── bin/
│   └── www.js                  # Entry point
├── src/
│   ├── app.js                  # Express app setup
│   ├── config/
│   │   ├── database.js         # DB connection
│   │   ├── constants.js        # Constants
│   │   └── env.js              # Environment config
│   ├── controllers/            # Business logic
│   │   ├── authController.js
│   │   ├── courseController.js
│   │   └── userController.js
│   ├── models/                 # DB Models/Queries
│   │   ├── Course.js
│   │   ├── User.js
│   │   └── Database.js
│   ├── routes/                 # API endpoints
│   │   ├── auth.js
│   │   ├── courses.js
│   │   └── index.js
│   ├── middleware/             # Custom middleware
│   │   ├── auth.js
│   │   ├── validation.js
│   │   └── errorHandler.js
│   ├── services/               # Business logic services
│   │   ├── courseService.js
│   │   ├── emailService.js
│   │   └── s3Service.js
│   ├── utils/
│   │   ├── helpers.js
│   │   ├── validators.js
│   │   └── logger.js
│   └── sockets/                # Socket.io handlers
│       └── handlers.js
├── tests/
│   ├── auth.test.js
│   ├── courses.test.js
│   └── user.test.js
├── .env                        # Environment variables
├── .eslintrc                   # Linting config
├── package.json
└── README.md
```

### Request/Response Flow

```
1. Request arrives at Express server
   ↓
2. Middleware chain processes (validation, auth, compression)
   ↓
3. Route handler matched
   ↓
4. Controller processes business logic
   ↓
5. Model queries database
   ↓
6. Response data formatted
   ↓
7. Response sent to client
```

---

## Node.js Fundamentals

### 1. Event-Driven Architecture

```javascript
// Node.js EventEmitter
const EventEmitter = require('events');

class CourseEmitter extends EventEmitter {}
const courseEmitter = new CourseEmitter();

// Listener
courseEmitter.on('courseCreated', (course) => {
  console.log('Course created:', course.title);
  // Send email notification
  emailService.sendCourseCreatedEmail(course);
});

// Emit event
courseEmitter.emit('courseCreated', {
  id: 1,
  title: 'React Basics',
  instructor: 'John'
});
```

### 2. Callbacks, Promises, and Async/Await

```javascript
// Callback (Old way - Callback Hell)
function fetchCourse(id, callback) {
  db.query('SELECT * FROM courses WHERE id = ?', [id], (err, data) => {
    if (err) callback(err);
    else callback(null, data);
  });
}

// Promise (Better)
function fetchCoursePromise(id) {
  return new Promise((resolve, reject) => {
    db.query('SELECT * FROM courses WHERE id = ?', [id], (err, data) => {
      if (err) reject(err);
      else resolve(data);
    });
  });
}

// Async/Await (Best)
async function getCourse(id) {
  try {
    const course = await db.query('SELECT * FROM courses WHERE id = ?', [id]);
    return course;
  } catch (error) {
    throw new Error('Failed to fetch course: ' + error.message);
  }
}

// Usage
router.get('/courses/:id', async (req, res, next) => {
  try {
    const course = await getCourse(req.params.id);
    res.json(course);
  } catch (error) {
    next(error); // Pass to error handler
  }
});
```

### 3. Stream Processing

```javascript
// Reading file stream (efficient for large files)
const fs = require('fs');

const readStream = fs.createReadStream('large-file.txt');
readStream.on('data', (chunk) => {
  console.log('Chunk received:', chunk.length, 'bytes');
});
readStream.on('error', (error) => {
  console.error('Read error:', error);
});

// Piping streams
app.get('/download/:file', (req, res) => {
  const filePath = path.join(__dirname, 'files', req.params.file);
  const fileStream = fs.createReadStream(filePath);
  
  fileStream.pipe(res);
  
  fileStream.on('error', (error) => {
    res.status(500).json({ error: 'Download failed' });
  });
});
```

### 4. Module System

```javascript
// Exporting modules
// math.js
module.exports = {
  add: (a, b) => a + b,
  subtract: (a, b) => a - b
};

// ES6 Export (if using Babel)
export const add = (a, b) => a + b;
export default { add };

// Importing modules
const math = require('./math');
console.log(math.add(5, 3)); // 8

// ES6 Import
import { add } from './math.js';
```

### 5. Process & Environment

```javascript
// Environment variables
require('dotenv').config();

const port = process.env.PORT || 3000;
const dbHost = process.env.DB_HOST;
const dbUser = process.env.DB_USER;

// Process info
console.log('Process PID:', process.pid);
console.log('Node version:', process.version);
console.log('Platform:', process.platform);

// Environment
console.log('NODE_ENV:', process.env.NODE_ENV);

// Command line arguments
console.log('Args:', process.argv);
```

---

## Express.js Best Practices

### 1. Application Setup

```javascript
// app.js
const express = require('express');
const compression = require('compression');
const morgan = require('morgan');
const cors = require('cors');
const path = require('path');

const app = express();

// Middleware
app.use(compression()); // Gzip compression
app.use(morgan('combined')); // HTTP logging
app.use(cors()); // Cross-origin requests

// Body parsing
app.use(express.json({ limit: '100mb' }));
app.use(express.urlencoded({ limit: '100mb', extended: true }));

// Static files
app.use(express.static(path.join(__dirname, 'public')));

// View engine (optional for server-side rendering)
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Routes
app.use('/api/auth', require('./routes/auth'));
app.use('/api/courses', require('./routes/courses'));
app.use('/api/users', require('./routes/users'));

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(err.status || 500).json({
    error: err.message,
    status: err.status || 500
  });
});

// 404 handler
app.use((req, res) => {
  res.status(404).json({ error: 'Route not found' });
});

module.exports = app;
```

### 2. Route Organization

```javascript
// routes/auth.js
const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');
const { validateLogin, validateRegister } = require('../middleware/validation');
const { authenticate } = require('../middleware/auth');

// Public routes
router.post('/login', validateLogin, authController.login);
router.post('/register', validateRegister, authController.register);
router.post('/refresh-token', authController.refreshToken);

// Protected routes
router.post('/logout', authenticate, authController.logout);
router.get('/me', authenticate, authController.getCurrentUser);

module.exports = router;
```

### 3. Controller Pattern

```javascript
// controllers/courseController.js
const courseService = require('../services/courseService');

exports.getAllCourses = async (req, res, next) => {
  try {
    const { page = 1, limit = 10, category } = req.query;
    const offset = (page - 1) * limit;

    const courses = await courseService.getCourses({
      offset,
      limit,
      category
    });

    res.json({
      success: true,
      data: courses,
      pagination: {
        page,
        limit,
        total: courses.length
      }
    });
  } catch (error) {
    next(error);
  }
};

exports.getCourseById = async (req, res, next) => {
  try {
    const { id } = req.params;
    const course = await courseService.getCourseById(id);

    if (!course) {
      return res.status(404).json({ error: 'Course not found' });
    }

    res.json({
      success: true,
      data: course
    });
  } catch (error) {
    next(error);
  }
};

exports.createCourse = async (req, res, next) => {
  try {
    const { title, description, instructor } = req.body;
    const userId = req.user.id;

    // Validate
    if (!title || !description) {
      return res.status(400).json({ error: 'Missing required fields' });
    }

    const course = await courseService.createCourse({
      title,
      description,
      instructor,
      createdBy: userId
    });

    res.status(201).json({
      success: true,
      data: course
    });
  } catch (error) {
    next(error);
  }
};

exports.updateCourse = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { title, description, status } = req.body;
    const userId = req.user.id;

    const course = await courseService.updateCourse(id, {
      title,
      description,
      status,
      updatedBy: userId,
      updatedAt: new Date()
    });

    res.json({
      success: true,
      data: course
    });
  } catch (error) {
    next(error);
  }
};

exports.deleteCourse = async (req, res, next) => {
  try {
    const { id } = req.params;
    await courseService.deleteCourse(id);

    res.json({
      success: true,
      message: 'Course deleted successfully'
    });
  } catch (error) {
    next(error);
  }
};
```

### 4. Service Layer

```javascript
// services/courseService.js
const db = require('../config/database');

class CourseService {
  async getCourses({ offset = 0, limit = 10, category = null }) {
    let query = 'SELECT * FROM courses WHERE status = "active"';
    const params = [];

    if (category) {
      query += ' AND category = ?';
      params.push(category);
    }

    query += ' ORDER BY created_at DESC LIMIT ? OFFSET ?';
    params.push(limit, offset);

    return new Promise((resolve, reject) => {
      db.query(query, params, (error, results) => {
        if (error) reject(error);
        else resolve(results);
      });
    });
  }

  async getCourseById(id) {
    const query = `
      SELECT 
        c.*,
        u.name as instructor_name,
        COUNT(e.id) as enrolled_count
      FROM courses c
      LEFT JOIN users u ON c.instructor_id = u.id
      LEFT JOIN enrollments e ON c.id = e.course_id
      WHERE c.id = ?
      GROUP BY c.id
    `;

    return new Promise((resolve, reject) => {
      db.query(query, [id], (error, results) => {
        if (error) reject(error);
        else resolve(results[0]);
      });
    });
  }

  async createCourse(data) {
    const { title, description, instructor, createdBy } = data;
    const query = `
      INSERT INTO courses (title, description, instructor_id, created_by, created_at, status)
      VALUES (?, ?, ?, ?, NOW(), 'active')
    `;

    return new Promise((resolve, reject) => {
      db.query(query, [title, description, instructor, createdBy], (error, result) => {
        if (error) reject(error);
        else resolve({ id: result.insertId, ...data });
      });
    });
  }

  async updateCourse(id, data) {
    const { title, description, status, updatedBy, updatedAt } = data;
    const query = `
      UPDATE courses 
      SET title = ?, description = ?, status = ?, updated_by = ?, updated_at = ?
      WHERE id = ?
    `;

    return new Promise((resolve, reject) => {
      db.query(query, [title, description, status, updatedBy, updatedAt, id], (error) => {
        if (error) reject(error);
        else resolve({ id, ...data });
      });
    });
  }

  async deleteCourse(id) {
    const query = 'DELETE FROM courses WHERE id = ?';

    return new Promise((resolve, reject) => {
      db.query(query, [id], (error) => {
        if (error) reject(error);
        else resolve();
      });
    });
  }
}

module.exports = new CourseService();
```

---

## MySQL Database Design

### 1. Database Schema Design

```sql
-- Users Table
CREATE TABLE users (
  id INT PRIMARY KEY AUTO_INCREMENT,
  email VARCHAR(255) UNIQUE NOT NULL,
  password_hash VARCHAR(255) NOT NULL,
  first_name VARCHAR(100),
  last_name VARCHAR(100),
  role ENUM('student', 'instructor', 'admin') DEFAULT 'student',
  profile_picture_url VARCHAR(500),
  is_active BOOLEAN DEFAULT TRUE,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  INDEX idx_email (email),
  INDEX idx_role (role)
);

-- Courses Table
CREATE TABLE courses (
  id INT PRIMARY KEY AUTO_INCREMENT,
  title VARCHAR(255) NOT NULL,
  description TEXT,
  instructor_id INT NOT NULL,
  category VARCHAR(100),
  level ENUM('beginner', 'intermediate', 'advanced') DEFAULT 'beginner',
  duration_hours INT,
  price DECIMAL(10, 2),
  status ENUM('draft', 'active', 'archived') DEFAULT 'active',
  created_by INT,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  FOREIGN KEY (instructor_id) REFERENCES users(id),
  FOREIGN KEY (created_by) REFERENCES users(id),
  INDEX idx_instructor (instructor_id),
  INDEX idx_status (status),
  FULLTEXT KEY ft_search (title, description)
);

-- Enrollments Table
CREATE TABLE enrollments (
  id INT PRIMARY KEY AUTO_INCREMENT,
  user_id INT NOT NULL,
  course_id INT NOT NULL,
  enrollment_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  completion_date DATETIME,
  progress DECIMAL(5, 2) DEFAULT 0,
  status ENUM('active', 'completed', 'dropped') DEFAULT 'active',
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  UNIQUE KEY unique_enrollment (user_id, course_id),
  FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE,
  FOREIGN KEY (course_id) REFERENCES courses(id) ON DELETE CASCADE,
  INDEX idx_user (user_id),
  INDEX idx_course (course_id),
  INDEX idx_status (status)
);

-- Quizzes Table
CREATE TABLE quizzes (
  id INT PRIMARY KEY AUTO_INCREMENT,
  course_id INT NOT NULL,
  title VARCHAR(255) NOT NULL,
  description TEXT,
  total_questions INT,
  passing_score DECIMAL(5, 2),
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (course_id) REFERENCES courses(id) ON DELETE CASCADE,
  INDEX idx_course (course_id)
);

-- Quiz Questions Table
CREATE TABLE quiz_questions (
  id INT PRIMARY KEY AUTO_INCREMENT,
  quiz_id INT NOT NULL,
  question_text TEXT NOT NULL,
  question_type ENUM('multiple_choice', 'short_answer', 'essay') DEFAULT 'multiple_choice',
  order_position INT,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (quiz_id) REFERENCES quizzes(id) ON DELETE CASCADE,
  INDEX idx_quiz (quiz_id)
);

-- Quiz Answers Table
CREATE TABLE quiz_answers (
  id INT PRIMARY KEY AUTO_INCREMENT,
  question_id INT NOT NULL,
  answer_text TEXT NOT NULL,
  is_correct BOOLEAN DEFAULT FALSE,
  order_position INT,
  FOREIGN KEY (question_id) REFERENCES quiz_questions(id) ON DELETE CASCADE,
  INDEX idx_question (question_id)
);

-- Quiz Submissions Table
CREATE TABLE quiz_submissions (
  id INT PRIMARY KEY AUTO_INCREMENT,
  quiz_id INT NOT NULL,
  user_id INT NOT NULL,
  score DECIMAL(5, 2),
  submitted_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (quiz_id) REFERENCES quizzes(id) ON DELETE CASCADE,
  FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE,
  INDEX idx_quiz_user (quiz_id, user_id),
  INDEX idx_submitted_at (submitted_at)
);
```

### 2. Indexing Strategy

```sql
-- Add indexes for frequently queried columns
CREATE INDEX idx_courses_instructor ON courses(instructor_id);
CREATE INDEX idx_courses_category ON courses(category);
CREATE INDEX idx_enrollments_user ON enrollments(user_id);
CREATE INDEX idx_enrollments_course ON enrollments(course_id);

-- Composite indexes for common queries
CREATE INDEX idx_user_course ON enrollments(user_id, course_id);
CREATE INDEX idx_course_status ON courses(status, created_at);

-- Full-text search index
ALTER TABLE courses ADD FULLTEXT INDEX ft_title_desc (title, description);

-- Check query performance
EXPLAIN SELECT * FROM courses WHERE category = 'programming' AND status = 'active';
```

### 3. Query Optimization

```javascript
// Optimized queries with joins
const getEnrolledCourses = (userId) => {
  const query = `
    SELECT 
      c.id,
      c.title,
      c.description,
      u.first_name as instructor_first_name,
      u.last_name as instructor_last_name,
      e.progress,
      e.enrollment_date
    FROM enrollments e
    INNER JOIN courses c ON e.course_id = c.id
    INNER JOIN users u ON c.instructor_id = u.id
    WHERE e.user_id = ? AND e.status = 'active'
    ORDER BY e.enrollment_date DESC
  `;
  
  return db.query(query, [userId]);
};

// Pagination to handle large datasets
const getCoursesPaginated = (page = 1, limit = 10) => {
  const offset = (page - 1) * limit;
  const query = `
    SELECT * FROM courses
    WHERE status = 'active'
    LIMIT ? OFFSET ?
  `;
  
  return db.query(query, [limit, offset]);
};

// Count total for pagination
const getTotalCourses = () => {
  const query = 'SELECT COUNT(*) as total FROM courses WHERE status = "active"';
  return db.query(query);
};
```

### 4. Database Connection Pooling

```javascript
// config/database.js
const mysql = require('mysql2');

const pool = mysql.createPool({
  connectionLimit: 10,
  waitForConnections: true,
  queueLimit: 0,
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME
});

// Utility function
const query = (sql, args) => {
  return new Promise((resolve, reject) => {
    pool.query(sql, args, (error, results) => {
      if (error) return reject(error);
      resolve(results);
    });
  });
};

module.exports = { query, pool };
```

---

## API Design & RESTful Principles

### 1. RESTful Endpoints Design

```javascript
// Courses API
GET    /api/courses              // List all courses
POST   /api/courses              // Create new course
GET    /api/courses/:id          // Get course details
PUT    /api/courses/:id          // Update course
DELETE /api/courses/:id          // Delete course

// Enrollments API
GET    /api/courses/:id/enrollments         // List course enrollments
POST   /api/courses/:id/enrollments         // Enroll user
GET    /api/users/:userId/enrollments       // Get user enrollments
DELETE /api/enrollments/:id                 // Drop course

// Quizzes API
GET    /api/courses/:id/quizzes             // List course quizzes
POST   /api/quizzes                         // Create quiz
POST   /api/quizzes/:id/submit              // Submit quiz
GET    /api/users/:userId/quiz-results      // Get quiz results
```

### 2. Response Format Standard

```javascript
// Success Response (200, 201)
{
  "success": true,
  "status": 200,
  "data": {
    "id": 1,
    "title": "React Basics",
    "description": "Learn React"
  },
  "message": "Course retrieved successfully"
}

// List Response with Pagination
{
  "success": true,
  "status": 200,
  "data": [
    { "id": 1, "title": "Course 1" },
    { "id": 2, "title": "Course 2" }
  ],
  "pagination": {
    "page": 1,
    "limit": 10,
    "total": 50,
    "pages": 5
  }
}

// Error Response (400, 401, 404, 500)
{
  "success": false,
  "status": 400,
  "error": "Invalid course title",
  "message": "Title is required"
}

// Validation Errors
{
  "success": false,
  "status": 422,
  "errors": {
    "email": "Invalid email format",
    "password": "Password must be at least 8 characters"
  }
}
```

### 3. HTTP Status Codes

```javascript
// 2xx Success
200 OK              // Successful request
201 Created         // Resource created
204 No Content      // Successful, no content returned

// 4xx Client Error
400 Bad Request     // Invalid input
401 Unauthorized    // Authentication required
403 Forbidden       // Insufficient permissions
404 Not Found       // Resource doesn't exist
422 Unprocessable   // Validation error

// 5xx Server Error
500 Internal Error  // Server error
503 Unavailable     // Service unavailable
```

---

## Authentication & Authorization

### 1. JWT Authentication

```javascript
// middleware/auth.js
const jwt = require('jsonwebtoken');

const authenticate = (req, res, next) => {
  try {
    const token = req.headers.authorization?.split(' ')[1];

    if (!token) {
      return res.status(401).json({ error: 'Token not provided' });
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded;
    next();
  } catch (error) {
    res.status(401).json({ error: 'Invalid token' });
  }
};

const authorize = (roles = []) => {
  return (req, res, next) => {
    if (!roles.includes(req.user.role)) {
      return res.status(403).json({ error: 'Insufficient permissions' });
    }
    next();
  };
};

module.exports = { authenticate, authorize };
```

### 2. Login and Token Generation

```javascript
// controllers/authController.js
const jwt = require('jsonwebtoken');
const md5 = require('md5');
const userService = require('../services/userService');

exports.login = async (req, res, next) => {
  try {
    const { email, password } = req.body;

    // Validate input
    if (!email || !password) {
      return res.status(400).json({ error: 'Email and password required' });
    }

    // Find user
    const user = await userService.getUserByEmail(email);
    if (!user) {
      return res.status(401).json({ error: 'Invalid email or password' });
    }

    // Verify password
    const passwordHash = md5(password);
    if (user.password_hash !== passwordHash) {
      return res.status(401).json({ error: 'Invalid email or password' });
    }

    // Generate tokens
    const accessToken = jwt.sign(
      { id: user.id, email: user.email, role: user.role },
      process.env.JWT_SECRET,
      { expiresIn: '1h' }
    );

    const refreshToken = jwt.sign(
      { id: user.id },
      process.env.REFRESH_TOKEN_SECRET,
      { expiresIn: '7d' }
    );

    // Store refresh token in database
    await userService.updateRefreshToken(user.id, refreshToken);

    res.json({
      success: true,
      data: {
        accessToken,
        refreshToken,
        user: {
          id: user.id,
          email: user.email,
          firstName: user.first_name,
          role: user.role
        }
      }
    });
  } catch (error) {
    next(error);
  }
};

exports.refreshToken = async (req, res, next) => {
  try {
    const { refreshToken } = req.body;

    if (!refreshToken) {
      return res.status(400).json({ error: 'Refresh token required' });
    }

    // Verify refresh token
    const decoded = jwt.verify(refreshToken, process.env.REFRESH_TOKEN_SECRET);

    // Generate new access token
    const accessToken = jwt.sign(
      { id: decoded.id },
      process.env.JWT_SECRET,
      { expiresIn: '1h' }
    );

    res.json({
      success: true,
      data: { accessToken }
    });
  } catch (error) {
    res.status(401).json({ error: 'Invalid refresh token' });
  }
};
```

### 3. Role-Based Access Control

```javascript
// routes/admin.js
const express = require('express');
const router = express.Router();
const { authenticate, authorize } = require('../middleware/auth');
const adminController = require('../controllers/adminController');

// Only admins can access these routes
router.use(authenticate);
router.use(authorize(['admin']));

router.get('/users', adminController.getAllUsers);
router.delete('/users/:id', adminController.deleteUser);
router.post('/courses/approve', adminController.approveCourse);

module.exports = router;
```

---

## Middleware Patterns

### 1. Request Validation Middleware

```javascript
// middleware/validation.js
const { body, validationResult } = require('express-validator');

const validateLogin = [
  body('email').isEmail().withMessage('Invalid email'),
  body('password').isLength({ min: 6 }).withMessage('Password too short'),
  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(422).json({ errors: errors.array() });
    }
    next();
  }
];

const validateCourseCreation = [
  body('title').notEmpty().withMessage('Title required'),
  body('description').notEmpty().withMessage('Description required'),
  body('category').isIn(['programming', 'design', 'business']).withMessage('Invalid category'),
  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(422).json({ errors: errors.array() });
    }
    next();
  }
];

module.exports = { validateLogin, validateCourseCreation };
```

### 2. Logging Middleware

```javascript
// middleware/logger.js
const morgan = require('morgan');
const fs = require('fs');
const path = require('path');

// Create write stream
const accessLogStream = fs.createWriteStream(
  path.join(__dirname, '../logs/access.log'),
  { flags: 'a' }
);

// Morgan middleware
module.exports = morgan('combined', { stream: accessLogStream });
```

### 3. Error Handling Middleware

```javascript
// middleware/errorHandler.js
const errorHandler = (err, req, res, next) => {
  console.error(err);

  // Specific error types
  if (err.name === 'ValidationError') {
    return res.status(422).json({
      success: false,
      error: 'Validation error',
      details: err.details
    });
  }

  if (err.name === 'UnauthorizedError') {
    return res.status(401).json({
      success: false,
      error: 'Unauthorized'
    });
  }

  // Generic error
  res.status(err.status || 500).json({
    success: false,
    error: err.message || 'Internal server error'
  });
};

module.exports = errorHandler;
```

### 4. CORS Middleware

```javascript
// middleware/cors.js
const cors = require('cors');

const corsOptions = {
  origin: process.env.ALLOWED_ORIGINS?.split(',') || 'http://localhost:3000',
  credentials: true,
  optionsSuccessStatus: 200
};

module.exports = cors(corsOptions);
```

---

## Error Handling

### 1. Custom Error Classes

```javascript
// utils/errors.js
class ApiError extends Error {
  constructor(message, status = 500) {
    super(message);
    this.status = status;
    this.name = this.constructor.name;
    Error.captureStackTrace(this, this.constructor);
  }
}

class ValidationError extends ApiError {
  constructor(message) {
    super(message, 422);
  }
}

class AuthenticationError extends ApiError {
  constructor(message = 'Unauthorized') {
    super(message, 401);
  }
}

class AuthorizationError extends ApiError {
  constructor(message = 'Forbidden') {
    super(message, 403);
  }
}

class NotFoundError extends ApiError {
  constructor(resource) {
    super(`${resource} not found`, 404);
  }
}

module.exports = {
  ApiError,
  ValidationError,
  AuthenticationError,
  AuthorizationError,
  NotFoundError
};
```

### 2. Error Handler Middleware

```javascript
// middleware/errorHandler.js
const errorHandler = (err, req, res, next) => {
  // Log error
  console.error({
    timestamp: new Date(),
    method: req.method,
    url: req.url,
    error: err.message,
    stack: err.stack
  });

  // Respond with error
  res.status(err.status || 500).json({
    success: false,
    error: {
      message: err.message,
      status: err.status || 500,
      ...(process.env.NODE_ENV === 'development' && { stack: err.stack })
    }
  });
};

module.exports = errorHandler;
```

### 3. Try-Catch Error Handling

```javascript
// Example in controller
router.get('/courses/:id', async (req, res, next) => {
  try {
    const course = await courseService.getCourseById(req.params.id);
    
    if (!course) {
      throw new NotFoundError('Course');
    }

    res.json({ success: true, data: course });
  } catch (error) {
    next(error); // Pass to error handler
  }
});
```

---

## Interview Questions & Answers

### Q1: Explain the event-driven architecture of Node.js

**Answer:**
```
Node.js is built on event-driven, non-blocking I/O model.

Key concepts:
1. Event Loop: Continuously checks for events
2. Event Emitter: Objects that emit and listen to events
3. Non-blocking: Operations don't wait for I/O completion
4. Callbacks: Functions called when events complete

Example:
const EventEmitter = require('events');
const emitter = new EventEmitter();

emitter.on('userRegistered', (user) => {
  sendWelcomeEmail(user);
  logUserActivity(user);
});

emitter.emit('userRegistered', userData);

Benefits:
- High concurrency
- Efficient resource usage
- Real-time applications
```

### Q2: What is the difference between blocking and non-blocking code?

**Answer:**
```
Blocking Code:
- Waits for operation to complete
- Blocks subsequent code execution
- Synchronous

const data = fs.readFileSync('file.txt'); // Blocks
console.log(data);

Non-blocking Code:
- Doesn't wait for operation
- Continues with next code
- Asynchronous
- Uses callbacks, promises, or async/await

fs.readFile('file.txt', (err, data) => {
  console.log(data);
});
console.log('Reading file...'); // Executes first

Non-blocking is preferred in Node.js for scalability.
```

### Q3: Explain middleware in Express.js

**Answer:**
```
Middleware: Functions that have access to request, response, and next middleware.

Types:
1. Application-level: app.use() or app.METHOD()
2. Router-level: router.use() or router.METHOD()
3. Built-in: express.json(), express.static()
4. Third-party: cors, morgan, helmet
5. Error handling: (err, req, res, next) => {}

Example:
app.use((req, res, next) => {
  console.log('Request received');
  next(); // Pass to next middleware
});

Middleware execution order:
Request → MW1 → MW2 → Route Handler → Response
```

### Q4: How do you handle database transactions in MySQL?

**Answer:**
```
Transactions ensure data consistency.

Example:
BEGIN TRANSACTION;
  UPDATE users SET balance = balance - 100 WHERE id = 1;
  UPDATE users SET balance = balance + 100 WHERE id = 2;
COMMIT; // If all successful

If error occurs:
BEGIN TRANSACTION;
  UPDATE users SET balance = balance - 100 WHERE id = 1;
  -- ERROR occurs
ROLLBACK; // Revert all changes

Node.js Implementation:
const db = require('./config/database');

const transferMoney = async (fromUser, toUser, amount) => {
  const connection = await db.getConnection();
  
  try {
    await connection.beginTransaction();
    
    await connection.query(
      'UPDATE users SET balance = balance - ? WHERE id = ?',
      [amount, fromUser]
    );
    
    await connection.query(
      'UPDATE users SET balance = balance + ? WHERE id = ?',
      [amount, toUser]
    );
    
    await connection.commit();
  } catch (error) {
    await connection.rollback();
    throw error;
  } finally {
    connection.release();
  }
};
```

### Q5: What are the best practices for API versioning?

**Answer:**
```
API Versioning Strategies:

1. URL Path Versioning (Common):
GET /api/v1/courses
GET /api/v2/courses

2. Query Parameter:
GET /api/courses?version=1

3. Header-based:
GET /api/courses
Header: API-Version: 1

4. Subdomain:
GET https://v1.api.example.com/courses

Best Practice Example:
// Separate router instances
const v1Routes = require('./routes/v1');
const v2Routes = require('./routes/v2');

app.use('/api/v1', v1Routes);
app.use('/api/v2', v2Routes);

// Keep backward compatibility
app.use('/api', v2Routes); // Default to latest
```

### Q6: How do you optimize database queries?

**Answer:**
```
Optimization Techniques:

1. Use Indexes:
CREATE INDEX idx_email ON users(email);
CREATE INDEX idx_course_status ON courses(status, created_at);

2. Avoid N+1 Queries:
// Bad: N+1 queries
const courses = await db.query('SELECT * FROM courses');
courses.forEach(course => {
  const enrollments = db.query('SELECT * FROM enrollments WHERE course_id = ?', [course.id]);
});

// Good: Single query with JOIN
SELECT c.*, COUNT(e.id) FROM courses c
LEFT JOIN enrollments e ON c.id = e.course_id
GROUP BY c.id;

3. Pagination:
SELECT * FROM courses LIMIT 10 OFFSET 0;

4. Projection (Select only needed fields):
SELECT id, title FROM courses; // Not SELECT *

5. Query Caching:
const cache = new Map();
const getCourses = () => {
  if (cache.has('courses')) return cache.get('courses');
  const courses = db.query('SELECT * FROM courses');
  cache.set('courses', courses, 5 * 60 * 1000); // 5 min TTL
  return courses;
};
```

### Q7: Explain JWT and how to implement token refresh

**Answer:**
```
JWT (JSON Web Token):
- Three parts: Header.Payload.Signature
- Stateless authentication
- Can't be revoked directly

Token Refresh Strategy:
1. Issue short-lived access token (15 min)
2. Issue long-lived refresh token (7 days)
3. When access token expires, use refresh token to get new access token

Implementation:
// Login
const accessToken = jwt.sign(data, SECRET, { expiresIn: '15m' });
const refreshToken = jwt.sign(data, REFRESH_SECRET, { expiresIn: '7d' });

// Store refreshToken in database
await db.query('INSERT INTO refresh_tokens VALUES (?, ?)', [userId, refreshToken]);

// Refresh endpoint
app.post('/refresh', (req, res) => {
  const { refreshToken } = req.body;
  
  const decoded = jwt.verify(refreshToken, REFRESH_SECRET);
  const newAccessToken = jwt.sign(
    { id: decoded.id },
    SECRET,
    { expiresIn: '15m' }
  );
  
  res.json({ accessToken: newAccessToken });
});

Benefits:
- If access token is stolen, limited damage (15 min)
- If refresh token is stolen, can revoke it from database
- Better security than single long-lived token
```

---

## Coding Challenges

### Challenge 1: Implement Pagination with Search

```javascript
// GET /api/courses?page=1&limit=10&search=react&category=programming

const getCourses = async (req, res, next) => {
  try {
    const { page = 1, limit = 10, search = '', category = '' } = req.query;
    const offset = (page - 1) * limit;

    let query = 'SELECT * FROM courses WHERE 1=1';
    const params = [];

    // Add search condition
    if (search) {
      query += ' AND (title LIKE ? OR description LIKE ?)';
      params.push(`%${search}%`, `%${search}%`);
    }

    // Add category filter
    if (category) {
      query += ' AND category = ?';
      params.push(category);
    }

    // Get total count
    const countQuery = `SELECT COUNT(*) as total FROM (${query.replace('SELECT *', 'SELECT id')}) as t`;
    const countResult = await db.query(countQuery, params);
    const total = countResult[0].total;

    // Get paginated results
    query += ' ORDER BY created_at DESC LIMIT ? OFFSET ?';
    const courses = await db.query(query, [...params, limit, offset]);

    res.json({
      success: true,
      data: courses,
      pagination: {
        page: parseInt(page),
        limit: parseInt(limit),
        total,
        pages: Math.ceil(total / limit)
      }
    });
  } catch (error) {
    next(error);
  }
};
```

### Challenge 2: Implement File Upload with AWS S3

```javascript
// services/fileService.js
const AWS = require('aws-sdk');
const fs = require('fs');
const path = require('path');

const s3 = new AWS.S3({
  accessKeyId: process.env.AWS_ACCESS_KEY,
  secretAccessKey: process.env.AWS_SECRET_KEY
});

const uploadFile = (filePath, bucketKey) => {
  return new Promise((resolve, reject) => {
    const fileStream = fs.createReadStream(filePath);
    const params = {
      Bucket: process.env.AWS_BUCKET,
      Key: bucketKey,
      Body: fileStream
    };

    s3.upload(params, (err, data) => {
      if (err) reject(err);
      else resolve(data.Location);
    });
  });
};

// Controller
const uploadCourseVideo = async (req, res, next) => {
  try {
    const { file } = req;
    if (!file) {
      return res.status(400).json({ error: 'File required' });
    }

    // Validate file type
    const allowedTypes = ['video/mp4', 'video/quicktime'];
    if (!allowedTypes.includes(file.mimetype)) {
      return res.status(400).json({ error: 'Invalid file type' });
    }

    // Upload to S3
    const bucketKey = `courses/${Date.now()}-${file.originalname}`;
    const fileUrl = await uploadFile(file.path, bucketKey);

    // Save URL to database
    await courseService.updateCourseVideo(req.params.courseId, fileUrl);

    res.json({
      success: true,
      data: { videoUrl: fileUrl }
    });
  } catch (error) {
    next(error);
  }
};
```

### Challenge 3: Implement User Enrollment with Transaction

```javascript
// controllers/enrollmentController.js
const enrollCourse = async (req, res, next) => {
  const connection = await db.getConnection();
  
  try {
    const { courseId } = req.params;
    const userId = req.user.id;

    await connection.beginTransaction();

    // Check if already enrolled
    const existingEnrollment = await connection.query(
      'SELECT * FROM enrollments WHERE user_id = ? AND course_id = ?',
      [userId, courseId]
    );

    if (existingEnrollment.length > 0) {
      await connection.rollback();
      return res.status(400).json({ error: 'Already enrolled in this course' });
    }

    // Check course exists
    const course = await connection.query(
      'SELECT * FROM courses WHERE id = ? AND status = "active"',
      [courseId]
    );

    if (course.length === 0) {
      await connection.rollback();
      return res.status(404).json({ error: 'Course not found' });
    }

    // Create enrollment
    await connection.query(
      `INSERT INTO enrollments (user_id, course_id, enrollment_date, status)
       VALUES (?, ?, NOW(), 'active')`,
      [userId, courseId]
    );

    // Update course enrollment count
    await connection.query(
      'UPDATE courses SET enrolled_count = enrolled_count + 1 WHERE id = ?',
      [courseId]
    );

    // Send welcome email
    await emailService.sendEnrollmentConfirm(req.user, course[0]);

    await connection.commit();

    res.status(201).json({
      success: true,
      message: 'Enrolled successfully'
    });
  } catch (error) {
    await connection.rollback();
    next(error);
  } finally {
    connection.release();
  }
};
```

---

## Performance Optimization

### 1. Caching Strategy

```javascript
// Implement Redis caching
const redis = require('redis');
const client = redis.createClient({
  host: process.env.REDIS_HOST,
  port: process.env.REDIS_PORT
});

const getCourses = async (req, res, next) => {
  const cacheKey = 'courses:all';

  // Check cache
  const cached = await client.get(cacheKey);
  if (cached) {
    return res.json(JSON.parse(cached));
  }

  // Query database
  const courses = await db.query('SELECT * FROM courses');

  // Store in cache for 1 hour
  await client.setex(cacheKey, 3600, JSON.stringify(courses));

  res.json(courses);
};
```

### 2. Database Query Optimization

```javascript
// Connection pooling
const pool = mysql.createPool({
  connectionLimit: 20,
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME
});

// Use connection pooling for better performance
pool.query('SELECT * FROM courses', (error, results) => {
  if (error) console.error(error);
  else console.log(results);
});
```

### 3. Response Compression

```javascript
const compression = require('compression');

app.use(compression());

// Compress responses larger than 1KB
app.use(compression({
  threshold: 1024,
  level: 6
}));
```

### 4. Load Testing

```bash
# Using Apache Bench
ab -n 1000 -c 10 http://localhost:3000/api/courses

# Using wrk
wrk -t4 -c100 -d30s http://localhost:3000/api/courses
```

---

## Security Best Practices

### 1. Input Validation & Sanitization

```javascript
const { body, validationResult } = require('express-validator');
const mongoSanitize = require('mongo-sanitize');

// Validate and sanitize
router.post('/courses', [
  body('title').trim().notEmpty().escape(),
  body('description').trim().notEmpty().escape(),
  body('instructor_id').isInt()
], (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(422).json({ errors: errors.array() });
  }
  
  // Process request
});

// Prevent NoSQL injection
app.use(mongoSanitize());
```

### 2. Password Security

```javascript
const bcrypt = require('bcrypt');

// Hashing password
const registerUser = async (email, password) => {
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, salt);
  
  await db.query('INSERT INTO users (email, password_hash) VALUES (?, ?)',
    [email, hashedPassword]
  );
};

// Verifying password
const loginUser = async (email, password) => {
  const user = await db.query('SELECT * FROM users WHERE email = ?', [email]);
  
  const passwordMatch = await bcrypt.compare(password, user[0].password_hash);
  if (!passwordMatch) {
    throw new Error('Invalid credentials');
  }
  
  return user[0];
};
```

### 3. SQL Injection Prevention

```javascript
// Use parameterized queries (prevents SQL injection)
// Good
db.query('SELECT * FROM users WHERE email = ?', [email]);

// Bad - vulnerable to SQL injection
db.query(`SELECT * FROM users WHERE email = '${email}'`);
```

### 4. HTTPS & Security Headers

```javascript
const helmet = require('helmet');

// Add security headers
app.use(helmet());

// Additionally configure specific headers
app.use(helmet.contentSecurityPolicy({
  directives: {
    defaultSrc: ["'self'"],
    scriptSrc: ["'self'", "'unsafe-inline'"],
    styleSrc: ["'self'", "'unsafe-inline'"]
  }
}));
```

### 5. Rate Limiting

```javascript
const rateLimit = require('express-rate-limit');

// Login rate limiter
const loginLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 5, // 5 attempts
  message: 'Too many login attempts, try again later'
});

app.post('/auth/login', loginLimiter, authController.login);

// General API limiter
const apiLimiter = rateLimit({
  windowMs: 1 * 60 * 1000, // 1 minute
  max: 100 // 100 requests per minute
});

app.use('/api/', apiLimiter);
```

---

## Testing

### 1. Unit Testing with Jest

```javascript
// tests/courseService.test.js
const courseService = require('../services/courseService');
const db = require('../config/database');

jest.mock('../config/database');

describe('CourseService', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  test('should get course by id', async () => {
    const mockCourse = { id: 1, title: 'React' };
    db.query.mockResolvedValue([mockCourse]);

    const course = await courseService.getCourseById(1);

    expect(course).toEqual(mockCourse);
    expect(db.query).toHaveBeenCalled();
  });

  test('should create a course', async () => {
    const courseData = { title: 'React', description: 'Learn React' };
    db.query.mockResolvedValue({ insertId: 1 });

    const result = await courseService.createCourse(courseData);

    expect(result.id).toBe(1);
  });
});
```

### 2. Integration Testing with Supertest

```javascript
// tests/auth.test.js
const request = require('supertest');
const app = require('../src/app');
const db = require('../config/database');

describe('Auth Endpoints', () => {
  test('POST /api/auth/login - should login user', async () => {
    const response = await request(app)
      .post('/api/auth/login')
      .send({
        email: 'test@example.com',
        password: 'password123'
      });

    expect(response.status).toBe(200);
    expect(response.body).toHaveProperty('data.accessToken');
  });

  test('POST /api/auth/login - should fail with invalid credentials', async () => {
    const response = await request(app)
      .post('/api/auth/login')
      .send({
        email: 'invalid@example.com',
        password: 'wrong'
      });

    expect(response.status).toBe(401);
    expect(response.body.error).toBeDefined();
  });
});
```

---

## Common Mistakes to Avoid

1. **Not handling errors properly**
   ```javascript
   // Bad
   res.json(courseData); // What if error?
   
   // Good
   try {
     const courses = await courseService.getCourses();
     res.json(courses);
   } catch (error) {
     next(error);
   }
   ```

2. **Using blocking operations**
   ```javascript
   // Bad
   const data = fs.readFileSync('file.txt');
   
   // Good
   const data = await fs.promises.readFile('file.txt');
   ```

3. **Hardcoding sensitive data**
   ```javascript
   // Bad
   const dbPassword = 'mypassword123';
   
   // Good
   const dbPassword = process.env.DB_PASSWORD;
   ```

4. **Not validating user input**
   ```javascript
   // Bad
   app.post('/courses', (req, res) => {
     db.query('INSERT INTO courses VALUES (?)', [req.body.title]);
   });
   
   // Good
   router.post('/courses', [
     body('title').notEmpty().trim()
   ], validate, createCourse);
   ```

5. **N+1 Query Problem**
   ```javascript
   // Bad
   const courses = await db.query('SELECT * FROM courses');
   for (let course of courses) {
     course.enrollments = await db.query('SELECT * FROM enrollments WHERE course_id = ?', [course.id]);
   }
   
   // Good
   const coursesWithEnrollments = await db.query(`
     SELECT c.*, COUNT(e.id) FROM courses c
     LEFT JOIN enrollments e ON c.id = e.course_id
     GROUP BY c.id
   `);
   ```

---

## Environment Variables Setup

```bash
# .env file
NODE_ENV=development
PORT=3000

# Database
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=password
DB_NAME=seed_db

# JWT
JWT_SECRET=your_jwt_secret_key
REFRESH_TOKEN_SECRET=your_refresh_token_secret

# AWS
AWS_ACCESS_KEY_ID=your_access_key
AWS_SECRET_ACCESS_KEY=your_secret_key
AWS_BUCKET=your_bucket_name

# Email
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=your_email@gmail.com
SMTP_PASSWORD=your_password

# Redis (optional)
REDIS_HOST=localhost
REDIS_PORT=6379

# CORS
ALLOWED_ORIGINS=http://localhost:3000,http://localhost:3001
```

---

## Useful Commands

```bash
# Development
npm start                    # Start server
npm run dev                  # Start with nodemon
npm test                     # Run tests
npm run lint                 # Run linter
npm run format               # Format code

# Database
mysql -u root -p < schema.sql              # Import schema
mysql -u root -p < seed.sql                # Seed data
mysqldump -u root -p db_name > backup.sql  # Backup

# Production
NODE_ENV=production npm start               # Start in production
pm2 start app.js --name "seed-api"         # Use PM2
```

---

## Quick Reference

### Common Express Methods
```javascript
app.use()          // Middleware
app.get()          // GET request
app.post()         // POST request
app.put()          // PUT request
app.delete()       // DELETE request
app.patch()        // PATCH request
app.listen()       // Start server
```

### Common JWT Operations
```javascript
jwt.sign()         // Create token
jwt.verify()       // Verify token
jwt.decode()       // Decode token (no verification)
```

### Common DB Operations
```javascript
db.query()         // Execute query
connection.query() // Query with connection
pool.query()       // Query with pool
```

### Common Middleware
```javascript
express.json()           // Parse JSON body
express.urlencoded()     // Parse form body
compression()            // Gzip compression
morgan()                 // HTTP logging
cors()                   // CORS support
helmet()                 // Security headers
```

---

## Resources & References

### Official Documentation
- Node.js: https://nodejs.org/docs/
- Express: https://expressjs.com/
- MySQL: https://dev.mysql.com/doc/
- JWT: https://jwt.io/
- Redis: https://redis.io/

### Learning Resources
- Node.js Best Practices: https://github.com/goldbergyoni/nodebestpractices
- Express Security: https://expressjs.com/en/advanced/best-practice-security.html
- Database Design: https://use-the-index-luke.com/

### Tools
- Postman for API testing
- MySQL Workbench
- DBeaver for database management
- Insomnia for REST client
- Thunder Client (VS Code extension)

---

## Interview Preparation Tips

1. **Understand Fundamentals:** Master Node.js event loop, middleware, and async patterns
2. **Know SQL:** Be comfortable with joins, indexes, transactions, and query optimization
3. **Practice Coding:** Solve algorithmic problems with Node.js/Express
4. **Know Security:** Understand JWT, SQL injection, XSS, CSRF prevention
5. **Learn Best Practices:** Follow MVC pattern, error handling, logging
6. **Debug Skills:** Know how to use debugger, logging, and profiling tools
7. **Database Design:** Understand normalization, relationships, and indexing
8. **API Design:** Know RESTful principles and HTTP status codes
9. **Testing:** Be familiar with unit and integration testing
10. **Performance:** Understand caching, pagination, connection pooling

---

Last Updated: January 2026
Created for SEED Projects Backend Interview Preparation
