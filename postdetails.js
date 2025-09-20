import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getDatabase, ref, onValue } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-database.js";

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

const productsRef = ref(db, "products");
const productContainer = document.getElementById("productContainer");

onValue(productsRef, (snapshot) => {
  productContainer.innerHTML = "";
  snapshot.forEach((childSnapshot) => {
    const product = childSnapshot.val();
    const card = document.createElement("div");
    card.className = "card";
    card.innerHTML = `
      <img src="${product.image}" alt="${product.title}">
      <div class="card-content">
        <h3>${product.title}</h3>
        <p>${product.description}</p>
        <span class="price">$${product.price}</span>
      </div>
    `;
    productContainer.appendChild(card);
  });
});


const signInBtn = document.getElementById("signInBtn");
if (signInBtn) {
  signInBtn.addEventListener("click", (e) => {
    e.preventDefault();
    const email = document.getElementById("loginEmail").value;
    const password = document.getElementById("loginPassword").value;

    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        window.location.href = "index.html"; 
      })
      .catch((error) => {
        alert("Login Failed: " + error.message);
      });
  });
}

// SIGNUP
const SignUpBtn = document.getElementById("SignUpBtn");
if (SignUpBtn) {
  SignUpBtn.addEventListener("click", () => {
    const signupEmail = document.getElementById("signupEmail").value;
    const signupPassword = document.getElementById("signupPassword").value;

    createUserWithEmailAndPassword(auth, signupEmail, signupPassword)
      .then((userCredential) => {
        window.location.href = "index.html"; 
      })
      .catch((error) => {
        alert("Signup Failed: " + error.message);
      });
  });
}