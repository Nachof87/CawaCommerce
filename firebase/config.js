import { initializeApp } from "firebase/app"

const firebaseConfig = {
  apiKey: "AIzaSyAVM8xW7vSYOi7yQoCl7Lfe5RPHXTxecIs",
  authDomain: "cawacommerce.firebaseapp.com",
  projectId: "cawacommerce",
  storageBucket: "cawacommerce.appspot.com",
  messagingSenderId: "589155479470",
  appId: "1:589155479470:web:f7d3e4e06915ba6e27e23f"
}

export const app = initializeApp(firebaseConfig)