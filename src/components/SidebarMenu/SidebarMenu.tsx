import React from 'react';

import './sidebar-menu.css';

export interface MenuItem {
  label: string;
  children?: MenuItem[];
}

export interface SidebarMenuProps {
  state?: 'open' | 'closed';
  items?: MenuItem[];
  onClose?: () => void;
}

const MenuItems = ({ items }: { items: MenuItem[] }) => (
  <ul className="list menu-items">
    {items.map((item) => (
      <li key={item.label}>
        {item.children ? (
          <details className="accordion">
            <summary className="menu-link">{item.label}</summary>
            <MenuItems items={item.children} />
          </details>
        ) : (
          <a href="#" className="menu-link">
            {item.label}
          </a>
        )}
      </li>
    ))}
  </ul>
);

export const SidebarMenu = ({
  state = 'open',
  items = [],
  onClose,
}: SidebarMenuProps) => {
  return (
    <>
      {state === 'open' && <div className="overlay" onClick={onClose} />}
      <aside className={`sidebar ${state}`} aria-label="Sidebar menu">
        <button type="button" className="close-btn" onClick={onClose}>
          ×
        </button>
        <nav className="navigation">
          <MenuItems items={items} />
        </nav>
      </aside>
    </>
  );
};
