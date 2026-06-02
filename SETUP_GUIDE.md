# To-Do List App - Setup Guide

## 📋 Project Overview

This is a modern React + TypeScript to-do list application built with:
- **Framework**: React with TypeScript
- **Package Manager**: Bun
- **UI Components**: shadcn/ui
- **Styling**: Tailwind CSS
- **Routing**: React Router
- **Build Tool**: Vite (implied by Bun)

## 🚀 Quick Start

### Prerequisites
- [Bun](https://bun.sh) installed (latest version)
- Node.js 18+ (optional, Bun is recommended)

### Installation Steps

1. **Extract the ZIP file**
   ```bash
   unzip todo-list-app.zip
   ```

2. **Install dependencies**
   ```bash
   bun install
   ```

3. **Start development server**
   ```bash
   bun run dev
   ```

   The app will be available at `http://localhost:5173` (or the port shown in terminal)

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
│       ├── command.tsx
│       ├── dropdown-menu.tsx
│       ├── form.tsx
│       ├── input-otp.tsx
│       ├── label.tsx
│       ├── menubar.tsx
│       ├── pagination.tsx
│       ├── popover.tsx
│       ├── progress.tsx
│       ├── radio-group.tsx
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

## 🔧 Configuration Files

- **tsconfig.json** - TypeScript configuration
- **eslint.config.js** - ESLint rules and settings
- **package.json** - Dependencies and scripts

## 📦 Key Dependencies

### UI & Styling
- React Router - Client-side routing
- shadcn/ui - Component library
- Tailwind CSS - Utility-first CSS

### Developer Tools
- TypeScript - Type safety
- ESLint - Code linting
- Vite - Build tool

## 🐛 Troubleshooting

### Port already in use
If port 5173 is busy, Vite will use the next available port. Check the terminal output.

### Dependencies not installing
```bash
rm -rf node_modules bun.lockb
bun install
```

### TypeScript errors
Make sure your IDE recognizes the TypeScript config:
```bash
bun exec tsc --noEmit
```

## 📝 Notes

- The app uses React 18+ features
- Components follow React best practices
- shadcn/ui components are fully customizable via Tailwind
- Mobile-responsive design with `use-mobile` hook

## 🤝 Contributing

1. Create a feature branch: `git checkout -b feature/your-feature`
2. Make your changes
3. Test locally with `bun run dev`
4. Build to verify: `bun run build`
5. Push and create a pull request

---

**Happy coding! 🎉**