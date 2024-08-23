import React, { useEffect, useState } from "react";
import yaml from "js-yaml";
import "./card.css"; // Подключаем файл стилей
import { Suit } from "./card"; // Импортируем классы

const filePath = "./cards/arkanyMaly.yaml";

const CardDisplay = () => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(filePath);
        if (!response.ok) {
          throw new Error("Ошибка загрузки файла");
        }
        const text = await response.text();
        const parsedData = yaml.load(text);
        setData(parsedData);
      } catch (error) {
        setError(error.message);
      }
    };

    fetchData();
  }, []);

  if (error) {
    return <div>Ошибка: {error}</div>;
  }

  if (!data) {
    return <div>Загрузка данных...</div>;
  }

  const suits = Object.keys(data).map((key) => {
    const suitData = data[key];
    const suit = new Suit(suitData.names, suitData.cards);

    return {
      name: suit.getFormattedName(),
      suit: suit
    };
  });

  const totalCards = suits.reduce((sum, suitObj) => sum + suitObj.suit.getTotalCards(), 0);
  const totalDigitCards = suits.reduce((sum, suitObj) => sum + suitObj.suit.getTotalDigitCards(), 0);
  const totalNamedCards = suits.reduce((sum, suitObj) => sum + suitObj.suit.getTotalNamedCards(), 0);
  const totalLords = suits.reduce((sum, suitObj) => sum + suitObj.suit.getTotalLords(), 0);

  return (
    <div className="card-display">
      <h1>Арканы малые</h1>
      <h3>Всего карт: {totalCards} = господарей ({totalLords}) именных ({totalNamedCards}) цифровых ({totalDigitCards})</h3>

      <table className="cards-table">
        <thead>
          <tr>
            <th></th>
            <th></th>
            {suits.map((suit, index) => (
              <React.Fragment key={index}>
                <th colSpan="2">{suit.name}</th>
              </React.Fragment>
            ))}
          </tr>
          <tr>
            <th>Ранг</th>
            <th>Название</th>
            {suits.map((suit, index) => (
              <React.Fragment key={index}>
                <th>Количество</th>
                <th>Описание</th>
              </React.Fragment>
            ))}
          </tr>
        </thead>
        <tbody>
          {Array.from(new Set(suits.flatMap(suit => suit.suit.cards.map(card => card.rank))))
            .sort((a, b) => a - b)
            .map(rank => (
              <tr key={rank}>
                <td>{suits[0].suit.cards.find(card => card.rank === rank)?.rank || `Ранг ${rank}`}</td>
                <td>{suits[0].suit.cards.find(card => card.rank === rank)?.name || `Название ${rank}`}</td>
                {suits.map((suit, index) => {
                  const card = suit.suit.cards.find(card => card.rank === rank);
                  const rowClass = card ? (card.rank <= 9 ? 'rank-low' : card.rank === 14 ? 'rank-last' : 'rank-medium') : '';
                  return (
                    <React.Fragment key={index}>
                      {card ? (
                        <>
                          <td className={rowClass}>{card.quantity}</td>
                          <td className={rowClass}>{card.description}</td>
                        </>
                      ) : (
                        <>
                          <td>-</td>
                          <td>-</td>
                        </>
                      )}
                    </React.Fragment>
                  );
                })}
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
};

export default CardDisplay;
