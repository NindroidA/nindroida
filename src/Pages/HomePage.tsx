import React from 'react';
import { Link } from 'react-router-dom';

function HomePage() {
    return (
        <div>
            <h1>Home Page</h1>
            <p>This is the home page. More coming soon.</p>
            <Link to="/test">Go to Test Page</Link>
        </div>
    );
}

export default HomePage;