# Agent Instructions for Full Stack Template

## Overview
This is a complete full-stack template built with modern technologies for rapid development of CRUD applications with authentication.

## Tech Stack

### Frontend
- **React 18** with TypeScript
- **Vite** for fast development and building
- **Tailwind CSS** for utility-first styling
- **ShadCN UI** for beautiful, accessible components
- **React Router** for client-side routing
- **Axios** for API calls
- **Sonner** for toast notifications
- **Lucide React** for icons

### Backend
- **Express.js** REST API server
- **Prisma ORM** with SQLite database
- **JWT** authentication with HTTP-only cookies
- **bcryptjs** for password hashing
- **CORS** enabled for cross-origin requests

### Development
- **GitHub Codespaces** ready with devcontainer
- **Concurrent** scripts for running frontend and backend together
- **Nodemon** for backend development

## Project Structure

```
/
├── .devcontainer/           # GitHub Codespaces configuration
├── backend/                 # Express.js API server
│   ├── prisma/             # Database schema and migrations
│   ├── routes/             # API route handlers
│   ├── controllers/        # Business logic (if needed)
│   └── index.js            # Express server setup
├── frontend/               # React application
│   ├── src/
│   │   ├── components/     # Reusable UI components
│   │   ├── pages/          # Page components
│   │   ├── hooks/          # Custom React hooks
│   │   ├── lib/            # Utility functions and API client
│   │   └── types/          # TypeScript type definitions
│   └── tailwind.config.js  # Tailwind configuration
├── agent/                  # Agent instructions
└── package.json            # Root package.json with scripts
```

## Getting Started

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Set up the database:**
   ```bash
   cd backend
   npx prisma generate
   npx prisma db push
   ```

3. **Start development servers:**
   ```bash
   npm run dev
   ```
   This runs both frontend (port 3000) and backend (port 5000) concurrently.

## API Endpoints

### Authentication (`/api/auth`)
- `POST /register` - Register a new user
- `POST /login` - Login user and set cookie
- `GET /me` - Get current user (requires auth)
- `POST /logout` - Clear auth cookie

### Posts (`/api/posts`)
- `GET /posts` - Get all posts
- `GET /posts/:id` - Get single post
- `POST /posts` - Create new post (requires auth)
- `PUT /posts/:id` - Update post (requires auth, owner only)
- `DELETE /posts/:id` - Delete post (requires auth, owner only)

## Key Features

### Authentication
- JWT tokens stored in HTTP-only cookies for security
- Password hashing with bcryptjs
- Protected routes on both frontend and backend
- Automatic token verification middleware

### CRUD Operations
- Complete Create, Read, Update, Delete for posts
- User ownership validation
- Optimistic updates on frontend
- Error handling with toast notifications

### UI/UX
- Responsive design with Tailwind CSS
- Beautiful components from ShadCN UI
- Loading states and error handling
- Toast notifications for user feedback
- Icons from Lucide React

## Development Notes

### Database
- SQLite database stored in `backend/prisma/dev.db`
- Prisma schema in `backend/prisma/schema.prisma`
- To reset database: `npx prisma db push --force-reset`
- To view database: `npx prisma studio`

### Frontend
- Axios configured with base URL and credentials
- Custom hooks for authentication and posts management
- TypeScript for type safety
- Protected and public route components

### Backend
- Express middleware for CORS, JSON parsing, and cookies
- JWT secret configurable via environment variables
- Error handling middleware
- Graceful shutdown handling

## Customization

### Adding New Models
1. Update Prisma schema in `backend/prisma/schema.prisma`
2. Run `npx prisma generate` and `npx prisma db push`
3. Create new routes in `backend/routes/`
4. Add corresponding hooks and types in frontend

### Styling
- Modify `frontend/tailwind.config.js` for theme customization
- Custom CSS variables in `frontend/src/index.css`
- ShadCN components can be customized in `frontend/src/components/ui/`

### Environment Variables
Create `.env` files in backend for:
- `JWT_SECRET` - Secret key for JWT tokens
- `DATABASE_URL` - Database connection string (optional for SQLite)

## Deployment Considerations

### Frontend
- Build with `npm run frontend:build`
- Serve static files from `frontend/dist`
- Configure API proxy in production

### Backend
- Set `NODE_ENV=production`
- Use environment variables for sensitive data
- Configure CORS for production domain
- Use production database (PostgreSQL, MySQL, etc.)

This template provides a solid foundation for building full-stack applications with modern best practices and can be easily extended for specific project needs.