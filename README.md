# To-Do List App

A modern, full-featured to-do list application built with React, TypeScript, and Tailwind CSS.

## 📋 Overview

This project is a sleek and responsive to-do list application designed with modern web technologies:

- **Frontend Framework**: React 18+ with TypeScript
- **Package Manager**: Bun
- **UI Components**: shadcn/ui
- **Styling**: Tailwind CSS
- **Routing**: React Router
- **Build Tool**: Vite

## 🚀 Quick Start

### Prerequisites
- [Bun](https://bun.sh) installed (latest version)
- Node.js 18+ (optional, Bun is recommended)

### Installation

1. **Clone the repository** (or extract if using ZIP)
   ```bash
   git clone <repository-url>
   cd to-do-list
   ```

2. **Install dependencies**
   ```bash
   bun install
   ```

3. **Start development server**
   ```bash
   bun run dev
   ```
   The app will be available at `http://localhost:5173`

4. **Build for production**
   ```bash
   bun run build
   ```

5. **Preview production build**
   ```bash
   bun run preview
   ```

## 📁 Project Structure

```
src/
├── components/
│   └── ui/                 # shadcn/ui components
│       ├── accordion.tsx
│       ├── alert-dialog.tsx
│       ├── button.tsx
│       ├── calendar.tsx
│       ├── checkbox.tsx
│       ├── dropdown-menu.tsx
│       ├── form.tsx
│       ├── input.tsx
│       ├── label.tsx
│       ├── menubar.tsx
│       ├── pagination.tsx
│       ├── popover.tsx
│       ├── progress.tsx
│       ├── sheet.tsx
│       ├── skeleton.tsx
│       ├── sonner.tsx       # Toast notifications
│       ├── switch.tsx
│       └── tooltip.tsx
├── hooks/
│   └── use-mobile.tsx       # Mobile detection hook
├── lib/
│   ├── api/
│   │   └── example.functions.ts  # API functions
│   └── config.server.ts     # Server configuration
├── routes/
│   ├── index.tsx            # Main routes
│   └── README.md
└── router.tsx               # Router configuration
```

## 🎯 Available Scripts

| Command | Purpose |
|---------|---------|
| `bun run dev` | Start development server with hot reload |
| `bun run build` | Build for production |
| `bun run preview` | Preview production build locally |
| `bun lint` | Run ESLint |
| `bun format` | Format code (if configured) |

## 🔧 Configuration

- **tsconfig.json** - TypeScript configuration
- **eslint.config.js** - ESLint rules and settings
- **package.json** - Dependencies and scripts
- **vite.config.ts** - Vite build configuration

## 📦 Tech Stack

### Core Dependencies
- **React Router** - Client-side routing and navigation
- **shadcn/ui** - High-quality, customizable component library
- **Tailwind CSS** - Utility-first CSS framework

### Development Tools
- **TypeScript** - Static type checking and better IDE support
- **ESLint** - Code quality and style consistency
- **Vite** - Lightning-fast build tool and dev server

## 🐛 Troubleshooting

### Port already in use
If port 5173 is busy, Vite will automatically use the next available port. Check your terminal output for the correct URL.

### Dependencies installation issues
```bash
rm -rf node_modules bun.lockb
bun install
```

### TypeScript errors
Verify your TypeScript configuration:
```bash
bun exec tsc --noEmit
```

## ✨ Features

- ✅ Create and manage to-do items
- ✅ Mark tasks as complete
- ✅ Delete tasks
- ✅ Responsive design for mobile and desktop
- ✅ Modern UI with shadcn/ui components
- ✅ Type-safe development with TypeScript
- ✅ Hot module reloading during development

## 📝 Development Notes

- The app uses React 18+ features and hooks
- All components follow React best practices
- shadcn/ui components are fully customizable via Tailwind CSS
- Mobile-responsive design implemented with the `use-mobile` hook
- ESLint is configured to maintain code quality

## 🤝 Contributing

1. Create a feature branch: `git checkout -b feature/your-feature`
2. Make your changes and test locally with `bun run dev`
3. Run linting to ensure code quality: `bun lint`
4. Build to verify production compatibility: `bun run build`
5. Push your changes and create a pull request

## 📄 License

[Add your license information here]

---

**Happy coding! 🎉**
