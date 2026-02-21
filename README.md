# Playwright E2E Automation – TodoMVC

This project demonstrates a structured End-to-End (E2E) automation implementation using **Playwright** to test the TodoMVC React application.

The automation simulates real user behavior by performing essential task management operations such as creating new todo items, marking tasks as completed, deleting tasks, and applying different filters (All, Active, Completed). Each interaction is validated using Playwright assertions to ensure the application behaves as expected.

In addition to functional validation, this project also showcases modern automation practices including HTML report generation and automatic debugging artifact collection such as screenshots, videos, and trace files on failure. This project reflects practical hands-on experience in building maintainable and reliable UI automation tests using Playwright.

---

## 🔗 Demo Application

https://todomvc.com/examples/react/dist/

---

## 📌 Project Overview

This automation project covers:

- Adding multiple todo items  
- Marking a todo as completed  
- Deleting a todo  
- Filtering (All / Active / Completed)  
- Assertions to validate UI behavior  
- HTML report generation  
- Screenshot, Video, and Trace capture on failure  

---

## 🛠 Tech Stack

- Node.js  
- Playwright  
- JavaScript  
- VS Code  

---

## 📂 Project Structure


├── tests/
│ └── todo.spec.js
├── playwright.config.js
├── package.json
└── README.md


---
## ▶️ How to Run the Project

### 1️⃣ Install dependencies

```bash
npm install
```

### 2️⃣ Run tests (headless mode)

```bash
npx playwright test
```

### 3️⃣ Run tests in headed mode

```bash
npx playwright test --headed
```

### 4️⃣ Open HTML Report

```bash
npx playwright show-report
```
---

## 🧪 Sample Test Scenario

✔ Add 3 Todos  
✔ Mark 1 as completed  
✔ Delete 1 Todo  
✔ Validate remaining todos  
✔ Verify filters  

---

## 📊 Reporting

This project uses Playwright's built-in HTML Reporter to generate detailed execution reports including:

- Test results summary  
- Execution time  
- Failure logs  
- Screenshots on failure  
- Video recording on failure  
- Trace files for debugging

View or download the detailed HTML report here:

➡️ https://drive.google.com/drive/folders/1OIfXITq7yJbJQKtwYZffUpLiA6W_rVfp

---

## 👩‍💻 Author

**Nada Almira Maulida**  

QA Manual & Automation Enthusiast 
