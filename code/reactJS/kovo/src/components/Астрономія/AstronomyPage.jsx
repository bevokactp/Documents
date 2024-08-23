// components/Home.js
import React from 'react';
import { Link } from 'react-router-dom';

import { ROUTES } from '../../constants/routes';

function Home() {
  return (
    <div>
        <nav>
          <ul>
            <li><Link to={ROUTES.AstronomyObjects}>Objects</Link></li>
            <li><Link to={ROUTES.AstronomyConstellations}>Сad1k1</Link></li>
            <li><Link to={ROUTES.AstronomyStarmap}>Starmap</Link></li>
            <li><Link to={ROUTES.AstronomySunSystem}>SunSystem</Link></li>
          </ul>
        </nav>
    </div>
  );
}

export default Home;
