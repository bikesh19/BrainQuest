# 🎓 Project Submission: BrainQuest (Advanced React Quiz Application)

**Student Name:** Bikesh  
**Project Title:** BrainQuest - Dynamic Knowledge Evaluation System  
**Submission Date:** February 16, 2026  
**Assignment Goal:** Develop a high-performance, interactive web application using React.js that demonstrates complex state management, synchronized timing logic, and a dynamic scoring algorithm.

---

## 📝 1. Project Overview
**BrainQuest** is a sophisticated quiz platform designed to provide an engaging user experience through real-time feedback and competitive scoring. The primary objective of this project was to move beyond a simple multiple-choice interface and implement a system where performance is measured not just by accuracy, but by cognitive speed.

## 🚀 2. Featured Capabilities

### 🧠 Dynamic Knowledge Pool
- **Randomized Sessions**: Utilizes a randomization algorithm to select 10 unique questions from a diverse pool for every new game.
- **Instant Response Feedback**: Provides immediate visual cues (Green for Correct, Red for Incorrect) to facilitate active learning.

### ⏱️ Advanced Scoring & Timing
- **Time-Relative Scoring**: Implemented a logic where the score is a function of time: `Base Points (100) + (Seconds Remaining * 10)`.
- **Integrated Countdown**: A unified timer state that dictates the scoring window and automatically progresses the quiz upon expiration.

### 🎭 Visual & Interactive UI
- **Glassmorphic Aesthetic**: Modern UI design utilizing backdrop blurs, gradients, and subtle borders.
- **Fluid Animations**: Leveraging `framer-motion` for state transitions, ensuring a premium "application" feel rather than a static website.
- **Responsive Architecture**: Fully optimized for mobile, tablet, and desktop viewports.

## 🛠️ 3. Technical Implementation (Tech Stack)

| Component | Technology | Rationale |
| :--- | :--- | :--- |
| **Logic** | React 19 | Leveraging the latest Hooks (`useCallback`, `useEffect`) for performance. |
| **Styling** | Tailwind CSS 4 | Utility-first styling for rapid, consistent, and modern UI development. |
| **Animation** | Framer Motion | Providing physics-based animations for a professional user experience. |
| **Tooling** | Vite | High-speed build tool and development server. |
| **Deployment** | Vercel | Scalable hosting for modern web applications. |

## 🏗️ 4. Project Structure
```text
BrainQuest/
├── src/
│   ├── components/
│   │   ├── QuestionArea.jsx # Handles answer logic & display
│   │   ├── ProgressBar.jsx  # Visual progress tracking
│   │   └── Timer.jsx         # Controlled circular timer component
│   ├── data/
│   │   └── questions.js      # Centralized question repository
│   ├── App.jsx               # Root logic, scoring, and state orchestration
│   └── main.jsx              # Entry point
└── public/                   # Static assets & favicon
```

## 🎮 5. Operational Instructions

### Local Development Setup
1. **Clone & Enter**:
   ```bash
   git clone https://github.com/bikesh19/BrainQuest.git
   cd BrainQuest
   ```
2. **Dependency Installation**:
   ```bash
   npm install
   ```
3. **Execution**:
   ```bash
   npm run dev
   ```
4. **Access**: Navigate to `http://localhost:5173`.

### Game Flow
1. **Initialization**: The app shuffles and selects 10 questions.
2. **Engagement**: Read questions and select an answer before the 15-second timer expires.
3. **Feedback**: Review the correction; click "Continue" to progress.
4. **Conclusion**: View the final performance score and opt for a "Play Again" session to reset the environment.

## 🤝 6. Conclusion
This assignment demonstrates the successful integration of React's state management with external libraries like Framer Motion and Tailwind CSS. The implementation of the **Time-Relative Scoring** specifically addresses the requirement for complex logic handling within the React lifecycle.

---
**Author:** Bikesh  

⭐ *Optimized for academic review and technical evaluation.*
