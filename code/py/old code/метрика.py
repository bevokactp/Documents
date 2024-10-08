


уточненія_умянареченія_строки = """\
____________________________       __________________    ______________________
место присвоенія імени             імя и подпись давшего імя и проведшего обряд\
"""

уточненія_умя_чисел_углов_камней_строки = """\
_____ ______        _____ ______     __________ __________
числа багитов       углы багитов        камни багитов
"""


def печать_імя(названіе, уточненія_умянареченія, зауточненія_умя_чисел_углов_камней, атрибуты):

    названіе = названіе.capitalize()
    if len(атрибуты) == 1:
        fmt = '{0:_<15}{1:_<30}     _________________\n{2: <50}{3}'.format(названіе, '_', ' ', *атрибуты)
    elif len(атрибуты) == 2:
        fmt = '{0:_<15}{1:_<30}     ________ ________\n{2: <50}{3}, {4}'.format(названіе, '_', ' ', *атрибуты)
    elif len(атрибуты) == 3:
        fmt = '{0:_<15}{1:_<30}     ______ ______ ______\n{2: <50}{3}, {4}, {5}'.format(названіе, '_', ' ', *атрибуты)
    print(fmt)
    if уточненія_умянареченія:
        print(уточненія_умянареченія_строки)
    if уточненія_умя_чисел_углов_камней:
        print(уточненія_умя_чисел_углов_камней_строки)
    print("-" * 90, '\n')


def печать_метрица():
    print("{0:-<25}".format(''))
    for i in range(4):
        print("| {0: ^3}|{0: ^3}|{0: ^3}|{0: ^3} |".format(' '))
        print("{0:-<25}".format(''))


def печать_свидетельство_о_рожденії():
    """
    Лысенко Виталій Витальевичъ
    г. Светловодскъ Кировоградская обл.
    г. Светловодскъ Кировоградская обл.
    с. Череповское Запорожский район и область
    """
    print("{0:_<70}\n{1:_<70}\n{2:_<70}\n{3:_<70}\n{4:_<70}\n".format(
        'Ф.И.О', 'Место рожденія', 'Место зачатія',
        'Место жительства на время заполненія', 'Место проживанія рода'))



def печать_о_воплощеніях(сколько_воплощеній):
    for i in range(сколько_воплощеній):
        print("""Сведенья о предыдущем воплощенії {}
____________  ______   ________________   _______________  ___________  ____________ 
вид (нація)    полъ    семей. положение   вероисповедание   профессия   образование  
___________________________   __________________     ________________
причина гибели                   время гибели        время воплощенія
место проживания____________________________________________________________________
потомки_____________________________________________________________________________
родственики_________________________________________________________________________
главные событія_____________________________________________________________________
""".format(i))


def печать_сведеній_о_будущем_воплощенії():
    print("""
Подтверждение имён перед обрядами растос или тризны
Родовое_{0:_<50}
Духовное{0:_<50}
Вечное__{0:_<50}
Предполагаемое воплощение у{0:_<31}
                                   имена будущих родителей
Представление перед Всевышним провёл{0:_<22}
                              имя и подпись представившего
\n\n
                            Отпечатки
указательный палец леворуки                     указательный палец праворуки
\n\n\n\n\n\n\n\n\n\n
    Узор правой ладони в первый год жизни или на время получения
""".format(''))


def печать_сведеній_о(о_ком, родители=1):
    """
    30.03.1968 г. Светловодскъ Кировоградская обл.
    среднее професиональное
    строитель
    каменщик, радиотелефония
    стройка, пасека, земледелие, травничество, садоводство, животноводство
    1968-1993 г. Светловодскъ
    1993-.... с. Марково Новоукраинский р-н Кировоградская обл.
    человекъ
    католичество

    05.02.1968 с. Маркове Добровеличковский р-н Кировоградская обл.
    среднее професиональное
    радиотелефония
    вышивка, письмо, кулинария, вязание, земледелие, травничество, садоводство, животноводство
    домохозяйство    
    1968-1988 с. Марково Новоукраинский р-н Кировоградская обл.
    1988-1992 г. Кировоградъ Кировоградская обл.
    1992-1992 с. Табурище Светловодский р-н Кировоградская обл.
    1993-1993 г. Светловодскъ Кировоградская обл.
    1993-2017 с. Марково Новоукраинский р-н Кировоградская обл.
    человекъ
    католичество
    """
    print("\n\t\tСведенья о {0}".format(о_ком))
    for кто in ('Отец ', 'Мать ') if родители else ('', ):
        print("""
{1:_<70} 
{2:_<70}
{3:_<70}
{4:_<70}
{5:_<70}
{6:_<70}
{7:_<70}
{8:_<70}
{9:_<70}
""".format(о_ком, кто + 'ФИО', 
    'Дата и место рожденія',
    'образованіе',
    'спеціальность',
    'профессія',
    'Место работы и должность',
    'проживаніе (миесто и время)',
    'нація',
    'вероисповедание',
))


