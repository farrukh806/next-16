# DevEvent - Event Management Platform

A modern, full-stack web application built with Next.js 16 for discovering, exploring, and booking developer events worldwide. DevEvent serves as a centralized hub for hackathons, meetups, and conferences, providing an intuitive interface for event organizers and attendees.

## 🚀 Features

### 1. **Event Discovery & Browsing**

- **Featured Events Display**: Homepage showcases all available events in a visually appealing grid layout
- **Event Cards**: Each event card displays key information including:
  - Event poster/image
  - Event title
  - Location with pin icon
  - Date and time with calendar and clock icons
- **Smooth Navigation**: Clickable event cards that navigate to detailed event pages
- **Responsive Design**: Optimized layouts for desktop, tablet, and mobile devices

### 2. **Event Detail Pages**

- **Comprehensive Event Information**:
  - High-resolution event banner image
  - Full event description and overview
  - Detailed event metadata:
    - Date and time
    - Location and venue
    - Event mode (online/offline/hybrid)
    - Target audience
  - Event agenda with structured timeline
  - Organizer information
  - Event tags for categorization
- **Image Optimization**: Automatic image optimization using Next.js Image component with Cloudinary integration
- **Similar Events Recommendation**: Intelligent algorithm that suggests similar events based on shared tags

### 3. **Event Booking System**

- **Email-based Booking**: Simple and secure booking process using email addresses
- **Real-time Validation**: Client-side and server-side email validation
- **Success Feedback**: Toast notifications for booking confirmation
- **Booking Management**: All bookings are stored in MongoDB with proper event references
- **Duplicate Prevention**: Server-side validation ensures data integrity

### 4. **Event Creation & Management**

- **Event Creation API**: RESTful API endpoint for creating new events
- **Image Upload**: Integrated Cloudinary service for event image hosting
- **Automatic Slug Generation**: URL-friendly slugs generated automatically from event titles
- **Data Validation**: Comprehensive validation for all event fields including:
  - Title (max 100 characters)
  - Description (max 1000 characters)
  - Overview (max 500 characters)
  - Date and time normalization
  - Required agenda items
  - Required tags
- **Event Mode Support**: Support for online, offline, and hybrid events

### 5. **Advanced UI/UX Features**

- **Interactive Light Rays Effect**:
  - WebGL-powered animated light rays background
  - Mouse-following interaction
  - Customizable colors, speed, and spread
  - Performance-optimized with intersection observer
- **Modern Typography**: Custom Google Fonts (Schibsted Grotesk and Martian Mono)
- **Toast Notifications**: User-friendly feedback system using react-hot-toast
- **Loading States**: Proper loading indicators for better user experience
- **Smooth Scrolling**: Enhanced navigation with smooth scroll behavior

### 6. **Navigation & Layout**

- **Responsive Navbar**:
  - Logo and branding
  - Navigation links (Home, Events, New Event)
  - Mobile-friendly design
- **Explore Button**: Call-to-action button with animated arrow icon
- **Sticky Navigation**: Persistent navigation across all pages

### 7. **Data Management**

- **MongoDB Integration**:
  - Mongoose ODM for schema management
  - Connection pooling and caching
  - Optimized database queries with indexes
- **Data Models**:
  - Event model with comprehensive validation
  - Booking model with event reference
- **Automatic Timestamps**: Created and updated timestamps for all records

### 8. **Performance Optimizations**

- **Next.js 16 Features**:
  - React Server Components
  - Built-in caching with cache tags and cache lifetime
  - Automatic code splitting
  - Image optimization
- **Database Indexing**:
  - Unique index on event slugs
  - Compound indexes for common queries
- **Efficient Data Fetching**: Optimized API calls with proper error handling

### 9. **Developer Experience**

- **TypeScript**: Full type safety across the application
- **ESLint & Prettier**: Code quality and formatting tools
- **Husky Git Hooks**: Pre-commit hooks for code quality
- **Modular Architecture**: Well-organized folder structure
- **Server Actions**: Type-safe server-side operations

### 10. **API Endpoints**

- **GET /api/events**: Fetch all events (sorted by creation date)
- **POST /api/events**: Create a new event with image upload
- **GET /api/events/[slug]**: Get a specific event by slug

## 🛠️ Tech Stack

### Frontend

- **Next.js 16.0.3**: React framework with App Router
- **React 19.2.0**: UI library
- **TypeScript 5**: Type-safe development
- **Tailwind CSS 4**: Utility-first CSS framework
- **OGL**: WebGL library for light rays effect
- **Lucide React**: Icon library
- **React Hot Toast**: Toast notification system

### Backend

- **Next.js API Routes**: Serverless API endpoints
- **MongoDB**: NoSQL database
- **Mongoose 8.20.1**: MongoDB object modeling
- **Cloudinary**: Image hosting and optimization

### Development Tools

- **ESLint**: Code linting
- **Prettier**: Code formatting
- **Husky**: Git hooks
- **Turbopack**: Fast bundler for development

## 📁 Project Structure

