import React from 'react';

// Обобщенные рекомендации по безопасности
const safetyTips = [
  "Используйте защитные очки и перчатки при работе с паяльником.",
  "Работайте в хорошо проветриваемом помещении, чтобы избежать вдыхания вредных паров.",
  "Не оставляйте паяльник включенным без присмотра.",
  "Используйте негорючие и хорошо освещенные рабочие поверхности.",
  "Регулярно очищайте кончик паяльника и следите за его состоянием.",
  "Не касайтесь горячих частей паяльника или оборудования.",
  "Следите за температурными режимами и соблюдайте рекомендуемые параметры для разных материалов и типов пайки."
];

const Безопасность = () => {
  return (
    <div>
      <h3>Рекомендации по безопасности</h3>
      <ol>
        {safetyTips.map((tip, index) => (
          <li key={index}>{tip}</li>
        ))}
      </ol>
    </div>
  );
};

export default Безопасность;
