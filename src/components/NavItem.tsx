"use client"
import Link from 'next/link';
import React from 'react';
import { usePathname } from 'next/navigation';

export default function NavItem() {
  const pathname = usePathname();

  const navLink = [
    {
      name: 'Home',
      path: '/',
    },
    {
      name: 'About me',
      path: '/about',
    },
    {
      name: 'Projects',
      path: '/projects',
    },
    {
      name: 'Contacts',
      path: '/contact',
    },
  ];

  return (
    <div>
      {navLink.map(({ name, path }) => {
        const isActive = pathname === path;

        return (
          <Link key={name} href={path}>
            <span className={`relative group transition-colors duration-300 hover:text-white ${isActive ? 'text-white' : ''} ml-8`}>
              <span>{name}</span>
              <span className={`absolute inset-x-0 bottom-0 h-0.5 bg-white transition-transform duration-300 transform ${isActive ? 'scale-x-100' : 'scale-x-0'}`}></span>
            </span>
          </Link>
        );
      })}
    </div>
  );
}
