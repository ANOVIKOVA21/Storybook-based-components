import React from 'react';

import './sidebar-menu.css';

export interface MenuItem {
  label: string;
  children?: MenuItem[];
}

export interface SidebarMenuProps {
  state?: 'opened' | 'closed';
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
  state = 'opened',
  items = [],
  onClose,
}: SidebarMenuProps) => {
  return (
    <>
      {state === 'opened' && <div className="overlay" onClick={onClose} />}
      <aside className={`sidebar ${state}`} aria-label="Sidebar menu">
        <button className="close-btn" onClick={onClose}>
          ×
        </button>
        <MenuItems items={items} />
      </aside>
    </>
  );
};
