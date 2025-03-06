'use client';

import Link from 'next/link';
import { Button } from '../ui/button';

export default function Navbar() {
  return (
    <nav className="flex justify-around p-4 bg-gray-900 text-white">
      <Link href="/">
        <Button variant="ghost" className="text-white hover:text-gray-200">Home</Button>
      </Link>
      <Link href="/generate">
        <Button variant="ghost" className="text-white hover:text-gray-200">Generate Keys</Button>
      </Link>
      <Link href="/wallets">
        <Button variant="ghost" className="text-white hover:text-gray-200">Wallets</Button>
      </Link>
      <Link href="/transactions">
        <Button variant="ghost" className="text-white hover:text-gray-200">Transactions</Button>
      </Link>
      <Link href="/learn">
        <Button variant="ghost" className="text-white hover:text-gray-200">Learn</Button>
      </Link>
    </nav>
  );
}