/*
  # Fix consultation requests RLS policies

  1. Changes
    - Drop existing RLS policies for consultation_requests table
    - Create new, properly configured RLS policies
      - Allow anyone to create consultation requests
      - Allow authenticated users to read and update requests
  
  2. Security
    - Ensures public access for creating consultation requests
    - Maintains authenticated access for admin functions
*/

-- Drop existing policies
DROP POLICY IF EXISTS "Anyone can create consultation requests" ON consultation_requests;
DROP POLICY IF EXISTS "Authenticated users can read consultation requests" ON consultation_requests;
DROP POLICY IF EXISTS "Authenticated users can update consultation status" ON consultation_requests;

-- Create new policies
CREATE POLICY "Enable insert for anonymous users"
ON public.consultation_requests
FOR INSERT
TO anon
WITH CHECK (true);

CREATE POLICY "Enable insert for authenticated users"
ON public.consultation_requests
FOR INSERT
TO authenticated
WITH CHECK (true);

CREATE POLICY "Enable read access for authenticated users only"
ON public.consultation_requests
FOR SELECT
TO authenticated
USING (true);

CREATE POLICY "Enable update for authenticated users"
ON public.consultation_requests
FOR UPDATE
TO authenticated
USING (true)
WITH CHECK (true);