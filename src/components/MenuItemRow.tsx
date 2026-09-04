import React from 'react';
import { MenuItem } from '../types';
import { Utensils } from 'lucide-react';

interface MenuItemRowProps {
  item: MenuItem;
}

export const MenuItemRow: React.FC<MenuItemRowProps> = ({ item }) => {
  return (
    <article className="menu-item-row">
      {/* Circular thumbnail placeholder matching reference images */}
      <div className="menu-thumb" aria-hidden="true">
        <Utensils size={18} className="menu-thumb-empty" />
      </div>

      <div className="menu-item-content">
        <div className="menu-item-top">
          <div className="menu-item-name-group">
            <h3 className="menu-item-name">{item.name}</h3>
          </div>
          {/* Dot leader matching reference images */}
          <div className="menu-item-dots" />
          <span className="menu-item-price">{item.price}</span>
        </div>

        <p className="menu-item-desc">{item.description}</p>
      </div>
    </article>
  );
};
