# TruLogic AI — Website

Static website for TruLogicAI.com. Built with plain HTML, CSS, and JavaScript — no build tools required.

## Deploy to GitHub Pages (Free Hosting)

### Step 1 — Create a GitHub Account
If you don't have one, sign up free at https://github.com

### Step 2 — Create a New Repository
1. Go to https://github.com/new
2. Name the repo exactly: `trulogicai` (or any name you prefer)
3. Set it to **Public**
4. Click **Create repository**

### Step 3 — Upload Your Files
Option A — Via GitHub web (easiest):
1. Open your new repo
2. Click **Add file → Upload files**
3. Drag and drop: `index.html`, `style.css`, `main.js`
4. Commit changes

Option B — Via Git CLI:
```bash
git init
git add .
git commit -m "Initial website"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/trulogicai.git
git push -u origin main
```

### Step 4 — Enable GitHub Pages
1. Go to your repo **Settings**
2. Click **Pages** in the left sidebar
3. Under **Branch**, select `main` and `/ (root)`
4. Click **Save**
5. GitHub will give you a URL like: `https://yourusername.github.io/trulogicai`

### Step 5 — Point Your Domain (trulogicai.com) to GitHub Pages

#### In GitHub:
1. Go to **Settings → Pages**
2. Under **Custom domain**, enter: `trulogicai.com`
3. Click **Save**
4. A file called `CNAME` will be created in your repo automatically

#### In Your Domain Registrar (GoDaddy / Namecheap / etc.):
Add these DNS records:

**A Records** (point apex domain to GitHub):
| Type | Name | Value |
|------|------|-------|
| A | @ | 185.199.108.153 |
| A | @ | 185.199.109.153 |
| A | @ | 185.199.110.153 |
| A | @ | 185.199.111.153 |

**CNAME Record** (for www):
| Type | Name | Value |
|------|------|-------|
| CNAME | www | yourusername.github.io |

DNS changes take 15 minutes to 48 hours to propagate.

#### Enable HTTPS:
Once DNS propagates, go back to **Settings → Pages** and check **Enforce HTTPS**.

---

## Contact Form Note
Since this is a static site, the contact form opens your visitor's email client pre-filled with their details. For a proper backend form, consider adding **Formspree** (free tier available):
1. Sign up at https://formspree.io
2. Replace the `onsubmit="handleSubmit(event)"` with Formspree's endpoint
3. No server needed

---

## Files
- `index.html` — Main page
- `style.css` — All styles
- `main.js` — Interactivity
