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
      display: flex;
    }

    /* Sidebar */
    .sidebar {
      width: 220px;
      background: #0a3d62;
      color: #fff;
      height: 100vh;
      position: fixed;
      top: 0;
      left: 0;
      padding: 20px;
    }
    .sidebar h2 {
      text-align: center;
      margin-bottom: 20px;
    }
    .sidebar a {
      display: block;
      color: #fff;
      text-decoration: none;
      margin: 15px 0;
      padding: 10px;
      border-radius: 5px;
    }
    .sidebar a:hover {
      background: #1e90ff;
    }

    /* Content */
    .content {
      margin-left: 240px;
      padding: 20px;
      width: 100%;
    }
    section {
      margin-bottom: 50px;
    }
    h3 {
      color: #0a3d62;
    }

    /* Team cards */
    .card-container {
      display: flex;
      flex-wrap: wrap;
      gap: 20px;
    }
    .card {
      width: 200px;
      border: 1px solid #ddd;
      border-radius: 10px;
      text-align: center;
      padding: 15px;
      background: #f9f9f9;
    }
    .card img {
      width: 100px;
      height: 100px;
      border-radius: 50%;
      object-fit: cover;
      margin-bottom: 10px;
    }

    /* Chatbot box */
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
    }
  </style>
</head>
<body>
  <!-- Sidebar -->
  <div class="sidebar">
    <h2>El Shaf3iee</h2>
    <a href="#contact">Contact</a>
    <a href="#management">Management</a>
    <a href="#team">Our Team</a>
    <a href="#projects">Projects</a>
  </div>

  <!-- Content -->
  <div class="content">
    <!-- Contact Section -->
    <section id="contact">
      <h3>Contact Us</h3>
      <p>Email: <a href="mailto:elshafiee@gmail.com">elshafiee@gmail.com</a></p>
      <p>Phone: 010 | 011</p>
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
        <!-- Team Member 1 -->
        <div class="card">
          <img src="fahd.jpg" alt="Fahd Ahmed">
          <h4>Fahd Ahmed Taha Abo Elnein</h4>
          <p>Mechanical Engineer – Specialized in Revision Drawings - 2023</p>
        </div>

        <!-- Team Member 2 -->
        <div class="card">
          <img src="mohamed-sherif.jpg" alt="Mohamed Sherif Anani">
          <h4>Mohamed Sherif Anani Anani</h4>
          <p>Mechanical Engineer – Specialized in Mechanical Drawings - 2023</p>
        </div>

        <!-- Team Member 3 -->
        <div class="card">
          <img src="mohamed-kamel.jpg" alt="Mohamed Kamel Hassan">
          <h4>Mohamed Kamel Hassan</h4>
          <p>Mechanical BIM Engineer - 2023</p>
        </div>

        <!-- Team Member 4 -->
        <div class="card">
          <img src="ahmed-hamdy.jpg" alt="Ahmed Hamdy Fathy Yousef">
          <h4>Ahmed Hamdy Fathy Yousef</h4>
          <p>Mechanical Engineer – Specialized in Plumbing Drawings - 2023</p>
        </div>

        <!-- Team Member 5 -->
        <div class="card">
          <img src="waleed-fawzy.jpg" alt="Waleed Fawzy Ahmed">
          <h4>Waleed Fawzy Ahmed</h4>
          <p>Planning Engineer - 2023</p>
        </div>

        <!-- Team Member 6 -->
        <div class="card">
          <img src="helmy-zakria.jpg" alt="Helmy Zakria Hussein">
          <h4>Helmy Zakria Hussein</h4>
          <p>QS Engineer - 2013</p>
        </div>

        <!-- Team Member 7 -->
        <div class="card">
          <img src="mohamed-saber-fatouh.jpg" alt="Mohamed Saber Fatouh">
          <h4>Mohamed Saber Fatouh</h4>
          <p>Shop Drawings - 2022</p>
        </div>

        <!-- Team Member 8 -->
        <div class="card">
          <img src="ammar-yasser.jpg" alt="Ammar Yasser Hassan El Shafey">
          <h4>Ammar Yasser Hassan El Shafey</h4>
          <p>Civil BIM Engineer - 2022</p>
        </div>

        <!-- Team Member 9 -->
        <div class="card">
          <img src="mohamed-sabery.jpg" alt="Mohamed Sabery El Dammati">
          <h4>Mohamed Sabery El Dammati</h4>
          <p>Steel Design Engineer - 2022</p>
        </div>

        <!-- Team Member 10 -->
        <div class="card">
          <img src="yousef-abdelnaby.jpg" alt="Yousef Abdelnaby El Shafey">
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
    function toggleChat() {
      const bot = document.getElementById("chatbot");
      bot.style.display = bot.style.display === "flex" ? "none" : "flex";
      document.getElementById("userInput").focus();
    }

    function sendMessage() {
      const input = document.getElementById("userInput");
      const msgBox = document.getElementById("messages");

      if (input.value.trim() === "") return;

      const userMsg = document.createElement("div");
      userMsg.textContent = "You: " + input.value;
      msgBox.appendChild(userMsg);

      // Simple AI response placeholder
      const botMsg = document.createElement("div");
      botMsg.textContent = "AI: Thanks for your message! We will get back to you soon.";
      msgBox.appendChild(botMsg);

      input.value = "";
      msgBox.scrollTop = msgBox.scrollHeight;
    }
  </script>
</body>
</html>

