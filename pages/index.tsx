import Image from 'next/image'
import { Inter } from 'next/font/google'
import Background from './(components)/background';
import Navigation from './(components)/navigation';
import TranslationForm from './(components)/translation-form';
const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Navigation />
      <Background />
      <TranslationForm />
    </>
  );
}