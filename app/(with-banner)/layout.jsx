import React from 'react';
import Counter from './posts/Counter';

export default function PostLayout({ children }) {
  return (
    <div>
      <marquee style={{ color: 'pink' }}>Home &bull; Posts</marquee>
      {children}
    </div>
  );
}
