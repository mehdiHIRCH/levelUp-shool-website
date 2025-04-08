/*
  # Fix consultation requests table and policies

  1. Changes
    - Ensure consultation_requests table exists with proper structure
    - Reset and simplify RLS policies
    - Add proper indexes for performance

  2. Security
    - Enable RLS
    - Allow public access for creating consultation requests
    - Restrict read/update access to authenticated users only
*/

-- Ensure the table exists with proper structure
CREATE TABLE IF NOT EXISTS consultation_requests (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  phone text NOT NULL,
  created_at timestamptz DEFAULT now(),
  status text DEFAULT 'pending'
);

-- Create index for faster queries
CREATE INDEX IF NOT EXISTS idx_consultation_requests_created_at 
ON consultation_requests(created_at DESC);

-- Reset RLS
ALTER TABLE consultation_requests ENABLE ROW LEVEL SECURITY;

-- Drop existing policies
DROP POLICY IF EXISTS "Enable insert for everyone" ON consultation_requests;
DROP POLICY IF EXISTS "Enable read for authenticated users" ON consultation_requests;
DROP POLICY IF EXISTS "Enable update for authenticated users" ON consultation_requests;

-- Create new policies
CREATE POLICY "Enable public insert"
ON consultation_requests
FOR INSERT
TO public
WITH CHECK (true);

CREATE POLICY "Enable authenticated read"
ON consultation_requests
FOR SELECT
TO authenticated
USING (true);

CREATE POLICY "Enable authenticated update"
ON consultation_requests
FOR UPDATE
TO authenticated
USING (true);