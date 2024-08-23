import React, { Component } from 'react'
import Щитъ from "../цепи/Щитъ";
import Нейтраль from "../цепи/Нейтраль";
import Заземленіе from "../цепи/Заземленіе";
import Зануленіе from "../цепи/Зануленіе";
import Центральзовано220и380 from "../цепи/Центральзовано220и380";

export default class App extends Component {
  render() {
	return (
		<div>
			<Центральзовано220и380 />
			<Щитъ />
			<Нейтраль />
			<Заземленіе />
			<Зануленіе />
		</div>
	)
  }
}
