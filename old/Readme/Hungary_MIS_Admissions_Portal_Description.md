# Hungary MIS Admissions Portal - Project Description

## Project Overview
**Project Name:** Hungary MIS Admissions Portal  
**Version:** 1.0  
**Organization:** Excellence Solution Limited  
**Developer:** EntSol360  
**License:** MIT  
**Database:** MySQL  
**Technology Stack:** Node.js, Express.js  

---

## Executive Summary
The Hungary MIS Admissions Portal is a specialized web application designed to streamline the student admissions process for educational institutions in Hungary. It provides comprehensive functionality for application management, document processing, PDF generation, and institutional admission workflows. The platform supports secure file uploads, automated document generation from templates, and comprehensive user authentication.

---

## Core Features & Modules

### 1. **Authentication & Authorization**
- User authentication and registration
- JWT-based token verification
- Role-based access control (RBAC)
- Session management
- Secure user login

### 2. **Application Management**
- Student application submission
- Application status tracking
- Application review workflow
- Multi-stage approval process
- Application history tracking

### 3. **Document Management**
- Automated document generation from templates
- PDF conversion and generation
- Document template management
- Multi-format document support
- Document versioning

### 4. **File Management**
- Secure file upload handling
- Document scanning and upload
- File validation and verification
- AWS S3 integration for storage
- File download and retrieval

### 5. **Communication Features**
- Email notifications
- Application status alerts
- Applicant notifications
- Admin notifications
- Email template management

### 6. **Administrative Functions**
- Admin dashboard
- Application queue management
- Applicant management
- Document review tools
- Analytics and reporting

### 7. **User Management**
- Applicant profiles
- Staff user accounts
- Admin accounts
- Permission management
- User activity tracking

### 8. **Form Management**
- Dynamic form creation
- Form field validation
- Conditional logic in forms
- Form submission handling
- Data collection

---

## Technology Stack

### Backend
- **Runtime:** Node.js
- **Framework:** Express.js ^4.17.1
- **Authentication:** JSON Web Tokens (JWT) ^8.5.1
- **Session Management:** express-session ^1.17.1

### Database
- **Primary:** MySQL ^2.18.1
- **ORM/Query Builder:** Custom database models

### File Processing
- **PDF Generation:** html-pdf-node ^1.0.7
- **Document Templates:** docx-templates ^4.11.3, docxtemplater ^3.40.1
- **PDF Library:** pdf-lib
- **Document Templating:** pizzip ^3.1.4
- **Compression:** Archiver (for ZIP files)
- **Temporary Files:** tmp ^0.2.5

### Cloud Services
- **Storage:** AWS SDK for S3 ^3.600.0
- **Headless Browser:** Puppeteer ^22.12.0
- **Chrome:** Chromium ^3.0.2 (for PDF rendering)

### Frontend & View Rendering
- **Template Engine:** Swig Templates ^2.0.3
- **Static File Server:** Express.static (built-in)
- **Express Flash:** express-flash ^0.0.2 (for flash messages)

### Email & Notifications
- **Email:** Nodemailer ^6.6.1
- **Process Manager:** pm2 ^5.2.0

### Utilities
- **Date/Time:** Moment.js ^2.29.1
- **Hashing:** MD5 ^2.3.0
- **HTTP Override:** method-override ^3.0.0
- **Body Parsing:** body-parser ^1.19.0
- **Compression:** compression ^1.7.4
- **Logging:** Morgan ^1.10.0
- **Cookie Parsing:** cookie-parser ^1.4.5
- **Input Validation:** express-validator ^6.10.0
- **Basic Auth:** express-basic-auth ^1.2.0
- **Debugging:** debug ^2.6.9
- **Development Tools:** Nodemon ^2.0.7

---

## Project Structure

```
hungaryadm/
├── bin/
│   └── adm_server              # Application entry point
├── src/
│   ├── app.js                  # Express app configuration
│   ├── config/                 # Configuration files
│   ├── lib/                    # Database models & utilities
│   ├── public/                 # Static assets
│   │   ├── css/
│   │   ├── js/
│   │   ├── img/
│   │   └── fonts/
│   ├── routes/                 # API endpoints & route handlers
│   │   ├── verifyToken.js     # JWT verification middleware
│   │   ├── auth/              # Authentication routes
│   │   ├── user/              # User management
│   │   ├── quiz_module/       # Quiz/Assessment routes
│   │   ├── mycourses/         # Course management
│   │   ├── helpercontroller/  # Helper controllers
│   │   ├── frontend/          # Frontend routes
│   │   └── helpers/           # Route helpers
│   ├── views/                 # Server-side templates (Swig)
│   └── upload/                # User uploads directory
├── language/                  # i18n language files
│   ├── en.json               # English translations
│   └── hu.json               # Hungarian translations
├── package.json
├── README.md
└── PROJECT_DESCRIPTION.md
```

---

## Detailed Module Descriptions

### 1. Authentication Module (`routes/auth/`)
- User registration for applicants
- Staff login
- Admin login
- Password management
- Token verification and refresh

### 2. User Management Module (`routes/user/`)
- Applicant profile creation
- Profile updates
- Personal information management
- Contact details
- Educational background

### 3. Application Management
- Application form submission
- Application status tracking
- Application queue management
- Multi-level approval workflow
- Application rejection/acceptance

### 4. Document Management
- Generate admission letters from templates
- Create confirmation documents
- Generate receipts
- Create ID documents
- Generate certificates
- Convert documents to PDF

