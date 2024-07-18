# HolaAmigo

HolaAmigo is a chat application built using Next.js. This application leverages a modern tech stack to provide a seamless, real-time chatting experience.

## Table of Contents

- [Features](#features)
- [Tech Stack](#tech-stack)
- [Getting Started](#getting-started)
- [Scripts](#scripts)
- [Environment Variables](#environment-variables)
- [License](#license)

## Features

- Real-time chat functionality
- User authentication with NextAuth
- Responsive UI with Tailwind CSS
- Image uploads with Cloudinary
- Form handling with React Hook Form
- Toast notifications with React Hot Toast

## Tech Stack

- **Framework**: Next.js
- **Styling**: Tailwind CSS
- **Authentication**: NextAuth.js
- **Database**: Prisma with MongoDB
- **State Management**: React Hook Form
- **Notifications**: React Hot Toast
- **Image Handling**: Next-Cloudinary
- **Real-time Updates**: Pusher

## Getting Started

### Prerequisites

- Node.js
- MongoDB

### Installation

1. Clone the repository:

   ```sh
   git clone https://github.com/your-username/hola-amigo.git
   cd hola-amigo
   ```

2. Install dependencies:

   ```sh
   npm install
   ```

3. Set up the database:

   ```sh
   npx prisma migrate dev
   ```

4. Generate Prisma Client:
   ```sh
   npx prisma generate
   ```

### Running the Application

1. Start the development server:

   ```sh
   npm run dev
   ```

2. Open your browser and navigate to `http://localhost:3000`.

## Scripts

- `postinstall`: Generates Prisma client
- `dev`: Starts the development server
- `build`: Generates Prisma client and builds the application
- `start`: Starts the application
- `lint`: Runs ESLint

## Environment Variables

Create a `.env` file in the root directory and add the following environment variables:

```env
DATABASE_URL=your_database_url
NEXTAUTH_SECRET="NEXTAUTH_SECRET"

GITHUB_ID=your_github_id
GITHUB_SECRET=your_github_secret

GOOGLE_CLIENT_ID=your_google_client_id
GOOGLE_CLIENT_SECRET=your_google_client_secret

NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME=your_next_cloudinary_cloud_name
NEXT_CLOUDINARY_PRESET=your_next_cloudinary_preset

NEXT_PUBLIC_PUSHER_APP_KEY=your_pusher_app_key
PUSHER_APP_ID=your_pusher_app_id
PUSHER_SECRET=your_pusher_secret
```

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
