# GitHub Upload Guide

## Upload Your Portfolio to GitHub

### Step 1: Initialize Git (if not already done)

Open your terminal in the project folder and run:

```bash
git init
```

### Step 2: Add All Files

```bash
git add .
```

### Step 3: Commit Your Changes

```bash
git commit -m "Initial commit: Portfolio website with React"
```

### Step 4: Add Your GitHub Repository

```bash
git remote add origin https://github.com/Tanveer2507/TANVEER-KAKAR.git
```

### Step 5: Push to GitHub

```bash
git branch -M main
git push -u origin main
```

---

## If Repository Already Has Content

If you get an error saying the repository already has content, use:

```bash
git pull origin main --allow-unrelated-histories
git push -u origin main
```

---

## Complete Command Sequence (Copy & Paste)

```bash
git init
git add .
git commit -m "Initial commit: Portfolio website with React"
git remote add origin https://github.com/Tanveer2507/TANVEER-KAKAR.git
git branch -M main
git push -u origin main
```

---

## Troubleshooting

### Error: "remote origin already exists"
```bash
git remote remove origin
git remote add origin https://github.com/Tanveer2507/TANVEER-KAKAR.git
```

### Error: "failed to push some refs"
```bash
git pull origin main --rebase
git push -u origin main
```

### Error: Authentication failed
You may need to use a Personal Access Token instead of password:
1. Go to GitHub Settings → Developer settings → Personal access tokens
2. Generate new token with 'repo' permissions
3. Use token as password when prompted

---

## After Upload

Your portfolio will be available at:
- Repository: https://github.com/Tanveer2507/TANVEER-KAKAR
- You can deploy it to GitHub Pages, Vercel, or Netlify for free hosting

---

## Deploy to GitHub Pages (Optional)

### Step 1: Install gh-pages
```bash
npm install --save-dev gh-pages
```

### Step 2: Update package.json
Add these lines to your package.json:
```json
"homepage": "https://tanveer2507.github.io/TANVEER-KAKAR",
"scripts": {
  "predeploy": "npm run build",
  "deploy": "gh-pages -d build"
}
```

### Step 3: Deploy
```bash
npm run deploy
```

Your website will be live at: https://tanveer2507.github.io/TANVEER-KAKAR

---

## Quick Deploy to Vercel (Recommended)

1. Go to https://vercel.com
2. Sign in with GitHub
3. Import your repository: TANVEER-KAKAR
4. Click Deploy
5. Your site will be live in 2 minutes!

---

## Need Help?

If you face any issues:
1. Make sure you're in the project folder
2. Check if Git is installed: `git --version`
3. Make sure you're logged into GitHub
4. Try the commands one by one instead of all at once
