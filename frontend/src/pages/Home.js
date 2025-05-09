import React from 'react';
import './styles/Home.css';
import SearchBar from '../components/Searchbar';

const Home = () => {
    const handleSearch = (query) => {
        console.log('Searching for:', query);
        // Implement search functionality (e.g., filter doctors or hospitals)
    };

    return (
        <div className="home">
            <div className="hero">
                <h1>Welcome to the Healthcare App</h1>
                <p>Find the best doctors, hospitals, and healthcare services near you.</p>
                <SearchBar onSearch={handleSearch} />
            </div>
        </div>
    );
};

export default Home;
