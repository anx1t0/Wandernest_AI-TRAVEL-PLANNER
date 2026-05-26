# WanderNest - AI Travel Planner

An intelligent travel planning application powered by AI that helps you create personalized itineraries, discover community plans, and explore travel pricing options.

## 🏗️ Project Structure

```
.
├── backend/           # Express.js API server
├── frontend/          # React.js with Vite
└── ml_service/        # Python ML model service
```

## 🚀 Getting Started

### Prerequisites

- Node.js (v16+)
- Python (v3.8+)
- MongoDB Atlas account
- Git

### Environment Setup

1. **Clone the repository**
```bash
git clone https://github.com/anx1t0/Wandernest_AI-TRAVEL-PLANNER.git
cd Wandernest_AI-TRAVEL-PLANNER
```

2. **Create environment file**
```bash
cp .env.example .env
```

3. **Configure your credentials**
Edit `.env` and add:
- `MONGODB_URI`: Your MongoDB Atlas connection string
- `JWT_SECRET`: A strong random secret key for authentication
- `PORT`: Server port (default: 5000)

**⚠️ IMPORTANT**: Never commit `.env` file to GitHub. It contains sensitive credentials.

### Backend Setup

```bash
cd backend
npm install
npm start
```

The backend API will run on `http://localhost:5000`

### Frontend Setup

```bash
cd frontend
npm install
npm run dev
```

The frontend will run on `http://localhost:5173`

### ML Service Setup

```bash
cd ml_service
pip install -r requirements.txt  # if available
python app.py
```

## 📚 API Endpoints

- `POST /api/auth/register` - Register a new user
- `POST /api/auth/login` - User login
- `GET/POST /api/itinerary` - Manage itineraries

## 🔒 Security

- All credentials are managed through environment variables
- Use `.env.example` as a template for required environment variables
- Never commit `.env` files containing real credentials
- Sensitive data is excluded via `.gitignore`

## 🛠️ Technologies Used

**Backend:**
- Express.js
- MongoDB with Mongoose
- JWT for authentication
- bcryptjs for password hashing

**Frontend:**
- React.js
- Vite

**ML Service:**
- Python
- Machine Learning libraries

## 📝 License

This project is part of the WanderNest AI Travel Planner initiative.

## 👨‍💻 Author

anx1t0

---

**Note**: Remember to set up your `.env` file with proper credentials before running the application.
