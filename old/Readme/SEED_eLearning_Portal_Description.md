# SEED eLearning Portal - Project Description

## Project Overview
**Project Name:** SEED eLearning Portal  
**Version:** 1.0.0  
**Organization:** EDUKKOR  
**Developer:** EntSol360  
**License:** MIT  
**Database:** MySQL  
**Technology Stack:** Node.js, Express.js  

---

## Executive Summary
The SEED eLearning portal is a comprehensive web-based learning management system (LMS) designed to deliver online educational content, manage learner progress, conduct assessments, and facilitate learning through various multimedia formats including video, quizzes, and interactive modules. The platform supports multi-language capabilities (English and Hungarian) and integrates with cloud services for enhanced functionality.

---

## Core Features & Modules

### 1. **Authentication & Authorization**
- User authentication and registration
- JWT-based token verification
- Role-based access control (RBAC)
- Multi-user session management

### 2. **Learning Management**
- **Courses & Content Delivery:** Manage and deliver course materials
- **Learner Management:** Track learner progress and enrollment
- **Quiz Module:** Create and conduct assessments with automated grading
- **ePortfolio:** Digital portfolio system for learner artifacts and achievements

### 3. **Video & Media Management**
- Public video hosting and streaming
- Video transcription using Google Cloud Speech-to-Text
- Support for multimedia content integration

### 4. **Communication Features**
- Real-time notifications via Socket.io
- Email notifications using Nodemailer
- SMS notifications capability

### 5. **Content Creation & Documentation**
- Document template support (.docx)
- PDF generation from HTML content
- Markdown support for content creation
- LibreOffice document conversion

### 6. **AI Integration**
- Google Generative AI integration for intelligent content recommendations
- Text-to-speech conversion for accessibility

### 7. **File Management**
- AWS S3 integration for file storage
- File upload and download functionality
- Temporary file management for processing

### 8. **Administrative Functions**
- System administration dashboard
- User management
- Analytics and reporting
- Scheduled tasks via cron jobs

---

## Technology Stack

### Backend
- **Runtime:** Node.js
- **Framework:** Express.js ^4.17.2
- **Authentication:** JSON Web Tokens (JWT) ^9.0.1
- **Session Management:** express-session ^1.17.2

### Database
- **Primary:** MySQL ^2.18.1
- **ORM/Query Builder:** Custom database models

### Cloud Services
- **Storage:** AWS SDK for S3 ^3.481.0
- **Text-to-Speech:** Google Cloud Text-to-Speech ^6.0.1
- **Speech Recognition:** Google Cloud Speech ^7.0.1
- **AI/ML:** Google Generative AI ^0.24.0
- **Authentication:** Firebase Admin ^12.0.0

### File Processing
- **PDF Generation:** html-pdf-node ^1.0.7
- **Document Templates:** docx-templates ^4.11.3
- **Office Conversion:** libreoffice-convert ^1.5.0
- **Compression:** Archiver (for ZIP files)
- **Temporary Files:** tmp ^0.2.3

### Frontend & View Rendering
- **Template Engine:** Swig Templates ^2.0.3
- **Static File Server:** Express.static (built-in)
- **Media Player:** Custom video player implementation

### Real-time Communication
- **WebSocket:** Socket.io ^4.8.1
- **HTTP Requests:** Request library ^2.88.2

### Email & Notifications
- **Email:** Nodemailer ^6.7.2
- **Scheduling:** node-cron ^3.0.0

### Utilities
- **Date/Time:** Moment.js ^2.29.1
- **Hashing:** MD5 ^2.3.0
- **HTTP Override:** method-override ^3.0.0
- **Body Parsing:** body-parser ^1.19.1
- **Compression:** compression ^1.7.4
- **Logging:** Morgan ^1.10.0
- **Cookie Parsing:** cookie-parser ^1.4.6
- **Environment Variables:** dotenv ^14.2.0
- **Input Validation:** express-validator ^6.14.0
- **Basic Auth:** express-basic-auth ^1.2.1
- **Debugging:** debug ^4.3.3

---

## Project Structure

```
hu_seed_elearning_w/
├── bin/
│   └── seed_elearning          # Application entry point (executable)
├── src/
│   ├── app.js                  # Express app configuration
│   ├── config/                 # Configuration files
│   │   ├── config_base.js     # Base configuration
│   │   ├── HU_index.js        # Hungary-specific config
│   │   ├── UK_index.js        # UK-specific config
│   │   ├── hu_firebase_serviceAccountKey.json
│   │   └── uk_firebase_serviceAccountKey.json
│   ├── lib/
│   │   └── db.js              # Database connection & models
│   ├── public/                # Static assets
│   │   ├── css/              # Stylesheets
│   │   ├── js/               # Client-side JavaScript
│   │   ├── img/              # Images
│   │   ├── fonts/            # Font files
│   │   ├── eportfolio/       # ePortfolio static files
│   │   ├── learner/          # Learner portal assets
│   │   ├── publicvideo/      # Public video player
│   │   ├── quiz/             # Quiz module assets
│   │   └── landingpage/      # Landing page assets
│   ├── routes/               # API endpoints & route handlers
│   │   ├── verifyToken.js   # JWT verification middleware
│   │   ├── admin/           # Admin routes
│   │   ├── auth/            # Authentication routes
│   │   ├── learner/         # Learner portal routes
│   │   ├── quiz_module/     # Quiz management routes
│   │   ├── eportfolio/      # ePortfolio routes
│   │   ├── publicvideo/     # Public video routes
│   │   ├── web/             # Web/frontend routes
│   │   └── helpers/         # Route helpers
│   ├── views/               # Server-side templates (Swig)
│   ├── temp/                # Temporary files for processing
│   └── dbchanges.sql        # Database schema/migration
├── python_script/           # Python scripts (e.g., Whisper transcription)
├── language/                # i18n language files
│   ├── en.json             # English translations
│   └── hu.json             # Hungarian translations
├── QuizResult/              # Quiz results storage
├── stt/                     # Speech-to-text module
├── package.json
├── README.md
└── PROJECT_DESCRIPTION.md
```

