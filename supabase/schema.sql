-- Enable UUID extension
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- Create profiles table (extends auth.users)
CREATE TABLE profiles (
  id UUID REFERENCES auth.users(id) PRIMARY KEY,
  email TEXT NOT NULL UNIQUE,
  full_name TEXT,
  phone TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc'::text, NOW()) NOT NULL,
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc'::text, NOW()) NOT NULL
);

-- Create locations table
CREATE TABLE locations (
  id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
  name TEXT NOT NULL,
  description TEXT NOT NULL,
  address TEXT NOT NULL,
  city TEXT NOT NULL,
  country TEXT NOT NULL,
  image_url TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc'::text, NOW()) NOT NULL
);

-- Create accommodations table
CREATE TABLE accommodations (
  id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
  location_id UUID REFERENCES locations(id) ON DELETE CASCADE NOT NULL,
  name TEXT NOT NULL,
  description TEXT NOT NULL,
  type TEXT NOT NULL,
  capacity INTEGER NOT NULL,
  price_per_night DECIMAL(10,2) NOT NULL,
  amenities TEXT[] DEFAULT '{}',
  image_url TEXT,
  available BOOLEAN DEFAULT true,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc'::text, NOW()) NOT NULL
);

-- Create activities table
CREATE TABLE activities (
  id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
  location_id UUID REFERENCES locations(id) ON DELETE CASCADE NOT NULL,
  name TEXT NOT NULL,
  description TEXT NOT NULL,
  season TEXT NOT NULL CHECK (season IN ('winter', 'summer', 'all')),
  difficulty_level TEXT NOT NULL,
  duration_hours DECIMAL(4,2) NOT NULL,
  price DECIMAL(10,2) NOT NULL,
  max_participants INTEGER NOT NULL,
  image_url TEXT,
  available BOOLEAN DEFAULT true,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc'::text, NOW()) NOT NULL
);

-- Create sports_schools table
CREATE TABLE sports_schools (
  id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
  location_id UUID REFERENCES locations(id) ON DELETE CASCADE NOT NULL,
  name TEXT NOT NULL,
  description TEXT NOT NULL,
  sport_type TEXT NOT NULL,
  season TEXT NOT NULL CHECK (season IN ('winter', 'summer', 'all')),
  skill_level TEXT NOT NULL,
  duration_days INTEGER NOT NULL,
  price DECIMAL(10,2) NOT NULL,
  max_students INTEGER NOT NULL,
  image_url TEXT,
  available BOOLEAN DEFAULT true,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc'::text, NOW()) NOT NULL
);

-- Create equipment table
CREATE TABLE equipment (
  id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
  location_id UUID REFERENCES locations(id) ON DELETE CASCADE NOT NULL,
  name TEXT NOT NULL,
  description TEXT NOT NULL,
  category TEXT NOT NULL,
  season TEXT NOT NULL CHECK (season IN ('winter', 'summer', 'all')),
  size TEXT,
  price_per_day DECIMAL(10,2) NOT NULL,
  quantity_available INTEGER NOT NULL,
  image_url TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc'::text, NOW()) NOT NULL
);

-- Create activity_passes table
CREATE TABLE activity_passes (
  id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
  location_id UUID REFERENCES locations(id) ON DELETE CASCADE NOT NULL,
  name TEXT NOT NULL,
  description TEXT NOT NULL,
  season TEXT NOT NULL CHECK (season IN ('winter', 'summer', 'all')),
  duration_days INTEGER NOT NULL,
  price DECIMAL(10,2) NOT NULL,
  benefits TEXT[] DEFAULT '{}',
  image_url TEXT,
  available BOOLEAN DEFAULT true,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc'::text, NOW()) NOT NULL
);

-- Create accommodation_bookings table
CREATE TABLE accommodation_bookings (
  id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
  user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE NOT NULL,
  accommodation_id UUID REFERENCES accommodations(id) ON DELETE CASCADE NOT NULL,
  check_in_date DATE NOT NULL,
  check_out_date DATE NOT NULL,
  guests INTEGER NOT NULL,
  total_price DECIMAL(10,2) NOT NULL,
  status TEXT DEFAULT 'pending' CHECK (status IN ('pending', 'confirmed', 'cancelled')),
  created_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc'::text, NOW()) NOT NULL
);

