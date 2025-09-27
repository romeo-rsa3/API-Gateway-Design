# CampusCompass API Gateway

## Overview
This is the Express Gateway for the CampusCompass application. It forwards requests from the frontend to the backend (port 5000 in dev).

## Features
- CORS configured for frontend
- JWT auth on /users and /courses
- Separate pipelines for auth, users, courses, and default routes
- Logging enabled

## Setup
1. Install dependencies:
   npm install

2. Copy the environment file for your environment:
   cp .env.development .env

3. Run the gateway:
   npm run dev

4. Access endpoints via:
   http://localhost:8080/auth/...
   http://localhost:8080/users/...
   http://localhost:8080/courses/...
