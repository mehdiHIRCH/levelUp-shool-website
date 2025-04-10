/*
  # Fix duplicate policies

  1. Changes
    - Drop existing policies if they exist
    - Recreate policies with proper configuration
    - Ensure no duplicate policies

  2. Security
    - Maintain same security rules
    - Keep RLS enabled
*/

-- Drop existing policies if they exist
DROP POLICY IF EXISTS "Allow anonymous users to create messages" ON messages;
DROP POLICY IF EXISTS "Allow authenticated users to read messages" ON messages;

-- Recreate policies
CREATE POLICY "Enable anonymous insert"
  ON messages
  FOR INSERT
  TO anon
  WITH CHECK (true);

CREATE POLICY "Enable authenticated read"
  ON messages
  FOR SELECT
  TO authenticated
  USING (true);