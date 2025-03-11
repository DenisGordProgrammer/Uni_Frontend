const SearchBar = ({ searchQuery, setSearchQuery }) => {
    return (
        <div className="search-container">
            <input
                id="search"
                type="text"
                placeholder="Пошук..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
            />
        </div>
    );
};

export default SearchBar;
