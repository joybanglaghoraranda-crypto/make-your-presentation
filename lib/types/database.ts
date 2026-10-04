export type UserRole = "customer" | "staff" | "editor" | "designer" | "manager" | "admin" | "super_admin";

export interface UserProfile {
  id: string;
  name: string;
  email: string;
  phone?: string;
  role: UserRole;
  preferred_language: string;
  avatar_url?: string;
  created_at: string;
}

export interface Country {
  id: string;
  name: string;
  code: string;
  flag: string;
  active: boolean;
  is_populated: boolean;
}

export interface EducationSystem {
  id: string;
  country_id: string;
  name: string;
  name_bn?: string;
  description?: string;
  active: boolean;
}

export interface Curriculum {
  id: string;
  education_system_id: string;
  name: string;
  academic_year: string;
  version: string;
  active: boolean;
}

export interface EducationLevel {
  id: string;
  curriculum_id: string;
  name: string;
  name_bn: string;
  slug: string;
  order: number;
  active: boolean;
  category: "general" | "primary" | "secondary" | "college" | "university" | "madrasa_alia" | "madrasa_qawmi" | "technical";
}

export interface ClassGrade {
  id: string;
  education_level_id: string;
  name: string;
  name_bn: string;
  slug: string;
  order: number;
  active: boolean;
}

export interface AcademicGroup {
  id: string;
  class_id: string;
  name: string;
  name_bn: string;
  slug: string;
  active: boolean;
}

export interface SubjectCourse {
  id: string;
  parent_type: "class" | "group" | "department" | "jamaat";
  parent_id: string;
  name: string;
  name_bn: string;
  code?: string;
  description?: string;
  subject_type: "compulsory" | "elective" | "group" | "optional";
  active: boolean;
  order: number;
  category: string;
}

export interface Chapter {
  id: string;
  subject_id: string;
  name: string;
  name_bn: string;
  description?: string;
  order: number;
  active: boolean;
}

export interface Topic {
  id: string;
  chapter_id: string;
  name: string;
  name_bn: string;
  description?: string;
  suggested_slides: number;
  active: boolean;
}

export interface UniversityFaculty {
  id: string;
  name: string;
  name_bn: string;
  slug: string;
  active: boolean;
}

export interface UniversityDepartment {
  id: string;
  faculty_id: string;
  name: string;
  name_bn: string;
  slug: string;
  active: boolean;
}

export interface UniversityCourse {
  id: string;
  department_id: string;
  name: string;
  code: string;
  level: "undergraduate" | "postgraduate" | "phd";
  active: boolean;
}

export interface BusinessCategory {
  id: string;
  name: string;
  name_bn: string;
  slug: string;
  description: string;
  icon: string;
}

export interface BusinessService {
  id: string;
  category_id: string;
  name: string;
  name_bn: string;
  slug: string;
  description: string;
  suggested_slides: number;
  deliverables: string[];
}

export interface ProfessionalCategory {
  id: string;
  name: string;
  name_bn: string;
  slug: string;
  description: string;
  icon: string;
}

export interface ProfessionalService {
  id: string;
  category_id: string;
  name: string;
  name_bn: string;
  slug: string;
  description: string;
  suggested_slides: number;
}

export type OrderStatus =
  | "request_received"
  | "requirement_review"
  | "price_confirmed"
  | "awaiting_payment"
  | "payment_received"
  | "in_production"
  | "quality_check"
  | "preview_ready"
  | "revision_requested"
  | "revision_in_progress"
  | "final_delivery"
  | "completed"
  | "cancelled";

export type PaymentStatus = "pending" | "awaiting_verification" | "paid" | "partially_paid" | "refunded" | "cancelled";

export interface Order {
  id: string;
  order_number: string; // e.g. MYP-2026-000101
  customer_id?: string;
  customer_name: string;
  customer_email: string;
  customer_phone: string;
  customer_whatsapp: string;
  
  category: "education" | "business" | "professional" | "custom";
  sub_category?: string;
  
  // Hierarchy context
  country?: string;
  education_system?: string;
  level_name?: string;
  class_name?: string;
  group_name?: string;
  faculty_name?: string;
  department_name?: string;
  
  subject_name?: string;
  chapter_name?: string;
  topic_name: string;
  
  purpose: string;
  slide_count: number | string;
  language: string;
  design_style: string;
  content_requirements: string;
  additional_features: string[];
  
  urgency: "standard" | "urgent" | "custom";
  deadline: string;
  
  estimated_price?: number;
  final_price?: number;
  currency: string;
  
  status: OrderStatus;
  payment_status: PaymentStatus;
  
  assigned_staff?: string;
  revision_count: number;
  
  internal_notes?: string;
  preview_url?: string;
  final_delivery_files?: { name: string; url: string; format: string; size: string }[];
  reference_files?: { name: string; url: string; size: string }[];
  
  created_at: string;
  updated_at: string;
}

export interface RevisionRequest {
  id: string;
  order_id: string;
  revision_number: number;
  slide_number?: string;
  issue_description: string;
  requested_change: string;
  status: "pending" | "accepted" | "in_progress" | "completed" | "rejected";
  admin_response?: string;
  created_at: string;
}

export interface OrderMessage {
  id: string;
  order_id: string;
  sender_name: string;
  sender_role: "customer" | "staff" | "admin";
  message: string;
  created_at: string;
}

export interface PaymentTransaction {
  id: string;
  order_id: string;
  amount: number;
  currency: string;
  method: "bKash" | "Nagad" | "Bank Transfer" | "Card" | "Other";
  transaction_id?: string;
  receipt_url?: string;
  status: PaymentStatus;
  notes?: string;
  created_at: string;
}

export interface PricingRule {
  id: string;
  category: string;
  base_price_per_slide: number;
  urgent_multiplier: number;
  research_fee: number;
  custom_graphics_fee: number;
  speaker_notes_fee: number;
}
