/*
  # Fix consultation requests RLS policies

  1. Changes
    - Drop existing RLS policies for consultation_requests table
    - Add new policies to allow:
      - Public users to insert consultation requests
      - Authenticated users to read consultation requests
      - Authenticated users to update consultation request status

  2. Security
    - Maintains RLS enabled on consultation_requests table
    - Ensures proper access control while fixing the insertion issue
*/

-- Drop existing policies
DROP POLICY IF EXISTS "Enable insert access" ON consultation_requests;
DROP POLICY IF EXISTS "Enable read access" ON consultation_requests;

-- Create new policies
CREATE POLICY "Anyone can create consultation requests"
ON consultation_requests
FOR INSERT
TO public
WITH CHECK (true);

CREATE POLICY "Authenticated users can read consultation requests"
ON consultation_requests
FOR SELECT
TO authenticated
USING (true);

CREATE POLICY "Authenticated users can update consultation status"
ON consultation_requests
FOR UPDATE
TO authenticated
USING (true)
WITH CHECK (true);