# SEED MIS (Management Information System) - Project Description

## Project Overview
**Project Name:** SEED MIS (Management Information System)  
**Version:** 2.0.0  
**Organization:** EDUKOR  
**Developer:** EntSol360  
**License:** MIT  
**Database:** MySQL & MySQL2  
**Technology Stack:** Node.js, Express.js  

---

## Executive Summary
The SEED MIS is an enterprise-level Management Information System designed to support multi-site organizational initiatives with comprehensive assessment management, data analytics, inventory management, and financial transaction tracking. It provides integrated functionality for user management, learning management integration, e-commerce capabilities, and complex business intelligence reporting for educational and organizational contexts.

---

## Core Features & Modules

### 1. **Authentication & Authorization**
- User authentication and registration
- JWT-based token verification
- Role-based access control (RBAC)
- Multi-tenant user session management
- Firebase authentication integration

### 2. **Assessment & Survey Management**
- Professional assessment tool for multi-site initiatives
- Survey form design and deployment
- Large-scale assessment support
- Post-assessment follow-up functionality
- Assessment scheduling and planning
- Analytical reporting and insights

### 3. **Learning Management (eLearn Integration)**
- Integration with eLeaning platform
- Course management
- Learner enrollment tracking
- Course license management (el_course_license)
- Learning outcome tracking

### 4. **Inventory Management**
- Asset inventory tracking
- Stock management
- Inventory reports
- Inventory module configuration

### 5. **E-Commerce Module**
- Product catalog management
- Shopping cart functionality
- Order management
- Payment integration
- Invoice generation
- Order fulfillment tracking

### 6. **Financial Management**
- Payment gateway integration
- Transaction tracking (fintran)
- Invoice management
- Payment settings configuration
- Multiple payment method support

### 7. **User & Employee Management**
- User profile management
- Employee records
- Department organization
- Access control and permissions
- User activity tracking

### 8. **Lead & CRM Management**
- Lead capture and tracking
- Lead scoring
- Opportunity management
- Lead follow-up scheduling
- Sales pipeline management

### 9. **Communication & Messaging**
- Email notification system (Brevo/SendGrid integration)
- SMS module for communications
- Email template management
- Bulk messaging capability
- Push notifications

### 10. **Page & Form Design**
- Dynamic page builder (pagedesign)
- Custom form builder (appform_design)
- Template-based page creation
- Responsive design support

### 11. **Administrative Functions**
- System setup and configuration
- Database management
- User administration
- Audit logs and reporting
- System analytics dashboard
- Mobile API for remote access

### 12. **Feedback & Evaluation**
- Feedback collection system
- Survey responses tracking
- Evaluation metrics
- Performance analysis

### 13. **Document Management**
- Document generation from templates
- PDF export functionality
- Document template management
- Version control

### 14. **AI-Powered Features**
- OpenAI/GPT integration for intelligent suggestions
- Google Generative AI integration
- Automated content generation
- Intelligent recommendations

---

## Technology Stack

### Backend
- **Runtime:** Node.js
- **Framework:** Express.js ^4.17.1
- **Authentication:** JSON Web Tokens (JWT) ^9.0.0
- **Session Management:** express-session ^1.17.1

### Database
- **Primary:** MySQL ^2.18.1
- **Secondary:** MySQL2 ^3.11.0 (advanced driver)
- **ORM/Query Builder:** Custom database models

### Cloud Services
- **Storage:** AWS SDK for S3 ^3.481.0
- **Text-to-Speech:** Google Cloud Text-to-Speech ^6.0.1
- **AI/ML:** Google Generative AI ^0.21.0, OpenAI ^4.82.0
- **Authentication:** Firebase Admin ^13.1.0

### File Processing
- **PDF Generation:** pdf-lib ^1.17.1, html-pdf-node ^1.0.7
- **Document Templates:** docx-templates ^4.11.3, docxtemplater ^3.39.0
- **Office Conversion:** libreoffice-convert ^1.5.0
- **Excel/CSV:** @aternus/csv-to-xlsx ^1.0.19, jsonexport ^3.2.0
- **Compression:** Archiver ^5.3.1
- **Decompression:** decompress ^4.2.1
- **Form Data:** form-data ^4.0.0
- **Temporary Files:** tmp

### Frontend & View Rendering
- **Template Engine:** Swig Templates ^2.0.3
- **Static File Server:** Express.static (built-in)

### Email & Communication
- **Email:** Nodemailer ^6.6.1
- **HTTP Requests:** Axios ^1.6.8
- **Third-party APIs:** Multiple integration endpoints

### Scheduling & Automation
- **Cron Jobs:** node-cron ^3.0.0
- **Date/Time:** Moment.js ^2.29.1

