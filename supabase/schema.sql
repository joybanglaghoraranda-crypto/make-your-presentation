-- ==============================================================================
-- MAKE YOUR PRESENTATION (MYP) - PRODUCTION DATABASE SCHEMA
-- Compatible with PostgreSQL 15+ and Supabase
-- Features: Full Relational Structure, Row Level Security (RLS), Audit Logging
-- ==============================================================================

-- Enable UUID extension
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- 1. USERS & ROLES
CREATE TYPE user_role AS ENUM (
  'customer',
  'staff',
  'editor',
  'designer',
  'manager',
  'admin',
  'super_admin'
);

CREATE TABLE IF NOT EXISTS profiles (
  id UUID PRIMARY KEY REFERENCES auth.users(id) ON DELETE CASCADE,
  name TEXT NOT NULL,
  email TEXT UNIQUE NOT NULL,
  phone TEXT,
  whatsapp TEXT,
  avatar_url TEXT,
  role user_role DEFAULT 'customer' NOT NULL,
  preferred_language VARCHAR(10) DEFAULT 'bn' NOT NULL,
  created_at TIMESTAMPTZ DEFAULT NOW() NOT NULL,
  updated_at TIMESTAMPTZ DEFAULT NOW() NOT NULL
);

-- 2. GEOGRAPHY & EDUCATION SYSTEMS
CREATE TABLE IF NOT EXISTS countries (
  id VARCHAR(20) PRIMARY KEY,
  name TEXT NOT NULL,
  code VARCHAR(5) NOT NULL,
  flag TEXT,
  active BOOLEAN DEFAULT TRUE NOT NULL,
  is_populated BOOLEAN DEFAULT FALSE NOT NULL,
  created_at TIMESTAMPTZ DEFAULT NOW() NOT NULL
);

CREATE TABLE IF NOT EXISTS education_systems (
  id VARCHAR(50) PRIMARY KEY,
  country_id VARCHAR(20) REFERENCES countries(id) ON DELETE CASCADE,
  name TEXT NOT NULL,
  name_bn TEXT,
  description TEXT,
  active BOOLEAN DEFAULT TRUE NOT NULL,
  created_at TIMESTAMPTZ DEFAULT NOW() NOT NULL
);

CREATE TABLE IF NOT EXISTS curriculums (
  id VARCHAR(50) PRIMARY KEY,
  education_system_id VARCHAR(50) REFERENCES education_systems(id) ON DELETE CASCADE,
  academic_year VARCHAR(20) NOT NULL,
  name TEXT NOT NULL,
  version VARCHAR(20) DEFAULT '1.0' NOT NULL,
  active BOOLEAN DEFAULT TRUE NOT NULL,
  created_at TIMESTAMPTZ DEFAULT NOW() NOT NULL
);

CREATE TABLE IF NOT EXISTS education_levels (
  id VARCHAR(50) PRIMARY KEY,
  curriculum_id VARCHAR(50) REFERENCES curriculums(id) ON DELETE CASCADE,
  name TEXT NOT NULL,
  name_bn TEXT NOT NULL,
  slug VARCHAR(50) NOT NULL,
  order_index INT DEFAULT 0 NOT NULL,
  category VARCHAR(30) NOT NULL,
  active BOOLEAN DEFAULT TRUE NOT NULL
);

CREATE TABLE IF NOT EXISTS classes (
  id VARCHAR(50) PRIMARY KEY,
  education_level_id VARCHAR(50) REFERENCES education_levels(id) ON DELETE CASCADE,
  name TEXT NOT NULL,
  name_bn TEXT NOT NULL,
  slug VARCHAR(50) NOT NULL,
  order_index INT DEFAULT 0 NOT NULL,
  active BOOLEAN DEFAULT TRUE NOT NULL
);

CREATE TABLE IF NOT EXISTS academic_groups (
  id VARCHAR(50) PRIMARY KEY,
  class_id VARCHAR(50) REFERENCES classes(id) ON DELETE CASCADE,
  name TEXT NOT NULL,
  name_bn TEXT NOT NULL,
  slug VARCHAR(50) NOT NULL,
  active BOOLEAN DEFAULT TRUE NOT NULL
);

-- 3. SUBJECTS, CHAPTERS & TOPICS
CREATE TABLE IF NOT EXISTS subjects (
  id VARCHAR(50) PRIMARY KEY,
  parent_type VARCHAR(20) NOT NULL, -- 'class', 'group', 'department', 'jamaat'
  parent_id VARCHAR(50) NOT NULL,
  name TEXT NOT NULL,
  name_bn TEXT NOT NULL,
  code VARCHAR(20),
  description TEXT,
  subject_type VARCHAR(20) DEFAULT 'compulsory' NOT NULL,
  category VARCHAR(50) NOT NULL,
  order_index INT DEFAULT 0 NOT NULL,
  active BOOLEAN DEFAULT TRUE NOT NULL,
  created_at TIMESTAMPTZ DEFAULT NOW() NOT NULL
);

