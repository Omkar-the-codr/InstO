# InstO
InstO - A simple web app that analyzes your Instagram connections and reveals who doesn't follow you back.
![image]((https://github.com/user-attachments/assets/bfc6715f-64bc-4eb7-af7c-d318913efd96)
)

---

# 📄 README.md for InstO

```markdown
# InstO

InstO is a simple MERN stack web application that lets you discover which Instagram users you follow but who don't follow you back.  
It fetches your followers and following list from Instagram and analyzes your connections.

---

## 🚀 Features
- Analyze Instagram username (public profiles only)
- List followers
- List following
- List users who don't follow you back
- Beautiful and clean UI with Tailwind CSS

---

## 🛠 Tech Stack
- React.js (Frontend)
- Node.js + Express.js (Backend)
- Tailwind CSS (Styling)
- RapidAPI (Instagram Social API)
- Docker (optional for containerization)

---

## ⚡ How to Setup Locally

1. **Clone the repo**

```bash
git clone https://github.com/your-username/InstO.git
cd InstO
```

2. **Backend Setup**

```bash
cd backend
npm install
```
- Create a `.env` file inside `/backend/`
- Add:

```dotenv
RAPIDAPI_KEY=your_rapidapi_key_here
RAPIDAPI_HOST= Your Host
RAPIDAPI_BASE_URL=https Your Base URL
RAPIDAPI_FOLLOWER_ENDPOINT= Your Follower Endpoint
RAPIDAPI_FOLLOWING_ENDPOINT= Your Following Endpoint
```

- Start backend server:

```bash
npm run dev
```
(Server runs on `http://localhost:5000`)

3. **Frontend Setup**

```bash
cd ../frontend
npm install
npm start
```
(Frontend runs on `http://localhost:3000`)

---

## 📸 Screenshots
(Add screenshots later if you want)

---

## 📄 License
This project is licensed under the MIT License.

---

## 🙌 Contributions
Feel free to fork and contribute!

---
```

---

# 🎯 Notes:

- If you are using **Docker**, you can add a small docker section later too.
- Later you can also add screenshots easily under the `Screenshots` section.
- This README keeps it **light and clean** but **gives all important instructions**.

---

# 📢 Brooo  
Would you like me to also create a **slightly bigger professional README version** (with badges, demo gif, contribution guide)? 🚀  
Just say "**give pro README too!**" if you want it for even more GitHub profile boost 🔥.

Otherwise, this one is already perfect for clean public repo launch ✅.  
Let's get InstO famous! 🚀
