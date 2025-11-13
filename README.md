# Portfolio Website

A modern, responsive portfolio website built with Next.js 15, React 19, and Tailwind CSS 4, featuring smooth scroll animations powered by GSAP and Lenis.

## 🚀 Features

- ⚡️ Next.js 15 with Turbopack for blazing fast development
- ⚛️ React 19 with latest features
- 🎨 Tailwind CSS 4 for styling
- 🎬 GSAP for advanced animations
- 📜 Lenis for smooth scroll experience
- 🔒 TypeScript for type safety
- 🐳 Docker support for easy deployment
- 📱 Fully responsive design

## 🛠️ Tech Stack

- **Framework:** Next.js 15.5.4
- **React:** 19.1.0
- **Styling:** Tailwind CSS 4
- **Animations:** GSAP 3.13.0
- **Smooth Scroll:** Lenis 1.3.11
- **Language:** TypeScript 5
- **Container:** Docker

## 📋 Prerequisites

- Node.js 20.x or higher
- npm or yarn
- Docker (optional, for containerized deployment)

## 🚀 Getting Started

### Local Development

1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

### Build for Production

```bash
npm run build
npm start
```

## 🐳 Docker Deployment

### Quick Start with Docker

**Production:**
```bash
docker-compose up -d
```

**Development:**
```bash
docker-compose --profile dev up portfolio-dev
```

For detailed Docker documentation, see [DOCKER.md](./DOCKER.md)

## 🚢 Deployment Options

### Vercel (Recommended)
```bash
npm install -g vercel
vercel --prod
```

### VPS/Server with PM2
```bash
npm install -g pm2
npm run build
pm2 start npm --name "portfolio" -- start
```

## 📁 Project Structure

```
portfolio/
├── app/                    # Next.js app directory
├── public/                 # Static assets
├── Dockerfile             # Docker configuration
├── docker-compose.yml     # Docker Compose setup
├── next.config.ts         # Next.js configuration
├── tailwind.config.ts     # Tailwind CSS configuration
├── tsconfig.json          # TypeScript configuration
└── package.json           # Dependencies and scripts
```

## 📝 Scripts

- `npm run dev` - Start development server with Turbopack
- `npm run build` - Build for production
- `npm start` - Start production server

## 🔧 Configuration

### Environment Variables

Create a `.env.local` file in the root directory for environment-specific variables:

```env
# Example
NEXT_PUBLIC_API_URL=your_api_url
```

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

## 📄 License

This project is private and proprietary.

## 👤 Author

SwowS_bot

## 🙏 Acknowledgments

- Next.js team for the amazing framework
- GSAP for powerful animation library
- Lenis for smooth scroll implementation
