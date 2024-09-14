import React from 'react'

import ВремяГригоріан from './ВремяГригоріан'
import ВремяПреобразованіе from './ВремяПреобразованіе'
import ВремяСтаро from './ВремяСтаро'
import Часы from './Часы'
import ГодъТаблично from './ГодъТаблично'
import ЧасыОбратноАналог from './ЧасыОбратноАналог'

export default function КолоДарь() {
  return (
	<div>
		<ГодъТаблично />
		<ВремяСтаро />
		<ВремяПреобразованіе />
		<ВремяГригоріан />
		<ЧасыОбратноАналог />
		<Часы />
	</div>
  )
}