def печать_сведеній_о_потомках(количество):
    print("\n\t\tСведенья о потомках")
    while количество:
        количество -= 1
        print("""
{1:_<70}
                настоящее      отчество         обережество
{2:_<70}
    сакраментальное        родовое      виечное         духовное
{3:_<70}
{4:_<70}
{5:_<25} {6:_<15} {7:_<28}
""".format(
    'ФИО', 
    'Імена',
    '',
    'Время и место рожденія',
    'Время и место зачатія',
    'Вес врождёный',
    'рост',
    'срок беременности',
))


def печать_личные_меры(до_скольки_лет):
    print("\n\t\tЛичные меры")
    года = ['\nНа время выдачи _____']
    года.extend(['{0: ^3}'.format(год) for год in range(0, до_скольки_лет + 1, 4)])
    года.extend(['___' for год in range(0, 2)])
    for год in года:
        print("""{0: <3} лет
сажень______ казая сажень_____ аршинъ_______ плечо_________ локоть____________
ладонь______ палецъ___________ дюймъ________ вершокъ_______ пуд пяди (г)______
    """.format(год))


def печать_физиологические_показатели(до_скольки_лет):
    print("\n\t\tФизиологические_показатели")
    года = ['\nНа время выдачи _____']
    года.extend(['{0: ^3}'.format(год) for год in range(0, до_скольки_лет + 1, 4)])
    года.extend(['___' for год in range(0, 2)])
    for год in года:
        print("-" * 90, '\n')
        print("""Физиологические_показатели на {0} лет
                                    Зрение

При солнечном свете в %                  правый _____ левый _____
Светочувствительность в сумерочное зрение %     правый _____ левый _____
Ночное зрение при лунном свете %                правый _____ левый _____
Зрение в полной темноте %                       правый _____ левый _____

Цветоощущение (что не видемо)
    инфракрас красн оранж жёлт зелён голуб сине фиолет ультрафиолетово 

Различие
    инфракрас спектра (длина волны в А*) %      правый _____ левый _____
    ультрафио спектра (длина волны в А*) %      правый _____ левый _____

Восприимчивость цвета при солнечном свете на белом и чёрном фоне %
красн           правый _____ левый _____        правый _____ левый _____
оранж           правый _____ левый _____        правый _____ левый _____
жёлто           правый _____ левый _____        правый _____ левый _____
зелён           правый _____ левый _____        правый _____ левый _____
голуб           правый _____ левый _____        правый _____ левый _____
синее           правый _____ левый _____        правый _____ левый _____
фиоле           правый _____ левый _____        правый _____ левый _____

Наличие двух форм видения: жи хи фи ми ли си ци

                                    Слухъ
дальность различие шёпота (в метрах)            правое _____ левое _____
диапазон слышимости частот Гц                   нижний _____ верхн _____ 

                                    Обоняние
дальность обнаружения (в метрах)
    ванильно _______ спиртово _______ терпко _______
    гнилостно _______ эфирно _______ масляно _______ резко _______

                                    Тактильное
голод   насыщение   холод   гарячё  боль    уют     твёрдо      мягко

                                    Вкусъ
солёно  сладко  терпко  кисло   горько  остро   масляно     пресно

Голосъ частотный диапазон Гц                    верхни _____ нижни _____ 
Ростъ ______ см ______ вершковъ   ______ ладоней
Температура тела постоянная ____ *С
Вес ______ пудов
Давление ______
Количество подтягиваний ______                      (миесто под фото)
Задержка дыхания ______ секунд
Жим в кг    правой ______ левой ______
                                          (место под приклеивание мощей)
Пульс
    после 5 приседаний  _______      время успокоения пульса
    после 10 приседаний _______      время успокоения пульса
    после 20 приседаний _______      время успокоения пульса

Группа крови ________           белок _____ сахар _____ холестерин _____ 
       эритроциты _____ лейкоциты _____ лимфоциты _____ тромбоциты _____

""".format(год))


