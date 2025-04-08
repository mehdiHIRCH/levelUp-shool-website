/*
  # Create study abroad registrations table

  1. New Tables
    - `study_abroad_registrations`
      - `id` (uuid, primary key)
      - `first_name` (text, required)
      - `last_name` (text, required)
      - `email` (text, required)
      - `phone` (text, required)
      - `country` (text, required)
      - `message` (text)
      - `created_at` (timestamp with time zone)
      - `status` (text, default: 'pending')

  2. Security
    - Enable RLS on study_abroad_registrations table
    - Add policy for anonymous users to create registrations
    - Add policy for authenticated users to read registrations
*/

-- Create study abroad registrations table
CREATE TABLE IF NOT EXISTS study_abroad_registrations (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  first_name text NOT NULL,
  last_name text NOT NULL,
  email text NOT NULL,
  phone text NOT NULL,
  country text NOT NULL,
  message text,
  created_at timestamptz DEFAULT now(),
  status text DEFAULT 'pending'
);

-- Enable RLS
ALTER TABLE study_abroad_registrations ENABLE ROW LEVEL SECURITY;

-- Create policies
CREATE POLICY "Enable insert for everyone"
ON study_abroad_registrations
FOR INSERT
TO public
WITH CHECK (true);

CREATE POLICY "Enable read for authenticated users"
ON study_abroad_registrations
FOR SELECT
TO authenticated
USING (true);

CREATE POLICY "Enable update for authenticated users"
ON study_abroad_registrations
FOR UPDATE
TO authenticated
USING (true);