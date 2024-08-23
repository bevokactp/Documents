import React, { Component } from 'react'
import Расчёты from './Расчёты'
import Обзоръ from './Обзоръ'


export default class Волноводы extends Component {
  render() {
	return (
	  <div>
		<Обзоръ />
		<Расчёты />
	  </div>
	)
  }
}
