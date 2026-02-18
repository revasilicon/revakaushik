# Hungary eLearning Portal - Project Description

## Project Overview
**Project Name:** Hungary eLearning Portal  
**Version:** 1.0.0  
**Organization:** Excellence Solution Limited  
**Developer:** EntSol360  
**License:** MIT  
**Database:** MySQL  
**Technology Stack:** Node.js, Express.js  

---

## Executive Summary
The Hungary eLearning Portal is a comprehensive web-based learning management system (LMS) specifically designed for educational institutions in Hungary. It delivers online educational content, manages learner progress, conducts assessments, and facilitates interactive learning through multimedia formats. The platform integrates advanced cloud services for speech recognition, text-to-speech, and AI-powered features to enhance accessibility and personalized learning experiences.

---

## Core Features & Modules

### 1. **Authentication & Authorization**
- User authentication and registration
- JWT-based token verification
- Role-based access control (RBAC)
- Multi-user session management
- Secure login mechanisms

### 2. **Learning Management**
- **Courses & Content Delivery:** Manage and deliver course materials
- **Learner Management:** Track learner progress and enrollment
- **Quiz Module:** Create and conduct assessments with automated grading
- **ePortfolio:** Digital portfolio system for learner artifacts

### 3. **Video & Media Management**
- Public video hosting and streaming
- Video transcription using Google Cloud Speech-to-Text
- Video analytics and viewership tracking
- Multimedia content integration
- Video player controls

### 4. **Communication Features**
- Real-time notifications via Socket.io
- Email notifications using Nodemailer
- In-app messaging system
- Broadcast announcements
- SMS notifications (optional)

### 5. **Content Creation & Documentation**
- Document template support (.docx)
- PDF generation from HTML content
- Document conversion tools
- Template-based document creation
- Multi-format export

### 6. **AI Integration**
- Google Generative AI integration
- Text-to-speech for accessibility
- AI-powered content recommendations
- Intelligent tutoring suggestions

### 7. **File Management**
- AWS S3 integration for file storage
- File upload and download functionality
- Secure file handling
- Large file support
- File version management

### 8. **Administrative Functions**
- System administration dashboard
- User management and provisioning
- Analytics and reporting
- Scheduled tasks via cron jobs
- Content moderation

---

## Technology Stack

### Backend
- **Runtime:** Node.js
- **Framework:** Express.js ^4.17.2
- **Authentication:** JSON Web Tokens (JWT) ^8.5.1
- **Session Management:** express-session ^1.17.2

### Database
- **Primary:** MySQL ^2.18.1
- **ORM/Query Builder:** Custom database models

### Cloud Services
- **Storage:** AWS SDK for S3 ^3.600.0
- **Text-to-Speech:** Google Cloud Text-to-Speech ^6.1.0
- **Speech Recognition:** Google Cloud Speech ^7.1.0
- **AI/ML:** Google Generative AI ^0.24.0
- **Authentication:** Firebase Admin (optional)

### File Processing
- **PDF Generation:** html-pdf-node ^1.0.8
- **Document Templates:** docx-templates ^4.11.3
- **Headless Browser:** Puppeteer ^22.12.1
- **Compression:** Archiver (for ZIP files)

### Frontend & View Rendering
- **Template Engine:** Swig Templates ^2.0.3
- **Static File Server:** Express.static (built-in)
- **Media Player:** Custom video player implementation

### Real-time Communication
- **WebSocket:** Socket.io ^4.8.1
- **HTTP Requests:** Request library ^2.88.2

### Email & Notifications
- **Email:** Nodemailer ^6.7.2
- **Scheduling:** node-cron (for scheduled tasks)

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
- **Development Tools:** Nodemon

---

## Project Structure

```
hungaryelearning/
├── bin/
│   └── elearning               # Application entry point
├── src/
│   ├── app.js                  # Express app configuration
│   ├── config/                 # Configuration files
│   ├── lib/                    # Database models & utilities
│   ├── public/                 # Static assets
│   │   ├── css/               # Stylesheets
│   │   ├── js/                # Client-side JavaScript
│   │   ├── img/               # Images
│   │   ├── fonts/             # Font files
│   │   ├── eportfolio/        # ePortfolio static files
│   │   ├── learner/           # Learner portal assets
│   │   ├── publicvideo/       # Public video player
│   │   ├── quiz/              # Quiz module assets
│   │   └── admin/             # Admin dashboard
│   ├── routes/                # API endpoints & route handlers
│   │   ├── verifyToken.js    # JWT verification middleware
│   │   ├── admin/            # Admin routes
│   │   ├── auth/             # Authentication routes
│   │   ├── learner/          # Learner portal routes
│   │   ├── quiz_module/      # Quiz management routes
│   │   ├── eportfolio/       # ePortfolio routes
│   │   ├── publicvideo/      # Public video routes
│   │   ├── web/              # Web/frontend routes
│   │   └── helpers/          # Route helpers
│   ├── views/                # Server-side templates (Swig)
│   └── temp/                 # Temporary files for processing
├── language/                 # i18n language files
│   ├── en.json              # English translations
│   └── hu.json              # Hungarian translations
├── package.json
├── README.md
└── PROJECT_DESCRIPTION.md
```

