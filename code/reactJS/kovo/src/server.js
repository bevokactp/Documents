// server.js

const express = require('express');
const fs = require('fs');
const path = require('path');
const cors = require('cors');
const app = express();
const port = 5000;
const directoryPath = path.join(__dirname, 'components/Поезія/письмена');

app.use(cors());

app.get('/api/files', (req, res) => {
  function readDirectory(dir) {
    const items = fs.readdirSync(dir);
    const result = [];

    items.forEach(item => {
      const itemPath = path.join(dir, item);
      const stats = fs.statSync(itemPath);

      if (stats.isDirectory()) {
        result.push({
          name: item,
          isDirectory: true,
          children: readDirectory(itemPath) // Рекурсивно читаем поддиректории
        });
      } else {
        result.push({
          name: item,
          isDirectory: false,
          content: fs.readFileSync(itemPath, 'utf8') // Читаем содержимое файла
        });
      }
    });

    return result;
  }

  try {
    const fileTree = {
      name: path.basename(directoryPath),
      isDirectory: true,
      children: readDirectory(directoryPath)
    };
    res.json(fileTree);
  } catch (error) {
    res.status(500).json({ error: 'Ошибка при чтении директории' });
  }
});

app.listen(port, () => {
  console.log(`Сервер работает на http://localhost:${port}`);
});
