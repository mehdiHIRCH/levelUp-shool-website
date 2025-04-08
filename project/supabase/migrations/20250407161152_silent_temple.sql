/*
  # Fix consultation requests RLS policies

  1. Changes
    - Drop existing RLS policies for consultation_requests table
    - Create new policies that properly handle anonymous and authenticated access
  
  2. Security
    - Enable anonymous users to create consultation requests
    - Maintain authenticated users' ability to read and update requests
    - Ensure proper access control for all operations
*/

-- Drop existing policies
DROP POLICY IF EXISTS "Enable insert for anon" ON consultation_requests;
DROP POLICY IF EXISTS "Enable read for authenticated" ON consultation_requests;
DROP POLICY IF EXISTS "Enable update for authenticated" ON consultation_requests;

-- Create new policies
CREATE POLICY "Anyone can create consultation requests"
ON consultation_requests
FOR INSERT
TO anon, authenticated
WITH CHECK (true);

CREATE POLICY "Authenticated users can view all consultation requests"
ON consultation_requests
FOR SELECT
TO authenticated
USING (true);

CREATE POLICY "Authenticated users can update consultation requests"
ON consultation_requests
FOR UPDATE
TO authenticated
USING (true)
WITH CHECK (true);