def печать_повлиявшие_на_судьбу():
    """
    Николай Викторовичъ Левашовъ , пробуждение и осознание
    Светлана де Роган-Левашова , пробуждение и осознание
    Алексей Кунгуров , осознание мышление
    Владимиръ Алексеевичъ Шемшукъ , начала ведовестизма
    Алёна Владимировна Андрейко , познание ведовестизма
    """
    print("\n\t\tПовлиявшие на судьбу")
    print("Прозвище                 Чем")
    for i in range(10):
        print('{0:_^10}|{0:_^30}'.format(''))


def печать_свои_изобретения_достижения_разработки():
    """
    Програмное обеспечение
    Книга по труда Левашова
    Начала ведовестизма
    Воссоздание перво языка и счёта
    """
    print("\n\t\tИзобретения достижения разработки")
    for i in range(10):
        print('{0:_^40}'.format(''))


def печать_миеста_проживания():
    """
    1993-2009 с. Маркове Добровеличковский р-н Кировоградская обл
    2009-2010 г. Светловодскъ Кировоградская обл
    2010-2013 с. Табурище Светловодский р-н Кировоградская обл
    2013-2014 г. Харьков общежитие ХНУРЕ
    2014-2017 с. Маркове Добровеличковский р-н Кировоградская обл
    2017-2017 (осень) с. Старичи Львовская обл
    2017-1.10.2018 с. Лесная Христиновский р-н Черкасская обл
    1.10.2018-весна 2020 с. Розсишки Христиновский р-н Черкасская обл зинчуки глинянка
    весна 2020 - лето 2020 с. Розсишки Христиновский р-н Черкасская обл Населенко Вера Никитивна
    лето 2020 - лето 2021 г. Умань Черкасская обл старики сдаватели
    лето 2021 - 24.10.2021 с. Розсишки Уманский р-н Черкасская обл Шевченко 39
    24.10.2021 - 28.12.2021 Чехия
    28.12.2021 - 02.03.2022 с. Розсишки Уманский р-н Черкасская обл Шевченко 39
    02.03.2022 - 05.03.2023 г. Кременчук вч1476
    05.03.2022 - .04.2023 г. Николаев заправка Варваровка
    .04.2022 - .05.2023 поля под Баштанка Березнегуватое
    .05.2022 - .07.2023 с. Новополтавка Новобузький р-н Николаевская обл элеватор прометей
    .07.2022 - .09.2023 с. Андреевка Баштанский р-н Николаевская обл училище пту 42
    .09.2022 - .11.2023 с. Ингульське Устиновский р-н Кировоградская обл СИЗО столовая
    .11.2023 с. Березнегуватое Николаевская обл ферма
    .11.2022 - 20.03.2024 г. Синельниково Днепропетровская обл ангары агрофирмы
    20.03.2022 - .07.2024 с. Наталовка Запорозький р-н и обл глинянка
    .07.2022 - .08.2024 с. Череповское Запорозький р-н и обл саманный дом
    """

    print("\n\t\t\t\t\tМеста проживания")
    print("Прибытие  |            Названіе               |   Убытие |")
    for i in range(10):
        print('{0:_^10}|{0:_^35}|{0:_^10}|'.format(''))


def печать_сведенья_об_образовании():
    """
    2000 Марсковская школа 1-9 класов 2009
    2009 Светловоский политех 2013
    2013 Харковский универ радиоэлектроники 2014
    2014 левашовцы 2017
    2023 ведовестизмъ
    """
    print("\n\t\t\t\tСведенья об образовании")
    print("Вступъ    |            Названіе               | Окончание|")
    for i in range(20):
        print('{0:_^10}|{0:_^35}|{0:_^10}|'.format(''))


def печать_сведенья_об_присвоении_званий_наград_должностей():
    print("\n\t\tСведенья об присвоении званий наград должностей")
    print("   Время  |   Место  |               Звание              |")
    for i in range(10):
        print('{0:_^10}|{0:_^10}|{0:_^35}|'.format(''))


