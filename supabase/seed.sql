-- Insert sample locations
INSERT INTO locations (id, name, description, address, city, country, image_url) VALUES
  ('11111111-1111-1111-1111-111111111111', 'Alpine Mountain Resort', 'Premier mountain resort offering year-round activities with stunning alpine views', '123 Mountain Road', 'Aspen', 'USA', 'https://images.unsplash.com/photo-1551524164-687a55dd1126'),
  ('22222222-2222-2222-2222-222222222222', 'Coastal Adventure Park', 'Beachfront resort with water sports and mountain activities', '456 Ocean Drive', 'Whistler', 'Canada', 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4');

-- Insert sample accommodations
INSERT INTO accommodations (location_id, name, description, type, capacity, price_per_night, amenities, image_url) VALUES
  ('11111111-1111-1111-1111-111111111111', 'Deluxe Mountain Cabin', 'Cozy cabin with fireplace and mountain views', 'Cabin', 4, 250.00, ARRAY['WiFi', 'Kitchen', 'Fireplace', 'Hot Tub'], 'https://images.unsplash.com/photo-1542718610-a1d656d1884c'),
  ('11111111-1111-1111-1111-111111111111', 'Alpine Suite', 'Luxury suite with panoramic views', 'Suite', 2, 350.00, ARRAY['WiFi', 'Balcony', 'Mini Bar', 'Room Service'], 'https://images.unsplash.com/photo-1566073771259-6a8506099945'),
  ('11111111-1111-1111-1111-111111111111', 'Family Chalet', 'Spacious chalet perfect for families', 'Chalet', 8, 500.00, ARRAY['WiFi', 'Kitchen', 'Fireplace', 'Game Room', 'Hot Tub'], 'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4'),
  ('22222222-2222-2222-2222-222222222222', 'Beachfront Villa', 'Modern villa with ocean views', 'Villa', 6, 400.00, ARRAY['WiFi', 'Kitchen', 'Pool', 'Beach Access'], 'https://images.unsplash.com/photo-1602343168117-bb8ffe3e2e9f');

-- Insert sample winter activities
INSERT INTO activities (location_id, name, description, season, difficulty_level, duration_hours, price, max_participants, image_url) VALUES
  ('11111111-1111-1111-1111-111111111111', 'Guided Ski Tour', 'Explore backcountry trails with expert guides', 'winter', 'Intermediate', 4.00, 150.00, 8, 'https://images.unsplash.com/photo-1551698618-1dfe5d97d256'),
  ('11111111-1111-1111-1111-111111111111', 'Snowboarding Adventure', 'Full-day snowboarding experience', 'winter', 'Advanced', 6.00, 180.00, 6, 'https://images.unsplash.com/photo-1551524164-687a55dd1126'),
  ('11111111-1111-1111-1111-111111111111', 'Ice Climbing', 'Thrilling ice climbing experience', 'winter', 'Advanced', 3.00, 200.00, 4, 'https://images.unsplash.com/photo-1522163182402-834f871fd851'),
  ('11111111-1111-1111-1111-111111111111', 'Snowshoeing Trek', 'Peaceful winter hiking experience', 'winter', 'Beginner', 2.50, 75.00, 12, 'https://images.unsplash.com/photo-1551632811-561732d1e306');

-- Insert sample summer activities
INSERT INTO activities (location_id, name, description, season, difficulty_level, duration_hours, price, max_participants, image_url) VALUES
  ('11111111-1111-1111-1111-111111111111', 'Mountain Biking', 'Exciting trail riding through alpine terrain', 'summer', 'Intermediate', 3.00, 120.00, 10, 'https://images.unsplash.com/photo-1544191696-102dbdaeeaa0'),
  ('11111111-1111-1111-1111-111111111111', 'Rock Climbing', 'Scale natural rock formations', 'summer', 'Intermediate', 4.00, 140.00, 8, 'https://images.unsplash.com/photo-1522163182402-834f871fd851'),
  ('11111111-1111-1111-1111-111111111111', 'Hiking Adventure', 'Guided hiking through scenic trails', 'summer', 'Beginner', 4.00, 80.00, 15, 'https://images.unsplash.com/photo-1551632811-561732d1e306'),
  ('22222222-2222-2222-2222-222222222222', 'Kayaking Tour', 'Explore coastal waters by kayak', 'summer', 'Beginner', 3.00, 100.00, 12, 'https://images.unsplash.com/photo-1544551763-46a013bb70d5');

-- Insert all-season activities
INSERT INTO activities (location_id, name, description, season, difficulty_level, duration_hours, price, max_participants, image_url) VALUES
  ('11111111-1111-1111-1111-111111111111', 'Spa Day', 'Relaxing spa treatments and wellness', 'all', 'Beginner', 3.00, 200.00, 4, 'https://images.unsplash.com/photo-1544161515-4ab6ce6db874'),
  ('22222222-2222-2222-2222-222222222222', 'Yoga Retreat', 'Mindfulness and yoga sessions', 'all', 'Beginner', 2.00, 90.00, 20, 'https://images.unsplash.com/photo-1506126613408-eca07ce68773');

-- Insert sports schools
INSERT INTO sports_schools (location_id, name, description, sport_type, season, skill_level, duration_days, price, max_students, image_url) VALUES
  ('11111111-1111-1111-1111-111111111111', 'Alpine Ski School - Beginner', 'Learn to ski with certified instructors', 'Skiing', 'winter', 'Beginner', 3, 450.00, 10, 'https://images.unsplash.com/photo-1551698618-1dfe5d97d256'),
  ('11111111-1111-1111-1111-111111111111', 'Alpine Ski School - Advanced', 'Master advanced skiing techniques', 'Skiing', 'winter', 'Advanced', 5, 800.00, 8, 'https://images.unsplash.com/photo-1551698618-1dfe5d97d256'),
  ('11111111-1111-1111-1111-111111111111', 'Snowboard Academy', 'Complete snowboarding course', 'Snowboarding', 'winter', 'Intermediate', 4, 600.00, 12, 'https://images.unsplash.com/photo-1551524164-687a55dd1126'),
  ('11111111-1111-1111-1111-111111111111', 'Mountain Bike School', 'Learn mountain biking skills', 'Mountain Biking', 'summer', 'Beginner', 3, 400.00, 10, 'https://images.unsplash.com/photo-1544191696-102dbdaeeaa0'),
  ('22222222-2222-2222-2222-222222222222', 'Surfing School', 'Learn to surf from professionals', 'Surfing', 'summer', 'Beginner', 5, 550.00, 8, 'https://images.unsplash.com/photo-1502680390469-be75c86b636f');

-- Insert equipment
INSERT INTO equipment (location_id, name, description, category, season, size, price_per_day, quantity_available, image_url) VALUES
  ('11111111-1111-1111-1111-111111111111', 'Performance Skis', 'High-quality downhill skis', 'Skis', 'winter', 'Adult', 45.00, 50, 'https://images.unsplash.com/photo-1551698618-1dfe5d97d256'),
  ('11111111-1111-1111-1111-111111111111', 'Junior Skis', 'Skis for children', 'Skis', 'winter', 'Child', 30.00, 30, 'https://images.unsplash.com/photo-1551698618-1dfe5d97d256'),
  ('11111111-1111-1111-1111-111111111111', 'Snowboard Package', 'Complete snowboard setup', 'Snowboard', 'winter', 'Adult', 50.00, 40, 'https://images.unsplash.com/photo-1551524164-687a55dd1126'),
  ('11111111-1111-1111-1111-111111111111', 'Ski Boots', 'Comfortable ski boots', 'Boots', 'winter', 'Various', 20.00, 100, 'https://images.unsplash.com/photo-1544161515-4ab6ce6db874'),
  ('11111111-1111-1111-1111-111111111111', 'Ski Helmet', 'Safety helmet', 'Safety', 'winter', 'Adult', 15.00, 80, 'https://images.unsplash.com/photo-1567142924528-23e8fe1b2a4c'),
  ('11111111-1111-1111-1111-111111111111', 'Mountain Bike', 'Premium trail bike', 'Bike', 'summer', 'Adult', 55.00, 25, 'https://images.unsplash.com/photo-1544191696-102dbdaeeaa0'),
  ('11111111-1111-1111-1111-111111111111', 'Climbing Gear Set', 'Complete climbing equipment', 'Climbing', 'summer', 'Adult', 40.00, 20, 'https://images.unsplash.com/photo-1522163182402-834f871fd851'),
  ('22222222-2222-2222-2222-222222222222', 'Kayak', 'Single person kayak', 'Water Sports', 'summer', 'Adult', 35.00, 30, 'https://images.unsplash.com/photo-1544551763-46a013bb70d5'),
  ('22222222-2222-2222-2222-222222222222', 'Surfboard', 'Beginner-friendly surfboard', 'Water Sports', 'summer', 'Adult', 30.00, 20, 'https://images.unsplash.com/photo-1502680390469-be75c86b636f');

-- Insert activity passes
INSERT INTO activity_passes (location_id, name, description, season, duration_days, price, benefits, image_url) VALUES
  ('11111111-1111-1111-1111-111111111111', 'Winter Weekend Pass', 'Full access to winter activities for a weekend', 'winter', 3, 300.00, ARRAY['Unlimited ski lift access', '10% discount on rentals', 'Free ski storage', 'Priority booking'], 'https://images.unsplash.com/photo-1551698618-1dfe5d97d256'),
  ('11111111-1111-1111-1111-111111111111', 'Winter Week Pass', 'Complete winter experience for a week', 'winter', 7, 650.00, ARRAY['Unlimited ski lift access', '20% discount on rentals', 'Free ski storage', 'Free group lessons', 'Spa access'], 'https://images.unsplash.com/photo-1551698618-1dfe5d97d256'),
  ('11111111-1111-1111-1111-111111111111', 'Summer Adventure Pass', 'All summer activities included', 'summer', 7, 500.00, ARRAY['Access to all trails', '15% discount on equipment', 'Free guided tour', 'Fitness center access'], 'https://images.unsplash.com/photo-1551632811-561732d1e306'),
  ('11111111-1111-1111-1111-111111111111', 'Annual All-Season Pass', 'Year-round access to everything', 'all', 365, 2500.00, ARRAY['Unlimited access to all activities', '30% discount on all services', 'Free equipment storage', 'VIP booking', 'Bring a friend free once per month'], 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4'),
  ('22222222-2222-2222-2222-222222222222', 'Coastal Summer Pass', 'Beach and water activities access', 'summer', 7, 450.00, ARRAY['All water sports access', '15% discount on lessons', 'Free wetsuit rental', 'Beach club access'], 'https://images.unsplash.com/photo-1502680390469-be75c86b636f');
