import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css'; // Для стилей

const App = () => {
	const [fileTree, setFileTree] = useState(null);
	const [selectedFileContent, setSelectedFileContent] = useState('');
	const [year, setYear] = useState(1);
	const [bagit, setBagit] = useState(1);

	useEffect(() => {
	  async function fetchData() {
		try {
		  const response = await axios.get('http://localhost:5000/api/files');
		  setFileTree(response.data);
		} catch (error) {
		  console.error('Ошибка при загрузке данных', error);
		}
	  }

	  fetchData();
	}, []);

	const handleFileClick = async (file) => {
	  if (!file.isDirectory) {
		setSelectedFileContent(file.content);
	  }
	};

	const handleReportClick = () => {
	  alert(`Отчёт: Год - ${year}, Багитъ - ${bagit}`);
	};

	return (
	  <div className="container">
		<div className="sidebar">
		  <div className="controls">
			<div className="control-group">
			  <label htmlFor="year">Год:</label>
			  <input
				id="year"
				type="number"
				min="1"
				max="25"
				value={year}
				onChange={(e) => setYear(parseInt(e.target.value))}
			  />
			</div>
			<div className="control-group">
			  <label htmlFor="bagit">Багитъ:</label>
			  <input
				id="bagit"
				type="number"
				min="1"
				max="25"
				value={bagit}
				onChange={(e) => setBagit(parseInt(e.target.value))}
			  />
			</div>
			<button onClick={handleReportClick}>Отчётъ</button>
		  </div>
		  {fileTree && <FileTree fileTree={fileTree} onFileClick={handleFileClick} />}
		</div>
		<div className="file-viewer">
		  <FileViewer fileContent={selectedFileContent} />
		</div>
	  </div>
	);
  };

  export default App;


const FileViewer = ({ fileContent }) => {
	return (
	  <div>
		<h2>File Content</h2>
		<pre>{fileContent}</pre>
	  </div>
	);
  };


const FileTree = ({ fileTree, onFileClick }) => {
  const renderTree = (node) => {
    if (!node) return null;

    if (node.isDirectory) {
      return (
        <div>
          <strong>{node.name}</strong>
          <div style={{ marginLeft: '20px' }}>
            {node.children.map(child => renderTree(child))}
          </div>
        </div>
      );
    } else {
      return (
        <div
          style={{ cursor: 'pointer' }}
          onClick={() => onFileClick(node)}
        >
          {node.name}
        </div>
      );
    }
  };

  return (
    <div>
      <h2>File Tree</h2>
      {renderTree(fileTree)}
    </div>
  );
};