---

## Detailed Module Descriptions

### 1. Authentication Module (`routes/auth/`)
- User registration for students and instructors
- Secure login system
- Password reset functionality
- Email verification
- Token management

### 2. Learner Portal Module (`routes/learner/`)
- Learner dashboard
- Enrolled courses display
- Progress tracking
- Assignment submission
- Learner profile management
- Grade tracking

### 3. Quiz Module (`routes/quiz_module/`)
- Quiz creation and management
- Question bank management
- Multiple question types (multiple choice, essay, etc.)
- Automated grading
- Quiz scheduling
- Results analytics
- Leaderboard functionality

### 4. ePortfolio Module (`routes/eportfolio/`)
- Portfolio creation and management
- Artifact upload and organization
- Milestone tracking
- Achievement badges
- Portfolio sharing
- Peer review system
- View and comment on portfolios

### 5. Public Video Module (`routes/publicvideo/`)
- Video upload and management
- Video streaming
- Video transcription (automatic via Google Speech)
- Subtitle generation
- Playlist management
- Video analytics (views, completion)
- Public access controls
- Video recommendations

### 6. Admin Module (`routes/admin/`)
- Dashboard with system statistics
- User management (add, edit, deactivate)
- Course management
- Content moderation
- System reports
- Analytics dashboard
- Settings management

### 7. Web/Frontend Module (`routes/web/`)
- Landing page
- Public course catalog
- About page
- Help and support
- Public announcements
- Course preview
- Registration page

### 8. Helper Functions (`routes/helpers/`)
- Email sending utilities
- File processing helpers
- Validation functions
- Date/time utilities
- Document generation helpers

---

## Key Features in Detail

### Learning & Course Management
- **Multi-language Support:** English and Hungarian interfaces
- **Course Structure:** Organize content into structured courses with modules
- **Learner Tracking:** Real-time progress monitoring and completion rates
- **Certificate Generation:** Automated certificate creation upon completion
- **Course Prerequisites:** Set course dependencies and pathways

### Assessment & Testing
- **Quiz Creation:** Build quizzes with multiple question types
- **Automated Grading:** Instant feedback on multiple choice questions
- **Results Analytics:** Detailed performance reports and insights
- **Question Bank:** Reusable question repository
- **Attempt Tracking:** Monitor student attempts and time spent
- **Remedial Paths:** Personalized learning recommendations

### ePortfolio System
- **Artifact Storage:** Learners upload and showcase work
- **Milestone Tracking:** Track learning achievements and milestones
- **Evidence Collection:** Gather evidence of learning outcomes
- **Reflection Tools:** Written reflection on learning
- **Sharing Controls:** Control portfolio visibility and access

### Media Management
- **Video Transcription:** Auto-generate transcripts using Google Speech
- **Accessibility:** Text-to-speech for content accessibility
- **Streaming:** Support for adaptive video streaming
- **CDN Integration:** AWS S3 for media storage and delivery
- **Video Analytics:** Track engagement and completion rates
- **Subtitle Support:** Auto-generated and manual subtitles

### Communication
- **Announcements:** Real-time broadcast notifications
- **Email Notifications:** Automated email alerts for updates
- **In-app Messaging:** Built-in messaging system via Socket.io
- **Notifications:** Push notifications for important events
- **Discussion Forum:** Community discussion spaces

### AI & Personalization
- **Content Recommendations:** AI-powered course recommendations
- **Learning Paths:** Personalized learning journey suggestions
- **Smart Tutoring:** AI-powered hints and explanations
- **Adaptive Learning:** Content difficulty adjustment based on performance

---

## Database Configuration

The project uses MySQL as the primary database. Configuration can be set in:
- `src/config/index.js` - General configuration
- Supports multiple database configurations if needed

---

## Environment Setup

### Prerequisites
1. Node.js (latest LTS version recommended)
2. MySQL Server
3. Git
4. AWS Account (for S3 storage)
5. Google Cloud Account (for Speech/Text-to-Speech APIs)

