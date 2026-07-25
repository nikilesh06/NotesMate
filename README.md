# 📝 NotesMate

NotesMate is a modern full-stack note-taking application built with the **MERN Stack**. It allows users to create, view, update, and delete notes through a clean and responsive interface. The application exposes RESTful APIs powered by Express.js and MongoDB while the React frontend provides a seamless user experience.

To improve reliability, the backend includes **Redis-based API rate limiting using Upstash**, helping protect the application from excessive requests.

---

## 🚀 Features

- 📝 Create new notes
- 📖 View all notes
- 🔍 View note details
- ✏️ Edit existing notes
- 🗑️ Delete notes
- ⚡ RESTful API architecture
- 📱 Responsive user interface
- 🚦 Redis-based API rate limiting (Upstash)
- ⚙️ Fast development with Vite

---

## 🛠️ Tech Stack

### Frontend

- React.js
- Vite
- React Router
- Axios
- Tailwind CSS
- DaisyUI
- Lucide React

### Backend

- Node.js
- Express.js
- MongoDB
- Mongoose

### Tools

- Upstash Redis
- Upstash Rate Limiter
- Nodemon
- Git & GitHub

---

## 📂 Project Structure

```
NotesMate
│
├── backend
│   ├── src
│   │   ├── config
│   │   ├── controllers
│   │   ├── middlewares
│   │   ├── models
│   │   ├── routes
│   │   └── server.js
│   └── package.json
│
├── frontend
│   ├── src
│   │   ├── components
│   │   ├── pages
│   │   ├── libs
│   │   ├── App.jsx
│   │   └── main.jsx
│   └── package.json
│
└── README.md
```

---

## ⚙️ Installation

### Clone the repository

```bash
git clone https://github.com/nikilesh06/NotesMate.git
```

```bash
cd NotesMate
```

---

## Backend Setup

Install dependencies

```bash
cd backend
npm install
```

Create a `.env` file

```env
PORT=3000
MONGO_URI=your_mongodb_connection_string
UPSTASH_REDIS_REST_URL=your_upstash_url
UPSTASH_REDIS_REST_TOKEN=your_upstash_token
NODE_ENV=development
```

Start the backend

```bash
npm run dev
```

---

## Frontend Setup

```bash
cd frontend
npm install
npm run dev
```

The application will run at:

- Frontend: `http://localhost:5173`
- Backend: `http://localhost:3000`

---

## 📡 API Endpoints

| Method | Endpoint | Description |
|---------|----------|-------------|
| GET | `/notes` | Get all notes |
| GET | `/notes/:id` | Get a note by ID |
| POST | `/notes` | Create a note |
| PUT | `/notes/:id` | Update a note |
| DELETE | `/notes/:id` | Delete a note |

---

## 📸 Screenshots

Add screenshots of:

- Home Page
- Create Note
- Edit Note
- Note Details
- Delete Confirmation

---

## 🌟 Highlights

- Clean REST API design
- Modular backend architecture
- Responsive React frontend
- MongoDB database integration
- Upstash Redis rate limiting
- Easy to deploy and extend

---

## 🔮 Future Enhancements

- User Authentication (JWT)
- User-specific Notes
- Rich Text Editor
- Search & Filter
- Categories & Tags
- Pin Important Notes
- Dark Mode
- Image Uploads
- Markdown Support
- Note Sharing
- Archive & Trash
- Pagination

---

## 👨‍💻 Author

**Nikilesh Kumar**

- GitHub: https://github.com/nikilesh06

---

## ⭐ Show Your Support

If you found this project helpful, consider giving it a ⭐ on GitHub!