def печать_сведенья_об_заключениях():
    print("\n\t\t\t\tСведенья об заключениях")
    print("   Прибытие   |          Место          | Освобождение |")
    for i in range(10):
        print('{0:_^14}|{0:_^25}|{0:_^14}|'.format(''))


def печать_сведенья_об_болезнях_ранениях_травмах():
    """
    .12.2009 воспаление лёгкого
    .11.2017 апендицит краснуха
    """
    print("\n\t\t\t\tСведенья об болезнях ранениях травмах")
    print("     Время    |                          Что                     |")
    for i in range(10):
        print('{0:_^14}|{0:_^50}|'.format(''))


def печать_сведенья_об_деятельности():
    """
    2014-2017 левашовцы
    осень 2017 - 01.10.2018 срочная служба зсу
    01.10.2018 - 01.10.2021 служба за контрактом зсу
    24.12.2021 - 28.12.2021 чехия заработки
    02.03.2022 - ... участие в войне зсу, ведовестизмъ
    """

    print("\n\t\t\t\tСведенья об деятельности")
    print("   Время начала   |              Чем             |  Время окончания |")
    for i in range(20):
        print('{0:_^18}|{0:_^30}|{0:_^18}|'.format(''))


def печать_сведенья_об_смене_фио_и_гражданства():
    print("\n\t\tСведенья об смене ФИО и гражданства")
    print("     Время    |            Страна ФИО            |")
    for i in range(10):
        print('{0:_^14}|{0:_^34}|'.format(''))


def печать_сведенья_об_придлежности_к_объединениям():
    print("\n\t\t\t\tСведенья об придлежности к объединениям")
    print(" Время вступу |                     Объединение                  |")
    for i in range(10):
        print('{0:_^14}|{0:_^50}|'.format(''))


def печать_завещание():
    """
    Безконечности
    """

    print("\n\t\t\t\t\tЗавещание")
    print("(разпределиение оставленого, возложение обязаностей, просьбы, пожелания)")
    for i in range(10):
        print('{0:_^75}'.format(''))


print("         ІМЕНА")
print("-" * 90, '\n')
печать_імя("настоящее", 1, 1, ("рожденіе: число", "месяц", "год"))
печать_імя("отчество", 1, 1, ("рожденіе отца: число", "месяц", "год"))
печать_імя("обережество", 1, 1, ("рожденіе матери: число", "месяц", "год"))
печать_імя("сакральное", 1, 1, ("5минутка", "час"))
печать_імя("непроизносимое", 0, 0, ("зачатія: минута", "час"))
печать_імя("родовое", 1, 1, ("рожденія: 6дница", "час"))
печать_імя("виечное", 1, 1, ("зачатія: 6дница", "час"))
печать_імя("духовное", 1, 1, ("зачатія: год", "миесяц"))
печать_імя("этическое", 1, 1, ("зачатія: год", "миесяц"))

печать_метрица()

печать_імя("самонариечённое", 0, 1, ("вместо сакрального", ))

печать_свидетельство_о_рожденії()
print("-" * 90, '\n')
печать_о_воплощеніях(6)
print("-" * 90)
печать_сведеній_о_будущем_воплощенії()
print("-" * 90)

печать_сведеній_о("родителях")
печать_сведеній_о("родителях отца")
печать_сведеній_о("родителях матери")
печать_сведеній_о("супруге", родители=0)

print("-" * 90)
печать_сведеній_о_потомках(4)

print("-" * 90)
печать_личные_меры(15)
print("-" * 90)
печать_физиологические_показатели(5)
print("-" * 90)
печать_повлиявшие_на_судьбу()
print("-" * 90)
печать_свои_изобретения_достижения_разработки()
print("-" * 90)
печать_миеста_проживания()
print("-" * 90)
печать_сведенья_об_образовании()
print("-" * 90)
печать_сведенья_об_присвоении_званий_наград_должностей()
print("-" * 90)
печать_сведенья_об_заключениях()
print("-" * 90)
печать_сведенья_об_болезнях_ранениях_травмах()
print("-" * 90)
печать_сведенья_об_деятельности()
print("-" * 90)
печать_сведенья_об_смене_фио_и_гражданства()
print("-" * 90)
печать_сведенья_об_придлежности_к_объединениям()
print("-" * 90)
печать_завещание()
print("-" * 90)
