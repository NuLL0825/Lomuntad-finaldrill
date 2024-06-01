import React from 'react';
import Header from '@/components/navbar';
import { ReactNode } from 'react';
import '../app/globals.css';

interface MainProps {
  children: ReactNode;
}

const Main = ({ children }: MainProps) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <div className="flex-grow items-start">{children}</div>
    </div>
  );
};

export default Main;
