// виды работ по проектирование и внедрению электрических систем
//     сборка щитков
//     монтаж освещения
//     монтаж  кабельных линий
//     установка заземления и зануления
//     установка узо счетчик дифавтомат
//     монтаж  проводки
//     подключение и настройка умный дом
//     подключение и настройка электродвигателей
//     подключение и настройка трансформаторов
//     подключение и настройка генераторов
//     подключение и настройка отопления
//     подключение и настройка кондиционирования
//     подключение и настройка вентиляции
//     проверка энергоэффективности
//     пуско-наладочные работы
// для всех видов работ предусмотреть
//     безопасность при различных видах работ
//     порядок выполнения различных видов работ
//     проверка качества тесты на безопасность, работу и надежность электрических систем и оборудования.
// расчеты
//     расчет нагрузки: рассчет нагрузки на электрическую сеть для определения допустимых значений.
//     расчет сечения проводов: определение необходимого сечения проводов в зависимости от тока и длины.
//     расчет потерь напряжения: оценка потерь напряжения в проводах и кабелях.
//     расчет мощности: определение мощности потребляемых электрических устройств.
//     расчет импеданса: для расчета импеданса в цепях.
//     расчет температуры кабелей в зависимости от нагрузки и условий прокладки.
//     расчет потребления энергии для различных систем (отопление, кондиционирование и т.д.).
//     расчет энергоэффективности:

import React, { useState } from 'react';
import МонтажОсвещения from './МонтажОсвещения';
import МонтажКабельныхЛиний from './МонтажКабельныхЛиний';
import УстановкаЗаземленияЗануление from './УстановкаЗаземленияЗануление';
import УстановкаСчётчикУЗОДиффАвт from './УстановкаСчётчикУЗОДиффАвт';
import МонтажПроводки from './МонтажПроводки';
import НастройкаУмногоДома from './НастройкаУмногоДома';
import НастройкаЭлектродвигателей from './НастройкаЭлектродвигателей';
import НастройкаТрансформаторов from './НастройкаТрансформаторов';
import НастройкаГенераторов from './НастройкаГенераторов';
import НастройкаОтопления from './НастройкаОтопления';
import НастройкаКондиционирования from './НастройкаКондиционирования';
import НастройкаВентиляции from './НастройкаВентиляции';
import ПускоНаладочныеРаботы from './ПускоНаладочныеРаботы';

export default class YYYY extends React.Component {
  render() {
    return (
      <div>
         <МонтажОсвещения />
         <МонтажКабельныхЛиний />
         <УстановкаЗаземленияЗануление />
         <УстановкаСчётчикУЗОДиффАвт />
         <МонтажПроводки />
         <НастройкаУмногоДома />
         <НастройкаЭлектродвигателей />
         <НастройкаТрансформаторов />
         <НастройкаГенераторов />
         <НастройкаОтопления />
         <НастройкаКондиционирования />
         <НастройкаВентиляции />
         <ПускоНаладочныеРаботы />
      </div>
    )
  }
}
