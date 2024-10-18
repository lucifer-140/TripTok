// auth.js

// Sample data for testing
const users = [
    { username: "testuser", email: "test@example.com", password: "password123" },
    { username: "admin", email: "admin@gmail.com", password: "admin123" }
];

// Function to handle sign-up
function signUp(event) {
    event.preventDefault();
    
    const username = document.getElementById("username").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const confirmPassword = document.getElementById("confirm-password").value;

    // Validation
    if (password !== confirmPassword) {
        alert("Passwords do not match!");
        return;
    }

    // Check if user already exists
    const userExists = users.some(user => user.email === email);
    if (userExists) {
        alert("User already exists!");
        return;
    }

    // Simulate user creation
    users.push({ username, email, password });
    alert("Sign-up successful! You can now sign in.");
    window.location.href = "signIn.html"; // Redirect to sign-in page
}

// Function to handle sign-in
function signIn(event) {
    event.preventDefault();

    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    // Validate credentials
    const user = users.find(user => user.email === email && user.password === password);
    if (user) {
        alert("Sign-in successful!");
        // Redirect to the main application or dashboard
        // For now, just redirecting to home page
        window.location.href = "homePage.html"; // Change to your main page
    } else {
        alert("Invalid email or password!");
    }
}

// Attach event listeners
document.getElementById("sign-up-form")?.addEventListener("submit", signUp);
document.getElementById("sign-in-form")?.addEventListener("submit", signIn);
