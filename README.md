<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>El Shaf3iee Portfolio</title>
  <style>
    body {
      margin: 0;
      font-family: Arial, sans-serif;
      background: url('background-engineering.jpg') no-repeat center center/cover;
      background-attachment: fixed;
      color: #fff;
    }

    /* Hamburger menu */
    .menu-btn {
      position: fixed;
      top: 20px;
      left: 20px;
      cursor: pointer;
      z-index: 1001;
      width: 30px;
      height: 25px;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
    }

    .menu-btn div {
      height: 4px;
      background: #fff;
      border-radius: 5px;
      transition: 0.3s;
    }

    /* Sidebar hidden by default */
    .sidebar {
      position: fixed;
      top: 0;
      left: -250px;
      width: 250px;
      height: 100%;
      background: rgba(10, 61, 98, 0.95);
      padding: 20px;
      box-shadow: 2px 0 5px rgba(0,0,0,0.5);
      transition: 0.3s;
      z-index: 1000;
    }

    .sidebar.active {
      left: 0;
    }

    .sidebar h2 {
      text-align: center;
      margin-bottom: 20px;
      color: #fff;
    }

    .sidebar a {
      display: block;
      text-decoration: none;
      color: #fff;
      margin: 15px 0;
      padding: 10px;
      border-radius: 5px;
      transition: 0.3s;
    }

    .sidebar a:hover {
      background: #1e90ff;
    }

    /* Content */
    .content {
      padding: 80px 20px;
    }

    section {
      margin-bottom: 50px;
      background: rgba(0,0,0,0.6);
      padding: 20px;
      border-radius: 10px;
    }

    h3 {
      color: #1e90ff;
    }

    /* Logo */
    .logo {
      text-align: center;
      margin-bottom: 30px;
    }

    .logo img {
      width: 200px;
      height: auto;
      background: none;
    }

    /* Cards */
    .card-container {
      display: flex;
      flex-wrap: wrap;
      gap: 20px;
    }

    .card {
      background: rgba(255,255,255,0.1);
      padding: 15px;
      width: 200px;
      border-radius: 10px;
      text-align: center;
      transition: 0.3s;
    }

    .card:hover {
      transform: translateY(-5px);
      background: rgba(30,144,255,0.3);
    }

    .card img {
      width: 100px;
      height: 100px;
      border-radius: 50%;
      object-fit: cover;
      margin-bottom: 10px;
      border: 2px solid #fff;
    }

    /* Chatbot */
    .chatbot-toggle {
      position: fixed;
      bottom: 20px;
      right: 20px;
      background: #0a3d62;
      color: #fff;
      padding: 10px 15px;
      border-radius: 50%;
      cursor: pointer;
      z-index: 1002;
    }

    .chatbot {
      position: fixed;
      bottom: 20px;
      right: 20px;
      width: 300px;
      background: #fff;
      border-radius: 10px;
      display: none;
      flex-direction: column;
      z-index: 1001;
    }

    .chatbot-header {
      background: #0a3d62;
      color: #fff;
      padding: 10px;
      text-align: center;
      border-radius: 10px 10px 0 0;
    }

    .chatbot-messages {
      padding: 10px;
      height: 200px;
      overflow-y: auto;
      font-size: 14px;
      color: #000;
    }

    .chatbot-input {
      display: flex;
    }

    .chatbot-input input {
      flex: 1;
      padding: 10px;
      border: none;
      border-top: 1px solid #ccc;
    }

    .chatbot-input button {
      padding: 10px;
      background: #1e90ff;
      color: #fff;
      border: none;
    }
  </style>
</head>
<body>

<!-- Hamburger -->
<div class="menu-btn" onclick="toggleMenu()">
  <div></div>
  <div></div>
  <div></div>
</div>

<!-- Sidebar -->
<div class="sidebar" id="sidebar">
  <h2>El Shaf3iee</h2>
  <a href="#general">General</a>
  <a href="#management">Management</a>
  <a href="#team">Our Team</a>
  <a href="#projects">Projects</a>
  <a href="#contact">Contact</a>
