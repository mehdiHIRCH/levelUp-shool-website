/*
  # Fix consultation requests RLS policies

  1. Changes
    - Temporarily disable RLS to reset policies
    - Drop all existing policies
    - Create new simplified policies that allow:
      - Anonymous users to insert records
      - Authenticated users to read and update records
    - Re-enable RLS with new policies

  2. Security
    - Ensures anonymous users can create consultation requests
    - Maintains read/update access for authenticated users
*/

-- Temporarily disable RLS
ALTER TABLE consultation_requests DISABLE ROW LEVEL SECURITY;

-- Drop existing policies
DROP POLICY IF EXISTS "Enable anonymous insert" ON consultation_requests;
DROP POLICY IF EXISTS "Enable authenticated insert" ON consultation_requests;
DROP POLICY IF EXISTS "Enable authenticated read" ON consultation_requests;
DROP POLICY IF EXISTS "Enable authenticated update" ON consultation_requests;

-- Re-enable RLS
ALTER TABLE consultation_requests ENABLE ROW LEVEL SECURITY;

-- Create a single, simple policy for anonymous inserts
CREATE POLICY "Allow anonymous inserts"
ON consultation_requests
FOR INSERT
TO anon
WITH CHECK (true);

-- Create policies for authenticated users
CREATE POLICY "Allow authenticated read"
ON consultation_requests
FOR SELECT
TO authenticated
USING (true);

CREATE POLICY "Allow authenticated update"
ON consultation_requests
FOR UPDATE
TO authenticated
USING (true)
WITH CHECK (true);