// Import the functions you need from the SDKs you need
import { getAnalytics } from 'firebase/analytics';
import { initializeApp } from 'firebase/app';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
	apiKey: 'AIzaSyBQAEVGoW_1Ed6Dvm7JA2JU0MFb613DqfQ',
	authDomain: 'sttimesetupreact-firebase.firebaseapp.com',
	projectId: 'sttimesetupreact-firebase',
	storageBucket: 'sttimesetupreact-firebase.firebasestorage.app',
	messagingSenderId: '419546898266',
	appId: '1:419546898266:web:f9673cb31c13098deadd63',
	measurementId: 'G-TVMCT50FGM',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
