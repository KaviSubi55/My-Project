# Alpine Resort - Multi-Season Booking Platform

A comprehensive full-stack booking platform for a multi-season resort, featuring accommodations, activities, sports schools, equipment rentals, and activity passes. Built with Next.js, TypeScript, Tailwind CSS, and Supabase.

## Features

### Core Functionality
- **User Authentication**: Secure registration and login system with Supabase Auth
- **Accommodation Booking**: Browse and book cabins, suites, chalets, and villas with date selection and availability checking
- **Activity Booking**: Book seasonal activities (winter and summer) with filtering by season and difficulty level
- **Sports School Registration**: Enroll in sports schools for various skill levels
- **Equipment Rental**: Rent sports equipment with daily pricing
- **Activity Passes**: Purchase multi-day passes with exclusive benefits
- **User Account Management**: Profile management and booking history
- **Responsive Design**: Fully responsive across desktop, tablet, and mobile devices

### Technical Features
- Multi-season support (Winter, Summer, All-season)
- Real-time availability checking
- Complex database relationships with PostgreSQL
- Row-level security (RLS) policies
- Automatic profile creation on signup
- Date-based booking calculations

## Tech Stack

### Frontend
- **Next.js 16** - React framework with App Router
- **TypeScript** - Type-safe development
- **Tailwind CSS 4** - Utility-first CSS framework
- **React Hooks** - State management and side effects

### Backend
- **Supabase** - Backend as a Service
- **PostgreSQL** - Relational database
- **Supabase Auth** - Authentication system
- **Row Level Security** - Database security

### Additional Libraries
- `@supabase/supabase-js` - Supabase client
- `date-fns` - Date manipulation
- `clsx` - Utility for className management

## Getting Started

### Prerequisites
- Node.js 18+ and npm
- A Supabase account (free tier works)

### 1. Clone the Repository

```bash
git clone <your-repo-url>
cd My-Project
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Set Up Supabase

#### Create a Supabase Project
1. Go to [supabase.com](https://supabase.com) and create a new project
2. Wait for the project to be provisioned

#### Set Up the Database
1. In your Supabase project, go to the SQL Editor
2. Copy and paste the contents of `supabase/schema.sql`
3. Run the SQL to create all tables, indexes, and RLS policies
4. Copy and paste the contents of `supabase/seed.sql`
5. Run the SQL to populate the database with sample data

#### Get Your Supabase Credentials
1. In your Supabase project settings, go to API
2. Copy the Project URL and anon/public key

### 4. Configure Environment Variables

Create a `.env.local` file in the root directory:

```bash
cp .env.local.example .env.local
```

Edit `.env.local` and add your Supabase credentials:

```
NEXT_PUBLIC_SUPABASE_URL=your_supabase_project_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
```

### 5. Run the Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to see the application.

## Project Structure

```
My-Project/
├── app/                          # Next.js App Router
│   ├── accommodations/          # Accommodation pages
│   │   ├── [id]/               # Individual accommodation detail
│   │   └── page.tsx            # Accommodations listing
│   ├── activities/             # Activity pages
│   ├── sports-schools/         # Sports school pages
│   ├── equipment/              # Equipment rental pages
│   ├── passes/                 # Activity passes pages
│   ├── account/                # User account pages
│   │   ├── bookings/          # Booking history
│   │   └── page.tsx           # Profile management
│   ├── login/                  # Login page
│   ├── register/               # Registration page
│   ├── layout.tsx              # Root layout
│   ├── page.tsx                # Home page
│   └── globals.css             # Global styles
├── components/                  # React components
│   ├── MainLayout.tsx          # Main layout wrapper
│   └── Navigation.tsx          # Navigation component
├── lib/                         # Utilities and configurations
│   ├── contexts/
│   │   └── AuthContext.tsx    # Authentication context
│   ├── supabase/
│   │   ├── client.ts          # Supabase client
│   │   └── database.types.ts  # Database type definitions
│   └── utils.ts                # Utility functions
├── supabase/                    # Database files
│   ├── schema.sql              # Database schema
│   └── seed.sql                # Sample data
└── public/                      # Static files
```

## Database Schema

### Main Tables
- **profiles** - User profile information
- **locations** - Resort locations
- **accommodations** - Lodging options
- **activities** - Seasonal activities
- **sports_schools** - Training programs
- **equipment** - Rental equipment
- **activity_passes** - Multi-day passes

### Booking Tables
- **accommodation_bookings** - Accommodation reservations
- **activity_bookings** - Activity reservations
- **sports_school_bookings** - Sports school enrollments
- **equipment_rentals** - Equipment rental records
- **pass_purchases** - Pass purchase history

## Key Features Implementation

### Authentication
- User registration with email and password
- Automatic profile creation via database trigger
- Secure session management
- Protected routes for authenticated users

### Booking System
- Date range selection for accommodations
- Availability checking
- Real-time price calculation
- Guest/participant capacity validation
- Booking confirmation and history

### Multi-Season Support
- Filter activities by season (winter/summer/all)
- Season-specific equipment
- Seasonal passes

### User Account
- Profile management (name, phone)
- View all bookings across categories
- Booking status tracking

## Acceptance Criteria ✓

- ✅ Fully responsive design functioning across desktop, tablet, and mobile devices
- ✅ Complete user authentication system with secure registration and login
- ✅ Functional booking system with date selection, availability checking, and confirmation
- ✅ Database with locations and multiple accommodation/activity options

## Future Enhancements

- Payment integration (Stripe)
- Email notifications
- Booking cancellation
- Review and rating system
- Admin dashboard
- Calendar view for bookings
- Real-time availability updates
- Multi-language support

## Development

### Build for Production

```bash
npm run build
npm start
```

### Linting

```bash
npm run lint
```

## Deployment

### Vercel (Recommended)
1. Push your code to GitHub
2. Import the project to Vercel
3. Add environment variables
4. Deploy

### Other Platforms
The app can be deployed to any platform that supports Next.js, such as:
- Netlify
- Railway
- AWS
- DigitalOcean

## Contributing

This is a portfolio/educational project. Feel free to fork and customize for your own needs.

## License

MIT

## Contact

For questions or feedback, please open an issue in the repository.