---

## Key Features in Detail

### Learning & Course Management
- **Multi-language Support:** English and Hungarian interfaces
- **Course Structure:** Organize content into structured courses
- **Learner Tracking:** Monitor learner progress and completion rates
- **Certificate Generation:** Automated certificate creation upon completion

### Assessment & Testing
- **Quiz Creation:** Build quizzes with multiple question types
- **Automated Grading:** Instant feedback on assessments
- **Results Analytics:** Detailed performance reports
- **Question Bank:** Reusable question repository

### ePortfolio System
- **Artifact Storage:** Learners can upload and showcase work
- **Milestone Tracking:** Track learning achievements
- **Evidence Collection:** Collect evidence of learning outcomes

### Media Management
- **Video Transcription:** Auto-generate transcripts using Whisper/Google Speech
- **Accessibility:** Text-to-speech for content
- **Streaming:** Support for video streaming
- **CDN Integration:** AWS S3 for media storage and delivery

### Communication
- **Announcements:** Real-time notifications
- **Email Notifications:** Automated email alerts
- **In-app Messaging:** Built-in messaging system via Socket.io
- **SMS Support:** Optional SMS notifications

---

## Database Configuration

The project uses MySQL as the primary database. Configuration can be set in:
- `src/config/index.js` - General configuration
- `src/config/HU_index.js` - Hungary-specific settings
- `src/config/UK_index.js` - UK-specific settings

Database initialization script: `src/dbchanges.sql`

---

## Environment Setup

### Prerequisites
1. Node.js (latest LTS version recommended)
2. MySQL Server
3. Git
4. AWS Account (for S3 storage)
5. Google Cloud Account (for Speech/Text-to-Speech APIs)
6. Firebase Project Setup

### Installation Steps
```bash
# Clone repository
git clone <repository-url>

# Install dependencies
npm install

# Configure environment variables
# Create .env file with necessary credentials

# Start application
npm start

# Alternative: Use nodemon for development
nodemon ./bin/seed_elearning
```

---

## API Modules

### Authentication Module (`routes/auth/`)
- User registration and login
- Password reset functionality
- Token verification

### Learner Module (`routes/learner/`)
- Learner profile management
- Course enrollment
- Progress tracking
- Learner dashboard

### Quiz Module (`routes/quiz_module/`)
- Quiz creation and management
- Question management
- Quiz submission and grading
- Results reporting

### ePortfolio Module (`routes/eportfolio/`)
- Portfolio creation
- Artifact management
- View and share portfolio

### Public Video Module (`routes/publicvideo/`)
- Video upload and management
- Video streaming
- Public access control

### Admin Module (`routes/admin/`)
- System administration
- User management
- Content moderation
- Analytics dashboard

### Web Module (`routes/web/`)
- Frontend page rendering
- Landing page
- Public content delivery

---

## Security Features

1. **JWT Authentication:** Secure token-based authentication
2. **Session Management:** Secure session handling
3. **Input Validation:** Express-validator for input sanitization
4. **Basic Auth:** Support for HTTP basic authentication
5. **CORS Support:** Cross-origin resource sharing configuration
6. **File Upload Security:** Secure file upload handling with validation
7. **Firebase Security:** Firebase Admin SDK for secure operations

---

## Performance Optimizations

1. **Compression:** gzip compression for responses
2. **Session Caching:** Optimized session management
3. **Connection Pooling:** MySQL connection pooling
4. **Temporary File Cleanup:** Automatic cleanup of temporary files
5. **Large File Support:** Support for files up to 2.5GB

---

## Third-Party Integrations

- **Google Cloud Platform:** Speech recognition, Text-to-speech
- **AWS S3:** Cloud file storage
- **Firebase:** Authentication and real-time database capabilities
- **Google Generative AI:** AI-powered recommendations
- **Brevo/SendGrid:** Email delivery (if configured)
- **Nodemailer:** SMTP-based email sending

---

## Maintenance & Monitoring

### Cron Jobs
- Scheduled tasks for maintenance
- Automatic backups (if configured)
- Cleanup of expired sessions

### Logging
- Morgan HTTP request logging
- Error logging via debug module
- Application event logging

### Temporary File Management
- Automatic cleanup of temp files
- Configurable temp directory: `src/temp/`

---

## Development Workflow

### Running in Development
```bash
npm start
```
Uses nodemon for automatic restart on file changes.

### Code Structure Best Practices
- Controllers in routes/
- Data models in lib/
- Views in views/
- Static assets in public/
- Utility helpers in routes/helpers/

---

## Known Modules & Features

1. **Whisper Transcription:** Python-based speech transcription
2. **Document Generation:** Create and convert documents
3. **PDF Export:** Export content to PDF
4. **Real-time Chat:** Socket.io based messaging
5. **Multi-tenant Support:** Multi-language and multi-region support

---

## Future Enhancement Opportunities

1. Microservices architecture migration
2. GraphQL API implementation
3. Mobile app development
4. Advanced analytics dashboard
5. AI-powered personalized learning paths
6. Integration with LTI standards
7. Blockchain-based certificate verification
8. Enhanced accessibility features

---

## Support & Maintenance

**Developer:** EntSol360  
**Last Updated:** January 2026  
**License:** MIT

For detailed technical documentation, refer to README.md and inline code comments.
