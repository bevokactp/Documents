import React, { useState, useEffect } from 'react';

const TreeNode = ({ node, isOpen }) => {
  const [isNodeOpen, setIsNodeOpen] = useState(isOpen);

  useEffect(() => {
    // Обновляем состояние при изменении `isOpen` из `App`
    setIsNodeOpen(isOpen);
  }, [isOpen]);

  const handleToggle = () => {
    setIsNodeOpen(!isNodeOpen);
  };

  return (
    <div style={{ marginLeft: node.level * 20, color: `hsl(${node.level * 60}, 70%, 50%)` }}>
      {node.children && node.children.length > 0 && (
        <span
          onClick={handleToggle}
          style={{ cursor: 'pointer', marginRight: 5 }}
        >
          {isNodeOpen ? '-' : '+'}
        </span>
      )}
      <span>{node.name}</span>
      {isNodeOpen && node.children && (
        <div>
          {node.children.map((child, index) => (
            <TreeNode key={index} node={child} isOpen={isOpen} />
          ))}
        </div>
      )}
    </div>
  );
};

const parseData = (data) => {
  const lines = data.split("\n");
  const result = [];
  const stack = [];

  lines.forEach((line) => {
    const level = line.search(/\S|$/) / 4;
    const node = {
      name: line.trim(),
      level,
      children: [],
    };

    while (stack.length > 0 && stack[stack.length - 1].level >= level) {
      stack.pop();
    }

    if (stack.length === 0) {
      result.push(node);
    } else {
      stack[stack.length - 1].children.push(node);
    }

    stack.push(node);
  });

  return result;
};

const App = () => {
  const [treeData, setTreeData] = useState([]);
  const [showAll, setShowAll] = useState(true);

  useEffect(() => {
    fetch("/data/species/evolution.txt")
      .then((response) => response.text())
      .then((text) => {
        const parsedData = parseData(text);
        setTreeData(parsedData);
      })
      .catch((error) => {
        console.error("Error fetching the data:", error);
      });
  }, []);

  const toggleAll = () => {
    setShowAll(!showAll);
  };

  return (
    <div>
      <button onClick={toggleAll}>{showAll ? 'Скрыть всё' : 'Открыть всё'}</button>
      {treeData.map((node, index) => (
        <TreeNode key={index} node={node} isOpen={showAll} />
      ))}
    </div>
  );
};

export default App;
