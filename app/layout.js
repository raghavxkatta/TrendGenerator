import { Inter } from 'next/font/google';
import './globals.css';
import { ThemeProvider } from './components/ThemeProvider';
import ToastContainer from './components/Toast';

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
          <ToastContainer />
        </ThemeProvider>
      </body>
    </html>
  );
}
