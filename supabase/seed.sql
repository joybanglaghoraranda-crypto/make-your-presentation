-- ==============================================================================
-- MAKE YOUR PRESENTATION (MYP) - DATABASE SEED DATA
-- Bangladesh Curricula, Madrasa (Alia & Qawmi), Universities, Business & Professional
-- ==============================================================================

-- Countries
INSERT INTO countries (id, name, code, flag, active, is_populated) VALUES
('c-bd', 'Bangladesh', 'BD', '🇧🇩', true, true),
('c-in', 'India', 'IN', '🇮🇳', true, false),
('c-pk', 'Pakistan', 'PK', '🇵🇰', true, false),
('c-sa', 'Saudi Arabia', 'SA', '🇸🇦', true, false),
('c-ae', 'UAE', 'AE', '🇦🇪', true, false),
('c-gb', 'United Kingdom', 'GB', '🇬🇧', true, false),
('c-us', 'United States', 'US', '🇺🇸', true, false)
ON CONFLICT (id) DO NOTHING;

-- Education Systems
INSERT INTO education_systems (id, country_id, name, name_bn, description, active) VALUES
('sys-bd-general', 'c-bd', 'Bangladesh General Education (NCTB)', 'বাংলাদেশ সাধারণ শিক্ষা (জাতীয় শিক্ষাক্রম)', 'Pre-Primary to Higher Secondary', true),
('sys-bd-madrasa-alia', 'c-bd', 'Alia Madrasa Education (BMEB)', 'বাংলাদেশ মাদ্রাসা শিক্ষা বোর্ড (আলিয়া)', 'Ibtedayi to Kamil', true),
('sys-bd-madrasa-qawmi', 'c-bd', 'Qawmi Madrasa Education', 'কওমি মাদ্রাসা শিক্ষা (বেফাকুল মাদারিসিল আরাবিয়া)', 'Dars-e-Nizami from Noorani to Takhassus', true),
('sys-bd-university', 'c-bd', 'University & Higher Academic', 'বিশ্ববিদ্যালয় ও উচ্চতর শিক্ষা', 'Degree, Masters, Thesis, & Research', true)
ON CONFLICT (id) DO NOTHING;

-- Curriculums
INSERT INTO curriculums (id, education_system_id, academic_year, name, version, active) VALUES
('curr-2026', 'sys-bd-general', '2026', 'National Curriculum 2026', '2.0', true)
ON CONFLICT (id) DO NOTHING;

-- Education Levels
INSERT INTO education_levels (id, curriculum_id, name, name_bn, slug, order_index, category, active) VALUES
('lvl-pre-primary', 'curr-2026', 'General / Pre-Primary', 'প্রাক-প্রাথমিক / নার্সারি', 'pre-primary', 1, 'general', true),
('lvl-primary', 'curr-2026', 'Primary School', 'প্রাথমিক বিদ্যালয় (১ম - ৫ম শ্রেণি)', 'primary', 2, 'primary', true),
('lvl-secondary', 'curr-2026', 'Secondary / High School', 'মাধ্যমিক / হাই স্কুল (৬ষ্ঠ - ১০ম শ্রেণি)', 'secondary', 3, 'secondary', true),
('lvl-college', 'curr-2026', 'Higher Secondary / College', 'উচ্চ মাধ্যমিক / কলেজ (১১শ - ১২শ শ্রেণি)', 'college', 4, 'college', true),
('lvl-university', 'curr-2026', 'University & Research', 'বিশ্ববিদ্যালয় ও উচ্চতর শিক্ষা', 'university', 5, 'university', true),
('lvl-technical', 'curr-2026', 'Technical & Vocational', 'কারিগরি ও পলিটেকনিক', 'technical', 6, 'technical', true),
('lvl-madrasa-alia', 'curr-2026', 'Alia Madrasa', 'আলিয়া মাদ্রাসা (ইবতেদায়ী - কামিল)', 'alia', 7, 'madrasa_alia', true),
('lvl-madrasa-qawmi', 'curr-2026', 'Qawmi Madrasa', 'কওমি মাদ্রাসা (নুরানি - তাখাসসুস)', 'qawmi', 8, 'madrasa_qawmi', true)
ON CONFLICT (id) DO NOTHING;

-- Classes
INSERT INTO classes (id, education_level_id, name, name_bn, slug, order_index, active) VALUES
('cls-1', 'lvl-primary', 'Class 1', '১ম শ্রেণি', 'class-1', 1, true),
('cls-2', 'lvl-primary', 'Class 2', '২য় শ্রেণি', 'class-2', 2, true),
('cls-3', 'lvl-primary', 'Class 3', '৩য় শ্রেণি', 'class-3', 3, true),
('cls-4', 'lvl-primary', 'Class 4', '৪র্থ শ্রেণি', 'class-4', 4, true),
('cls-5', 'lvl-primary', 'Class 5', '৫ম শ্রেণি', 'class-5', 5, true),
('cls-6', 'lvl-secondary', 'Class 6', '৬ষ্ঠ শ্রেণি', 'class-6', 6, true),
('cls-7', 'lvl-secondary', 'Class 7', '৭ম শ্রেণি', 'class-7', 7, true),
('cls-8', 'lvl-secondary', 'Class 8', '৮ম শ্রেণি', 'class-8', 8, true),
('cls-9', 'lvl-secondary', 'Class 9', '৯ম শ্রেণি', 'class-9', 9, true),
('cls-10', 'lvl-secondary', 'Class 10', '১০ম শ্রেণি', 'class-10', 10, true),
('cls-11', 'lvl-college', 'Class 11 (HSC 1st)', 'একাদশ শ্রেণি', 'class-11', 11, true),
('cls-12', 'lvl-college', 'Class 12 (HSC 2nd)', 'দ্বাদশ শ্রেণি', 'class-12', 12, true),
('cls-qawmi-takhassus', 'lvl-madrasa-qawmi', 'Takhassus (Ifta/Hadith)', 'তাখাসসুস (উচ্চতর ইফতা)', 'takhassus', 1, true)
ON CONFLICT (id) DO NOTHING;
