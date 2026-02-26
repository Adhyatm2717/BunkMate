# 🎓 BunkMate

> A smart attendance calculator and strategic planning tool for students.

[![Live Demo](https://img.shields.io/badge/Live-Demo-Online-green?style=for-the-badge)](https://bunkmate-eta.vercel.app/)
[![License](https://img.shields.io/badge/License-MIT-blue?style=for-the-badge)](#license)
[![Status](https://img.shields.io/badge/Status-Active-success?style=for-the-badge)]()

---

## 🔗 Live Demo

👉 https://bunkmate-eta.vercel.app/

---

## 📌 Overview

**BunkMate** is a lightweight, production-ready web application that helps students calculate and strategically manage their attendance.

It enables users to:

- Calculate current attendance percentage
- Predict attendance after planned bunks
- Determine how many classes are required to reach a target percentage
- Plan attendance recovery intelligently

The application uses precise mathematical logic to eliminate guesswork from attendance planning.

---

## ✨ Features

- 📊 Real-time attendance calculation  
- 📉 Bunk impact prediction  
- 🎯 Target-based recovery planning  
- ⚡ Instant recalculations  
- 📱 Fully responsive UI  
- 🧮 Formula-driven computation  

---

## 🖼 Screenshots

### Dashboard
<img width="1706" height="1614" alt="image" src="https://github.com/user-attachments/assets/ff66dcc5-e703-4214-b96a-2b33dd2d3095" />

---

## 🛠 Tech Stack

- **Frontend:** HTML5, CSS3, JavaScript  
- **Deployment:** Vercel  
- **Version Control:** Git & GitHub  
- **Architecture:** Client-side computation  

---

## 🧮 How It Works (Mathematical Logic)

### 1️⃣ Current Attendance Percentage
\[
Current\% = \left( \frac{Attended}{Total} \right) \times 100
\]

---

### 2️⃣ Predicted Attendance After Planned Bunks

If a student plans to bunk `b` classes:

\[
Predicted\% = \left( \frac{Attended}{Total + Bunks} \right) \times 100
\]

---

### 3️⃣ Required Classes to Reach Target Percentage

Let:

- A = Attended classes  
- T = Total classes  
- P = Target percentage  
- x = Classes to attend continuously  

We solve:

\[
\frac{A + x}{T + x} \ge \frac{P}{100}
\]

Rearranged:

\[
x \ge \frac{(P/100 \times T) - A}{1 - (P/100)}
\]

The app calculates the smallest integer value of `x` that satisfies this inequality.

---

## 🚀 Installation & Local Setup

### Option 1: As a Web Application

1. **Clone the repository**
   ```bash
   git clone https://github.com/Adhyatm2717/BunkMate.git
   cd BunkMate
   ```

2. **Run locally**
   Since this is a static web application:
   - Open `index.html` in your browser OR
   - Use **Live Server** in VS Code.

### Option 2: As a Google Chrome Extension

BunkMate now supports running completely offline as a lightweight Chrome Extension inside your browser!

1. **Download/Clone the Repository**
2. Open Google Chrome and navigate to `chrome://extensions/`
3. Turn on **Developer mode** in the top right corner.
4. Click **Load unpacked** in the top left.
5. Select the `BunkMate` folder.
6. Pin the extension to your browser bar for quick access!

---

## 🧑‍💻 Usage

1. Enter total classes conducted.
2. Enter classes attended.
3. View current attendance percentage.
4. Add planned bunks to see predicted percentage.
5. Enter target percentage to calculate minimum required recovery classes.
*(All calculations update instantly)*

---

## 📂 Project Structure

```text
BunkMate/
│
├── index.html        # Main App Interface
├── style.css         # Styling & Responsive Design (Extension & Web)
├── script.js         # Core Mathematical Logic
├── manifest.json     # Chrome Extension Configuration
├── Favicon.png       # Icons
└── README.md         # Documentation
```

---

## 🔮 Future Improvements

## � Future Improvements

- �📈 Attendance trend visualization (charts)
- 📅 Semester-wise tracking
- 💾 Local storage persistence
- 🔐 User authentication
- 📱 Progressive Web App (PWA) support
- 🧠 Smart attendance recommendations

---

## 🤝 Contributing

Contributions are welcome!

1. Fork the repository
2. Create a new branch
3. Commit your changes
4. Open a Pull Request

*For major changes, please open an issue first.*

---

## 📜 License

This project is licensed under the MIT License.

---

## 👨‍💻 Author

**Adhyatm Mudgal**  
B.Tech CSE (AI & ML)  
Newton School of Technology  

- **GitHub:** [Adhyatm2717](https://github.com/Adhyatm2717)
- **Live Project:** [bunkmate-eta.vercel.app](https://bunkmate-eta.vercel.app/)

---

## ⭐ Support

If you found this project useful, consider giving it a ⭐ on GitHub!
