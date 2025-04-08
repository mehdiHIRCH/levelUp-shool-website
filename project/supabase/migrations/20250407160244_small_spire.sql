/*
  # Add consultation requests table and update inscription table

  1. New Tables
    - `consultation_requests`
      - `id` (uuid, primary key)
      - `phone` (text, required)
      - `created_at` (timestamp)
      - `status` (text, default: 'pending')

  2. Changes
    - Add column to inscription table:
      - `type` (text) to distinguish between German courses and study abroad registrations

  3. Security
    - Enable RLS on consultation_requests table
    - Add policies for anonymous users to create consultation requests
    - Add policies for authenticated users to read consultation requests
*/

-- Create consultation_requests table
CREATE TABLE IF NOT EXISTS consultation_requests (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  phone text NOT NULL,
  created_at timestamptz DEFAULT now(),
  status text DEFAULT 'pending'
);

-- Enable RLS on consultation_requests
ALTER TABLE consultation_requests ENABLE ROW LEVEL SECURITY;

-- Add policies for consultation_requests
CREATE POLICY "Allow anonymous users to create consultation requests"
  ON consultation_requests
  FOR INSERT
  TO anon
  WITH CHECK (true);

CREATE POLICY "Allow authenticated users to read consultation requests"
  ON consultation_requests
  FOR SELECT
  TO authenticated
  USING (true);

-- Add type column to inscription table
ALTER TABLE inscription
ADD COLUMN type text DEFAULT 'german_course';

-- Add check constraint to ensure valid types
ALTER TABLE inscription
ADD CONSTRAINT valid_inscription_type
CHECK (type IN ('german_course', 'study_abroad'));