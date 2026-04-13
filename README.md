# 🍽️ Дүүрэн Ресторан

Дархан-Уул аймгийн Дүүрэн рестораны вэбсайт. **Next.js 15 + Cloudflare Pages** дээр ажилладаг.

GitHub-д push хийхэд **автоматаар** Cloudflare Pages-т deploy болно.

---

## ⚡ GitHub → Cloudflare автомат deploy тохируулах

### 1. Cloudflare API Token авах

1. [dash.cloudflare.com](https://dash.cloudflare.com) → **My Profile** → **API Tokens**
2. **Create Token** → *Edit Cloudflare Workers* template сонгоно
3. Token-ийг хуулж авна

### 2. Cloudflare Account ID авах

1. [dash.cloudflare.com](https://dash.cloudflare.com) → баруун баганаас **Account ID** хуулна

### 3. GitHub Secrets нэмэх

GitHub repo → **Settings** → **Secrets and variables** → **Actions** → **New repository secret**

| Нэр | Утга |
|-----|------|
| `CLOUDFLARE_API_TOKEN` | Дээрх token |
| `CLOUDFLARE_ACCOUNT_ID` | Дээрх Account ID |

### 4. Cloudflare Pages Project үүсгэх

```bash
npm install
npx wrangler pages project create duuren-restaurant
```

### 5. GitHub-д push хийнэ

```bash
git init
git add .
git commit -m "init: Дүүрэн ресторан"
git branch -M main
git remote add origin https://github.com/таны-нэр/duuren.git
git push -u origin main
```

**Дууссан!** — Push хийх бүрт автоматаар `https://duuren-restaurant.pages.dev` хаягт deploy болно.

---

## Локал ажиллуулах (хэрэгтэй бол)

```bash
npm install
npm run dev
# http://localhost:3000
```

## Технологи

- [Next.js 15](https://nextjs.org/) + TypeScript
- [Cloudflare Pages](https://pages.cloudflare.com/) — hosting
- [@cloudflare/next-on-pages](https://github.com/cloudflare/next-on-pages) — adapter
- GitHub Actions — CI/CD pipeline

