import { motion, AnimatePresence } from 'motion/react';
import { Button } from '@ui/.';
import { X } from 'lucide-react';
import { FilterContent } from './';
import type { FilterMenuType } from '../types';

const FilterMenu: React.FC<FilterMenuType> = ({
  filterMenuOpen,
  closeFilterMenu,
  categoriesData,
  selectedCategories,
  setSelectedCategories,
  priceRange,
  setPriceRange,
  handleCategoryToggle,
  filteredProducts,
}: FilterMenuType) => {
  return (
    <AnimatePresence>
      {filterMenuOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="z-60 fixed inset-0 bg-black/50 lg:hidden"
            onClick={closeFilterMenu}
          />

          {/* Filter Panel */}
          <motion.div
            initial={{ x: '-100%' }}
            animate={{ x: 0 }}
            exit={{ x: '-100%' }}
            transition={{ type: 'tween', duration: 0.3 }}
            className="z-70 fixed bottom-0 right-0 top-0 w-full overflow-y-auto bg-white lg:hidden"
          >
            <div className="flex h-full flex-col">
              {/* Header */}
              <div className="flex items-center justify-between border-b p-4">
                <div>
                  <h2 className="text-xl">Filter</h2>
                  <p className="text-sm text-gray-600">
                    Filtern Sie die Produkte nach Ihren Wünschen
                  </p>
                </div>
                <Button variant="ghost" size="icon" onClick={closeFilterMenu}>
                  <X className="h-6 w-6" />
                </Button>
              </div>

              {/* Filter Content */}
              <div className="flex-1 p-6">
                <FilterContent
                  categoriesData={categoriesData}
                  selectedCategories={selectedCategories}
                  handleCategoryToggle={handleCategoryToggle}
                  priceRange={priceRange}
                  setPriceRange={setPriceRange}
                />
              </div>

              {/* Footer */}
              <div className="border-t bg-white p-4">
                <div className="flex gap-3">
                  <Button
                    variant="outline"
                    className="flex-1"
                    onClick={() => {
                      setSelectedCategories(['Alle']);
                      setPriceRange([0, 500]);
                    }}
                  >
                    Zurücksetzen
                  </Button>
                  <Button className="flex-1" onClick={closeFilterMenu}>
                    {filteredProducts.length} Produkte anzeigen
                  </Button>
                </div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default FilterMenu;
