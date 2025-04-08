import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error('Missing Supabase environment variables');
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

// Function to get all inscriptions
export const getInscriptions = async () => {
  const { data, error } = await supabase
    .from('inscription')
    .select('*')
    .order('created_at', { ascending: false });

  if (error) {
    throw error;
  }

  return data;
};

// Function to get all messages with their notification status
export const getMessages = async () => {
  const { data, error } = await supabase
    .from('messages')
    .select(`
      *,
      message_notifications (
        id,
        read,
        read_at
      )
    `)
    .order('created_at', { ascending: false });

  if (error) {
    throw error;
  }

  return data;
};

// Function to mark a notification as read
export const markNotificationAsRead = async (notificationId: string) => {
  const { error } = await supabase
    .from('message_notifications')
    .update({
      read: true,
      read_at: new Date().toISOString()
    })
    .eq('id', notificationId);

  if (error) {
    throw error;
  }
};

// Function to create a consultation request
export const createConsultationRequest = async (phone: string) => {
  const { data, error } = await supabase
    .from('consultation_requests')
    .insert([{ phone }])
    .select()
    .single();

  if (error) {
    throw error;
  }

  return data;
};