### Utilities
- **Hashing:** MD5 ^2.3.0
- **HTTP Override:** method-override ^3.0.0
- **Body Parsing:** body-parser ^1.19.0
- **Compression:** compression ^1.7.4
- **Logging:** Morgan ^1.10.0
- **Cookie Parsing:** cookie-parser ^1.4.5
- **Environment Variables:** dotenv
- **Input Validation:** express-validator
- **Basic Auth:** express-basic-auth ^1.2.0
- **Debugging:** debug ^2.6.9
- **Development Tools:** Nodemon ^3.1.10, npm ^10.8.2
- **Chromium:** ^3.0.2 (for PDF generation)

---

## Project Structure

```
hu_seed_mis/
├── bin/
│   └── seed_mis_server         # Application entry point (executable)
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
│   │   ├── admin/             # Admin panel routes
│   │   ├── auth/              # Authentication routes
│   │   ├── user/              # User management
│   │   ├── elearning/         # eLearning integration
│   │   ├── el_course_license/ # Course license management
│   │   ├── inventory/         # Inventory management
│   │   ├── e_commerce/        # E-commerce module
│   │   ├── fintran/           # Financial transactions
│   │   ├── leads/             # Lead management
│   │   ├── feedback/          # Feedback system
│   │   ├── sms_module/        # SMS communications
│   │   ├── brevo/             # Brevo email integration
│   │   ├── payment/           # Payment processing
│   │   ├── paymentsettings/   # Payment configuration
│   │   ├── pagedesign/        # Page builder
│   │   ├── appform_design/    # Form builder
│   │   ├── surveyform/        # Survey management
│   │   ├── system_setup/      # System configuration
│   │   ├── mobileapi/         # Mobile app API
│   │   ├── googlesheet/       # Google Sheets integration
│   │   ├── adm/               # Advanced administration
│   │   ├── helpercontroller/  # Helper controllers
│   │   ├── frontend/          # Frontend routes
│   │   └── helpers/           # Route helpers
│   ├── views/                 # Server-side templates (Swig)
│   ├── temp/                  # Temporary files for processing
│   └── tmp/                   # Additional temp storage
├── ai_doc_template/           # AI document templates
│   ├── python_doc_heading.py
│   ├── python_read_doc.py
│   └── python_replace_doc_text.py
├── db_backup/                 # Database backups & scripts
│   ├── data_migration_script.txt
│   ├── db_version.sql
│   ├── InventoryModuleScripts.sql
│   ├── lead.sql
│   ├── paymentgateway.sql
│   ├── seed_email_template_backup_06dec23.sql
│   ├── seed_lms_dynamic_from_status_12dec23.sql
│   ├── survey_db_version_29dec23.sql
│   └── uk_db_script.sql
├── language/                  # i18n language files
│   ├── en.json               # English translations
│   └── hu.json               # Hungarian translations
├── Bulkexport/                # Bulk export functionality
├── LearnerCohort/             # Learner grouping
├── Inventory/                 # Inventory module data
├── custom_module/             # Custom modules
│   └── xlsxstreamreader/     # Excel file reader
├── package.json
├── README.md
└── PROJECT_DESCRIPTION.md
```

---

## Detailed Module Descriptions

### 1. Assessment & Surveys Module
- **Functionality:** Create, deploy, and manage assessments and surveys
- **Features:** Question banks, branching logic, conditional logic, scoring
- **Reports:** Analytical reporting on responses and performance metrics
- **Multi-site:** Support for multi-location assessment campaigns

### 2. Learning Management Module (eLearn Integration)
- **Courses:** Manage courses and learning paths
- **Licenses:** Course license assignment and tracking
- **Enrollment:** Student enrollment management
- **Tracking:** Learning outcome and completion tracking
- **Integration:** Seamless integration with eLearning platform

### 3. Inventory Management Module
- **Asset Tracking:** Track physical and digital assets
- **Stock Management:** Monitor inventory levels
- **Alerts:** Low stock notifications
- **Reports:** Inventory analytics and forecasting
- **Transfers:** Asset movement tracking

### 4. E-Commerce Module
- **Products:** Product catalog management
- **Shopping:** Cart, checkout, and order processing
- **Payments:** Multiple payment gateway support
- **Fulfillment:** Order tracking and delivery management
- **Analytics:** Sales reporting and customer analytics

### 5. Financial Management (FinTran)
- **Transactions:** Record and track all financial transactions
- **Invoicing:** Automated invoice generation
- **Payment Tracking:** Monitor payment status
- **Reports:** Financial reporting and reconciliation
- **Multiple Currencies:** Multi-currency support

### 6. Lead Management Module
- **Lead Capture:** Web forms and API-based lead capture
- **Scoring:** Automated lead scoring
- **Routing:** Intelligent lead assignment
- **Follow-up:** Task management and reminders
- **Analytics:** Sales pipeline analytics

