// Firebase Configuration - Security Best Practice Implementation
// Using environment variables to keep config flexible and secure

import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

// Firebase configuration using environment variables
const firebaseConfig = {
	apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
	authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
	projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
	storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
	messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
	appId: process.env.REACT_APP_FIREBASE_APP_ID,
	measurementId: process.env.REACT_APP_FIREBASE_MEASUREMENT_ID,
};

// Validate that all required environment variables are present
const requiredEnvVars = [
	'REACT_APP_FIREBASE_API_KEY',
	'REACT_APP_FIREBASE_AUTH_DOMAIN',
	'REACT_APP_FIREBASE_PROJECT_ID',
	'REACT_APP_FIREBASE_STORAGE_BUCKET',
	'REACT_APP_FIREBASE_MESSAGING_SENDER_ID',
	'REACT_APP_FIREBASE_APP_ID',
];

const missingEnvVars = requiredEnvVars.filter((envVar) => !process.env[envVar]);

if (missingEnvVars.length > 0) {
	console.error(
		'Missing required Firebase environment variables:',
		missingEnvVars
	);
	console.error(
		'Please check your .env.local file and ensure all variables are set'
	);
}

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase services
const db = getFirestore(app);
const auth = getAuth(app);

// Export for use in other components
export { db, auth };
export default app;
