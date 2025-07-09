# E-Learning Backend Setup

This is the Strapi backend for the e-learning platform.

## Prerequisites

- Node.js (version 18 or higher)
- npm or yarn

## Setup Instructions

1. **Navigate to the backend directory:**
   ```bash
   cd e-learning-backend
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the development server:**
   ```bash
   npm run dev
   ```

4. **Access the Strapi admin panel:**
   - Open your browser and go to: http://localhost:1337/admin
   - Create your first admin user when prompted

## Content Types Created

The following content types have been set up:

- **Course**: Main course content with title, description, price, category, etc.
- **Lesson**: Individual lessons belonging to courses
- **Enrollment**: Student course enrollments
- **Review**: Course reviews and ratings
- **User Profile**: Extended user profile information

## API Endpoints

Once running, the following endpoints will be available:

- `GET /api/courses` - Get all courses
- `GET /api/courses/:id` - Get specific course
- `GET /api/lessons` - Get all lessons
- `GET /api/enrollments` - Get enrollments
- `GET /api/reviews` - Get reviews

## Adding Sample Data

After starting the server and creating an admin user:

1. Go to http://localhost:1337/admin
2. Navigate to Content Manager
3. Create some course entries manually, or
4. Use the API to bulk import data

## Environment Variables

The backend uses the following environment variables (already configured in .env):

- `HOST`: Server host (0.0.0.0)
- `PORT`: Server port (1337)
- `DATABASE_CLIENT`: Database type (sqlite)
- `DATABASE_FILENAME`: Database file path
- `JWT_SECRET`: JWT secret for authentication

## Frontend Integration

The frontend is configured to connect to:
- Local development: http://localhost:1337
- Production: https://e-learning-backend-h0gx.onrender.com

To use the local backend, update the NEXT_PUBLIC_STRAPI_URL in the frontend's .env.local file.
