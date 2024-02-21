//Global styles
import '@/styles/globals.css';
//Font
import { Inter } from 'next/font/google';
const inter = Inter({ subsets: ['latin'] });
//context
import StateContextProvider from '@/context/StateContextProvider';

export default function App({ Component, pageProps }) {
  return (
    <StateContextProvider>
      <Component {...pageProps} />
    </StateContextProvider>
  );
}
