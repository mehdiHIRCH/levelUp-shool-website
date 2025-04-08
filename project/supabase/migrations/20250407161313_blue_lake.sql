/*
  # Fix consultation requests RLS policies

  1. Changes
    - Reset and simplify RLS policies for consultation_requests table
    - Ensure anonymous users can create consultation requests
    - Ensure authenticated users can read and update requests
  
  2. Security
    - Enable RLS on consultation_requests table
    - Add policy for anonymous and authenticated users to insert records
    - Add policy for authenticated users to read and update records
*/

-- First, disable RLS to ensure we can modify the policies
ALTER TABLE consultation_requests DISABLE ROW LEVEL SECURITY;

-- Drop all existing policies to start fresh
DROP POLICY IF EXISTS "Anyone can create consultation requests" ON consultation_requests;
DROP POLICY IF EXISTS "Authenticated users can view all consultation requests" ON consultation_requests;
DROP POLICY IF EXISTS "Authenticated users can update consultation requests" ON consultation_requests;

-- Re-enable RLS
ALTER TABLE consultation_requests ENABLE ROW LEVEL SECURITY;

-- Create new simplified policies
CREATE POLICY "Enable insert for everyone"
ON consultation_requests
FOR INSERT
TO public
WITH CHECK (true);

CREATE POLICY "Enable read for authenticated users"
ON consultation_requests
FOR SELECT
TO authenticated
USING (true);

CREATE POLICY "Enable update for authenticated users"
ON consultation_requests
FOR UPDATE
TO authenticated
USING (true);