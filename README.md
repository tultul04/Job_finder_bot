# 💼 Job Finder – AI-Powered Career Companion

## 🚀 Overview
**Job Finder** is a full-stack AI-driven web application designed to assist users in every stage of their career journey — from job discovery to interview preparation.  
The platform integrates **live job listings** (LinkedIn, Internshala), **AI-based Resume Analysis**, **Roadmap Generation**, and **Interview Simulation**, making it an all-in-one career support ecosystem.

---

## 🧩 Features

### 🔍 Job Search & Aggregation
- Fetches live job listings from trusted sources like LinkedIn, Remotive, and Internshala.  
- Filters results based on **role, location, and skillset**.  
- Redirects users to apply directly via verified job portals.

### 🧠 AI-Driven Career Tools
- **Resume Analyzer:** Evaluates uploaded resumes, assigns a score (0–100), and provides improvement suggestions using **Genkit AI flows**.  
- **Interview Simulator:** Generates **personalized interview questions** using LLMs based on job field and skillset.  
- **Roadmap Generator:** Creates structured, **goal-based learning paths** tailored to the user’s career interest.  

### 🏆 Achievement Tracker
- Tracks user progress with gamified badges like “Profile Pro,” “Interview Ace,” and “Challenge Champion.”  
- Encourages continuous growth through XP and milestone tracking.

### 💻 Coding Challenges
- Categorized as **Easy, Medium, and Hard** to help users improve problem-solving and technical skills.

### 📰 Tech News Feed
- Keeps users updated with the latest industry news, trends, and tech advancements directly from the dashboard.

---

## ⚙️ Tech Stack

| Layer | Technology |
|-------|-------------|
| **Frontend** | Next.js, TypeScript |
| **Styling** | TailwindCSS, PostCSS |
| **Backend** | Firebase (Real-time DB, Authentication) |
| **AI Integration** | Genkit (Custom LLM Flows, File-based Routing) |
| **Hosting** | Vercel / GCP App Hosting |
| **Version Control** | Git & GitHub |
| **Config Files** | JSON-based modular configuration |

---

## 🧠 AI Integration (Genkit)
The application uses **Genkit** to manage AI workflows through modular, file-based routing.  
Each AI module is designed as an independent flow:

- **Resume Analyzer Flow:** PDF extraction → content analysis → resume scoring → feedback.  
- **Interview Prep Flow:** Context-based question generation using LLMs.  
- **Roadmap Flow:** Personalized learning path creation using contextual understanding.

**Why Genkit?**  
Genkit provides built-in tools for **prompt handling**, **flow orchestration**, and **contextual reasoning**, allowing the system to respond intelligently to user inputs.

---

## 🏗️ System Architecture

1. **Frontend (Next.js + TailwindCSS)**  
   - Handles user interactions, data display, and routing.  
   - Responsive and clean UI with light/dark mode support.

2. **Backend (Firebase + Genkit)**  
   - Stores user data (resume, achievements, preferences).  
   - Runs AI flows and real-time synchronization.  

3. **AI Engine (Genkit LLM Flows)**  
   - Processes input for resume, roadmap, and interview prep modules.  
   - Interacts with OpenAI API for response generation.

4. **Job Scraper Module**  
   - Dynamically constructs URLs for LinkedIn and Internshala searches.  
   - Redirects to external job portals based on filters.

---
### 1️⃣ Clone the Repository
```bash
git clone https://github.com/yourusername/job-finder.git
cd job-finder
