/*
  # Fix consultation requests RLS policies

  1. Changes
    - Temporarily disable RLS to reset policies
    - Drop existing policies
    - Create new simplified policy for anonymous inserts
    - Re-enable RLS with new policy

  2. Security
    - Ensures anonymous users can create consultation requests without authentication
    - Maintains read/update access for authenticated users
*/

-- Temporarily disable RLS
ALTER TABLE consultation_requests DISABLE ROW LEVEL SECURITY;

-- Drop existing policies
DROP POLICY IF EXISTS "Allow anonymous inserts" ON consultation_requests;
DROP POLICY IF EXISTS "Allow authenticated read" ON consultation_requests;
DROP POLICY IF EXISTS "Allow authenticated update" ON consultation_requests;

-- Re-enable RLS
ALTER TABLE consultation_requests ENABLE ROW LEVEL SECURITY;

-- Create a single, simple policy for anonymous inserts with no restrictions
CREATE POLICY "Enable insert for anon"
ON consultation_requests
FOR INSERT 
TO anon, authenticated
WITH CHECK (true);

-- Create policies for authenticated users
CREATE POLICY "Enable read for authenticated"
ON consultation_requests
FOR SELECT
TO authenticated
USING (true);

CREATE POLICY "Enable update for authenticated"
ON consultation_requests
FOR UPDATE
TO authenticated
USING (true);