-- Create activity_bookings table
CREATE TABLE activity_bookings (
  id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
  user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE NOT NULL,
  activity_id UUID REFERENCES activities(id) ON DELETE CASCADE NOT NULL,
  booking_date DATE NOT NULL,
  participants INTEGER NOT NULL,
  total_price DECIMAL(10,2) NOT NULL,
  status TEXT DEFAULT 'pending' CHECK (status IN ('pending', 'confirmed', 'cancelled')),
  created_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc'::text, NOW()) NOT NULL
);

-- Create sports_school_bookings table
CREATE TABLE sports_school_bookings (
  id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
  user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE NOT NULL,
  sports_school_id UUID REFERENCES sports_schools(id) ON DELETE CASCADE NOT NULL,
  start_date DATE NOT NULL,
  students INTEGER NOT NULL,
  total_price DECIMAL(10,2) NOT NULL,
  status TEXT DEFAULT 'pending' CHECK (status IN ('pending', 'confirmed', 'cancelled')),
  created_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc'::text, NOW()) NOT NULL
);

-- Create equipment_rentals table
CREATE TABLE equipment_rentals (
  id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
  user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE NOT NULL,
  equipment_id UUID REFERENCES equipment(id) ON DELETE CASCADE NOT NULL,
  rental_start_date DATE NOT NULL,
  rental_end_date DATE NOT NULL,
  quantity INTEGER NOT NULL,
  total_price DECIMAL(10,2) NOT NULL,
  status TEXT DEFAULT 'pending' CHECK (status IN ('pending', 'confirmed', 'returned', 'cancelled')),
  created_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc'::text, NOW()) NOT NULL
);

-- Create pass_purchases table
CREATE TABLE pass_purchases (
  id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
  user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE NOT NULL,
  pass_id UUID REFERENCES activity_passes(id) ON DELETE CASCADE NOT NULL,
  purchase_date DATE NOT NULL,
  start_date DATE NOT NULL,
  end_date DATE NOT NULL,
  total_price DECIMAL(10,2) NOT NULL,
  status TEXT DEFAULT 'active' CHECK (status IN ('active', 'expired', 'cancelled')),
  created_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc'::text, NOW()) NOT NULL
);

-- Create indexes for better query performance
CREATE INDEX idx_accommodations_location ON accommodations(location_id);
CREATE INDEX idx_activities_location ON activities(location_id);
CREATE INDEX idx_activities_season ON activities(season);
CREATE INDEX idx_sports_schools_location ON sports_schools(location_id);
CREATE INDEX idx_sports_schools_season ON sports_schools(season);
CREATE INDEX idx_equipment_location ON equipment(location_id);
CREATE INDEX idx_equipment_season ON equipment(season);
CREATE INDEX idx_activity_passes_location ON activity_passes(location_id);
CREATE INDEX idx_accommodation_bookings_user ON accommodation_bookings(user_id);
CREATE INDEX idx_activity_bookings_user ON activity_bookings(user_id);
CREATE INDEX idx_sports_school_bookings_user ON sports_school_bookings(user_id);
CREATE INDEX idx_equipment_rentals_user ON equipment_rentals(user_id);
CREATE INDEX idx_pass_purchases_user ON pass_purchases(user_id);

-- Enable Row Level Security (RLS)
ALTER TABLE profiles ENABLE ROW LEVEL SECURITY;
ALTER TABLE locations ENABLE ROW LEVEL SECURITY;
ALTER TABLE accommodations ENABLE ROW LEVEL SECURITY;
ALTER TABLE activities ENABLE ROW LEVEL SECURITY;
ALTER TABLE sports_schools ENABLE ROW LEVEL SECURITY;
ALTER TABLE equipment ENABLE ROW LEVEL SECURITY;
ALTER TABLE activity_passes ENABLE ROW LEVEL SECURITY;
ALTER TABLE accommodation_bookings ENABLE ROW LEVEL SECURITY;
ALTER TABLE activity_bookings ENABLE ROW LEVEL SECURITY;
ALTER TABLE sports_school_bookings ENABLE ROW LEVEL SECURITY;
ALTER TABLE equipment_rentals ENABLE ROW LEVEL SECURITY;
ALTER TABLE pass_purchases ENABLE ROW LEVEL SECURITY;

