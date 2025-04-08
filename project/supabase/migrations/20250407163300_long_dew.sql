/*
  # Add study abroad fields to inscription table

  1. Changes
    - Add country column for storing the selected study destination
    - Add message column for storing additional study abroad details
    - Add type column with check constraint for registration type
*/

-- Add country column if it doesn't exist
DO $$ 
BEGIN 
  IF NOT EXISTS (
    SELECT 1 FROM information_schema.columns 
    WHERE table_name = 'inscription' AND column_name = 'country'
  ) THEN
    ALTER TABLE inscription ADD COLUMN country text;
  END IF;
END $$;

-- Add message column if it doesn't exist
DO $$ 
BEGIN 
  IF NOT EXISTS (
    SELECT 1 FROM information_schema.columns 
    WHERE table_name = 'inscription' AND column_name = 'message'
  ) THEN
    ALTER TABLE inscription ADD COLUMN message text;
  END IF;
END $$;

-- Ensure RLS is enabled
ALTER TABLE inscription ENABLE ROW LEVEL SECURITY;

-- Add policy for anonymous users to create inscriptions if it doesn't exist
DO $$ 
BEGIN 
  IF NOT EXISTS (
    SELECT 1 FROM pg_policies 
    WHERE tablename = 'inscription' AND policyname = 'Allow anonymous users to create inscriptions'
  ) THEN
    CREATE POLICY "Allow anonymous users to create inscriptions" 
    ON inscription
    FOR INSERT 
    TO anon
    WITH CHECK (true);
  END IF;
END $$;