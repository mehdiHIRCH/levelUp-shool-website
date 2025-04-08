/*
  # Add RLS policy for inscription table

  1. Security
    - Add policy to allow anonymous users to insert into inscription table
    - This is needed because the registration form is used by unauthenticated users
*/

-- Add policy to allow anonymous users to insert into inscription table
CREATE POLICY "Allow anonymous users to create inscriptions" 
ON public.inscription
FOR INSERT 
TO anon
WITH CHECK (true);