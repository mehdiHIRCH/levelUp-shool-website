/*
  # Fix RLS policies for consultation requests

  1. Changes
    - Drop existing RLS policies for consultation_requests table
    - Create new policies that properly allow:
      - Anonymous users to insert records
      - Authenticated users to read and update records

  2. Security
    - Ensure anonymous users can create consultation requests
    - Maintain read/update access for authenticated users
*/

-- First, disable RLS temporarily to ensure we can modify the policies
ALTER TABLE consultation_requests DISABLE ROW LEVEL SECURITY;

-- Drop existing policies to start fresh
DROP POLICY IF EXISTS "Enable insert for anonymous users" ON consultation_requests;
DROP POLICY IF EXISTS "Enable insert for authenticated users" ON consultation_requests;
DROP POLICY IF EXISTS "Enable read access for authenticated users only" ON consultation_requests;
DROP POLICY IF EXISTS "Enable update for authenticated users" ON consultation_requests;

-- Re-enable RLS
ALTER TABLE consultation_requests ENABLE ROW LEVEL SECURITY;

-- Create new policies with proper configuration
CREATE POLICY "Enable anonymous insert"
ON consultation_requests
FOR INSERT
TO anon
WITH CHECK (true);

CREATE POLICY "Enable authenticated insert"
ON consultation_requests
FOR INSERT
TO authenticated
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
USING (true)
WITH CHECK (true);