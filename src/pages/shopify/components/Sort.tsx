
const Sort = () =>
    {
        <div className="relative">
            <TrendingUp className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5 pointer-events-none" />
            <select
                value={ sortBy }
                onChange={ ( e ) => setSortBy( e.target.value ) }
                className="w-full pl-10 pr-8 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-600 focus:border-transparent outline-none appearance-none bg-white cursor-pointer text-gray-900"
                style={ {
                    backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 12 12'%3E%3Cpath fill='%239CA3AF' d='M6 9L1 4h10z'/%3E%3C/svg%3E")`,
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: 'right 0.75rem center',
                    backgroundSize: '12px',
                    colorScheme: 'light'
                } }
            >
                <option value="default" className="bg-white text-gray-900 py-2">Sort by Default</option>
                <option value="price-low" className="bg-white text-gray-900 py-2">Price: Low to High</option>
                <option value="price-high" className="bg-white text-gray-900 py-2">Price: High to Low</option>
                <option value="rating" className="bg-white text-gray-900 py-2">Highest Rated</option>
            </select>
        </div>
    }
