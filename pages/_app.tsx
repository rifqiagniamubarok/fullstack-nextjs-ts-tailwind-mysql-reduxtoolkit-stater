import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { useState, useEffect, useRef } from 'react';
import { ThemeProvider } from 'next-themes';
import { Provider } from 'react-redux';
import store from '../stores';

export default function App({ Component, pageProps }: AppProps) {
  const [mounted, setMounted] = useState(false);
  const [theme, setTheme] = useState<string>('light');

  useEffect(() => {
    localStorage.setItem('theme', theme);
  }, []);

  return (
    <ThemeProvider attribute="class" defaultTheme="light">
      <Provider store={store}>
        <Component {...pageProps} />
      </Provider>
    </ThemeProvider>
  );
}