### 7. User Management Module
- **Profiles:** User profile creation and management
- **Permissions:** Granular permission management
- **Roles:** Pre-defined and custom roles
- **Activity:** User activity logging and audit trails
- **Deactivation:** Secure user deactivation

### 8. Communication Modules

#### Email (Brevo/Nodemailer Integration)
- **Email Templates:** Pre-built and custom templates
- **Bulk Sending:** Broadcast messaging capability
- **Scheduling:** Schedule emails for future delivery
- **Tracking:** Open and click tracking
- **Automation:** Triggered email workflows

#### SMS Module
- **SMS Templates:** Pre-defined message templates
- **Delivery:** Direct SMS delivery to phone numbers
- **Scheduling:** SMS scheduling
- **Tracking:** Delivery status tracking

### 9. Page & Form Design Modules

#### Page Design Module
- **Drag & Drop Builder:** Easy page creation
- **Responsive:** Mobile-responsive designs
- **Templates:** Pre-built page templates
- **Publishing:** One-click publishing

#### App Form Design Module
- **Form Fields:** Multiple field types supported
- **Validation:** Client and server-side validation
- **Conditional Logic:** Show/hide fields based on conditions
- **Data Collection:** Secure form submission
- **Export:** Export form responses to Excel/CSV

### 10. System Setup & Administration
- **Configuration:** System-wide settings
- **Database:** Database initialization and management
- **Backup:** Automated backup scheduling
- **Monitoring:** System health monitoring
- **Logs:** Comprehensive logging system

### 11. Mobile API Module
- **Mobile Access:** Native mobile app support
- **REST API:** RESTful API endpoints
- **Authentication:** Secure mobile authentication
- **Sync:** Data synchronization
- **Offline:** Offline-first capabilities

### 12. Google Sheets Integration
- **Import:** Import data from Google Sheets
- **Export:** Export data to Google Sheets
- **Sync:** Real-time data synchronization
- **Automation:** Triggered sync workflows

---

## Database Configuration

The project uses MySQL as the primary database. Configuration can be set in:
- `src/config/index.js` - Main configuration file

Database initialization and migration scripts available in:
- `db_backup/db_version.sql` - Main database schema
- `db_backup/InventoryModuleScripts.sql` - Inventory module tables
- `db_backup/lead.sql` - Lead management tables
- `db_backup/paymentgateway.sql` - Payment module tables
- `db_backup/survey_db_version_29dec23.sql` - Survey module tables
- `db_backup/uk_db_script.sql` - UK-specific database setup

---

## Environment Setup

### Prerequisites
1. Node.js (latest LTS version recommended)
2. MySQL Server (v5.7 or higher)
3. Git
4. AWS Account (for S3 storage)
5. Google Cloud Account (for APIs)
6. Firebase Project Setup
7. OpenAI API Key
8. Brevo/SendGrid Account (for email)

### Installation Steps
```bash
# Clone repository
git clone <repository-url>

# Install dependencies
npm install

# Configure environment variables
# Create .env file with necessary credentials:
# - DATABASE_URL
# - JWT_SECRET
# - AWS_ACCESS_KEY_ID
# - AWS_SECRET_ACCESS_KEY
# - FIREBASE_CREDENTIALS
# - OPENAI_API_KEY
# - GOOGLE_API_KEY
# - BREVO_API_KEY

# Initialize database
# Run SQL scripts from db_backup/ folder

# Start application
npm start

# Alternative: Use nodemon for development
nodemon ./bin/seed_mis_server
```

---

## API Modules

### Authentication API (`routes/auth/`)
- User registration
- Login and logout
- Password management
- Token refresh

### Admin API (`routes/admin/`)
- Dashboard statistics
- System monitoring
- User management
- Content moderation

### User API (`routes/user/`)
- Profile management
- Settings update
- Account security

### eLearning API (`routes/elearning/`)
- Course CRUD operations
- Enrollment management
- Progress tracking

### Inventory API (`routes/inventory/`)
- Asset CRUD
- Stock levels
- Inventory reports

### E-Commerce API (`routes/e_commerce/`)
- Product catalog
- Shopping cart
- Order processing

### Lead Management API (`routes/leads/`)
- Lead CRUD
- Lead scoring
- Lead assignment

### Payment API (`routes/payment/`, `routes/paymentsettings/`)
- Payment processing
- Transaction history
- Payment configuration

### Survey API (`routes/surveyform/`)
- Survey CRUD
- Response collection
- Analytics

### Mobile API (`routes/mobileapi/`)
- Mobile-optimized endpoints
- Lightweight responses
- Sync mechanisms

---

## Security Features