-- Create RLS policies
-- Profiles: Users can read all profiles, but only update their own
CREATE POLICY "Public profiles are viewable by everyone" ON profiles
  FOR SELECT USING (true);

CREATE POLICY "Users can insert their own profile" ON profiles
  FOR INSERT WITH CHECK (auth.uid() = id);

CREATE POLICY "Users can update own profile" ON profiles
  FOR UPDATE USING (auth.uid() = id);

-- Locations: Public read access
CREATE POLICY "Locations are viewable by everyone" ON locations
  FOR SELECT USING (true);

-- Accommodations: Public read access
CREATE POLICY "Accommodations are viewable by everyone" ON accommodations
  FOR SELECT USING (true);

-- Activities: Public read access
CREATE POLICY "Activities are viewable by everyone" ON activities
  FOR SELECT USING (true);

-- Sports Schools: Public read access
CREATE POLICY "Sports schools are viewable by everyone" ON sports_schools
  FOR SELECT USING (true);

-- Equipment: Public read access
CREATE POLICY "Equipment is viewable by everyone" ON equipment
  FOR SELECT USING (true);

-- Activity Passes: Public read access
CREATE POLICY "Activity passes are viewable by everyone" ON activity_passes
  FOR SELECT USING (true);

-- Accommodation Bookings: Users can only view and manage their own bookings
CREATE POLICY "Users can view own accommodation bookings" ON accommodation_bookings
  FOR SELECT USING (auth.uid() = user_id);

CREATE POLICY "Users can create accommodation bookings" ON accommodation_bookings
  FOR INSERT WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can update own accommodation bookings" ON accommodation_bookings
  FOR UPDATE USING (auth.uid() = user_id);

-- Activity Bookings: Users can only view and manage their own bookings
CREATE POLICY "Users can view own activity bookings" ON activity_bookings
  FOR SELECT USING (auth.uid() = user_id);

CREATE POLICY "Users can create activity bookings" ON activity_bookings
  FOR INSERT WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can update own activity bookings" ON activity_bookings
  FOR UPDATE USING (auth.uid() = user_id);

-- Sports School Bookings: Users can only view and manage their own bookings
CREATE POLICY "Users can view own sports school bookings" ON sports_school_bookings
  FOR SELECT USING (auth.uid() = user_id);

CREATE POLICY "Users can create sports school bookings" ON sports_school_bookings
  FOR INSERT WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can update own sports school bookings" ON sports_school_bookings
  FOR UPDATE USING (auth.uid() = user_id);

-- Equipment Rentals: Users can only view and manage their own rentals
CREATE POLICY "Users can view own equipment rentals" ON equipment_rentals
  FOR SELECT USING (auth.uid() = user_id);

CREATE POLICY "Users can create equipment rentals" ON equipment_rentals
  FOR INSERT WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can update own equipment rentals" ON equipment_rentals
  FOR UPDATE USING (auth.uid() = user_id);

-- Pass Purchases: Users can only view and manage their own purchases
CREATE POLICY "Users can view own pass purchases" ON pass_purchases
  FOR SELECT USING (auth.uid() = user_id);

CREATE POLICY "Users can create pass purchases" ON pass_purchases
  FOR INSERT WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can update own pass purchases" ON pass_purchases
  FOR UPDATE USING (auth.uid() = user_id);

-- Create function to automatically create profile on user signup
CREATE OR REPLACE FUNCTION public.handle_new_user()
RETURNS trigger AS $$
BEGIN
  INSERT INTO public.profiles (id, email, full_name)
  VALUES (new.id, new.email, new.raw_user_meta_data->>'full_name');
  RETURN new;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- Create trigger to call handle_new_user function
CREATE TRIGGER on_auth_user_created
  AFTER INSERT ON auth.users
  FOR EACH ROW EXECUTE FUNCTION public.handle_new_user();

-- Create function to update updated_at timestamp
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = NOW();
    RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Create trigger for profiles table
CREATE TRIGGER update_profiles_updated_at BEFORE UPDATE ON profiles
  FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();
