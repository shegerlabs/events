-- Sample data for Lookup table
-- First, let's insert some countries
INSERT INTO "Lookup" (id, category, value, code, "order", metadata, "createdAt", "updatedAt")
VALUES
  ('cnt_usa', 'Country', 'United States', 'USA', 1, '{"region": "North America"}', NOW(), NOW()),
  ('cnt_can', 'Country', 'Canada', 'CAN', 2, '{"region": "North America"}', NOW(), NOW()),
  ('cnt_uk', 'Country', 'United Kingdom', 'GBR', 3, '{"region": "Europe"}', NOW(), NOW());

-- Insert some genders
INSERT INTO "Lookup" (id, category, value, code, "order", metadata, "createdAt", "updatedAt")
VALUES
  ('gen_m', 'Gender', 'Male', 'M', 1, NULL, NOW(), NOW()),
  ('gen_f', 'Gender', 'Female', 'F', 2, NULL, NOW(), NOW()),
  ('gen_o', 'Gender', 'Other', 'O', 3, NULL, NOW(), NOW());

-- Insert some titles
INSERT INTO "Lookup" (id, category, value, code, "order", metadata, "createdAt", "updatedAt")
VALUES
  ('tit_mr', 'Title', 'Mr.', 'MR', 1, NULL, NOW(), NOW()),
  ('tit_mrs', 'Title', 'Mrs.', 'MRS', 2, NULL, NOW(), NOW()),
  ('tit_dr', 'Title', 'Dr.', 'DR', 3, NULL, NOW(), NOW());

-- Insert some languages
INSERT INTO "Lookup" (id, category, value, code, "order", metadata, "createdAt", "updatedAt")
VALUES
  ('lang_en', 'Language', 'English', 'EN', 1, NULL, NOW(), NOW()),
  ('lang_es', 'Language', 'Spanish', 'ES', 2, NULL, NOW(), NOW()),
  ('lang_fr', 'Language', 'French', 'FR', 3, NULL, NOW(), NOW());

-- Insert some entity types
INSERT INTO "Lookup" (id, category, value, code, "order", metadata, "createdAt", "updatedAt")
VALUES
  ('ent_user', 'EntityType', 'User', 'USER', 1, NULL, NOW(), NOW()),
  ('ent_event', 'EntityType', 'Event', 'EVENT', 2, NULL, NOW(), NOW()),
  ('ent_participant', 'EntityType', 'Participant', 'PARTICIPANT', 3, NULL, NOW(), NOW());

-- Insert some field types
INSERT INTO "Lookup" (id, category, value, code, "order", metadata, "createdAt", "updatedAt")
VALUES
  ('fld_text', 'FieldType', 'Text', 'TEXT', 1, NULL, NOW(), NOW()),
  ('fld_number', 'FieldType', 'Number', 'NUMBER', 2, NULL, NOW(), NOW()),
  ('fld_date', 'FieldType', 'Date', 'DATE', 3, NULL, NOW(), NOW()),
  ('fld_select', 'FieldType', 'Select', 'SELECT', 4, NULL, NOW(), NOW());

-- Insert some user statuses
INSERT INTO "Lookup" (id, category, value, code, "order", metadata, "createdAt", "updatedAt")
VALUES
  ('usr_active', 'UserStatus', 'Active', 'ACTIVE', 1, NULL, NOW(), NOW()),
  ('usr_inactive', 'UserStatus', 'Inactive', 'INACTIVE', 2, NULL, NOW(), NOW()),
  ('usr_locked', 'UserStatus', 'Locked', 'LOCKED', 3, NULL, NOW(), NOW());

-- Sample data for FieldConfig table
-- User entity field configurations
INSERT INTO "FieldConfig" (id, "entityTypeId", "fieldTypeId", "fieldName", "fieldLabel", required, "default", "order", metadata, version, "createdAt", "updatedAt")
VALUES
  ('fcfg_user_email', 'ent_user', 'fld_text', 'email', 'Email Address', true, NULL, 1, '{"validation": {"type": "email"}}', 1, NOW(), NOW()),
  ('fcfg_user_phone', 'ent_user', 'fld_text', 'phone', 'Phone Number', false, NULL, 2, '{"validation": {"type": "phone"}}', 1, NOW(), NOW()),
  ('fcfg_user_dob', 'ent_user', 'fld_date', 'dateOfBirth', 'Date of Birth', false, NULL, 3, NULL, 1, NOW(), NOW());

-- Event entity field configurations
INSERT INTO "FieldConfig" (id, "entityTypeId", "fieldTypeId", "fieldName", "fieldLabel", required, "default", "order", metadata, version, "createdAt", "updatedAt")
VALUES
  ('fcfg_event_name', 'ent_event', 'fld_text', 'name', 'Event Name', true, NULL, 1, NULL, 1, NOW(), NOW()),
  ('fcfg_event_capacity', 'ent_event', 'fld_number', 'capacity', 'Maximum Capacity', false, '100', 2, '{"min": 1, "max": 1000}', 1, NOW(), NOW()),
  ('fcfg_event_type', 'ent_event', 'fld_select', 'type', 'Event Type', true, 'conference', 3, '{"options": ["conference", "workshop", "seminar"]}', 1, NOW(), NOW());

-- Participant entity field configurations
INSERT INTO "FieldConfig" (id, "entityTypeId", "fieldTypeId", "fieldName", "fieldLabel", required, "default", "order", metadata, version, "createdAt", "updatedAt")
VALUES
  ('fcfg_part_title', 'ent_participant', 'fld_select', 'title', 'Title', true, NULL, 1, '{"options": ["Mr.", "Mrs.", "Dr."]}', 1, NOW(), NOW()),
  ('fcfg_part_gender', 'ent_participant', 'fld_select', 'gender', 'Gender', true, NULL, 2, '{"options": ["Male", "Female", "Other"]}', 1, NOW(), NOW()),
  ('fcfg_part_language', 'ent_participant', 'fld_select', 'language', 'Preferred Language', true, 'English', 3, '{"options": ["English", "Spanish", "French"]}', 1, NOW(), NOW()); 