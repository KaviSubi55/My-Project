export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export interface Database {
  public: {
    Tables: {
      profiles: {
        Row: {
          id: string
          email: string
          full_name: string | null
          phone: string | null
          created_at: string
          updated_at: string
        }
        Insert: {
          id: string
          email: string
          full_name?: string | null
          phone?: string | null
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          email?: string
          full_name?: string | null
          phone?: string | null
          created_at?: string
          updated_at?: string
        }
      }
      locations: {
        Row: {
          id: string
          name: string
          description: string
          address: string
          city: string
          country: string
          image_url: string | null
          created_at: string
        }
        Insert: {
          id?: string
          name: string
          description: string
          address: string
          city: string
          country: string
          image_url?: string | null
          created_at?: string
        }
        Update: {
          id?: string
          name?: string
          description?: string
          address?: string
          city?: string
          country?: string
          image_url?: string | null
          created_at?: string
        }
      }
      accommodations: {
        Row: {
          id: string
          location_id: string
          name: string
          description: string
          type: string
          capacity: number
          price_per_night: number
          amenities: string[]
          image_url: string | null
          available: boolean
          created_at: string
        }
        Insert: {
          id?: string
          location_id: string
          name: string
          description: string
          type: string
          capacity: number
          price_per_night: number
          amenities?: string[]
          image_url?: string | null
          available?: boolean
          created_at?: string
        }
        Update: {
          id?: string
          location_id?: string
          name?: string
          description?: string
          type?: string
          capacity?: number
          price_per_night?: number
          amenities?: string[]
          image_url?: string | null
          available?: boolean
          created_at?: string
        }
      }
      activities: {
        Row: {
          id: string
          location_id: string
          name: string
          description: string
          season: 'winter' | 'summer' | 'all'
          difficulty_level: string
          duration_hours: number
          price: number
          max_participants: number
          image_url: string | null
          available: boolean
          created_at: string
        }
        Insert: {
          id?: string
          location_id: string
          name: string
          description: string
          season: 'winter' | 'summer' | 'all'
          difficulty_level: string
          duration_hours: number
          price: number
          max_participants: number
          image_url?: string | null
          available?: boolean
          created_at?: string
        }
        Update: {
          id?: string
          location_id?: string
          name?: string
          description?: string
          season?: 'winter' | 'summer' | 'all'
          difficulty_level?: string
          duration_hours?: number
          price?: number
          max_participants?: number
          image_url?: string | null
          available?: boolean
          created_at?: string
        }
      }
      sports_schools: {
        Row: {
          id: string
          location_id: string
          name: string
          description: string
          sport_type: string
          season: 'winter' | 'summer' | 'all'
          skill_level: string
          duration_days: number
          price: number
          max_students: number
          image_url: string | null
          available: boolean
          created_at: string
        }
        Insert: {
          id?: string
          location_id: string
          name: string
          description: string
          sport_type: string
          season: 'winter' | 'summer' | 'all'
          skill_level: string
          duration_days: number
          price: number
          max_students: number
          image_url?: string | null
          available?: boolean
          created_at?: string
        }
        Update: {
          id?: string
          location_id?: string
          name?: string
          description?: string
          sport_type?: string
          season?: 'winter' | 'summer' | 'all'
          skill_level?: string
          duration_days?: number
          price?: number
          max_students?: number
          image_url?: string | null
          available?: boolean
          created_at?: string
        }
      }
      equipment: {
        Row: {
          id: string
          location_id: string
          name: string
          description: string
          category: string
          season: 'winter' | 'summer' | 'all'
          size: string | null
          price_per_day: number
          quantity_available: number
          image_url: string | null
          created_at: string
        }
        Insert: {
          id?: string
          location_id: string
          name: string
          description: string
          category: string
          season: 'winter' | 'summer' | 'all'
          size?: string | null
          price_per_day: number
          quantity_available: number
          image_url?: string | null
          created_at?: string
        }
        Update: {
          id?: string
          location_id?: string
          name?: string
          description?: string
          category?: string
          season?: 'winter' | 'summer' | 'all'
          size?: string | null
          price_per_day?: number
          quantity_available?: number
          image_url?: string | null
          created_at?: string
        }
      }
      activity_passes: {
        Row: {
          id: string
          location_id: string
          name: string
          description: string
          season: 'winter' | 'summer' | 'all'
          duration_days: number
          price: number
          benefits: string[]
          image_url: string | null
          available: boolean
          created_at: string
        }
        Insert: {
          id?: string
          location_id: string
          name: string
          description: string
          season: 'winter' | 'summer' | 'all'
          duration_days: number
          price: number
          benefits?: string[]
          image_url?: string | null
          available?: boolean
          created_at?: string
        }
        Update: {
          id?: string
          location_id?: string
          name?: string
          description?: string
          season?: 'winter' | 'summer' | 'all'
          duration_days?: number
          price?: number
          benefits?: string[]
          image_url?: string | null
          available?: boolean
          created_at?: string
        }
      }
      accommodation_bookings: {
        Row: {
          id: string
          user_id: string
          accommodation_id: string
          check_in_date: string
          check_out_date: string
          guests: number
          total_price: number
          status: 'pending' | 'confirmed' | 'cancelled'
          created_at: string
        }
        Insert: {
          id?: string
          user_id: string
          accommodation_id: string
          check_in_date: string
          check_out_date: string
          guests: number
          total_price: number
          status?: 'pending' | 'confirmed' | 'cancelled'
          created_at?: string
        }
        Update: {
          id?: string
          user_id?: string
          accommodation_id?: string
          check_in_date?: string
          check_out_date?: string
          guests?: number
          total_price?: number
          status?: 'pending' | 'confirmed' | 'cancelled'
          created_at?: string
        }
      }
      activity_bookings: {
        Row: {
          id: string
          user_id: string
          activity_id: string
          booking_date: string
          participants: number
          total_price: number
          status: 'pending' | 'confirmed' | 'cancelled'
          created_at: string
        }
        Insert: {
          id?: string
          user_id: string
          activity_id: string
          booking_date: string
          participants: number
          total_price: number
          status?: 'pending' | 'confirmed' | 'cancelled'
          created_at?: string
        }
        Update: {
          id?: string
          user_id?: string
          activity_id?: string
          booking_date?: string
          participants?: number
          total_price?: number
          status?: 'pending' | 'confirmed' | 'cancelled'
          created_at?: string
        }
      }
      sports_school_bookings: {
        Row: {
          id: string
          user_id: string
          sports_school_id: string
          start_date: string
          students: number
          total_price: number
          status: 'pending' | 'confirmed' | 'cancelled'
          created_at: string
        }
        Insert: {
          id?: string
          user_id: string
          sports_school_id: string
          start_date: string
          students: number
          total_price: number
          status?: 'pending' | 'confirmed' | 'cancelled'
          created_at?: string
        }
        Update: {
          id?: string
          user_id?: string
          sports_school_id?: string
          start_date?: string
          students?: number
          total_price?: number
          status?: 'pending' | 'confirmed' | 'cancelled'
          created_at?: string
        }
      }
      equipment_rentals: {
        Row: {
          id: string
          user_id: string
          equipment_id: string
          rental_start_date: string
          rental_end_date: string
          quantity: number
          total_price: number
          status: 'pending' | 'confirmed' | 'returned' | 'cancelled'
          created_at: string
        }
        Insert: {
          id?: string
          user_id: string
          equipment_id: string
          rental_start_date: string
          rental_end_date: string
          quantity: number
          total_price: number
          status?: 'pending' | 'confirmed' | 'returned' | 'cancelled'
          created_at?: string
        }
        Update: {
          id?: string
          user_id?: string
          equipment_id?: string
          rental_start_date?: string
          rental_end_date?: string
          quantity?: number
          total_price?: number
          status?: 'pending' | 'confirmed' | 'returned' | 'cancelled'
          created_at?: string
        }
      }
      pass_purchases: {
        Row: {
          id: string
          user_id: string
          pass_id: string
          purchase_date: string
          start_date: string
          end_date: string
          total_price: number
          status: 'active' | 'expired' | 'cancelled'
          created_at: string
        }
        Insert: {
          id?: string
          user_id: string
          pass_id: string
          purchase_date: string
          start_date: string
          end_date: string
          total_price: number
          status?: 'active' | 'expired' | 'cancelled'
          created_at?: string
        }
        Update: {
          id?: string
          user_id?: string
          pass_id?: string
          purchase_date?: string
          start_date?: string
          end_date?: string
          total_price?: number
          status?: 'active' | 'expired' | 'cancelled'
          created_at?: string
        }
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
  }
}