```
dev-event/
├── app/                          # Next.js App Router directory
│   ├── api/                      # API routes
│   │   └── events/              # Event-related endpoints
│   │       ├── [slug]/          # Dynamic route for individual events
│   │       └── route.ts         # Events CRUD operations
│   ├── components/              # React components
│   │   ├── BookEvent.tsx        # Event booking form
│   │   ├── EventAgenda.tsx      # Event agenda display
│   │   ├── EventCard.tsx        # Event card component
│   │   ├── EventDetailItem.tsx  # Event detail metadata item
│   │   ├── EventTags.tsx        # Event tags display
│   │   ├── ExploreBtn.tsx       # Explore button component
│   │   ├── LightRays.tsx        # WebGL light rays effect
│   │   └── Navbar.tsx           # Navigation bar
│   ├── events/                  # Event pages
│   │   ├── [slug]/              # Dynamic event detail page
│   │   └── loading.tsx          # Loading state
│   ├── globals.css              # Global styles
│   ├── layout.tsx               # Root layout
│   ├── loading.tsx              # Global loading state
│   └── page.tsx                 # Homepage
├── database/                     # Database models
│   ├── booking.model.ts         # Booking schema
│   ├── event.model.ts           # Event schema
│   └── index.ts                 # Model exports
├── lib/                          # Utility libraries
│   ├── actions/                 # Server actions
│   │   ├── booking.actions.ts   # Booking operations
│   │   └── event.actions.ts     # Event operations
│   ├── constants.ts             # Application constants
│   ├── fetch-helper.ts          # API fetch utilities
│   ├── mongodb.ts               # MongoDB connection
│   └── utils.ts                 # General utilities
├── service/                      # Service layer
│   └── event.ts                 # Event service
├── types/                        # TypeScript type definitions
│   └── api.ts                   # API response types
├── public/                       # Static assets
│   ├── events/                  # Event images
│   └── icons/                   # Icon assets
├── components.json               # Component configuration
├── next.config.ts                # Next.js configuration
├── package.json                  # Dependencies
├── tsconfig.json                 # TypeScript configuration
└── README.md                     # Project documentation
```

## 🚦 Getting Started

### Prerequisites

- Node.js 18+ installed
- MongoDB database (local or cloud instance)
- Cloudinary account (for image uploads)
- Git

### Installation

1. **Clone the repository**

   ```bash
   git clone <repository-url>
   cd dev-event
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Set up environment variables**

   Create a `.env.local` file in the root directory:

   ```env
   MONGODB_URI=your_mongodb_connection_string
   CLOUDINARY_CLOUD_NAME=your_cloudinary_cloud_name
   CLOUDINARY_API_KEY=your_cloudinary_api_key
   CLOUDINARY_API_SECRET=your_cloudinary_api_secret
   ```

4. **Run the development server**

   ```bash
   npm run dev
   ```

5. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📝 Available Scripts

- `npm run dev`: Start development server with Turbopack
- `npm run build`: Build the application for production
- `npm start`: Start the production server
- `npm run lint`: Run ESLint to check code quality
- `npm run lint:fix`: Fix ESLint errors automatically
- `npm run format`: Format code using Prettier
- `npm run format:check`: Check code formatting without making changes

## 🗄️ Database Models

### Event Model

```typescript
{
  title: string (max 100 chars)
  slug: string (auto-generated, unique)
  description: string (max 1000 chars)
  overview: string (max 500 chars)
  image: string (Cloudinary URL)
  venue: string
  location: string
  date: string (ISO format)
  time: string (HH:MM format)
  mode: 'online' | 'offline' | 'hybrid'
  audience: string
  agenda: string[] (at least 1 item)
  organizer: string
  tags: string[] (at least 1 tag)
  createdAt: Date
  updatedAt: Date
}
```

### Booking Model

```typescript
{
  eventId: ObjectId (references Event)
  email: string (validated)
  createdAt: Date
  updatedAt: Date
}
```

## 🔌 API Endpoints

### GET /api/events

Fetch all events sorted by creation date (newest first).

**Response:**

```json
{
  "data": IEvent[],
  "success": true
}
```

### POST /api/events

Create a new event.

**Request:** FormData with the following fields:

- `title`: string
- `description`: string
- `overview`: string
- `image`: File
- `venue`: string
- `location`: string
- `date`: string
- `time`: string
- `mode`: 'online' | 'offline' | 'hybrid'
- `audience`: string
- `agenda`: JSON string array
- `organizer`: string
- `tags`: JSON string array

**Response:**

```json
{
  "event": IEvent,
  "message": "Event created successfully"
}
```

### GET /api/events/[slug]

Get a specific event by slug.

**Response:**

```json
{
  "data": IEvent | null,
  "success": boolean,
  "message": string
}
```

## 🎨 Key Components

### EventCard

Displays event information in a card format with image, title, location, date, and time. Clickable to navigate to event details.

### BookEvent

Client-side booking form component that handles email input and submission, with success/error feedback.

### LightRays

WebGL-powered animated background effect with customizable properties:

- Ray origin position
- Color and speed
- Mouse interaction
- Performance optimizations

### EventAgenda

Displays event agenda items in a structured list format.

### EventTags

Shows event tags as pill-shaped badges for easy categorization.

## 🔒 Security Features

- Email validation on both client and server
- MongoDB injection prevention via Mongoose
- Environment variable protection
- Input sanitization and validation
- Secure image upload via Cloudinary

## 🚀 Deployment

The application can be deployed to any platform that supports Next.js:

1. **Vercel** (Recommended)

   - Connect your GitHub repository
   - Add environment variables
   - Deploy automatically

2. **Other Platforms**
   - Build the application: `npm run build`
   - Set environment variables
   - Start the server: `npm start`

## 📄 License

This project is private and proprietary.

## 🤝 Contributing

This is a private project. For contributions, please contact the project maintainers.

## 📧 Support

For issues, questions, or suggestions, please open an issue in the repository or contact the development team.

---

Built with ❤️ using Next.js 16 and modern web technologies.
