/*
  # Fix consultation requests RLS policies

  1. Changes
    - Drop existing policies that might be conflicting
    - Create new, properly configured RLS policies for consultation_requests table
    
  2. Security
    - Enable public access for INSERT operations (anyone can submit a consultation request)
    - Maintain authenticated-only access for SELECT and UPDATE operations
*/

-- Drop existing policies to avoid conflicts
DROP POLICY IF EXISTS "Enable insert for everyone" ON consultation_requests;
DROP POLICY IF EXISTS "Enable read for authenticated users" ON consultation_requests;
DROP POLICY IF EXISTS "Enable update for authenticated users" ON consultation_requests;

-- Recreate policies with proper configuration
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
USING (true)
WITH CHECK (true);