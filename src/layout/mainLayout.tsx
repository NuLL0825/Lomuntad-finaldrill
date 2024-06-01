import React from 'react';
import Header from '@/components/navbar';
import { ReactNode } from 'react';
import '../app/globals.css';

interface MainProps {
  children: ReactNode;
}

const Main = ({ children }: MainProps) => {
  return (
    <div className="flex flex-col items-center min-h-screen">
      <Header />
      <main className="w-1/2 flex items-center">{children}</main>
    </div>
  );
};

export default Main;
