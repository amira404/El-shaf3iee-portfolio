<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Al Shafiee Engineering Solutions - Portfolio</title>
  <style>
    /* -------------------
      Global Styles
    -------------------- */
    body {
      margin: 0;
      font-family: Arial, sans-serif;
      background: url('A_digital_rendering_of_an_architectural_or_enginee.png') no-repeat center center fixed;
      background-size: cover;
      overflow-x: hidden;
    }

    h1, h3, h4 {
      color: #0a3d62;
    }

    p {
      color: #333;
      line-height: 1.6;
    }

    /* -------------------
      Navbar (Hamburger Menu)
    -------------------- */
    .hamburger {
      position: fixed;
      top: 20px;
      left: 20px;
      width: 30px;
      height: 25px;
      cursor: pointer;
      z-index: 1001;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
    }

    .hamburger div {
      background-color: #fff;
      height: 4px;
      border-radius: 2px;
      transition: 0.3s;
    }

    /* Sidebar Hidden */
    .sidebar {
      position: fixed;
      top: 0;
      left: -260px;
      width: 240px;
      height: 100vh;
      background: rgba(10, 61, 98, 0.97);
      padding: 20px;
      box-shadow: 2px 0 6px rgba(0,0,0,0.3);
      transition: left 0.4s ease;
      z-index: 1000;
    }

    .sidebar.active {
      left: 0;
    }

    .sidebar h2 {
      text-align: center;
      margin-bottom: 20px;
      font-size: 22px;
      color: #fff;
    }

    .sidebar a {
      display: block;
      color: #fff;
      text-decoration: none;
      margin: 15px 0;
      padding: 10px;
      border-radius: 5px;
      transition: background 0.3s ease;
    }

    .sidebar a:hover {
      background: #1e90ff;
    }

    /* -------------------
      Main Content
    -------------------- */
    .content {
      padding: 20px;
      margin-top: 60px;
      transition: margin-left 0.4s ease;
    }

    section {
      margin-bottom: 50px;
      background: rgba(255,255,255,0.85);
      padding: 20px;
      border-radius: 10px;
      box-shadow: 0 2px 8px rgba(0,0,0,0.1);
    }

    /* -------------------
      General Section
    -------------------- */
    .general {
      text-align: center;
    }

    .general img {
      width: 200px;
      margin-bottom: 20px;
      border: none; /* Remove white frame */
      background: none;
    }

    /* -------------------
      Services Grid
    -------------------- */
    .services-list {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
      gap: 20px;
    }

    .service-card {
      background: rgba(255,255,255,0.9);
      border-radius: 10px;
      padding: 20px;
      text-align: center;
      box-shadow: 0 2px 6px rgba(0,0,0,0.1);
      transition: transform 0.3s ease, background 0.3s ease;
    }

    .service-card:hover {
      transform: translateY(-5px);
      background: #eaf6ff;
    }

    /* -------------------
      Team & Management Cards
    -------------------- */
    .card-container {
      display: flex;
      flex-wrap: wrap;
      gap: 20px;
      justify-content: center;
    }

    .card {
      width: 200px;
      border: 1px solid #ddd;
      border-radius: 10px;
      text-align: center;
      padding: 15px;
      background: #fff;
      box-shadow: 0 2px 6px rgba(0,0,0,0.1);
      transition: transform 0.3s ease, background 0.3s ease;
      cursor: pointer;
    }

    .card:hover {
      transform: scale(1.05);
      background: #eaf6ff;
    }

    .card img {
      width: 100px;
      height: 100px;
      border-radius: 50%;
      object-fit: cover;
      margin-bottom: 10px;
    }

    .card h4 {
      margin: 10px 0 5px;
      font-size: 16px;
      color: #0a3d62;
    }

    .card p {
      font-size: 14px;
      color: #555;
    }

    /* -------------------
      Chatbot
    -------------------- */
    .chatbot {
      position: fixed;
      bottom: 20px;
      right: 20px;
      width: 300px;
      background: #fff;
      border: 1px solid #ccc;
      border-radius: 10px;
      display: none;
      flex-direction: column;
      box-shadow: 0 2px 10px rgba(0,0,0,0.2);
      z-index: 1002;
    }

    .chatbot-header {
      background: #0a3d62;
      color: #fff;
      padding: 10px;
      text-align: center;
      border-radius: 10px 10px 0 0;
      font-size: 16px;
    }

    .chatbot-messages {
      padding: 10px;
      height: 200px;
      overflow-y: auto;
      font-size: 14px;
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

    .chatbot-toggle {
      position: fixed;
      bottom: 20px;
      right: 20px;
      background: #0a3d62;
      color: #fff;
      padding: 10px 15px;
      border-radius: 50%;
      cursor: pointer;
      box-shadow: 0 2px 6px rgba(0,0,0,0.3);
      z-index: 1002;
    }

    /* -------------------
      Responsive
    -------------------- */
    @media (max-width: 768px) {
      section {
        padding: 15px;
      }

      .card {
        width: 150px;
      }
    }
  </style>
</head>
<body>
  <!-- Hamburger Icon -->
  <div class="hamburger" onclick="toggleSidebar()">
    <div></div>
    <div></div>
    <div></div>
  </div>

  <!-- Sidebar -->
  <div class="sidebar" id="sidebar">
    <h2>Al Shaf3iee</h2>
    <a href="#general" onclick="toggleSidebar()">General</a>
    <a href="#services" onclick="toggleSidebar()">Services</a>
    <a href="#management" onclick="toggleSidebar()">Management</a>
    <a href="#team" onclick="toggleSidebar()">Our Team</a>
    <a href="#projects" onclick="toggleSidebar()">Projects</a>
    <a href="#contact" onclick="toggleSidebar()">Contact</a>
  </div>

  <!-- Content -->
  <div class="content">
    <!-- General Section -->
    <section id="general" class="general">
      <img src="logo.png" alt="Al Shafiee Logo">
      <h1>Al Shafiee Engineering Solutions</h1>
      <p>
        Al Shafiee Engineering Solutions is a dynamic startup specializing in delivering
        innovative and precise engineering services. We provide mechanical, civil,
        firefighting, and architectural solutions, combining technical expertise
        with creativity to meet our clients’ needs.
      </p>
      <h3>Vision</h3>
      <p>
        To become a trusted partner in the engineering industry by providing
        sustainable, innovative, and high-quality design solutions.
      </p>
      <h3>Mission</h3>
      <p>
        Delivering professional, cost-effective, and reliable engineering services,
        ensuring every project is completed with accuracy, efficiency, and excellence.
      </p>
    </section>

    <!-- Services Section -->
    <section id="services">
      <h3>Our Services</h3>
      <div class="services-list">
        <div class="service-card">
          <h4>Mechanical Engineering</h4>
          <p>HVAC, Plumbing, and detailed mechanical drawings.</p>
        </div>
        <div class="service-card">
          <h4>Civil Engineering</h4>
          <p>Structural design, BIM modeling, and infrastructure projects.</p>
        </div>
        <div class="service-card">
          <h4>Firefighting Systems</h4>
          <p>Advanced fire protection design and compliance solutions.</p>
        </div>
        <div class="service-card">
          <h4>Architectural Drafting</h4>
          <p>High-quality CAD and BIM-based drafting.</p>
        </div>
      </div>
    </section>

    <!-- Management Section -->
    <section id="management">
      <h3>Management</h3>
      <div class="card-container">
        <div class="card">
          <img src="mohamed-gamal.jpg" alt="Mohamed Gamal">
          <h4>Mohamed Gamal El Shafey</h4>
          <p>Mechanical Engineer, Director - 2022</p>
        </div>
        <div class="card">
          <img src="ammar-yasser.jpg" alt="Ammar Yasser">
          <h4>Ammar Yasser Hassan El Shafey</h4>
          <p>Civil BIM Engineer, Director - 2022</p>
        </div>
      </div>
    </section>

    <!-- Team Section -->
    <section id="team">
      <h3>Our Team</h3>
      <div class="card-container">
        <div class="card">
          <img src="fahd.jpg" alt="Fahd Ahmed">
          <h4>Fahd Ahmed Taha Abo Elnein</h4>
          <p>Mechanical Engineer – Revision Drawings - 2023</p>
        </div>
        <div class="card">
          <img src="mohamed-sherif.jpg" alt="Mohamed Sherif">
          <h4>Mohamed Sherif Anani Anani</h4>
          <p>Mechanical Engineer – Mechanical Drawings - 2023</p>
        </div>
        <div class="card">
          <img src="mohamed-kamel.jpg" alt="Mohamed Kamel">
          <h4>Mohamed Kamel Hassan</h4>
          <p>Mechanical BIM Engineer - 2023</p>
        </div>
        <div class="card">
          <img src="ahmed-hamdy.jpg" alt="Ahmed Hamdy">
          <h4>Ahmed Hamdy Fathy Yousef</h4>
          <p>Mechanical Engineer – Plumbing Drawings - 2023</p>
        </div>
        <div class="card">
          <img src="waleed-fawzy.jpg" alt="Waleed Fawzy">
          <h4>Waleed Fawzy Ahmed</h4>
          <p>Planning Engineer - 2023</p>
        </div>
        <div class="card">
          <img src="helmy-zakria.jpg" alt="Helmy Zakria">
          <h4>Helmy Zakria Hussein</h4>
          <p>QS Engineer - 2013</p>
        </div>
        <div class="card">
          <img src="mohamed-saber-fatouh.jpg" alt="Mohamed Saber">
          <h4>Mohamed Saber Fatouh</h4>
          <p>Shop Drawings Engineer - 2022</p>
        </div>
        <div class="card">
          <img src="mohamed-sabery.jpg" alt="Mohamed Sabery">
          <h4>Mohamed Sabery El Dammati</h4>
          <p>Steel Design Engineer - 2022</p>
        </div>
        <div class="card">
          <img src="yousef-abdelnaby.jpg" alt="Yousef Abdelnaby">
          <h4>Yousef Abdelnaby El Shafey</h4>
          <p>Structural Design Engineer - 2023</p>
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
    // Toggle Sidebar
    function toggleSidebar() {
      const sidebar = document.getElementById("sidebar");
      sidebar.classList.toggle("active");
    }

    // Toggle Chat
    function toggleChat() {
      const bot = document.getElementById("chatbot");
      bot.style.display = bot.style.display === "flex" ? "none" : "flex";
      document.getElementById("userInput").focus();
    }

    // Chat Functionality
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