</div>

<!-- Content -->
<div class="content">
  <!-- Logo -->
  <div class="logo">
    <img src="Modern Engineering Logo Design.png" alt="Al Shafie Logo">
  </div>

  <!-- General Section -->
  <section id="general">
    <h3>About Us</h3>
    <p>Al Shafiee Engineering Solutions specializes in mechanical, civil, firefighting, and architectural services. We deliver innovative, precise, and sustainable engineering solutions with professionalism and efficiency.</p>
  </section>

  <!-- Management Section -->
  <section id="management">
    <h3>Management</h3>
    <div class="card-container">
      <div class="card">
        <img src="mohamed-gamal.jpg" alt="Mohamed Gamal">
        <h4>Mohamed Gamal El Shafey</h4>
        <p>Director</p>
      </div>
      <div class="card">
        <img src="ammar-yasser.jpg" alt="Ammar Yasser">
        <h4>Ammar Yasser Hassan El Shafey</h4>
        <p>Civil BIM Engineer, Director</p>
      </div>
    </div>
  </section>

  <!-- Team Section -->
  <section id="team">
    <h3>Our Team</h3>
    <div class="card-container">
      <div class="card">
        <img src="fahd.jpg" alt="Fahd">
        <h4>Fahd Ahmed Taha Abo Elnein</h4>
        <p>Mechanical Engineer - Revision Drawings (2023)</p>
      </div>
      <div class="card">
        <img src="mohamed-sherif.jpg" alt="Mohamed Sherif">
        <h4>Mohamed Sherif Anani Anani</h4>
        <p>Mechanical Engineer - Mechanical Drawings (2023)</p>
      </div>
      <div class="card">
        <img src="mohamed-kamel.jpg" alt="Mohamed Kamel">
        <h4>Mohamed Kamel Hassan</h4>
        <p>Mechanical BIM Engineer (2023)</p>
      </div>
      <div class="card">
        <img src="ahmed-hamdy.jpg" alt="Ahmed Hamdy">
        <h4>Ahmed Hamdy Fathy Yousef</h4>
        <p>Mechanical Engineer - Plumbing (2023)</p>
      </div>
    </div>
  </section>

  <!-- Projects Section -->
  <section id="projects">
    <h3>Projects</h3>
    <p>Coming soon...</p>
  </section>

  <!-- Contact Section -->
  <section id="contact">
    <h3>Contact Us</h3>
    <p>Email: <a href="mailto:elshafiee@gmail.com">elshafiee@gmail.com</a></p>
    <p>Phone: 010 | 011</p>
  </section>
</div>

<!-- Chatbot -->
<div class="chatbot-toggle" onclick="toggleChat()">💬</div>
<div class="chatbot" id="chatbot">
  <div class="chatbot-header">AI Chatbot</div>
  <div class="chatbot-messages" id="messages"></div>
  <div class="chatbot-input">
    <input type="text" id="userInput" placeholder="Type a message...">
    <button onclick="sendMessage()">Send</button>
  </div>
</div>

<script>
  function toggleMenu() {
    document.getElementById("sidebar").classList.toggle("active");
  }

  function toggleChat() {
    const bot = document.getElementById("chatbot");
    bot.style.display = bot.style.display === "flex" ? "none" : "flex";
  }

  function sendMessage() {
    const input = document.getElementById("userInput");
    const msgBox = document.getElementById("messages");

    if (input.value.trim() === "") return;

    const userMsg = document.createElement("div");
    userMsg.textContent = "You: " + input.value;
    msgBox.appendChild(userMsg);

    const botMsg = document.createElement("div");
    botMsg.textContent = "AI: Thanks for your message! We will get back to you soon.";
    msgBox.appendChild(botMsg);

    input.value = "";
    msgBox.scrollTop = msgBox.scrollHeight;
  }
</script>

</body>
</html>

