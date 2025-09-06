
# 🚀 Juan González – Frontend Developer Portfolio

[🌐 Visit Portfolio](https://juan-gonzalez-y.vercel.app/)

---

## ✨ About This Project

Welcome to my **professional frontend-only portfolio**, built to showcase my skills as a **Frontend Developer with \~2 years of experience**.
This project is **modular, scalable, and production-ready**, with modern technologies and best practices.

**Key Features:**

* 💻 **React/Next.js + TypeScript** – type-safe and scalable
* 🎨 **Tailwind CSS** – responsive and modern UI
* 🛠 **ESLint + Prettier** – clean and consistent code
* 🔄 **Custom hooks** for API fetching
* 🗂 **Mocked data** for projects, stats & visits
* 🧪 **Basic tests** with Jest & React Testing Library
* 🐳 **Dockerized setup** for local development & deployment
* 🌿 **Git workflow** with clear feature/fix branches

---

## 📁 Folder Structure

```
personal-portfolio/
 ├── .gitignore
 ├── README.md
 ├── docker-compose.yml
 ├── frontend/
 │   ├── Dockerfile
 │   ├── package.json
 │   ├── tsconfig.json
 │   ├── next.config.js
 │   ├── tailwind.config.js
 │   ├── postcss.config.js
 │   ├── .eslintrc.json
 │   ├── .prettierrc
 │   ├── public/
 │   │   └── images/       # logos, screenshots, avatars
 │   └── src/
 │       ├── pages/
 │       │   └── index.tsx
 │       ├── components/
 │       │   ├── Navbar.tsx
 │       │   ├── Hero.tsx
 │       │   ├── About.tsx
 │       │   ├── Projects.tsx
 │       │   ├── ProjectCard.tsx
 │       │   ├── MLdemo.tsx
 │       │   ├── Dashboard.tsx
 │       │   ├── ContactForm.tsx
 │       │   └── Footer.tsx
 │       ├── hooks/
 │       │   └── useFetch.ts
 │       ├── lib/
 │       │   └── data.ts       # mocked data
 │       └── styles/
 │           └── globals.css
```

---

## 🛠 Tech Stack & Best Practices

| 🔧 Area       | 🏷 Tool / Practice           | 🎯 Purpose                             |
| ------------- | ---------------------------- | -------------------------------------- |
| 📝 Language   | TypeScript                   | Type safety, fewer runtime errors      |
| 🎨 Styling    | Tailwind CSS                 | Fast, responsive, modern UI            |
| ⚡ Formatting  | ESLint + Prettier            | Consistent, clean code                 |
| 💾 Data       | `src/lib/data.ts`            | Mock projects, visits & stats          |
| 🔗 Hooks      | `useFetch`                   | API data fetching                      |
| 🧩 Components | Modularization               | Reusable & testable components         |
| 🌿 Git        | Feature / fix branches       | Professional commit & release workflow |
| 🐳 Docker     | Dockerfile + Compose         | Reproducible environment & deployment  |
| 🧪 Testing    | Jest + React Testing Library | Basic unit tests for key components    |

---

## 🚀 Development Workflow

### 1️⃣ Prepare Environment

* ✅ WSL2 + Ubuntu
* ✅ Docker Desktop integrated with WSL
* ✅ Node.js 20 + npm
* ✅ VSCode + Remote WSL + extensions: ESLint, Prettier, Tailwind CSS IntelliSense
* ✅ Git configured with SSH
* ✅ Verify: `docker --version` & `node --version`

---

### 2️⃣ Initialize Project

* 📂 Create folders & files as per structure
* 🔧 `git init`
* 🌿 Branches: `main` & `dev`
* 🖌 Configure ESLint + Prettier
* 🐳 Setup `docker-compose.yml` for frontend

---

### 3️⃣ Frontend Development

* ⚡ Create Next.js + TS project:

  ```bash
  npx create-next-app@latest frontend --ts
  ```
* 🎨 Install Tailwind:

  ```bash
  npm install -D tailwindcss postcss autoprefixer
  ```
* 🧩 Build components & hooks
* 💾 Add mocked data in `lib/data.ts`
* 🔄 Run: `npm run dev` or `docker compose up --build`

---

### 4️⃣ Content & Validation

* 🏠 Complete Hero, About, Projects, MLdemo, Dashboard, ContactForm
* 💻 Fill mocked projects & stats
* 📱 Check responsiveness & dark mode
* 🖌 Auto lint & format
* 🧪 Add basic tests
* 💾 Commit per feature:

  ```bash
  git add . && git commit -m "feat: add Projects section"
  ```

---

### 5️⃣ Deployment

**Option A: Vercel**

* 🌐 Deploy frontend directly
* 🔑 Configure environment variables if needed

**Option B: VPS + Docker**

* 🐳 `docker compose up -d`
* 🌐 Setup reverse proxy (Traefik/Nginx)
* 🔒 HTTPS via Let’s Encrypt
* 📊 Monitor logs & confirm full functionality

---

## 📬 Contact

**Juan González – Frontend Developer**
📧 [Email](mailto:juan@example.com) | 💼 [LinkedIn](https://linkedin.com/in/juan-gonzalez) | 🌐 [Portfolio](https://juan-gonzalez-y.vercel.app/)

