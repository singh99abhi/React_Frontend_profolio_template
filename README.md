# React Frontend Portfolio Template

[![Watch the video](https://img.youtube.com/vi/NUsD4GMb9o4/0.jpg)](https://youtu.be/NUsD4GMb9o4)

A modern, responsive portfolio website template built with React, TypeScript, and Tailwind CSS. This template features a sleek dark theme design with a sidebar navigation, profile section, and tabbed content areas.

## 🚀 Features

### Core Features

- **Modern React 19** with TypeScript for type safety
- **Responsive Design** that works on all devices
- **Dark Theme** with elegant styling
- **Sidebar Navigation** with hover tooltips
- **Profile Section** with customizable banner and profile images
- **Tabbed Content** for organizing different sections
- **Image Upload** functionality for banner and profile pictures

### UI Components

- **Sidebar**: Fixed navigation with icons and tooltips
- **Profile**: Hero section with banner, profile image, and bio
- **Tabs**: Organized content sections (Home, About, Projects, Courses, Contact)
- **Cards**: Reusable card components for displaying content
- **Contact Form**: Interactive contact section
- **About Section**: Information display component

### Technical Stack

- **React 19.1.1** - Latest React with concurrent features
- **TypeScript 5.8.3** - Type-safe development
- **Vite 7.1.2** - Fast build tool and dev server
- **Tailwind CSS 4.1.12** - Utility-first CSS framework
- **Radix UI** - Accessible component primitives
- **Lucide React** - Beautiful icons
- **React Icons** - Additional icon library
- **DaisyUI** - Component library for Tailwind CSS

## 📁 Project Structure

```
├── src/
│   ├── Components/          # React components
│   │   ├── About.tsx       # About section component
│   │   ├── Card.tsx        # Reusable card component
│   │   ├── Contact.tsx     # Contact form component
│   │   ├── Profile.tsx     # Main profile section
│   │   ├── Sidebar.tsx     # Navigation sidebar
│   │   └── Tabs.tsx        # Tabbed content component
│   ├── lib/                # Utility functions and configurations
│   ├── App.tsx             # Main application component
│   ├── main.tsx            # Application entry point
│   ├── types.ts            # TypeScript type definitions
│   └── vite-env.d.ts       # Vite environment types
├── public/                 # Static assets
├── package.json            # Dependencies and scripts
├── vite.config.ts          # Vite configuration
├── tsconfig.json           # TypeScript configuration
├── components.json         # shadcn/ui configuration
└── README.md               # This file
```

## 🛠️ Installation & Setup

### Prerequisites

- Node.js (version 18 or higher)
- npm or yarn package manager

### Quick Start

1. **Clone the repository**

   ```bash
   git clone <repository-url>
   cd React_Frontend_profolio_template
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Start the development server**

   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173` to view the application

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint for code quality

## 🎨 Customization

### Personalizing Your Portfolio

1. **Update Profile Information**

   - Edit `src/Components/Profile.tsx` to change:
     - Name (currently "Abhishek")
     - Tagline (currently "Learning is Eternal")
     - Bio description
     - Profile and banner images

2. **Customize Content Tabs**

   - Modify `src/Components/Tabs.tsx` to:
     - Add/remove tabs
     - Change tab icons
     - Update tab content

3. **Styling Customization**
   - The project uses Tailwind CSS for styling
   - Modify color schemes in the component files
   - Update the dark theme colors in the CSS classes

### Adding New Components

1. Create new components in the `src/Components/` directory
2. Import and use them in the appropriate tab or section
3. Follow the existing TypeScript patterns for consistency

## 🔧 Configuration Files

### Vite Configuration (`vite.config.ts`)

- React plugin for JSX support
- Tailwind CSS integration
- Path aliases for cleaner imports (`@/` points to `src/`)

### TypeScript Configuration

- `tsconfig.json` - Main TypeScript configuration
- `tsconfig.app.json` - Application-specific settings
- `tsconfig.node.json` - Node.js environment settings

### shadcn/ui Configuration (`components.json`)

- Configured for the "new-york" style
- TypeScript support enabled
- Tailwind CSS integration
- Path aliases for components and utilities

## 📱 Responsive Design

The template is fully responsive and includes:

- Mobile-first design approach
- Flexible layouts that adapt to screen sizes
- Touch-friendly navigation elements
- Optimized spacing and typography for different devices

## 🎯 Key Components Explained

### Sidebar (`src/Components/Sidebar.tsx`)

- Fixed position navigation bar
- Icon-based navigation with hover tooltips
- Smooth transitions and hover effects
- Organized into top and bottom sections

### Profile (`src/Components/Profile.tsx`)

- Hero section with banner image
- Profile picture with upload functionality
- Personal information display
- Call-to-action button

### Tabs (`src/Components/Tabs.tsx`)

- Tabbed interface for content organization
- Dynamic content switching
- Icon and label for each tab
- Smooth transitions between sections

### Cards (`src/Components/Card.tsx`)

- Reusable card component
- Image, title, and description support
- Hover effects and animations
- Responsive grid layout

## 🚀 Deployment

### Building for Production

```bash
npm run build
```

This creates a `dist/` folder with optimized production files.

### Deployment Options

- **Vercel**: Connect your GitHub repository for automatic deployments
- **Netlify**: Drag and drop the `dist/` folder
- **GitHub Pages**: Use GitHub Actions for automatic deployment
- **Any static hosting service**: Upload the contents of `dist/`

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🆘 Support

If you encounter any issues or have questions:

1. Check the existing issues in the repository
2. Create a new issue with detailed information
3. Include your environment details and error messages

## 🔮 Future Enhancements

Potential improvements for the template:

- [ ] Add more animation libraries (Framer Motion)
- [ ] Implement dark/light theme toggle
- [ ] Add blog section with markdown support
- [ ] Integrate with CMS for content management
- [ ] Add portfolio project showcase with filtering
- [ ] Implement contact form backend integration
- [ ] Add SEO optimization
- [ ] Include performance monitoring

---

**Happy coding! 🎉**

This template provides a solid foundation for creating a professional portfolio website. Feel free to customize it to match your personal brand and showcase your work effectively.
