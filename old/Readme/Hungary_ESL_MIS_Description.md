# Hungary ESL MIS - Project Description

## Project Overview
**Project Name:** Hungary ESL MIS (Management Information System)  
**Version:** 1.0.1  
**Organization:** Excellence Solution Limited  
**Developer:** EntSol360  
**License:** MIT  
**Database:** MySQL  
**Technology Stack:** Node.js, Express.js  

---

## Executive Summary
Hungary ESL MIS is a comprehensive Management Information System designed for educational institutions in Hungary to manage large-scale assessments, multi-site initiatives, and institutional operations. It provides integrated functionality for assessment management, user administration, learning management integration, financial transactions, lead management, and advanced reporting for organizational efficiency.

---

## Core Features & Modules

### 1. **Authentication & Authorization**
- User authentication and registration
- JWT-based token verification
- Role-based access control (RBAC)
- Session management
- Multi-user access control

### 2. **Assessment & Survey Management**
- Professional assessment tool for multi-site initiatives
- Large-scale assessment support
- Survey form design and deployment
- Post-assessment follow-up and scheduling
- Analytical reporting on assessment results
- Question bank management

### 3. **Learning Management Integration**
- Integration with eLearning portal
- Course management
- Learner enrollment tracking
- Learning outcome tracking
- License management

### 4. **User & Employee Management**
- User profile management
- Employee records and organization
- Department management
- Permission-based access control
- User activity tracking

### 5. **Lead Management**
- Lead capture and tracking
- Lead scoring and qualification
- Lead assignment and routing
- Follow-up scheduling
- Sales pipeline management

### 6. **Financial Management**
- Transaction tracking
- Invoice management
- Payment processing
- Financial reporting
- Budget management

### 7. **Communication & Messaging**
- Email notifications via Nodemailer
- Bulk messaging capability
- Email template management
- SMS integration (optional)
- Push notifications

### 8. **Google Workspace Integration**
- Google Sheets data import/export
- Google APIs integration
- Data synchronization
- Real-time collaboration support

### 9. **Administrative Functions**
- System setup and configuration
- Database management
- User administration
- Analytics dashboard
- System monitoring

### 10. **Mobile API**
- Mobile app support
- REST API endpoints
- Data synchronization
- Lightweight API responses
- Offline capability

### 11. **Real-time Communication**
- Socket.io WebSocket support
- Real-time notifications
- Live data updates
- Broadcasting capabilities

---

## Technology Stack

### Backend
- **Runtime:** Node.js
- **Framework:** Express.js ^4.17.1
- **Authentication:** JSON Web Tokens (JWT) ^9.0.0
- **Session Management:** express-session ^1.17.1

### Database
- **Primary:** MySQL ^2.18.1
- **Advanced Driver:** MySQL2 ^3.14.3
- **ORM/Query Builder:** Custom database models

### Cloud Services
- **Storage:** AWS SDK for S3 ^3.600.0
- **Authentication:** Google APIs (OAuth)
- **Google Services:** googleapis ^91.0.0

### File Processing
- **Document Templates:** docx-templates ^4.14.1
- **Excel Processing:** xlsx ^0.18.5, xlsxstreamreader (custom module)
- **CSV Conversion:** csv-parser ^3.0.0, csvtojson ^2.0.10, @aternus/csv-to-xlsx ^1.0.19
- **JSON Export:** jsonexport ^3.2.0
- **Compression:** Archiver ^5.3.1
- **Phone Number:** google-libphonenumber ^3.2.42

### Frontend & View Rendering
- **Template Engine:** Swig Templates ^2.0.3
- **Static File Server:** Express.static (built-in)

### Real-time Communication
- **WebSocket:** Socket.io ^4.7.2
- **HTTP Requests:** Axios ^1.11.0, request ^2.88.2

### Email & Notifications
- **Email:** Nodemailer ^6.6.1
- **Scheduling:** node-cron ^3.0.0

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
- **Development Tools:** Nodemon ^1.19.4

---

## Project Structure

```
hungarymis/
├── bin/
│   └── mis_server              # Application entry point
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
│   │   ├── admin/             # Admin routes
│   │   ├── auth/              # Authentication routes
│   │   ├── user/              # User management
│   │   ├── elearning/         # eLearning integration
│   │   ├── license/           # Course license management
│   │   ├── finance/           # Financial management
│   │   ├── leads/             # Lead management
│   │   ├── brevo/             # Email integration
│   │   ├── quiz_module/       # Quiz management
│   │   ├── eportfolio/        # ePortfolio
│   │   ├── system_setup/      # System configuration
│   │   ├── mobileapi/         # Mobile API
│   │   ├── googlesheet/       # Google Sheets integration
│   │   ├── helpercontroller/  # Helper controllers
│   │   ├── socket/            # WebSocket handlers
│   │   ├── frontend/          # Frontend routes
│   │   └── helpers/           # Route helpers
│   ├── views/                 # Server-side templates (Swig)
│   └── upload/                # User uploads directory
├── custom_module/             # Custom modules
│   └── xlsxstreamreader/     # Excel stream reader
├── language/                  # i18n language files
│   ├── en.json               # English translations
│   └── hu.json               # Hungarian translations
├── package.json
├── README.md
└── PROJECT_DESCRIPTION.md
```

