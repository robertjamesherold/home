import React from 'react';
import type { ActiveTab } from '../types';

type Props = {
  activeTab: ActiveTab;
  onChange: (t: ActiveTab) => void;
  reviewCount: number;
};

const TabButton: React.FC<{
  isActive: boolean;
  onClick: () => void;
  label: string;
}> = ({ isActive, onClick, label }) => (
  <button
    type="button"
    onClick={onClick}
    className={`focus-visible:inset-ring-1 relative inset-1 mb-1 overflow-visible text-nowrap rounded-t-lg px-2 py-1 text-sm font-semibold transition focus-visible:outline-none focus-visible:-outline-offset-1 focus-visible:ring-1 focus-visible:ring-violet-300 ${
      isActive
        ? 'text-violet-600 after:absolute after:-bottom-px after:left-0 after:right-0 after:h-0.5 after:rounded-full after:bg-violet-600'
        : 'text-gray-500 hover:text-gray-700'
    }`}
  >
    {label}
  </button>
);

const Tabs: React.FC<Props> = ({ activeTab, onChange, reviewCount }) => (
  <div
    className="flex flex-nowrap gap-3 overflow-y-visible overflow-x-scroll border-b border-gray-200 pb-1"
    style={{ scrollbarWidth: 'none' }}
  >
    <TabButton
      isActive={activeTab === 'description'}
      onClick={() => onChange('description')}
      label="Beschreibung"
    />
    <TabButton
      isActive={activeTab === 'reviews'}
      onClick={() => onChange('reviews')}
      label={`Bewertungen (${reviewCount})`}
    />
    <TabButton
      isActive={activeTab === 'shipping'}
      onClick={() => onChange('shipping')}
      label="Versand & Retouren"
    />
  </div>
);

export default Tabs;
