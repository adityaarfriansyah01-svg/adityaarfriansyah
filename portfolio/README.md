# Aditya Arfriansyah — Portfolio

Personal portfolio website built with React + Vite + Tailwind CSS.

## Setup

### 1. Install Node.js
Download and install from: https://nodejs.org (pilih versi LTS)

### 2. Install dependencies
```bash
cd portfolio
npm install
```

### 3. Run development server
```bash
npm run dev
```
Buka browser di http://localhost:5173

### 4. Build for production
```bash
npm run build
```

---

## Customization

### Ganti foto profil
Taruh file foto kamu di `public/photo.jpg`

### Ganti CV
Update link di `src/components/About.jsx` — cari `href="#"` di tombol Download CV

### Tambah proyek
Edit array `projects` di `src/components/Portfolio.jsx`

### Tambah sertifikat
Edit array `certificates` di `src/components/Certificates.jsx` — ganti `image: null` dengan path gambar

### Ganti skill level
Edit nilai `level` di `src/components/Skills.jsx` (0–100)