---

## Detailed Module Descriptions

### 1. Assessment Module
- Survey and assessment creation
- Question bank management
- Assessment scheduling
- Result compilation and analytics
- Reporting tools

### 2. Learning Management Module
- Course management and enrollment
- License tracking
- Progress monitoring
- Integration with eLearning platform

### 3. User Management Module
- Profile management
- Role and permission assignment
- Department organization
- Access control

### 4. Finance Module
- Transaction tracking
- Invoice generation
- Payment processing
- Financial reports and analytics

### 5. Lead Management Module
- Lead capture from various sources
- Lead scoring and qualification
- Lead assignment and routing
- Follow-up task management
- Pipeline analytics

### 6. Communication Module
- Email notifications
- Bulk email campaigns
- Email templates
- Delivery tracking

### 7. Quiz Module
- Quiz creation and management
- Question management
- Automated grading
- Results analytics

### 8. Socket.io Module
- Real-time notifications
- Live data updates
- WebSocket connections

### 9. Google Sheets Integration
- Data import from Google Sheets
- Data export to Google Sheets
- Real-time synchronization
- Automated workflows

### 10. Mobile API Module
- Mobile-optimized endpoints
- Lightweight responses
- Sync capabilities
- Offline support

---

## Database Configuration

The project uses MySQL as the primary database. Configuration available in:
- `src/config/index.js` - Main configuration file

---

## Environment Setup

### Prerequisites
1. Node.js (latest LTS version)
2. MySQL Server
3. Git
4. AWS Account (optional, for S3)
5. Google Cloud Account (for APIs)

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
nodemon ./bin/mis_server
```

---

## Security Features

1. **JWT Authentication:** Secure token-based authentication
2. **Session Management:** Secure session handling
3. **Input Validation:** Express-validator for sanitization
4. **CORS Support:** Cross-origin resource sharing
5. **File Upload Security:** Secure file handling
6. **Basic Auth:** HTTP basic authentication support
7. **Database Encryption:** Encrypted connections

---

## Performance Optimizations

1. **Response Compression:** gzip compression enabled
2. **Connection Pooling:** MySQL2 for efficient connections
3. **Caching:** Session and query optimization
4. **Bulk Operations:** Bulk import/export support
5. **Large File Support:** Support for large datasets

---

## Third-Party Integrations

- **Google Cloud Platform:** APIs and services
- **AWS S3:** Cloud file storage
- **Google Sheets:** Data import/export
- **Brevo/SendGrid:** Email delivery (if configured)
- **Nodemailer:** SMTP-based email

---

## API Modules

### Authentication API (`routes/auth/`)
- User registration and login
- Password management
- Token verification

### Admin API (`routes/admin/`)
- Dashboard and analytics
- System monitoring
- User management

### User API (`routes/user/`)
- Profile management
- Settings update

### eLearning API (`routes/elearning/`)
- Course CRUD operations
- Enrollment management

### Finance API (`routes/finance/`)
- Transaction management
- Invoice processing

### Lead Management API (`routes/leads/`)
- Lead CRUD operations
- Scoring and assignment

### Quiz API (`routes/quiz_module/`)
- Quiz management
- Question management
- Results processing

### Mobile API (`routes/mobileapi/`)
- Mobile app endpoints
- Data synchronization

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
- Configuration in src/config/

---

## Known Features

1. **Multi-language Support:** English and Hungarian
2. **Bulk Data Import/Export:** CSV and XLSX support
3. **Real-time Notifications:** WebSocket and email
4. **Advanced Reporting:** Custom report builder
5. **Multi-tenant Support:** Support for multiple organizations
6. **Google Integration:** Sheets and API integration
7. **Phone Number Validation:** International phone format support

---

## Future Enhancement Opportunities

1. Microservices architecture migration
2. GraphQL API implementation
3. Real-time dashboards
4. Advanced analytics
5. Mobile app development
6. Machine learning recommendations
7. Blockchain integration
8. Enhanced accessibility

---

## Support & Maintenance

**Developer:** EntSol360  
**Last Updated:** January 2026  
**License:** MIT

For detailed technical documentation, refer to README.md and inline code comments.