CREATE TABLE IF NOT EXISTS chapters (
  id VARCHAR(50) PRIMARY KEY,
  subject_id VARCHAR(50) REFERENCES subjects(id) ON DELETE CASCADE,
  name TEXT NOT NULL,
  name_bn TEXT NOT NULL,
  description TEXT,
  order_index INT DEFAULT 0 NOT NULL,
  active BOOLEAN DEFAULT TRUE NOT NULL
);

CREATE TABLE IF NOT EXISTS topics (
  id VARCHAR(50) PRIMARY KEY,
  chapter_id VARCHAR(50) REFERENCES chapters(id) ON DELETE CASCADE,
  name TEXT NOT NULL,
  name_bn TEXT NOT NULL,
  description TEXT,
  suggested_slides INT DEFAULT 15 NOT NULL,
  active BOOLEAN DEFAULT TRUE NOT NULL
);

-- 4. UNIVERSITY STRUCTURE
CREATE TABLE IF NOT EXISTS university_faculties (
  id VARCHAR(50) PRIMARY KEY,
  name TEXT NOT NULL,
  name_bn TEXT NOT NULL,
  slug VARCHAR(50) NOT NULL,
  active BOOLEAN DEFAULT TRUE NOT NULL
);

CREATE TABLE IF NOT EXISTS university_departments (
  id VARCHAR(50) PRIMARY KEY,
  faculty_id VARCHAR(50) REFERENCES university_faculties(id) ON DELETE CASCADE,
  name TEXT NOT NULL,
  name_bn TEXT NOT NULL,
  slug VARCHAR(50) NOT NULL,
  active BOOLEAN DEFAULT TRUE NOT NULL
);

CREATE TABLE IF NOT EXISTS university_courses (
  id VARCHAR(50) PRIMARY KEY,
  department_id VARCHAR(50) REFERENCES university_departments(id) ON DELETE CASCADE,
  name TEXT NOT NULL,
  code VARCHAR(20) NOT NULL,
  level VARCHAR(30) DEFAULT 'undergraduate' NOT NULL,
  active BOOLEAN DEFAULT TRUE NOT NULL
);

-- 5. BUSINESS & PROFESSIONAL SERVICES
CREATE TABLE IF NOT EXISTS business_categories (
  id VARCHAR(50) PRIMARY KEY,
  name TEXT NOT NULL,
  name_bn TEXT NOT NULL,
  slug VARCHAR(50) NOT NULL,
  description TEXT,
  icon VARCHAR(50) DEFAULT 'Briefcase' NOT NULL
);

CREATE TABLE IF NOT EXISTS business_services (
  id VARCHAR(50) PRIMARY KEY,
  category_id VARCHAR(50) REFERENCES business_categories(id) ON DELETE CASCADE,
  name TEXT NOT NULL,
  name_bn TEXT NOT NULL,
  slug VARCHAR(50) NOT NULL,
  description TEXT,
  suggested_slides INT DEFAULT 15 NOT NULL,
  deliverables JSONB DEFAULT '[]'::JSONB
);

CREATE TABLE IF NOT EXISTS professional_categories (
  id VARCHAR(50) PRIMARY KEY,
  name TEXT NOT NULL,
  name_bn TEXT NOT NULL,
  slug VARCHAR(50) NOT NULL,
  description TEXT,
  icon VARCHAR(50) DEFAULT 'GraduationCap' NOT NULL
);

CREATE TABLE IF NOT EXISTS professional_services (
  id VARCHAR(50) PRIMARY KEY,
  category_id VARCHAR(50) REFERENCES professional_categories(id) ON DELETE CASCADE,
  name TEXT NOT NULL,
  name_bn TEXT NOT NULL,
  slug VARCHAR(50) NOT NULL,
  description TEXT,
  suggested_slides INT DEFAULT 15 NOT NULL
);

-- 6. ORDERS & FULFILLMENT
CREATE TYPE order_status AS ENUM (
  'request_received',
  'requirement_review',
  'price_confirmed',
  'awaiting_payment',
  'payment_received',
  'in_production',
  'quality_check',
  'preview_ready',
  'revision_requested',
  'revision_in_progress',
  'final_delivery',
  'completed',
  'cancelled'
);

CREATE TYPE payment_status AS ENUM (
  'pending',
  'awaiting_verification',
  'paid',
  'partially_paid',
  'refunded',
  'cancelled'
);

