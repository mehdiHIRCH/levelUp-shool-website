/*
  # Fix consultation requests RLS policies

  1. Changes
    - Drop existing RLS policies for consultation_requests table
    - Create new policies that properly allow:
      - Anonymous users to create consultation requests
      - Authenticated users to read consultation requests
  
  2. Security
    - Ensures proper access control while maintaining security
    - Anonymous users can only create requests
    - Only authenticated users can read requests
*/

-- Drop existing policies
DROP POLICY IF EXISTS "Allow anonymous users to create consultation requests" ON consultation_requests;
DROP POLICY IF EXISTS "Allow authenticated users to read consultation requests" ON consultation_requests;

-- Create new policies with proper configuration
CREATE POLICY "Enable anonymous insert access"
  ON consultation_requests
  FOR INSERT
  TO anon, authenticated
  WITH CHECK (true);

CREATE POLICY "Enable authenticated read access"
  ON consultation_requests
  FOR SELECT
  TO authenticated
  USING (true);