### Installation Steps
```bash
# Clone repository
git clone <repository-url>

# Install dependencies
npm install

# Configure environment variables
# Create .env file with:
# - DATABASE_HOST
# - DATABASE_USER
# - DATABASE_PASSWORD
# - DATABASE_NAME
# - JWT_SECRET
# - AWS_ACCESS_KEY_ID
# - AWS_SECRET_ACCESS_KEY
# - GOOGLE_API_KEY
# - NODE_ENV=development

# Initialize database
# Run database setup scripts

# Start application
npm start

# Alternative: Use nodemon for development
nodemon ./bin/elearning
```

---

## API Modules

### Authentication API (`routes/auth/`)
- User registration and login
- Password reset functionality
- Token verification and refresh
- Session management

### Learner API (`routes/learner/`)
- Learner profile management
- Course enrollment
- Progress tracking
- Assignment submission
- Grade retrieval

### Quiz API (`routes/quiz_module/`)
- Quiz creation and management
- Question management
- Quiz submission and grading
- Results reporting
- Attempt history

### ePortfolio API (`routes/eportfolio/`)
- Portfolio CRUD operations
- Artifact management
- Milestone tracking
- Portfolio sharing
- View and feedback

### Public Video API (`routes/publicvideo/`)
- Video upload and management
- Video streaming
- Video transcription
- Subtitle management
- Video analytics

### Admin API (`routes/admin/`)
- System administration
- User management
- Content moderation
- Analytics dashboard
- System configuration

### Web API (`routes/web/`)
- Landing page content
- Course catalog
- Public information
- Help content
- Registration

---

## Security Features

1. **JWT Authentication:** Secure token-based authentication
2. **Session Management:** Secure session handling with HttpOnly cookies
3. **Input Validation:** Express-validator for input sanitization
4. **Basic Auth:** Support for HTTP basic authentication
5. **CORS Support:** Cross-origin resource sharing configuration
6. **File Upload Security:** Secure file upload handling with validation
7. **Password Hashing:** Secure password storage with MD5 (consider bcrypt for enhancement)
8. **Database Security:** Secure database connections

---

## Performance Optimizations

1. **Compression:** gzip compression for responses
2. **Caching:** Session caching and browser caching
3. **Connection Pooling:** MySQL connection pooling
4. **Lazy Loading:** Content loaded on demand
5. **File Optimization:** Image compression and optimization
6. **Large File Support:** Support for files up to 2.5GB

---

## Third-Party Integrations

- **Google Cloud Platform:** Speech recognition, Text-to-speech
- **AWS S3:** Cloud file storage and CDN
- **Nodemailer:** SMTP-based email sending
- **Google Generative AI:** AI-powered recommendations
- **Socket.io:** Real-time communication

---

## Maintenance & Monitoring

### Cron Jobs
- Scheduled email digests
- Daily analytics aggregation
- Session cleanup
- Temporary file cleanup
- Certificate generation

### Logging
- Morgan HTTP request logging
- Error logging via debug module
- User activity logging
- Application event logging

### Temporary File Management
- Automatic cleanup of temp files
- Configurable temp directory: `src/temp/`
- File size limits enforcement

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

## Known Features

1. **Multi-language Support:** English and Hungarian interfaces
2. **Video Transcription:** Automatic transcription using Google Cloud
3. **Document Generation:** PDF export of certificates and reports
4. **Real-time Chat:** Socket.io based messaging
5. **Mobile Responsive:** Responsive design across devices
6. **Email Integration:** Automated email notifications
7. **Analytics:** Course and learner analytics

---

## Future Enhancement Opportunities

1. **Microservices Architecture:** Break down into scalable services
2. **GraphQL API:** Implement GraphQL for flexible queries
3. **Mobile Apps:** Native iOS and Android applications
4. **Advanced Analytics:** Business intelligence dashboards
5. **Personalized Learning:** AI-powered adaptive learning paths
6. **LTI Integration:** Support for Learning Tools Interoperability
7. **Blockchain Certificates:** Verifiable digital credentials
8. **Gamification:** Points, badges, and leaderboards
9. **Virtual Classroom:** Live video conferencing
10. **Advanced Accessibility:** Enhanced WCAG 2.1 AA compliance

---

## Compliance & Standards

- **Accessibility:** WCAG 2.1 AA compliance (in progress)
- **Data Privacy:** GDPR-ready (adjustments may be needed)
- **Security:** OWASP Top 10 compliance
- **Education Standards:** Compliant with educational best practices

---

## Support & Maintenance

**Developer:** EntSol360  
**Last Updated:** January 2026  
**License:** MIT

For detailed technical documentation, refer to README.md and inline code comments.

---

## Contact & Support

For technical support or inquiries:
- Email: [Support Email]
- Documentation: See inline code comments and README files
- Community: Forum support and community engagement

---

## Version History

- **v1.0.0** (Current): Initial release with comprehensive LMS features
- Future versions will include enhanced analytics and mobile apps

See git commit history for detailed changelog.
