import React from 'react';



const instrumentData = [
	{
	  name: 'Арфа',
	  description: 'Струнный музыкальный инструмент с большими изогнутыми рамами и натянутыми струнами.',
	  advantages: ['Красивый звук', 'Эстетичность'],
	  disadvantages: ['Высокая стоимость', 'Сложность в транспортировке'],
	  application: ['Оркестр', 'Соло'],
	  availability: 3,
	  qualityAndReliability: 5,
	  manufacturingComplexity: 4,
	  lifespan: 50,
	  components: ['Корпус', 'Струны', 'Рама'],
	  hasStrings: true,
	  hasPlucked: false,
	  hasWind: false,
	  hasPercussion: false,
	  hasMouthpiece: false,
	  mechanicalOrElectronic: 'Механический',
	  soundType: 'Струнный',
	  soundRange: 'Широкий',
	  materials: ['Дерево', 'Металл'],
	  construction: 'Изогнутая рама',
	  frequencyRange: 'Полный диапазон',
	  tuning: 'Регулируемое',
	  tone: 'Мягкий',
	  playingMethod: 'Игра на струнах',
	  size: 'Большой',
	  weight: 'Тяжелый',
	  instrumentType: 'Струнный',
	  instrumentOrigin: 'Струнный',
	  soundProductionMethod: 'Вибрация струн',
	  noteCount: 'Постоянный',
	  stringCount: '47',
	  keyCount: 'Нет',
	  toneColor: 'Теплый',
	},
	{
	  name: 'Барабаны',
	  description: 'Ударный музыкальный инструмент, создающий звук путем удара по мембране.',
	  advantages: ['Широкий диапазон звуков', 'Динамичность'],
	  disadvantages: ['Шумный', 'Большой размер'],
	  application: ['Оркестр', 'Поп-музыка', 'Рок'],
	  availability: 4,
	  qualityAndReliability: 4,
	  manufacturingComplexity: 3,
	  lifespan: 10,
	  components: ['Купол', 'Кожаная мембрана', 'Корпус'],
	  hasStrings: false,
	  hasPlucked: false,
	  hasWind: false,
	  hasPercussion: true,
	  hasMouthpiece: false,
	  mechanicalOrElectronic: 'Механический',
	  soundType: 'Ударный',
	  soundRange: 'Широкий',
	  materials: ['Дерево', 'Металл', 'Кожа'],
	  construction: 'Цилиндрическая форма',
	  frequencyRange: 'Низкий до средний',
	  tuning: 'Регулируемое',
	  tone: 'Глухой',
	  playingMethod: 'Удар по мембране',
	  size: 'Средний',
	  weight: 'Средний',
	  instrumentType: 'Ударный',
	  instrumentOrigin: 'Ударный',
	  soundProductionMethod: 'Вибрация мембраны',
	  noteCount: 'Нет',
	  stringCount: 'Нет',
	  keyCount: 'Нет',
	  toneColor: 'Глухой',
	},
	{
	  name: 'Виолончель',
	  description: 'Струнный музыкальный инструмент с глубоким и теплым звуком, играемый на плече.',
	  advantages: ['Теплый звук', 'Многообразие техник игры'],
	  disadvantages: ['Требует аккуратности', 'Большой размер'],
	  application: ['Классическая музыка', 'Оркестр', 'Соло'],
	  availability: 4,
	  qualityAndReliability: 5,
	  manufacturingComplexity: 4,
	  lifespan: 50,
	  components: ['Корпус', 'Струны', 'Педаль'],
	  hasStrings: true,
	  hasPlucked: false,
	  hasWind: false,
	  hasPercussion: false,
	  hasMouthpiece: false,
	  mechanicalOrElectronic: 'Механический',
	  soundType: 'Струнный',
	  soundRange: 'Широкий',
	  materials: ['Дерево', 'Струны'],
	  construction: 'Корпус в форме гитары',
	  frequencyRange: 'Средний до низкий',
	  tuning: 'Регулируемое',
	  tone: 'Теплый',
	  playingMethod: 'Игра на струнах',
	  size: 'Средний',
	  weight: 'Средний',
	  instrumentType: 'Струнный',
	  instrumentOrigin: 'Струнный',
	  soundProductionMethod: 'Вибрация струн',
	  noteCount: 'Постоянный',
	  stringCount: '4',
	  keyCount: 'Нет',
	  toneColor: 'Теплый',
	},
	{
	  name: 'Гобой',
	  description: 'Духовой музыкальный инструмент с двойным тростниковым мундштуком.',
	  advantages: ['Яркий и выразительный звук', 'Широкий диапазон'],
	  disadvantages: ['Сложный в настройке', 'Чувствителен к влажности'],
	  application: ['Оркестр', 'Камерная музыка'],
	  availability: 3,
	  qualityAndReliability: 4,
	  manufacturingComplexity: 5,
	  lifespan: 20,
	  components: ['Корпус', 'Мундштук', 'Тростник'],
	  hasStrings: false,
	  hasPlucked: false,
	  hasWind: true,
	  hasPercussion: false,
	  hasMouthpiece: true,
	  mechanicalOrElectronic: 'Механический',
	  soundType: 'Духовой',
	  soundRange: 'Средний до высокий',
	  materials: ['Дерево', 'Металл'],
	  construction: 'Цилиндрическая форма',
	  frequencyRange: 'Средний до высокий',
	  tuning: 'Регулируемое',
	  tone: 'Яркий',
	  playingMethod: 'Игра через тростник',
	  size: 'Средний',
	  weight: 'Легкий',
	  instrumentType: 'Духовой',
	  instrumentOrigin: 'Духовой',
	  soundProductionMethod: 'Вибрация тростника',
	  noteCount: 'Постоянный',
	  stringCount: 'Нет',
	  keyCount: 'Нет',
	  toneColor: 'Яркий',
	},
	{
	  name: 'Клавесин',
	  description: 'Струнный музыкальный инструмент с клавиатурой, похожий на пианино, но с отличным методом звукоизвлечения.',
	  advantages: ['Тонкий и светлый звук', 'Компактный размер'],
	  disadvantages: ['Ограниченная динамика', 'Не подходит для всех стилей музыки'],
	  application: ['Классическая музыка', 'Барокко'],
	  availability: 3,
	  qualityAndReliability: 5,
	  manufacturingComplexity: 5,
	  lifespan: 30,
	  components: ['Корпус', 'Клавиатура', 'Струны'],
	  hasStrings: true,
	  hasPlucked: true,
	  hasWind: false,
	  hasPercussion: false,
	  hasMouthpiece: false,
	  mechanicalOrElectronic: 'Механический',
	  soundType: 'Струнный',
	  soundRange: 'Средний',
	  materials: ['Дерево', 'Металл'],
	  construction: 'Плоский корпус',
	  frequencyRange: 'Средний',
	  tuning: 'Регулируемое',
	  tone: 'Тонкий',
	  playingMethod: 'Игра на клавиатуре',
	  size: 'Средний',
	  weight: 'Средний',
	  instrumentType: 'Струнный',
	  instrumentOrigin: 'Струнный',
	  soundProductionMethod: 'Щипок струн',
	  noteCount: 'Постоянный',
	  stringCount: '36',
	  keyCount: '45',
	  toneColor: 'Тонкий',
	},
	{
	  name: 'Кларнет',
	  description: 'Духовой музыкальный инструмент с одинарным тростниковым мундштуком и клапанами.',
	  advantages: ['Гибкий звук', 'Широкий диапазон'],
	  disadvantages: ['Сложность в игре на высоких нотах', 'Необходимость частой настройки'],
	  application: ['Оркестр', 'Камерная музыка'],
	  availability: 4,
	  qualityAndReliability: 4,
	  manufacturingComplexity: 4,
	  lifespan: 15,
	  components: ['Корпус', 'Мундштук', 'Клапаны'],
	  hasStrings: false,
	  hasPlucked: false,
	  hasWind: true,
	  hasPercussion: false,
	  hasMouthpiece: true,
	  mechanicalOrElectronic: 'Механический',
	  soundType: 'Духовой',
	  soundRange: 'Средний до высокий',
	  materials: ['Дерево', 'Металл'],
	  construction: 'Цилиндрическая форма',
	  frequencyRange: 'Средний до высокий',
	  tuning: 'Регулируемое',
	  tone: 'Гибкий',
	  playingMethod: 'Игра через тростник',
	  size: 'Средний',
	  weight: 'Легкий',
	  instrumentType: 'Духовой',
	  instrumentOrigin: 'Духовой',
	  soundProductionMethod: 'Вибрация тростника',
	  noteCount: 'Постоянный',
	  stringCount: 'Нет',
	  keyCount: 'Нет',
	  toneColor: 'Гибкий',
	},
	{
	  name: 'Контрабас',
	  description: 'Струнный музыкальный инструмент с самым глубоким тоном в семействе струнных инструментов.',
	  advantages: ['Глубокий и мощный звук', 'Широкий диапазон'],
	  disadvantages: ['Большой размер', 'Требует силы для игры'],
	  application: ['Оркестр', 'Соло'],
	  availability: 4,
	  qualityAndReliability: 5,
	  manufacturingComplexity: 4,
	  lifespan: 50,
	  components: ['Корпус', 'Струны', 'Педаль'],
	  hasStrings: true,
	  hasPlucked: false,
	  hasWind: false,
	  hasPercussion: false,
	  hasMouthpiece: false,
	  mechanicalOrElectronic: 'Механический',
	  soundType: 'Струнный',
	  soundRange: 'Низкий',
	  materials: ['Дерево', 'Струны'],
	  construction: 'Большой корпус',
	  frequencyRange: 'Низкий до средний',
	  tuning: 'Регулируемое',
	  tone: 'Глубокий',
	  playingMethod: 'Игра на струнах',
	  size: 'Большой',
	  weight: 'Тяжелый',
	  instrumentType: 'Струнный',
	  instrumentOrigin: 'Струнный',
	  soundProductionMethod: 'Вибрация струн',
	  noteCount: 'Постоянный',
	  stringCount: '4',
	  keyCount: 'Нет',
	  toneColor: 'Глубокий',
	},
	{
	  name: 'Ксилофон',
	  description: 'Ударный музыкальный инструмент с деревянными планками, которые издают звук при ударе.',
	  advantages: ['Четкий и чистый звук', 'Визуальная привлекательность'],
	  disadvantages: ['Непереносимость к повреждениям', 'Ограниченная динамика'],
	  application: ['Оркестр', 'Камерная музыка'],
	  availability: 4,
	  qualityAndReliability: 4,
	  manufacturingComplexity: 3,
	  lifespan: 15,
	  components: ['Планки', 'Корпус'],
	  hasStrings: false,
	  hasPlucked: false,
	  hasWind: false,
	  hasPercussion: true,
	  hasMouthpiece: false,
	  mechanicalOrElectronic: 'Механический',
	  soundType: 'Ударный',
	  soundRange: 'Средний',
	  materials: ['Дерево', 'Металл'],
	  construction: 'Планки на каркасе',
	  frequencyRange: 'Средний',
	  tuning: 'Регулируемое',
	  tone: 'Чистый',
	  playingMethod: 'Игра по планкам',
	  size: 'Средний',
	  weight: 'Средний',
	  instrumentType: 'Ударный',
	  instrumentOrigin: 'Ударный',
	  soundProductionMethod: 'Вибрация планок',
	  noteCount: 'Постоянный',
	  stringCount: 'Нет',
	  keyCount: 'Нет',
	  toneColor: 'Чистый',
	},
	{
	  name: 'Лютня',
	  description: 'Струнный музыкальный инструмент с характерным звучанием, распространенный в эпоху Ренессанса.',
	  advantages: ['Изящный звук', 'Историческая ценность'],
	  disadvantages: ['Хрупкость', 'Ограниченная динамика'],
	  application: ['Ренессансная музыка', 'Камерная музыка'],
	  availability: 3,
	  qualityAndReliability: 4,
	  manufacturingComplexity: 4,
	  lifespan: 30,
	  components: ['Корпус', 'Струны'],
	  hasStrings: true,
	  hasPlucked: true,
	  hasWind: false,
	  hasPercussion: false,
	  hasMouthpiece: false,
	  mechanicalOrElectronic: 'Механический',
	  soundType: 'Струнный',
	  soundRange: 'Средний',
	  materials: ['Дерево', 'Струны'],
	  construction: 'Корпус с открытыми планками',
	  frequencyRange: 'Средний',
	  tuning: 'Регулируемое',
	  tone: 'Изящный',
	  playingMethod: 'Игра на струнах',
	  size: 'Средний',
	  weight: 'Легкий',
	  instrumentType: 'Струнный',
	  instrumentOrigin: 'Струнный',
	  soundProductionMethod: 'Щипок струн',
	  noteCount: 'Постоянный',
	  stringCount: '10-14',
	  keyCount: 'Нет',
	  toneColor: 'Изящный',
	},
	{
	  name: 'Маракасы',
	  description: 'Ударный музыкальный инструмент, состоящий из двух полых сфер с внутренними зернами.',
	  advantages: ['Легкость в игре', 'Ритмичный звук'],
	  disadvantages: ['Ограниченная музыкальная роль', 'Неудобны для транспортировки'],
	  application: ['Фольклорная музыка', 'Поп-музыка'],
	  availability: 5,
	  qualityAndReliability: 3,
	  manufacturingComplexity: 1,
	  lifespan: 5,
	  components: ['Полые сферы', 'Зерна'],
	  hasStrings: false,
	  hasPlucked: false,
	  hasWind: false,
	  hasPercussion: true,
	  hasMouthpiece: false,
	  mechanicalOrElectronic: 'Механический',
	  soundType: 'Ударный',
	  soundRange: 'Ограниченный',
	  materials: ['Пластик', 'Дерево'],
	  construction: 'Сферы на ручках',
	  frequencyRange: 'Низкий до средний',
	  tuning: 'Не настраиваемое',
	  tone: 'Ритмичный',
	  playingMethod: 'Тряска',
	  size: 'Маленький',
	  weight: 'Легкий',
	  instrumentType: 'Ударный',
	  instrumentOrigin: 'Ударный',
	  soundProductionMethod: 'Тряска зерен',
	  noteCount: 'Нет',
	  stringCount: 'Нет',
	  keyCount: 'Нет',
	  toneColor: 'Ритмичный',
	},
	{
	  name: 'Орган',
	  description: 'Клавишный музыкальный инструмент с трубами, издающими звук при прохождении воздуха.',
	  advantages: ['Мощный звук', 'Широкий диапазон'],
	  disadvantages: ['Большой размер', 'Сложность в настройке'],
	  application: ['Церковная музыка', 'Оркестр'],
	  availability: 3,
	  qualityAndReliability: 5,
	  manufacturingComplexity: 5,
	  lifespan: 100,
	  components: ['Клавиатура', 'Трубы', 'Воздухопровод'],
	  hasStrings: false,
	  hasPlucked: false,
	  hasWind: true,
	  hasPercussion: false,
	  hasMouthpiece: false,
	  mechanicalOrElectronic: 'Механический/электронный',
	  soundType: 'Духовой',
	  soundRange: 'Широкий',
	  materials: ['Дерево', 'Металл'],
	  construction: 'Корпус с трубами',
	  frequencyRange: 'Широкий',
	  tuning: 'Регулируемое',
	  tone: 'Мощный',
	  playingMethod: 'Игра на клавиатуре',
	  size: 'Большой',
	  weight: 'Тяжелый',
	  instrumentType: 'Духовой',
	  instrumentOrigin: 'Духовой',
	  soundProductionMethod: 'Прохождение воздуха через трубы',
	  noteCount: 'Постоянный',
	  stringCount: 'Нет',
	  keyCount: '88',
	  toneColor: 'Мощный',
	},
	{
	  name: 'Рояль',
	  description: 'Клавишный струнный музыкальный инструмент с механизмом удара по струнам.',
	  advantages: ['Широкая динамика', 'Разнообразие звучания'],
	  disadvantages: ['Большой размер', 'Высокая стоимость'],
	  application: ['Классическая музыка', 'Поп-музыка', 'Соло'],
	  availability: 4,
	  qualityAndReliability: 5,
	  manufacturingComplexity: 5,
	  lifespan: 50,
	  components: ['Клавиатура', 'Струны', 'Механизм'],
	  hasStrings: true,
	  hasPlucked: true,
	  hasWind: false,
	  hasPercussion: false,
	  hasMouthpiece: false,
	  mechanicalOrElectronic: 'Механический',
	  soundType: 'Струнный',
	  soundRange: 'Широкий',
	  materials: ['Дерево', 'Металл', 'Пластик'],
	  construction: 'Гармонический корпус',
	  frequencyRange: 'Широкий',
	  tuning: 'Регулируемое',
	  tone: 'Разнообразный',
	  playingMethod: 'Игра на клавиатуре',
	  size: 'Большой',
	  weight: 'Тяжелый',
	  instrumentType: 'Струнный',
	  instrumentOrigin: 'Струнный',
	  soundProductionMethod: 'Удар по струнам',
	  noteCount: '88',
	  stringCount: '230',
	  keyCount: '88',
	  toneColor: 'Разнообразный',
	},
	{
	  name: 'Саксофон',
	  description: 'Духовой музыкальный инструмент с одинарным тростниковым мундштуком, выполненный из металла.',
	  advantages: ['Гибкость звучания', 'Широкий диапазон'],
	  disadvantages: ['Сложность в игре на высоких нотах', 'Регулярное обслуживание'],
	  application: ['Джаз', 'Оркестр', 'Поп-музыка'],
	  availability: 4,
	  qualityAndReliability: 4,
	  manufacturingComplexity: 4,
	  lifespan: 20,
	  components: ['Корпус', 'Мундштук', 'Клапаны'],
	  hasStrings: false,
	  hasPlucked: false,
	  hasWind: true,
	  hasPercussion: false,
	  hasMouthpiece: true,
	  mechanicalOrElectronic: 'Механический',
	  soundType: 'Духовой',
	  soundRange: 'Широкий',
	  materials: ['Металл'],
	  construction: 'Цилиндрическая форма',
	  frequencyRange: 'Средний до высокий',
	  tuning: 'Регулируемое',
	  tone: 'Гибкий',
	  playingMethod: 'Игра через тростник',
	  size: 'Средний',
	  weight: 'Средний',
	  instrumentType: 'Духовой',
	  instrumentOrigin: 'Духовой',
	  soundProductionMethod: 'Вибрация тростника',
	  noteCount: 'Постоянный',
	  stringCount: 'Нет',
	  keyCount: 'Нет',
	  toneColor: 'Гибкий',
	},
	{
	  name: 'Тромбон',
	  description: 'Духовой музыкальный инструмент с выдвижным слайдом для изменения высоты звука.',
	  advantages: ['Уникальный звук', 'Гибкость в исполнении'],
	  disadvantages: ['Сложность в игре на высоких нотах', 'Требует большого пространства'],
	  application: ['Оркестр', 'Джаз'],
	  availability: 3,
	  qualityAndReliability: 4,
	  manufacturingComplexity: 4,
	  lifespan: 30,
	  components: ['Корпус', 'Слайд'],
	  hasStrings: false,
	  hasPlucked: false,
	  hasWind: true,
	  hasPercussion: false,
	  hasMouthpiece: true,
	  mechanicalOrElectronic: 'Механический',
	  soundType: 'Духовой',
	  soundRange: 'Средний до низкий',
	  materials: ['Металл'],
	  construction: 'Цилиндрическая форма',
	  frequencyRange: 'Средний до низкий',
	  tuning: 'Регулируемое',
	  tone: 'Уникальный',
	  playingMethod: 'Игра через мундштук',
	  size: 'Средний',
	  weight: 'Тяжелый',
	  instrumentType: 'Духовой',
	  instrumentOrigin: 'Духовой',
	  soundProductionMethod: 'Вибрация воздуха',
	  noteCount: 'Постоянный',
	  stringCount: 'Нет',
	  keyCount: 'Нет',
	  toneColor: 'Уникальный',
	},
	{
	  name: 'Труба',
	  description: 'Духовой музыкальный инструмент с заостренным мундштуком и длинным трубчатым корпусом.',
	  advantages: ['Яркий звук', 'Широкий диапазон'],
	  disadvantages: ['Сложность в игре на низких нотах', 'Чувствительность к температуре'],
	  application: ['Оркестр', 'Джаз'],
	  availability: 4,
	  qualityAndReliability: 4,
	  manufacturingComplexity: 3,
	  lifespan: 20,
	  components: ['Корпус', 'Мундштук', 'Клапаны'],
	  hasStrings: false,
	  hasPlucked: false,
	  hasWind: true,
	  hasPercussion: false,
	  hasMouthpiece: true,
	  mechanicalOrElectronic: 'Механический',
	  soundType: 'Духовой',
	  soundRange: 'Средний до высокий',
	  materials: ['Металл'],
	  construction: 'Цилиндрическая форма',
	  frequencyRange: 'Средний до высокий',
	  tuning: 'Регулируемое',
	  tone: 'Яркий',
	  playingMethod: 'Игра через мундштук',
	  size: 'Средний',
	  weight: 'Средний',
	  instrumentType: 'Духовой',
	  instrumentOrigin: 'Духовой',
	  soundProductionMethod: 'Вибрация воздуха',
	  noteCount: 'Постоянный',
	  stringCount: 'Нет',
	  keyCount: 'Нет',
	  toneColor: 'Яркий',
	},
	{
	  name: 'Флейта',
	  description: 'Духовой музыкальный инструмент с открытым корпусом и звукоизвлечением через отверстие.',
	  advantages: ['Легкость в игре', 'Чистый и воздушный звук'],
	  disadvantages: ['Чувствительность к дыханию', 'Ограниченная динамика'],
	  application: ['Оркестр', 'Камерная музыка'],
	  availability: 4,
	  qualityAndReliability: 4,
	  manufacturingComplexity: 3,
	  lifespan: 15,
	  components: ['Корпус', 'Мундштук'],
	  hasStrings: false,
	  hasPlucked: false,
	  hasWind: true,
	  hasPercussion: false,
	  hasMouthpiece: false,
	  mechanicalOrElectronic: 'Механический',
	  soundType: 'Духовой',
	  soundRange: 'Средний',
	  materials: ['Металл', 'Пластик'],
	  construction: 'Цилиндрическая форма',
	  frequencyRange: 'Средний',
	  tuning: 'Регулируемое',
	  tone: 'Чистый',
	  playingMethod: 'Игра через отверстие',
	  size: 'Средний',
	  weight: 'Легкий',
	  instrumentType: 'Духовой',
	  instrumentOrigin: 'Духовой',
	  soundProductionMethod: 'Вибрация воздуха',
	  noteCount: 'Постоянный',
	  stringCount: 'Нет',
	  keyCount: 'Нет',
	  toneColor: 'Чистый',
	},
	{
	  name: 'Фортепиано',
	  description: 'Клавишный музыкальный инструмент с ударным механизмом, издающий звуки путем удара по струнам.',
	  advantages: ['Широкий диапазон', 'Разнообразие звучания'],
	  disadvantages: ['Большой размер', 'Высокая стоимость'],
	  application: ['Классическая музыка', 'Поп-музыка', 'Соло'],
	  availability: 5,
	  qualityAndReliability: 5,
	  manufacturingComplexity: 5,
	  lifespan: 70,
	  components: ['Клавиатура', 'Струны', 'Механизм'],
	  hasStrings: true,
	  hasPlucked: true,
	  hasWind: false,
	  hasPercussion: false,
	  hasMouthpiece: false,
	  mechanicalOrElectronic: 'Механический',
	  soundType: 'Струнный',
	  soundRange: 'Широкий',
	  materials: ['Дерево', 'Металл'],
	  construction: 'Гармонический корпус',
	  frequencyRange: 'Широкий',
	  tuning: 'Регулируемое',
	  tone: 'Разнообразный',
	  playingMethod: 'Игра на клавиатуре',
	  size: 'Большой',
	  weight: 'Тяжелый',
	  instrumentType: 'Струнный',
	  instrumentOrigin: 'Струнный',
	  soundProductionMethod: 'Удар по струнам',
	  noteCount: '88',
	  stringCount: '230',
	  keyCount: '88',
	  toneColor: 'Разнообразный',
	},
	{
	  name: 'Цимбалы',
	  description: 'Ударный музыкальный инструмент с металлическими планками, на которые играют молоточками.',
	  advantages: ['Яркий и резкий звук', 'Долговечность'],
	  disadvantages: ['Сложность в настройке', 'Небольшой диапазон'],
	  application: ['Оркестр', 'Камерная музыка'],
	  availability: 3,
	  qualityAndReliability: 4,
	  manufacturingComplexity: 4,
	  lifespan: 20,
	  components: ['Планки', 'Корпус'],
	  hasStrings: false,
	  hasPlucked: false,
	  hasWind: false,
	  hasPercussion: true,
	  hasMouthpiece: false,
	  mechanicalOrElectronic: 'Механический',
	  soundType: 'Ударный',
	  soundRange: 'Средний',
	  materials: ['Металл'],
	  construction: 'Планки на каркасе',
	  frequencyRange: 'Средний',
	  tuning: 'Регулируемое',
	  tone: 'Яркий',
	  playingMethod: 'Игра по планкам',
	  size: 'Средний',
	  weight: 'Средний',
	  instrumentType: 'Ударный',
	  instrumentOrigin: 'Ударный',
	  soundProductionMethod: 'Вибрация планок',
	  noteCount: 'Постоянный',
	  stringCount: 'Нет',
	  keyCount: 'Нет',
	  toneColor: 'Яркий',
	}
  ]


