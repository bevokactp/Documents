
удаление
изменять напоминания
есть предуставновка напоминаний
	номер -- 1
	название -- КолоДарь
	начало -- 12:30
	интервал -- 1:00
	активировано -- да
	возможность удалить -- нет
	1..24 багита почасово
	её удалить не возможно
когда наступает время появляется кнопка на весь экран с названием напоминания
номер напоминания в цикле = число багита в yaml
блок для отображения списка сохранённых записей -- фон  жёлтый, текст фиолетовый
поля ввода текста и чисел - фон белый, текст синий
фон



используй логи на потенциально уязвимых участках
!!! show only updated lines of code



import cProfile

from kivy.config import Config
Config.set('kivy', 'log_level', 'debug')

from kivy.logger import Logger
