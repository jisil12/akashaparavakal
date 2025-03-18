# Akashaparavakal Old Age Home - Website Product Requirements Document

## 1. Project Overview

### 1.1 Introduction
Akashaparavakal is an old age home requiring a modern, accessible website to enhance its online presence, facilitate donations, and enable volunteer engagement. The website will be built using Next.js 14 with a focus on ease of management and maintenance through Sanity CMS and Supabase.

### 1.2 Project Goals
- Create an engaging online presence for Akashaparavakal
- Implement an easy-to-use content management system for staff
- Streamline the donation process
- Facilitate volunteer registration and management
- Showcase the institution's impact and services
- Improve accessibility and reach to potential donors and volunteers

### 1.3 Target Audience
- Potential donors (individuals and organizations)
- Prospective volunteers
- Families looking for elder care services
- Community members
- Social workers and healthcare professionals
- Staff members managing content

## 2. Technical Specifications

### 2.1 Technology Stack
- Frontend Framework: Next.js 14
- UI Components: shadcn/ui
- Styling: Tailwind CSS
- Backend and Authentication: Supabase
  - Real-time database
  - Authentication
  - Storage
  - Serverless Functions
- Content Management: Sanity.io
  - GROQ for content queries
  - Real-time content updates
  - Image asset management
- Payment Gateway: Stripe
- Form Handling: React Hook Form with Zod validation
- Image Optimization: Next.js Image component
- Deployment: Vercel
- Analytics: Google Analytics 4

### 2.2 Browser Support
[Previous browser support section remains the same]

### 2.3 Performance Requirements
[Previous performance requirements section remains the same]

## 3. Content Management System (Sanity.io)

### 3.1 Content Types

#### 3.1.1 Pages
- Home page content
- About page content
- Services page content
- Contact information
- Custom pages

#### 3.1.2 Dynamic Content
- Success stories
- News and updates
- Events
- Team members
- Testimonials
- FAQs

#### 3.1.3 Media Management
- Image gallery
- Video content
- Documents
- Downloads

### 3.2 CMS Features
- Rich text editor with custom components
- Image optimization and cropping
- Content previews
- Publishing workflow
- Version history
- Collaborative editing
- Content scheduling
- Multi-language support (future capability)

### 3.3 Custom CMS Components
- Gallery builder
- Success story template
- Team member profile builder
- Event creator
- Impact metrics dashboard
- Donation goal tracker

## 4. Supabase Integration

### 4.1 Database Schema

#### 4.1.1 Auth Tables
- profiles
  - user information
  - role management
  - preferences

#### 4.1.2 Donations
- donations
  - transaction records
  - donor information
  - recurring donation settings
- donation_goals
  - campaign tracking
  - progress metrics

#### 4.1.3 Volunteers
- volunteer_applications
  - application status
  - personal information
  - availability
- volunteer_hours
  - time tracking
  - activity logs

#### 4.1.4 Communications
- newsletter_subscribers
- contact_form_submissions

### 4.2 Supabase Features Implementation
- Row Level Security (RLS) policies
- Real-time subscriptions for dynamic content
- Storage buckets for user uploads
- Edge functions for serverless operations
- Authentication with multiple providers
- Automated backup system

## 5. Site Architecture

### 5.1 Primary Pages

[Previous pages structure remains the same, with addition of:]

### 5.2 Integration Points

#### 5.2.1 Sanity to Next.js
- Static page generation
- Incremental Static Regeneration
- Preview mode for content editors
- On-demand revalidation

#### 5.2.2 Supabase to Next.js
- Real-time data updates
- User authentication
- File storage and retrieval
- Serverless function calls

## 6. Functional Requirements

### 6.1 Content Management
- Visual content editor
- Drag-and-drop interface
- Content modeling
- Asset management
- Preview capabilities
- Publishing workflow
- Role-based access

### 6.2 User Authentication (Supabase)
- Email/password authentication
- Social login (Google, Facebook)
- Magic link login
- Role-based access control
- Session management
- Password recovery

### 6.3 Donation System
- Stripe integration
- Donation forms
- Receipt generation
- Recurring payments
- Campaign tracking
- Donor dashboard

### 6.4 Volunteer Management
- Application system
- Schedule management
- Hour tracking
- Document storage
- Communication system
- Certificate generation

[Sections 7-11 remain largely the same, with relevant updates to reflect Supabase and Sanity integration]

## 12. Timeline and Milestones

### 12.1 Phase 1 (Weeks 1-2)
- Project setup
- Sanity schema design
- Supabase database setup
- Design system implementation

### 12.2 Phase 2 (Weeks 3-4)
- Content modeling in Sanity
- Core pages development
- Supabase authentication
- Initial CMS training

### 12.3 Phase 3 (Weeks 5-6)
- Donation system integration
- Volunteer management system
- Content migration
- Staff training

### 12.4 Phase 4 (Weeks 7-8)
- Testing and optimization
- Documentation
- Final staff training
- Deployment

## 13. Training and Handover

### 13.1 CMS Training
- Content creation workshops
- Image management
- Publishing workflow
- Best practices
- Troubleshooting guide

### 13.2 Administrative Training
- User management
- Donation tracking
- Volunteer coordination
- Analytics review
- Backup procedures

## 14. Maintenance and Support

### 14.1 Content Updates
- Regular content audits
- SEO optimization
- Image optimization
- Content backup
- Version control

### 14.2 Technical Maintenance
- Supabase database optimization
- Sanity studio updates
- Security patches
- Performance monitoring
- Backup verification

[Previous sections 15-16 remain the same]