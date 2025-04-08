/*
  # Add message notifications

  1. New Tables
    - `message_notifications`
      - `id` (uuid, primary key)
      - `message_id` (uuid, references messages)
      - `created_at` (timestamp)
      - `read` (boolean)
      - `read_at` (timestamp)

  2. Security
    - Enable RLS on message_notifications table
    - Add policy for authenticated users to read notifications
    - Add policy for authenticated users to update notifications

  3. Changes
    - Add trigger to create notification when message is inserted
*/

-- Create notifications table
CREATE TABLE IF NOT EXISTS message_notifications (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  message_id uuid REFERENCES messages(id) ON DELETE CASCADE,
  created_at timestamptz DEFAULT now(),
  read boolean DEFAULT false,
  read_at timestamptz
);

-- Enable RLS
ALTER TABLE message_notifications ENABLE ROW LEVEL SECURITY;

-- Policies for message_notifications
CREATE POLICY "Allow authenticated users to read notifications"
  ON message_notifications
  FOR SELECT
  TO authenticated
  USING (true);

CREATE POLICY "Allow authenticated users to update notifications"
  ON message_notifications
  FOR UPDATE
  TO authenticated
  USING (true)
  WITH CHECK (true);

-- Create trigger function to create notification when message is inserted
CREATE OR REPLACE FUNCTION create_message_notification()
RETURNS TRIGGER AS $$
BEGIN
  INSERT INTO message_notifications (message_id)
  VALUES (NEW.id);
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Create trigger
CREATE TRIGGER message_inserted
  AFTER INSERT ON messages
  FOR EACH ROW
  EXECUTE FUNCTION create_message_notification();