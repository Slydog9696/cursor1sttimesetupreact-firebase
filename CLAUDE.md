# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a React + Firebase tutorial project following the "Cursor AI: Complete Guide" tutorial. The project demonstrates setting up a full-stack web application with React frontend, Firebase backend, GitHub integration, and Firebase Hosting deployment.

**Tutorial Source**: https://youtu.be/2WnxKCFAXAM  
**Google Doc Guide**: https://docs.google.com/document/d/1kuxYnAdEEJOWMavFoXkXmjT0zqdT0L_2g56T67NxzvM/edit?tab=t.0

## Development Commands

- `npm start` - Runs the app in development mode on http://localhost:3000
- `npm test` - Launches the test runner in interactive watch mode
- `npm run build` - Builds the app for production to the `build` folder
- `npm run eject` - One-way operation to expose all configuration files (avoid unless necessary)

## Firebase Commands

- `firebase login` - Authenticate with Firebase CLI
- `firebase init` - Initialize Firebase in project (choose Hosting, set public directory to `build`)
- `firebase deploy` - Deploy to Firebase Hosting
- `firebase serve` - Test Firebase Hosting locally

## Project Setup Status

### ✅ Completed Steps
1. Created project directory
2. Initialized React app with `npx create-react-app .`
3. Basic project structure established

### 🔄 Remaining Setup Steps
1. **GitHub Integration**
   - Initialize Git repository: `git init`
   - Create README: `echo "# 1sttimesetupreact-firebase" >> README.md`
   - Add and commit: `git add README.md && git commit -m "first commit"`
   - Set main branch: `git branch -M main`
   - Add remote origin and push to GitHub

2. **Firebase Setup**
   - Install Firebase: `npm install firebase`
   - Create Firebase project at https://console.firebase.google.com
   - Add web app to Firebase project
   - Create `src/firebase.js` configuration file
   - Install Firebase CLI: `npm install -g firebase-tools`

3. **Deployment**
   - Build for production: `npm run build`
   - Deploy to Firebase Hosting: `firebase deploy`

## Firebase Configuration

When setting up Firebase, create `src/firebase.js` with:

```javascript
// src/firebase.js
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_AUTH_DOMAIN",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_STORAGE_BUCKET",
  messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
  appId: "YOUR_APP_ID"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

export { db, auth };
```

## Project Architecture

### Current Structure
- Standard Create React App boilerplate with React 19.1.1
- Ready for Firebase integration with related dependencies already installed
- CLI tooling dependencies suggest potential command-line utilities

### Intended Architecture
- **Frontend**: React application with modern hooks and concurrent features
- **Backend**: Firebase Firestore for database, Firebase Auth for authentication
- **Hosting**: Firebase Hosting for production deployment
- **Version Control**: Git with GitHub remote repository
- **Database Layer**: Prisma integration with Firestore (`firestore-prisma`)

### Key Dependencies
- **React**: 19.1.1 (latest with concurrent features)
- **Firebase**: To be installed for backend services
- **Firestore-Prisma**: Database ORM layer
- **CLI Tools**: Commander, Chalk, Figlet, Ora, Boxen for potential CLI utilities
- **Testing**: React Testing Library with Jest

## Cursor AI Setup

Cursor AI is an advanced code editor designed to enhance your productivity by integrating AI seamlessly into your coding workflow. It understands your codebase, predicts your next edits, and allows you to edit code using natural language, all while ensuring your privacy and security.

### Quick Cursor AI Setup Steps

1. **Install dependencies**:
   - Windows: `npm install`
   - macOS/Linux: `npm i`

2. **Confirm current directory**:
   - Windows: `cd`
   - macOS/Linux: `pwd`

3. **Navigate to project directory** (if needed):
   - Windows: `cd \your\path\.cursor-tutor\projects\javascript`
   - macOS/Linux: `cd /your/path/.cursor-tutor/projects/javascript`

4. **Install React Scripts**:
   ```bash
   npm install react-scripts
   ```

5. **Launch development server**:
   ```bash
   npx react-scripts start
   ```

### Cursor AI Resources

- **Cursor Directory**: https://cursor.directory/ - Find Cursor Rules and MCP servers to enhance AI efficiency
- **AI Prompts**: https://alexanderfyoung.notion.site/PromptOS-v1-2-51fc321f3945452384ede1674b97a693 - 1000+ ChatGPT prompts for development

### Cursor Rules and MCP Servers

Cursor Rules and MCP servers help Cursor AI handle tasks more efficiently by providing additional information sources for answering questions and creating code. The Cursor Directory contains a curated list of available rules and MCP servers.

## Environment Setup

This project is configured for Windows 11 with:
- Cursor AI as primary editor
- Git for Windows already installed
- Node.js and npm available
- Firebase CLI to be installed globally

## Development Workflow

1. Start development server: `npm start`
2. Make changes to React components in `src/`
3. Test changes at http://localhost:3000
4. Commit changes: `git add . && git commit -m "description"`
5. Push to GitHub: `git push origin main`
6. Deploy to Firebase: `npm run build && firebase deploy`

## Firebase Services Integration

Once Firebase is configured, the project will support:
- **Firestore Database**: NoSQL document database
- **Firebase Authentication**: User signup/login
- **Firebase Hosting**: Static site hosting
- **Firebase Functions**: Serverless backend functions (if needed)