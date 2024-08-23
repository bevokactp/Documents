import React from 'react';
import data from './data.yaml';
import './styles.css';

const Обзоръ = () => {
    return (
        <div className="overview-container">
            <h1>Обзор классификации волноводов</h1>
            {Object.keys(data).map((categoryKey, index) => {
                const category = data[categoryKey];
                return (
                    <div key={index} className="category-section">
                        <h2>{categoryKey}</h2>
                        <table className="waveguide-table">
                            <thead>
                                <tr>
                                    <th>Название</th>
                                    <th>Описание</th>
                                    <th>Предназначение</th>
                                    <th>Плюсы</th>
                                    <th>Минусы</th>
                                    <th>Качество и надёжность передачи</th>
                                    <th>Сложность изготовления</th>
                                    <th>Области применения</th>
                                </tr>
                            </thead>
                            <tbody>
                                {category.map((type, typeIndex) => (
                                    <tr key={typeIndex}>
                                        <td>{type.name}</td>
                                        <td>{type.description}</td>
                                        <td>{type.purpose}</td>
                                        <td>{type.advantages}</td>
                                        <td>{type.disadvantages}</td>
                                        <td>{type.reliability}</td>
                                        <td>{type.complexity}</td>
                                        <td>{type.applications}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                );
            })}
        </div>
    );
};

export default Обзоръ;