const InstrumentList = () => {
  const [sortConfig, setSortConfig] = React.useState({ key: 'name', direction: 'ascending' });

  const sortedData = React.useMemo(() => {
    let sortableItems = [...instrumentData];
    if (sortConfig !== null) {
      sortableItems.sort((a, b) => {
        if (a[sortConfig.key] < b[sortConfig.key]) {
          return sortConfig.direction === 'ascending' ? -1 : 1;
        }
        if (a[sortConfig.key] > b[sortConfig.key]) {
          return sortConfig.direction === 'ascending' ? 1 : -1;
        }
        return 0;
      });
    }
    return sortableItems;
  }, [sortConfig]);

  const requestSort = (key) => {
    let direction = 'ascending';
    if (sortConfig.key === key && sortConfig.direction === 'ascending') {
      direction = 'descending';
    }
    setSortConfig({ key, direction });
  };

  return (
    <div>
      <h1>Музыкальные инструменты</h1>
      <table>
        <thead>
          <tr>
            <th onClick={() => requestSort('name')}>Название</th>
            <th onClick={() => requestSort('description')}>Описание</th>
            <th onClick={() => requestSort('advantages')}>Преимущества</th>
            <th onClick={() => requestSort('disadvantages')}>Недостатки</th>
            <th onClick={() => requestSort('application')}>Применение</th>
            <th onClick={() => requestSort('availability')}>Доступность</th>
            <th onClick={() => requestSort('qualityAndReliability')}>Качество и надежность</th>
            <th onClick={() => requestSort('manufacturingComplexity')}>Сложность изготовления</th>
            <th onClick={() => requestSort('lifespan')}>Срок службы (лет)</th>
            <th onClick={() => requestSort('components')}>Компоненты изготовления</th>
            <th onClick={() => requestSort('hasStrings')}>Есть струнный</th>
            <th onClick={() => requestSort('hasPlucked')}>Есть щипокый</th>
            <th onClick={() => requestSort('hasWind')}>Есть духовой</th>
            <th onClick={() => requestSort('hasPercussion')}>Есть ударный</th>
            <th onClick={() => requestSort('hasMouthpiece')}>Имеет мундштук</th>
            <th onClick={() => requestSort('mechanicalOrElectronic')}>Механический/электронный</th>
            <th onClick={() => requestSort('soundType')}>Тип звуков</th>
            <th onClick={() => requestSort('soundRange')}>Диапазон звуков</th>
            <th onClick={() => requestSort('materials')}>Материалы</th>
            <th onClick={() => requestSort('construction')}>Конструкция</th>
            <th onClick={() => requestSort('frequencyRange')}>Частотный диапазон</th>
            <th onClick={() => requestSort('tuning')}>Настройка</th>
            <th onClick={() => requestSort('tone')}>Тон</th>
            <th onClick={() => requestSort('playingMethod')}>Метод игры и исполнения</th>
            <th onClick={() => requestSort('size')}>Размеры</th>
            <th onClick={() => requestSort('weight')}>Вес</th>
            <th onClick={() => requestSort('instrumentType')}>Тип инструмента</th>
            <th onClick={() => requestSort('instrumentOrigin')}>Род инструмента</th>
            <th onClick={() => requestSort('materials')}>Материалы</th>
            <th onClick={() => requestSort('soundProductionMethod')}>Метод звукоизвлечения</th>
            <th onClick={() => requestSort('tuning')}>Тональность</th>
            <th onClick={() => requestSort('noteCount')}>Количество нот</th>
            <th onClick={() => requestSort('stringCount')}>Количество струн</th>
            <th onClick={() => requestSort('keyCount')}>Количество клавиш</th>
            <th onClick={() => requestSort('toneColor')}>Тональная окраска</th>
          </tr>
        </thead>
        <tbody>
          {sortedData.map((instrument, index) => (
            <tr key={index}>
              <td>{instrument.name}</td>
              <td>{instrument.description}</td>
              <td>{instrument.advantages.join(', ')}</td>
              <td>{instrument.disadvantages.join(', ')}</td>
              <td>{instrument.application.join(', ')}</td>
              <td>{instrument.availability}</td>
              <td>{instrument.qualityAndReliability}</td>
              <td>{instrument.manufacturingComplexity}</td>
              <td>{instrument.lifespan}</td>
              <td>{instrument.components.join(', ')}</td>
              <td>{instrument.hasStrings ? 'Да' : 'Нет'}</td>
              <td>{instrument.hasPlucked ? 'Да' : 'Нет'}</td>
              <td>{instrument.hasWind ? 'Да' : 'Нет'}</td>
              <td>{instrument.hasPercussion ? 'Да' : 'Нет'}</td>
              <td>{instrument.hasMouthpiece ? 'Да' : 'Нет'}</td>
              <td>{instrument.mechanicalOrElectronic}</td>
              <td>{instrument.soundType}</td>
              <td>{instrument.soundRange}</td>
              <td>{instrument.materials.join(', ')}</td>
              <td>{instrument.construction}</td>
              <td>{instrument.frequencyRange}</td>
              <td>{instrument.tuning}</td>
              <td>{instrument.tone}</td>
              <td>{instrument.playingMethod}</td>
              <td>{instrument.size}</td>
              <td>{instrument.weight}</td>
              <td>{instrument.instrumentType}</td>
              <td>{instrument.instrumentOrigin}</td>
              <td>{instrument.materials.join(', ')}</td>
              <td>{instrument.soundProductionMethod}</td>
              <td>{instrument.tuning}</td>
              <td>{instrument.noteCount}</td>
              <td>{instrument.stringCount}</td>
              <td>{instrument.keyCount}</td>
              <td>{instrument.toneColor}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default InstrumentList;
