import React, { useState, useEffect } from 'react';
import YAML from 'js-yaml';
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
    isRareEarth: false
  });

  useEffect(() => {
    const loadElements = async () => {
      try {
        const response = await fetch('/elements.yaml');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const text = await response.text();
        const data = YAML.load(text);
        setElements(Array.isArray(data) ? data : []); // Убедитесь, что это массив
      } catch (error) {
        console.error('Error loading or parsing YAML file:', error);
      }
    };

    loadElements();
  }, []);

  const handleFilterChange = (e) => {
    setFilters({
      ...filters,
      [e.target.name]: e.target.type === 'checkbox' ? e.target.checked : e.target.value
    });
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
      (filters.isRareEarth ? el.isRareEarth : true)
    );
  });


  const getElementClasses = (level) => {
    const colors = [
      '#3498db', '#2ecc71', '#e74c3c', '#f1c40f', '#9b59b6',
      '#1abc9c', '#f39c12', '#d35400', '#7f8c8d', '#34495e',
      '#16a085', '#27ae60', '#2980b9', '#ccc4ad', '#f39c12',
      '#a3bac5', '#9aac99'
    ]; // Colors for different levels
    return {
      className: `element-circle level-${level}`,
      backgroundColor: colors[level - 1] || '#3498db' // Default color if out of range
    };
  };


  const groupedElements = filteredElements.reduce((acc, el, index) => {
  }, {});

  return (
    <div className="Elements-container">

    </div>
  );
};

export default Elements;
