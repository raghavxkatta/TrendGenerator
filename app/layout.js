import { Inter } from 'next/font/google';
import './globals.css';
import { ThemeProvider } from './components/ThemeProvider';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Smart Meme & Trend Generator',
  description: 'AI-powered meme generation, trending topic analysis, and automated content scheduling',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
