import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getDatabase, ref, push, set } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-database.js";
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword } 
  from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";

// Firebase config
const firebaseConfig = {
  apiKey: "AIzaSyDIxgQMkNLr-sWSu0Devm29GxfOdY1qKj0",
  authDomain: "e-commerce-web-df5b5.firebaseapp.com",
  databaseURL: "https://e-commerce-web-df5b5-default-rtdb.firebaseio.com",
  projectId: "e-commerce-web-df5b5",
  storageBucket: "e-commerce-web-df5b5.firebasestorage.app",
  messagingSenderId: "671685766085",
  appId: "1:671685766085:web:139187b56a0557073539ac",
  measurementId: "G-DMKC378G2B"
};

const app = initializeApp(firebaseConfig);
const db = getDatabase(app);
const auth = getAuth(app);

// POST FORM (products)
const postForm = document.getElementById("postForm");
if (postForm) {
  postForm.addEventListener("submit", function(e) {
    e.preventDefault();
    const title = document.getElementById("TitleInput").value;
    const description = document.getElementById("ContentInput").value;
    const price = document.getElementById("PriceInput").value;
    const imageUrl = document.getElementById("ImageInput").value;

    const productsRef = ref(db, "products");
    const newProductRef = push(productsRef);

    set(newProductRef, {
      title: title,
      description: description,
      price: price,
      imageUrl: imageUrl
    }).then(() => {
      window.location.href = "index.html"; 
    }).catch((error) => {
      console.error("Error:", error);
    });
  });
}