1. **JWT Authentication:** Secure token-based authentication
2. **Session Management:** Secure session handling with express-session
3. **Input Validation:** Express-validator for input sanitization
4. **CORS Support:** Cross-origin resource sharing
5. **Basic Auth:** Support for HTTP basic authentication
6. **File Upload Security:** Secure file handling with validation
7. **Firebase Security:** Firebase Admin SDK integration
8. **Database Encryption:** Support for encrypted connections
9. **Audit Logging:** Comprehensive audit trails

---

## Performance Optimizations

1. **Response Compression:** gzip compression enabled
2. **Connection Pooling:** MySQL2 for efficient database connections
3. **Caching:** Session caching and query optimization
4. **Pagination:** Support for large dataset pagination
5. **Bulk Operations:** Bulk import/export functionality
6. **Large File Support:** Support for files up to 2.5GB

---

## Third-Party Integrations

- **Google Cloud Platform:** APIs and services
- **AWS S3:** Cloud file storage and CDN
- **Firebase:** Authentication and real-time capabilities
- **OpenAI:** GPT models for AI features
- **Google Generative AI:** Alternative AI service
- **Brevo/SendGrid:** Email delivery service
- **Payment Gateways:** Multiple payment processor support
- **Google Sheets:** Data import/export
- **Google Workspace:** Integration capabilities

---

## Maintenance & Monitoring

### Database Backups
Location: `db_backup/` folder
- Multiple backup scripts for different modules
- Version control for database schema
- Migration scripts for upgrades

### Cron Jobs
- Scheduled assessments
- Automated reports
- Email queue processing
- Session cleanup
- Data synchronization

### Logging
- Morgan HTTP request logging
- Error logging and tracking
- Activity audit logs
- Transaction logs

### Temporary File Management
- Automatic cleanup of `src/temp/` and `src/tmp/`
- Configurable retention policies
- File size limits

---

## Development Workflow

### Running in Development
```bash
npm start
```
Uses nodemon for automatic restart on file changes.

### Running in Production
```bash
NODE_ENV=production node ./bin/seed_mis_server
```

### Code Structure Best Practices
- Controllers in routes/
- Data models in lib/
- Views in views/
- Static assets in public/
- Database scripts in db_backup/
- Configuration in src/config/

---

## Known Modules & Capabilities

1. **Bulk Data Import/Export:** CSV, XLSX support
2. **Document Generation:** From templates with AI assistance
3. **PDF Export:** Multi-format document export
4. **Advanced Reporting:** Custom report builder
5. **Multi-tenant Support:** Multi-language and multi-region
6. **Real-time Notifications:** Email and SMS
7. **Machine Learning:** AI-powered recommendations
8. **Data Analytics:** Business intelligence dashboards
9. **Mobile-First Design:** Responsive across devices
10. **API-First Architecture:** REST API for all operations

---

## Scalability & Architecture

### Current Architecture
- Monolithic Node.js application
- MySQL relational database
- File-based temporary storage
- Cloud storage for large files (AWS S3)

### Scalability Considerations
1. **Database:** Consider database replication and clustering
2. **Application:** Can be deployed across multiple servers with load balancing
3. **Storage:** AWS S3 for distributed file storage
4. **Caching:** Redis integration for session and query caching (recommended)
5. **Message Queue:** Implement job queue for async operations

---

## Future Enhancement Opportunities

1. **Microservices Migration:** Break down into service-oriented architecture
2. **GraphQL API:** Implement GraphQL alongside REST
3. **Real-time Analytics:** WebSocket-based live dashboards
4. **Advanced ML:** Predictive analytics and anomaly detection
5. **Blockchain Integration:** Certificate verification with blockchain
6. **Mobile Apps:** Native iOS and Android applications
7. **Voice Integration:** Voice-based interactions and commands
8. **IoT Integration:** Support for IoT device data collection
9. **Advanced Reporting:** Self-service business intelligence
10. **Workflow Automation:** Low-code workflow builder

---

## Compliance & Standards

- **Data Privacy:** GDPR-ready (adjustments may be needed)
- **Security:** OWASP Top 10 compliance
- **Accessibility:** WCAG 2.1 AA compliance (in progress)
- **Education Standards:** LTI (Learning Tools Interoperability)
- **E-commerce:** PCI DSS compliance for payment processing

---

## Support & Maintenance

**Developer:** EntSol360  
**Last Updated:** January 2026  
**License:** MIT

For detailed technical documentation, refer to README.md, inline code comments, and database backup scripts for schema documentation.

---

## Contact & Support

For technical support or inquiries:
- Email: [Support Email]
- Documentation: See inline code comments and README files
- Database Schemas: Check db_backup/ folder for SQL schemas

---

## Version History

- **v2.0.0** (Current): Major release with comprehensive module support
- **v1.x.x**: Initial release with core functionality

See git commit history for detailed changelog.
