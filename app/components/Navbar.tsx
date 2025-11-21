import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Navbar = () => {
  return (
    <header>
      <nav>
        <Link href={'/'} className="logo">
          <Image
            src={'/icons/logo.png'}
            alt="logo"
            width={24}
            height={24}
          />
          <p>DevEvent</p>
        </Link>
        <div className="flex flex-row gap-5">
          <ul>
            <li className="list-none">
              <Link href={'/'}>Home</Link>
            </li>
          </ul>
          <ul>
            <li className="list-none">
              <Link href={'/events'}>Events</Link>
            </li>
          </ul>
          <ul>
            <li className="list-none">
              <Link href={'/new-event'}>New Event</Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
