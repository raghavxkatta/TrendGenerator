# Smart Meme & Trend Generator

A Next.js-based platform that helps content creators stay ahead of social media trends by providing AI-powered meme generation, trending topic analysis, and automated content scheduling.

## 🚀 Features

### 🔥 Trending Topics Analysis
- Real-time scanning of major social media platforms
- Platform-specific trend filtering (Twitter, Instagram, Facebook, YouTube, Reddit, LinkedIn)
- Engagement metrics and trend indicators
- Hashtag suggestions and viral content identification

### 🎨 AI-Powered Meme Generator
- Customizable meme templates
- AI-suggested captions and text
- Text customization (color, size, positioning)
- Real-time preview and canvas-based generation
- Download and sharing capabilities

### 📅 Content Scheduler
- Multi-platform content scheduling
- Optimal posting time recommendations
- Content management and editing
- Platform-specific optimization
- Automated posting workflows

### 📊 Performance Analytics
- Comprehensive engagement metrics
- Platform performance comparison
- Top-performing content analysis
- AI-powered insights and recommendations
- Growth tracking and trend analysis

## 🛠️ Tech Stack

- **Framework**: Next.js 15 with App Router
- **Language**: JavaScript/JSX (No TypeScript)
- **Styling**: Tailwind CSS v4
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **UI Components**: Custom components with Radix UI primitives

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd smart-meme-gen
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

## 📁 Project Structure

```
smart-meme-gen/
├── app/
│   ├── components/
│   │   ├── Header.jsx           # Navigation and branding
│   │   ├── TrendingTopics.jsx   # Trending topics analysis
│   │   ├── MemeGenerator.jsx    # AI meme creation tool
│   │   ├── ContentScheduler.jsx # Content scheduling system
│   │   ├── Analytics.jsx        # Performance analytics
│   │   └── ui/                  # Reusable UI components
│   ├── globals.css              # Global styles and Tailwind config
│   ├── layout.js                # Root layout component
│   └── page.js                  # Main homepage
├── public/                      # Static assets
├── package.json                 # Dependencies and scripts
└── README.md                    # Project documentation
```

## 🎯 Key Components

### TrendingTopics
- Platform filtering and trend analysis
- Real-time data updates
- Engagement metrics display
- Hashtag suggestions

### MemeGenerator
- Template selection system
- AI caption generation
- Text customization tools
- Canvas-based meme creation
- Download and sharing

### ContentScheduler
- Multi-platform scheduling
- Optimal timing recommendations
- Content management interface
- Platform integration

### Analytics
- Performance metrics dashboard
- Platform comparison charts
- Top content analysis
- AI-powered insights

## 🎨 Design Features

- **Modern UI/UX**: Clean, intuitive interface with smooth animations
- **Responsive Design**: Mobile-first approach with responsive breakpoints
- **Smooth Animations**: Framer Motion-powered transitions and micro-interactions
- **Gradient Design**: Beautiful gradient color schemes throughout the interface
- **Interactive Elements**: Hover effects, loading states, and dynamic content

## 🔧 Customization

### Styling
The project uses Tailwind CSS with custom utility classes and component styles. You can customize:

- Color schemes in `globals.css`
- Component styles in individual component files
- Animation parameters in Framer Motion components

### Adding New Features
- Create new components in `app/components/`
- Add new routes in the app directory
- Extend the analytics system with new metrics
- Integrate additional social media platforms

## 📱 Responsive Design

The application is fully responsive and optimized for:
- Mobile devices (320px+)
- Tablets (768px+)
- Desktop (1024px+)
- Large screens (1280px+)

## 🚀 Deployment

### Build for Production
```bash
npm run build
```

### Start Production Server
```bash
npm start
```

### Deploy to Vercel
```bash
npm install -g vercel
vercel
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- Next.js team for the amazing framework
- Framer Motion for smooth animations
- Tailwind CSS for utility-first styling
- Lucide for beautiful icons
- The open-source community for inspiration

## 📞 Support

For support and questions:
- Create an issue in the repository
- Contact the development team
- Check the documentation

---

**Built with ❤️ using Next.js and modern web technologies**