CREATE TABLE IF NOT EXISTS orders (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  order_number VARCHAR(50) UNIQUE NOT NULL,
  customer_id UUID REFERENCES profiles(id) ON DELETE SET NULL,
  customer_name TEXT NOT NULL,
  customer_email TEXT NOT NULL,
  customer_phone TEXT NOT NULL,
  customer_whatsapp TEXT NOT NULL,
  
  category VARCHAR(50) NOT NULL,
  sub_category TEXT,
  
  level_name TEXT,
  class_name TEXT,
  group_name TEXT,
  faculty_name TEXT,
  department_name TEXT,
  subject_name TEXT,
  chapter_name TEXT,
  topic_name TEXT NOT NULL,
  
  purpose TEXT NOT NULL,
  slide_count INT NOT NULL,
  language VARCHAR(50) NOT NULL,
  design_style VARCHAR(50) NOT NULL,
  content_requirements TEXT,
  additional_features JSONB DEFAULT '[]'::JSONB,
  
  urgency VARCHAR(20) DEFAULT 'standard' NOT NULL,
  deadline TEXT NOT NULL,
  
  estimated_price NUMERIC(10,2) NOT NULL,
  final_price NUMERIC(10,2) NOT NULL,
  currency VARCHAR(10) DEFAULT 'BDT' NOT NULL,
  
  status order_status DEFAULT 'request_received' NOT NULL,
  payment_status payment_status DEFAULT 'pending' NOT NULL,
  
  assigned_staff TEXT,
  revision_count INT DEFAULT 0 NOT NULL,
  
  internal_notes TEXT,
  preview_url TEXT,
  final_delivery_files JSONB DEFAULT '[]'::JSONB,
  reference_files JSONB DEFAULT '[]'::JSONB,
  
  created_at TIMESTAMPTZ DEFAULT NOW() NOT NULL,
  updated_at TIMESTAMPTZ DEFAULT NOW() NOT NULL
);

-- 7. REVISIONS & MESSAGES
CREATE TABLE IF NOT EXISTS order_revisions (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  order_id UUID REFERENCES orders(id) ON DELETE CASCADE NOT NULL,
  revision_number INT NOT NULL,
  slide_number VARCHAR(50),
  issue_description TEXT NOT NULL,
  requested_change TEXT NOT NULL,
  status VARCHAR(30) DEFAULT 'pending' NOT NULL,
  admin_response TEXT,
  created_at TIMESTAMPTZ DEFAULT NOW() NOT NULL
);

CREATE TABLE IF NOT EXISTS order_messages (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  order_id UUID REFERENCES orders(id) ON DELETE CASCADE NOT NULL,
  sender_name TEXT NOT NULL,
  sender_role VARCHAR(20) NOT NULL,
  message TEXT NOT NULL,
  attachments JSONB DEFAULT '[]'::JSONB,
  created_at TIMESTAMPTZ DEFAULT NOW() NOT NULL
);

CREATE TABLE IF NOT EXISTS order_payments (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  order_id UUID REFERENCES orders(id) ON DELETE CASCADE NOT NULL,
  amount NUMERIC(10,2) NOT NULL,
  currency VARCHAR(10) DEFAULT 'BDT' NOT NULL,
  method VARCHAR(50) NOT NULL,
  transaction_id VARCHAR(100),
  receipt_url TEXT,
  status payment_status DEFAULT 'awaiting_verification' NOT NULL,
  notes TEXT,
  created_at TIMESTAMPTZ DEFAULT NOW() NOT NULL
);

-- 8. AUDIT LOGS
CREATE TABLE IF NOT EXISTS audit_logs (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  actor_id UUID,
  actor_name TEXT,
  action TEXT NOT NULL,
  entity_type VARCHAR(50) NOT NULL,
  entity_id TEXT NOT NULL,
  old_value JSONB,
  new_value JSONB,
  created_at TIMESTAMPTZ DEFAULT NOW() NOT NULL
);

-- ==============================================================================
-- ROW LEVEL SECURITY (RLS) POLICIES
-- ==============================================================================

ALTER TABLE profiles ENABLE ROW LEVEL SECURITY;
ALTER TABLE orders ENABLE ROW LEVEL SECURITY;
ALTER TABLE order_revisions ENABLE ROW LEVEL SECURITY;
ALTER TABLE order_messages ENABLE ROW LEVEL SECURITY;
ALTER TABLE order_payments ENABLE ROW LEVEL SECURITY;

-- Profiles: Users can view & update their own profile; Admins have full access
CREATE POLICY "Users can view own profile" ON profiles
  FOR SELECT USING (auth.uid() = id);

CREATE POLICY "Users can update own profile" ON profiles
  FOR UPDATE USING (auth.uid() = id);

-- Orders: Customers can view their own orders; Admins/Staff have full access
CREATE POLICY "Customers can view own orders" ON orders
  FOR SELECT USING (
    auth.uid() = customer_id 
    OR customer_email = (SELECT email FROM profiles WHERE id = auth.uid())
    OR EXISTS (SELECT 1 FROM profiles WHERE id = auth.uid() AND role IN ('admin', 'super_admin', 'manager', 'staff'))
  );

CREATE POLICY "Public guest can insert order" ON orders
  FOR INSERT WITH CHECK (true);

CREATE POLICY "Admins can update orders" ON orders
  FOR ALL USING (
    EXISTS (SELECT 1 FROM profiles WHERE id = auth.uid() AND role IN ('admin', 'super_admin', 'manager', 'staff'))
  );
