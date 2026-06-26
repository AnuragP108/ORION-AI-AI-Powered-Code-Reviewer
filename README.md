# 🚀 ORION AI - AI Powered Code Reviewer

> **Review code like a senior software engineer using the power of Google Gemini AI.**

**Live Demo:** https://orion-ai-ai-powered-code-reviewer.vercel.app/

---

## 📖 Overview

ORION AI is a full-stack AI-powered code review platform that helps developers write cleaner, more efficient, and maintainable code. Simply paste your code into the editor, and the application generates an in-depth review with bug detection, optimization suggestions, best practices, and refactored code using **Google Gemini AI**.

Built with **React (Vite)** for the frontend and **Node.js + Express** for the backend.

---

## ✨ Features

* 🤖 AI-powered code reviews using Google Gemini
* 💡 Detects bugs and logical errors
* 🚀 Suggests performance improvements
* 🧹 Clean code and refactoring recommendations
* 📝 Syntax-highlighted code editor
* 📄 Beautiful Markdown-rendered responses
* ⚡ Fast and responsive interface
* 🌙 Automatic Light/Dark Mode support
* 🔒 Secure backend API with environment variables

---

## 🛠 Tech Stack

### Frontend

* React (Vite)
* JavaScript (ES6+)
* Axios
* React Simple Code Editor
* PrismJS
* React Markdown
* Rehype Highlight

### Backend

* Node.js
* Express.js
* Google Gemini API
* CORS
* dotenv

---

## 📂 Project Structure

```text
ORION-AI/
│
├── frontend/
│   ├── src/
│   ├── public/
│   └── package.json
│
├── backend/
│   ├── src/
│   ├── app.js
│   ├── server.js
│   └── package.json
│
└── README.md
```

---

# ⚙️ Getting Started

## 1. Clone the Repository

```bash
git clone https://github.com/AnuragP108/ORION-AI-AI-Powered-Code-Reviewer.git

cd ORION-AI
```

---

## 2. Backend Setup

```bash
cd backend

npm install
```

Create a **.env** file inside the backend directory.

```env
GOOGLE_GEMINI_KEY=your_gemini_api_key

```

Start the backend server.

```bash
npm start
```

Backend runs on:

```
http://localhost:3000
```

---

## 3. Frontend Setup

```bash
cd frontend

npm install

npm run dev
```

Frontend runs on:

```
http://localhost:5173
```

---

# 🔗 API Endpoint

### POST

```http
POST /ai/get-review
```

### Request Body

```json
{
  "code": "your source code here"
}
```

### Response

* AI Code Review
* Bug Detection
* Code Optimization
* Refactored Code
* Best Practices
* Performance Suggestions

---

# 🧠 How It Works

1. User writes or pastes code into the editor.
2. Frontend sends the code to the Express backend.
3. Backend securely communicates with the Google Gemini API.
4. Gemini analyzes the submitted code.
5. The review is returned as formatted Markdown.
6. The frontend displays the review with syntax highlighting.

---

# 📸 Application Preview

### Features

* Code Editor
* AI Review Panel
* Markdown Rendering
* Syntax Highlighting
* Responsive UI
* One-click Review

> **Tip:** Add screenshots of your application here for a more attractive GitHub repository.

---

# 🚀 Deployment

### Frontend

* Vercel

### Backend

* Render


---

## 📄 License

This project is licensed under the MIT License.
