/*
  # Add columns to inscription table

  1. Changes
    - Add columns for storing registration form data:
      - first_name (text)
      - last_name (text)
      - email (text)
      - phone (text)
      - current_level (text)
      - study_goal (text)
*/

ALTER TABLE inscription
ADD COLUMN first_name text,
ADD COLUMN last_name text,
ADD COLUMN email text,
ADD COLUMN phone text,
ADD COLUMN current_level text,
ADD COLUMN study_goal text;