import React from 'react'

import Резисторы from './Резисторы'
import Конденсаторы from './Конденсаторы'
import Дроссели from './индуктивность/Дроссели'
import Катуши from './индуктивность/Катуши'
import Трансформаторы from './индуктивность/Трансформаторы'
import Предохранители from './Предохранители'
import Резонаторы from './частотники/Резонаторы'
import Генераторы from './частотники/Генераторы'
import Осцилляторы from './частотники/Осцилляторы'
import Мемристоры from './Мемристоры'


export default function mu() {
  return (
	<div>
		<Генераторы />
		<Осцилляторы />
		<Резонаторы />
		<Предохранители />
		<Мемристоры />
		<Дроссели />
		<Катуши />
		<Трансформаторы />
		<Конденсаторы />
		<Резисторы />
	</div>
  )
}
