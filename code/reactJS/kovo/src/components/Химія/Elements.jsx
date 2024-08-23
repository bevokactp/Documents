// Elements.jsx
import React, { useState, useEffect } from 'react';
import YAML from 'js-yaml';
import Filters from './Filters';
import PyramidView from './PyramidView';
import CircularView from './CircularView';
import './elements.css';


const Elements = () => {
  const [elements, setElements] = useState([]);
  const [filters, setFilters] = useState({
    state: 'все',
    isMetal: false,
    isNonMetal: false,
    isMetalloids: false,
    isAlkaliMetal: false,
    isAlkalineEarthMetal: false,
    isHalogen: false,
    isRareEarth: false,
    isAcidic: false,
    isReducing: false,
    isOxidizing: false,
    isOrganic: false,
    isInorganic: false,
    isStable: false,
    isRadioactivity: false,
    isDispersed: false,
    isSuperconductivity: false,
    isFluidity: false
  });
  const [viewMode, setViewMode] = useState('circular');

  useEffect(() => {
    const loadElements = async () => {
      try {
        const response = await fetch('/elements.yaml');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const text = await response.text();
        const data = YAML.load(text);
        setElements(Array.isArray(data) ? data : []);
      } catch (error) {
        console.error('Error loading or parsing YAML file:', error);
      }
    };

    loadElements();
  }, []);

  const handleFilterChange = (e) => {
    const { name, type, checked, value } = e.target;
    setFilters(prevFilters => ({
      ...prevFilters,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const filteredElements = elements.filter(el => {
    return (
      (filters.state === 'все' || el.state === filters.state) &&
      (filters.isMetal ? el.isMetal : true) &&
      (filters.isNonMetal ? el.isNonMetal : true) &&
      (filters.isMetalloids ? el.isMetalloids : true) &&
      (filters.isAlkaliMetal ? el.isAlkaliMetal : true) &&
      (filters.isAlkalineEarthMetal ? el.isAlkalineEarthMetal : true) &&
      (filters.isHalogen ? el.isHalogen : true) &&
      (filters.isRareEarth ? el.isRareEarth : true) &&
      (filters.isAcidic ? el.isAcidic : true) &&
      (filters.isReducing ? el.isReducing : true) &&
      (filters.isOxidizing ? el.isOxidizing : true) &&
      (filters.isOrganic ? el.isOrganic : true) &&
      (filters.isInorganic ? el.isInorganic : true) &&
      (filters.isStable ? el.isStable : true) &&
      (filters.isRadioactivity ? el.isRadioactivity : true) &&
      (filters.isDispersed ? el.isDispersed : true) &&
      (filters.isSuperconductivity ? el.isSuperconductivity : true) &&
      (filters.isFluidity ? el.isFluidity : true)
    );
  });

  return (
    <div className="Elements-container">
      <Filters filters={filters} handleFilterChange={handleFilterChange} />
      <button onClick={() => setViewMode(viewMode === 'pyramid' ? 'circular' : 'pyramid')}>
        Switch to {viewMode === 'pyramid' ? 'Circular' : 'Pyramid'} View
      </button>
      {viewMode === 'pyramid' ? (
        <PyramidView elements={filteredElements} />
      ) : (
        <CircularView elements={filteredElements} />
      )}
    </div>
  );
};

export default Elements;
