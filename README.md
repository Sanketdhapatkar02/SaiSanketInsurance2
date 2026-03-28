# Sai Sanket Insurance & Investments — Website

A fully responsive, professional website for **Sai Sanket Insurance**, Thane West, Maharashtra.

## 🌐 Live Demo
Deploy via GitHub Pages — instructions below.

---

## 📁 Project Structure

```
sai-sanket/
├── index.html          # Main homepage (all sections)
├── css/
│   └── style.css       # Complete stylesheet
├── js/
│   └── main.js         # Interactivity & calculator
└── README.md
```

---

## ✨ Features

- **Sticky Navbar** with smooth scroll and active section highlighting
- **Hero Section** with animated floating cards and statistics
- **LIC Insurance** — 6 plan cards with features and CTAs
- **Star Health** — 6 plan cards with features and CTAs
- **Vehicle Insurance** — Tabbed section (Two-Wheeler / Four-Wheeler / Commercial)
- **SIP Calculator** — Live interactive returns calculator (sliders)
- **Age-based Investment Recommendations**
- **Mutual Fund Categories** (Low / Moderate / High risk)
- **Contact Section** with address, phone, email, map embed
- **Query Form** — auto-sends to WhatsApp with filled details
- **WhatsApp Floating Button** — direct chat link with pre-filled message
- **Scroll Reveal Animations** on all cards
- **Fully Mobile Responsive**
- **Back-to-top button**

---

## 🚀 Deploying to GitHub Pages (with GoDaddy Domain)

### Step 1: Create GitHub Repository
1. Go to [github.com](https://github.com) → New Repository
2. Name it: `sai-sanket` (or anything you prefer)
3. Set to **Public**
4. Click **Create Repository**

### Step 2: Upload Files
```bash
# Option A — via terminal (if you have Git installed):
git init
git add .
git commit -m "Initial website commit"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/sai-sanket.git
git push -u origin main
```
Or use **GitHub Desktop** or drag-and-drop upload on GitHub.com.

### Step 3: Enable GitHub Pages
1. Go to your repository → **Settings** → **Pages**
2. Source: **Deploy from a branch**
3. Branch: **main** / **root**
4. Click **Save**
5. Your site will be live at: `https://YOUR_USERNAME.github.io/sai-sanket/`

### Step 4: Connect GoDaddy Domain
1. In GitHub Pages settings, add your **Custom domain** (e.g. `www.saisanketinsurance.com`)
2. Go to **GoDaddy DNS** settings
3. Add these DNS records:

| Type  | Host | Value                  |
|-------|------|------------------------|
| A     | @    | 185.199.108.153        |
| A     | @    | 185.199.109.153        |
| A     | @    | 185.199.110.153        |
| A     | @    | 185.199.111.153        |
| CNAME | www  | YOUR_USERNAME.github.io |

4. Wait 24–48 hours for DNS propagation
5. Enable **Enforce HTTPS** in GitHub Pages settings

---

## 📞 Contact Details (pre-configured)

- **WhatsApp / Phone:** +91 98674 31898
- **Email:** Dhapatkarravindra@gmail.com
- **Address:** Sai Sanket Insurance, Shop No. 4, Utkal Sadan, Ganesh Chowk, Kisan Nagar No. 3, Thane West – 400604, Maharashtra

---

## 🛠 Customisation Tips

- **Update plan details:** Edit plan cards in `index.html`
- **Change colors:** Edit CSS variables at the top of `style.css`
- **Add your logo image:** Replace the shield icon in `.logo-icon` with an `<img>` tag
- **Update map:** Replace the Google Maps embed `src` in the Contact section with your exact location coordinates
- **Add Google Analytics:** Paste your GA4 script tag before `</head>` in `index.html`

---

## 📱 WhatsApp Integration

The floating WhatsApp button and query form both link to:
`https://wa.me/919867431898`

The query form automatically pre-fills a WhatsApp message with the user's name, phone, service interest and message for easy follow-up.

---

Built with ❤️ for Sai Sanket Insurance, Thane.