### 5. Quiz/Assessment Module (`routes/quiz_module/`)
- Entrance exam management
- Assessment creation
- Test administration
- Result tracking
- Score calculation

### 6. Course Management (`routes/mycourses/`)
- Program/course listing
- Course enrollment
- Program prerequisites
- Course selection
- Program requirements

### 7. Frontend Module (`routes/frontend/`)
- Public portal for applicants
- Application portal
- Status tracking interface
- Document download
- Help and FAQs

### 8. Helper Controller Module (`routes/helpercontroller/`)
- Utility functions
- Common operations
- Data validation helpers
- Business logic helpers

---

## Key Features

### Document Generation
- **PDF Generation:** Convert HTML to PDF for admission documents
- **Template Support:** Use predefined templates for letters and documents
- **Batch Processing:** Generate multiple documents
- **Customization:** Customize document content and branding

### File Management
- **Upload Handling:** Secure file uploads from applicants
- **AWS S3 Storage:** Cloud-based file storage
- **File Validation:** Validate file types and sizes
- **Automatic Cleanup:** Remove temporary files

### Security
- **JWT Authentication:** Secure token-based access
- **Password Protection:** Hashed passwords
- **Session Management:** Secure session handling
- **Access Control:** Role-based permissions
- **Input Validation:** Server-side input validation

### User Experience
- **Responsive Design:** Mobile-friendly interface
- **Flash Messages:** Real-time user feedback
- **Error Handling:** User-friendly error messages
- **Progress Tracking:** Application status display
- **Multi-language:** English and Hungarian support

---

## Database Configuration

The project uses MySQL as the primary database. Configuration can be set in:
- `src/config/index.js` - Main database configuration

---

## Environment Setup

### Prerequisites
1. Node.js (latest LTS version)
2. MySQL Server
3. Git
4. AWS Account (for S3 storage)

### Installation Steps
```bash
# Clone repository
git clone <repository-url>

# Install dependencies
npm install

# Configure environment variables
# Create .env file with:
# - DATABASE_URL
# - JWT_SECRET
# - AWS_ACCESS_KEY_ID
# - AWS_SECRET_ACCESS_KEY
# - ADMIN_EMAIL

# Initialize database
# Create necessary tables

# Start application
npm start

# Alternative: Use nodemon for development
nodemon ./bin/adm_server

# Alternative: Use PM2 for production
pm2 start ./bin/adm_server --name admissions
```

---

## API Endpoints

### Authentication API (`routes/auth/`)
- `POST /auth/register` - Register new applicant
- `POST /auth/login` - User login
- `POST /auth/logout` - User logout
- `POST /auth/password-reset` - Password reset

### User API (`routes/user/`)
- `GET /user/profile` - Get user profile
- `PUT /user/profile` - Update profile
- `GET /user/application-status` - Check application status
- `POST /user/upload-documents` - Upload documents

### Application API
- `POST /application/submit` - Submit application
- `GET /application/:id` - Get application details
- `PUT /application/:id/update` - Update application
- `GET /application/:id/status` - Get application status

### Document API
- `GET /document/:id/download` - Download document
- `POST /document/generate` - Generate document
- `GET /document/list` - List applicant documents

---

## Admin Dashboard Features

- Application queue
- Applicant list
- Application review interface
- Document generation tools
- Email notifications
- System settings
- User management
- Reporting and analytics

---

## Performance Optimizations

1. **Response Compression:** gzip compression enabled
2. **Session Caching:** Optimized session management
3. **File Storage:** AWS S3 for reliable storage
4. **Connection Pooling:** Efficient database connections
5. **Temporary File Cleanup:** Automatic cleanup

---

## Third-Party Integrations

- **AWS S3:** Cloud file storage and delivery
- **Nodemailer:** Email notifications
- **Puppeteer:** Browser automation for PDF generation
- **Chromium:** PDF rendering engine

---

## Security Features

1. **JWT Authentication:** Secure token-based authentication
2. **Password Hashing:** MD5 hashing with salt
3. **Input Validation:** Express-validator for sanitization
4. **File Upload Security:** Secure file handling with validation
5. **Session Security:** Secure session management
6. **CORS Support:** Cross-origin resource sharing

---

## Maintenance & Monitoring

### Email Notifications
- Application confirmation emails
- Status update emails
- Admin notifications
- Document ready notifications

### Logging
- Morgan HTTP request logging
- Error logging
- User activity logs
- Application event logs

### File Management
- Temporary file cleanup in `src/temp/`
- Old file archival
- Storage quota management

---

## Development Workflow

### Running in Development
```bash
npm start
```
Uses nodemon for automatic restart on file changes.

### Running in Production
```bash
NODE_ENV=production pm2 start ./bin/adm_server --name admissions
```

### Code Structure Best Practices
- Controllers in routes/
- Data models in lib/
- Views in views/
- Static assets in public/
- Configuration in src/config/

---

## Known Issues & Limitations

- Requires proper AWS S3 configuration for file storage
- PDF generation requires Chromium/Puppeteer
- Large batch document generation may require memory optimization
- Phone number validation requires google-libphonenumber setup

---

## Future Enhancement Opportunities

1. Mobile app for applicant tracking
2. Biometric verification integration
3. AI-powered document verification
4. Automated application review
5. Advanced analytics dashboard
6. Integration with university systems
7. Payment gateway integration
8. SMS notifications for applicants

---

## Support & Maintenance

**Developer:** EntSol360  
**Last Updated:** January 2026  
**License:** MIT

For detailed technical documentation, refer to README.md and inline code comments.
