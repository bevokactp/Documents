# -*- coding: utf-8 -*-


import datetime
import math

# по современному

новолѣтія = (
    '1950-07-22 01:35',
    '1951-07-22 07:24',
    '1952-07-21 13:12',
    '1953-07-21 18:59',
    '1954-07-22 00:54',
    '1955-07-22 06:31',
    '1956-07-21 12:23',
    '1957-07-21 19:20',
    '1958-07-22 00:56',
    '1959-07-22 06:49',
    '1960-07-21 12:42',
    '1961-07-21 18:30',
    '1962-07-22 00:24',
    '1963-07-22 06:04',
    '1964-07-21 11:56',
    '1965-07-21 16:55',
    '1966-07-21 22:33',
    '1967-07-22 04:22',
    '1968-07-21 10:13',
    '1969-07-21 15:55',
    '1970-07-21 21:42',
    '1971-07-22 03:19',
    '1972-07-21 09:06',
    '1973-07-21 15:00',
    '1974-07-21 20:37',
    '1975-07-22 02:26',
    '1976-07-21 08:24',
    '1977-07-21 15:13',
    '1978-07-21 21:09',
    '1979-07-22 02:56',
    '1980-07-21 08:47',
    '1981-07-21 14:44',
    '1982-07-21 20:22',
    '1983-07-22 02:08',
    '1984-07-21 08:02',
    '1985-07-21 13:44',
    '1986-07-21 19:29',
    '1987-07-22 01:10',
    '1988-07-21 06:56',
    '1989-07-21 12:53',
    '1990-07-21 18:32',
    '1991-07-22 00:18',
    '1992-07-21 06:14',
    '1993-07-21 11:59',
    '1994-07-21 17:47',
    '1995-07-21 23:34',
    '1996-07-21 05:23',
    '1997-07-21 11:19',
    '1998-07-21 17:02',
    '1999-07-21 22:49',
    '2000-07-21 04:47',
    '2001-07-21 10:37',
    '2002-07-21 16:24',
    '2003-07-21 22:10',
    '2004-07-21 03:56',
    '2005-07-21 09:46',
    '2006-07-21 15:25',
    '2007-07-21 21:06',
    '2008-07-21 02:59',
    '2009-07-21 08:45',
    '2010-07-21 14:28',
    '2011-07-21 20:16',
    '2012-07-21 02:08',
    '2013-07-21 08:03',
    '2014-07-21 13:51',
    '2015-07-21 19:37',
    '2016-07-21 01:34',
    '2017-07-21 07:24',
    '2018-07-21 13:07',
    '2019-07-21 18:54',
    '2020-07-21 00:43',
    '2021-07-21 06:32',
    '2022-07-21 12:13',
    '2023-07-21 17:57',
    '2024-07-20 23:50',
    '2025-07-21 05:42',
    '2026-07-21 11:24',
    '2027-07-21 17:10',
    '2028-07-20 23:01',
    '2029-07-21 04:48',
    '2030-07-21 10:31',
)


class Багит:

    def __init__(self, названіе, начало_імени, окончаніе_імени_муж, окончаніе_імени_жен,
            привіетствіе_начало="", привіетствіе_окончаніе_муж="", привіетствіе_окончаніе_жен="", номер_месяца_григоріан=0, господь=0):
        self.названіе = названіе
        self.начало_імени = начало_імени
        self.окончаніе_імени_муж = окончаніе_імени_муж
        self.окончаніе_імени_жен = окончаніе_імени_жен
        self.привіетствіе_начало = привіетствіе_начало
        self.привіетствіе_окончаніе_муж = привіетствіе_окончаніе_муж
        self.привіетствіе_окончаніе_жен = привіетствіе_окончаніе_жен
        self.номер_месяца_григоріан = номер_месяца_григоріан
        self.господь = господь

    def определить_окончаніе_імени_по_полу(self):
        return self.окончаніе_імени_муж if полъ else self.окончаніе_імени_жен

    def определить_окончаніе_званія_по_полу(self):
        return self.привіетствіе_окончаніе_муж if полъ else self.привіетствіе_окончаніе_жен

    def __repr__(self):
        return self.названіе

    def __str__(self):
        return self.названіе


багиты = (
    Багит('правь', 'прав', 'правь', 'права', 'свер', 'свер', 'свера', номер_месяца_григоріан=7),
    Багит('леля', 'лел', 'лель', 'леля', 'блаж', 'блаж', 'блажа', номер_месяца_григоріан=8),
    Багит('троянъ', 'троян', 'троянь', 'трояна', 'гоб', 'гоб', 'гоба', номер_месяца_григоріан=9),
    Багит('явь', 'яв', 'явъ', 'ява', 'удач', 'дач', 'дача', номер_месяца_григоріан=10),
    Багит('радегастъ', 'рад', 'радъ', 'рада', 'рад', 'рад', 'рада', номер_месяца_григоріан=11),
    Багит('славь', 'слав', 'славъ', 'слава', 'почёт', 'слав', 'слава', номер_месяца_григоріан=12),
    Багит('жель', 'жел', 'жель', 'желя', 'терп', 'терп', 'терпа', номер_месяца_григоріан=1),
    Багит('кострома', 'костр', 'костръ', 'костра', 'вечн', 'вечн', 'вечна', номер_месяца_григоріан=2),
    Багит('сѣмарглъ', 'сѣм', 'сѣмъ', 'сѣма', 'твёрд', 'твёрд', 'твёрда', номер_месяца_григоріан=3),
    Багит('берегиня', 'бер', 'беръ', 'бера', 'сбер', 'сбер', 'сбера', номер_месяца_григоріан=4),
    Багит('навь', 'нав', 'навъ', 'нава', 'мир', 'мир', 'мира', номер_месяца_григоріан=5),
    Багит('таня', 'тан', 'танъ', 'тана', 'благ', 'благ', 'блага', номер_месяца_григоріан=6),
    Багит('пирунъ', 'пир', 'пиръ', 'пира', 'правд', 'правд', 'правда', номер_месяца_григоріан=7),
    Багит('магощь', 'маг', 'магъ', 'мага', 'маг', 'маг', 'мага', номер_месяца_григоріан=8),
    Багит('свѣнтовидъ', 'свѣнт', 'свѣнтъ', 'свѣнта', 'маст', 'маст', 'маста', номер_месяца_григоріан=9),
    Багит('мара', 'мар', 'маръ', 'мара', 'свят', 'свят', 'свята', номер_месяца_григоріан=10),
    Багит('хорсъ', 'хорс', 'хорсъ', 'хорса', 'хор', 'хор', 'хора', номер_месяца_григоріан=11),
    Багит('лада', 'лад', 'ладъ', 'лада', 'лад', 'лад', 'лада', номер_месяца_григоріан=12),
    Багит('стрибогъ', 'стриб', 'стрибъ', 'стриба', 'здрав', 'здрав', 'здрава', номер_месяца_григоріан=1),
    Багит('вѣй', 'вѣ', 'вѣй', 'вѣя', 'мудр', 'мудр', 'мудра', номер_месяца_григоріан=2),
    Багит('ярило', 'яр', 'яръ', 'яра', 'счаст', 'счаст', 'счаста', номер_месяца_григоріан=3),
    Багит('велесъ', 'вел', 'велъ', 'вела', 'велич', 'велич', 'велича', номер_месяца_григоріан=4),
    Багит('родъ', 'род', 'родъ', 'рода', 'успех', 'спех', 'спеха', номер_месяца_григоріан=5),
    Багит('капала', 'кап', 'капъ', 'капа', 'прощ', 'прощ', 'проща', номер_месяца_григоріан=6),
    Багит('ра', 'ра', 'ра', 'ра', господь=1),
    Багит('восток', 'восток', 'вас', 'васа'),
    Багит('европа', 'европа', 'евъ', 'ева'),
    Багит('ацтлантъ', 'ацтлан', 'цтлантъ', 'цтлана'),
    Багит('юг', 'юг', 'юг', 'юга'),
    Багит('азія', 'азія', 'аз', 'аза'),
    Багит('африка', 'африка', 'афрей', 'афрея'),
    Багит('дазъ', 'даз', 'дазъ', 'даза'),
    Багит('австралія', 'австр', 'австр', 'австра'),
    Багит('антарктида', 'ант', 'антъ', 'анта'),
    Багит('сиевер', 'сиевер', 'сиевер', 'сиевера'),
    Багит('смелич', 'смел', 'смел', 'смела'),
    Багит('силич', 'сил', 'сил', 'сила'),
    Багит('милич', 'мил', 'мил', 'мила'),
    Багит('дара', 'дар', 'дар', 'дара'),
    Багит('дый', 'ды', 'дый', 'дыя', господь=1),
    Багит('надя', 'над', 'надь', 'надя'),
    Багит('рачара', 'рач', 'рач', 'рача'),
    Багит('дивчара', 'дивч', 'дивч', 'дивча'),
    Багит('дадчара', 'дадч', 'дадч', 'дадча'),
    Багит('сварчара', 'сварч', 'сварч', 'сварча'),
    Багит('панчара', 'панч', 'панч', 'панча'),
    Багит('сестчара', 'сестч', 'сестч', 'сестча'),
    Багит('семчара', 'семч', 'семч', 'семча'),
    Багит('вестчара', 'вестч', 'вестч', 'вестча'),
    Багит('девчара', 'девч', 'девч', 'девча'),
    Багит('дажбогъ', 'даж', 'дажъ', 'дажа', господь=1),
    Багит('божич', 'бож', 'бож', 'божа'),
    Багит('красич', 'крас', 'крас', 'краса'),
    Багит('жнанич', 'жнан', 'жнан', 'жнана'),
    Багит('муза', 'муз', 'муз', 'муза'),
    Багит('манич', 'ман', 'ман', 'мана'),
    Багит('люба', 'люб', 'люб', 'люба'),
    Багит('тор', 'тор', 'тор', 'тора'),
    Багит('кама', 'кам', 'кам', 'кама'),
    Багит('овсень', 'всей', 'всей', 'всея'),
    Багит('зима', 'зим', 'зим', 'зима'),
    Багит('яровит', 'яров', 'яров', 'ярова'),
    Багит('лета', 'лет', 'лет', 'лета'),
    Багит('братич', None, None, None),
    Багит('бубенич', None, None, None),
    Багит('студич', None, None, None),
    Багит('снежич', None, None, None),
    Багит('березич', None, None, None),
    Багит('цветич', None, None, None),
    Багит('кресень', None, None, None),
    Багит('травич', None, None, None),
    Багит('червич', None, None, None),
    Багит('плодич', None, None, None),
    Багит('листич', None, None, None),
    Багит('венич', None, None, None),
    Багит('сварга', 'свар', 'сваръ', 'свара', господь=1),
    Багит('ясунь', None, None, None),
    Багит('свиетич', None, None, None),
    Багит('мыслич', None, None, None),
    Багит('радич', None, None, None),
    Багит('митра', None, None, None),
    Багит('беседич', None, None, None),
    Багит('звездич', None, None, None),
    Багит('пан', 'пан', 'панъ', 'пана', господь=1),
    Багит('ослад', None, None, None),
    Багит('поренут', None, None, None),
    Багит('числобог', None, None, None),
    Багит('белояр', None, None, None),
    Багит('урдзец', None, None, None),
    Багит('усуд', None, None, None),
    Багит('сивояр', None, None, None),
    Багит('ведич', None, None, None),
    Багит('сестъ', 'сест', 'сестъ', 'сеста', господь=1),
    Багит('крышень', None, None, None),
    Багит('чур', None, None, None),
    Багит('жива', None, None, None),
    Багит('ругевит', None, None, None),
    Багит('поревит', None, None, None),
    Багит('вышень', None, None, None),
    Багит('семешъ', 'семеш', 'семешъ', 'семеша', господь=1),
    Багит('вера', None, None, None),
    Багит('творич', None, None, None),
    Багит('гоя', None, None, None),
    Багит('созид', None, None, None),
    Багит('веста', 'веста', 'веста', 'веста', господь=1),
    Багит('карна', None, None, None),
    Багит('спасич', None, None, None),
    Багит('дэвъ', 'дэв', 'дэвъ', 'дэва', господь=1),
)


место_зачатія = (49.05498339663943, 33.229049572260884)

место_рожденія = (49.05119332657011, 33.211789863148276)
полъ = 1

сутки_рожденія_моё = (1993, 4, 21)
сутки_рожденія_отца = (1968, 3, 30)
сутки_рожденія_матери = (1968, 2, 5)

время_выход_из_утробы_и_увидел_свет = datetime.datetime(*сутки_рожденія_моё, 0, 0, 36)
время_впервые_взяли_в_руки_или_коснулся_семли = datetime.datetime(*сутки_рожденія_моё, 11, 6, 0)
время_первый_вдохъ = datetime.datetime(*сутки_рожденія_моё, 12, 16, 11)
время_впервые_коснулся_воды = datetime.datetime(*сутки_рожденія_моё, 15, 58, 9)
время_первый_пищеприёмъ = datetime.datetime(*сутки_рожденія_моё, 1, 4, 24)
время_выход_из_утробы_и_увидел_свет_отца = datetime.datetime(*сутки_рожденія_отца, 13, 51, 36)
время_выход_из_утробы_и_увидел_свет_матери = datetime.datetime(*сутки_рожденія_матери, 13, 51, 36)
время_зачатія = datetime.datetime(1992, 6, 5, 8, 11, 11)
число_и_номер_шестидницы_рожденія = datetime.datetime(1992, 7, 5, 8, 11, 11)


def определить_число_багита_года_по_номеру_месяца_григоріан(год):
    число_багита = (год + 5503) % 24
    if число_багита == 0:
        число_багита = 24
    return число_багита


def соеденить_імена_багитовъ(начало, букова_соеденитель, окончаніе):
    return '{}{}{}'.format(начало.capitalize(), букова_соеденитель, окончаніе.capitalize())


def получить_багита(i, j, месяцъ):
    for k in range(i, j + 1):
        if багиты[k].номер_месяца_григоріан == месяцъ:
            return багиты[k]


def определить_багита_месяца(время, номер_года):
    імя = ''
    if 1 <= время.day <= 12:
        імя = получить_багита(0, 11, время.month)
    elif 13 <= время.day <= 24:
        імя = получить_багита(12, 23, время.month)
    elif 25 <= время.day <= 31:
        імя = получить_багита(1, 12, время.month) if номер_года < 13 else получить_багита(13, 24, время.month)
    return імя


def определить_званіе(время_рожденія, год=datetime.datetime.now().year):
    # привіетствіе месяца рожденія + привіетствіе текущего года

    букова_соеденитель = 'о'

    номер_года = определить_число_багита_года_по_номеру_месяца_григоріан(год)
    окончаніе = багиты[номер_года].определить_окончаніе_званія_по_полу()
    начало = определить_багита_месяца(время_рожденія, номер_года).привіетствіе_начало
    return соеденить_імена_багитовъ(начало, букова_соеденитель, окончаніе)


def перевести_год_в_древлеправославный(время):

    # в юлианский + 13 суток
    if 1900 <= время.year < 1918:
        время = время + datetime.timedelta(days=13)

    year = время.year + 5502
    if время >= datetime.datetime(время.year, 7, 21, 12, 0):
        year += 1
    return year


def получить_перечень_негосподовъ():
    return [i for i in багиты if not i.господь]


def получить_перечень_господъ():
    return [i for i in багиты if i.господь]


def определить_окончаніе_по_багиту_6дневки(время):
    if время < datetime.datetime.fromisoformat(новолѣтія[0]) or время > datetime.datetime.fromisoformat(новолѣтія[-1]):
        raise ValueError('Не ранее новолѣтія {} и не позже {}'.format(
            datetime.datetime.fromisoformat(новолѣтія[0]),
            datetime.datetime.fromisoformat(новолѣтія[-1])))
    for i, новолѣтіе in enumerate(новолѣтія):
        новолѣтіе = datetime.datetime.fromisoformat(новолѣтіе)
        if время < новолѣтіе:
            break
    начало_года = datetime.datetime.fromisoformat(новолѣтія[i - 1])
    for i in range(60):
        начало_6дницы = начало_года + datetime.timedelta(days=i * 6)
        окончаные_6дницы = начало_6дницы + datetime.timedelta(days=5)
        if начало_6дницы <= время <= окончаные_6дницы:
            номер_6дницы = i + 1
            return получить_перечень_негосподовъ()[номер_6дницы - 1]
    return получить_перечень_господъ()[(время - окончаные_6дницы).days]


def определить_окончаніе_по_часу_багита(время):
    return багиты[время.hour + 1].определить_окончаніе_імени_по_полу()


def определить_начало_по_5минутке_багита(время):
    r = math.ceil((время.minute + 1) / 5)
    if время.hour % 2 == 0:
        r += 12
    return багиты[r].начало_імени


def определить_настоящее_імя(время):
    # месяц онъ год для настоящего імени
    букова_соеденитель = 'о'

    номер_года = определить_число_багита_года_по_номеру_месяца_григоріан(время.year)
    начало = определить_багита_месяца(время, номер_года).начало_імени
    окончаніе = багиты[номер_года - 1].определить_окончаніе_імени_по_полу()
    return соеденить_імена_багитовъ(начало, букова_соеденитель, окончаніе)


def определить_сакральное_імя(время, широта, долгота):
    букова_соеденитель = 'w'
    время = время_григоріан_в_правильное(время, широта, долгота)
    return соеденить_імена_багитовъ(определить_начало_по_5минутке_багита(время), букова_соеденитель, определить_окончаніе_по_часу_багита(время))


def определить_непроизносимое_імя(время, широта, долгота):
    букова_соеденитель = 'w'
    время = время_григоріан_в_правильное(время, широта, долгота)
    return соеденить_імена_багитовъ(определить_окончаніе_по_часу_багита(время), букова_соеденитель, определить_начало_по_5минутке_багита(время))


def определить_родовое_імя(время):
    # число рожденія ё багит шестидницы рожденія

    букова_соеденитель = 'ё'
    if время.day < 25:
        начало = багиты[время.day - 1].начало_імени
    else:
        начало = получить_перечень_господъ()[время.day - 25].начало_імени
    окончаніе = определить_окончаніе_по_багиту_6дневки(время).определить_окончаніе_імени_по_полу()
    return соеденить_імена_багитовъ(начало, букова_соеденитель, окончаніе)


def определить_віечное_імя(время):
    # время зачатія е багит шестидницы зачатія

    букова_соеденитель = 'е'
    начало = определить_окончаніе_по_багиту_6дневки(время).начало_імени
    if время.day < 25:
        окончаніе = багиты[время.day - 1].начало_імени + "ип"
    else:
        окончаніе = получить_перечень_господъ()[время.day - 25].начало_імени + "ип"
    return соеденить_імена_багитовъ(начало, букова_соеденитель, окончаніе)


def определить_духовное_імя(время_зачатія):
    # год зачатія ять месяц зачатія

    букова_соеденитель = 'ѣ'

    номер_года = определить_число_багита_года_по_номеру_месяца_григоріан(время_зачатія.year)
    начало = багиты[номер_года - 1].начало_імени
    окончаніе = определить_багита_месяца(время_зачатія, номер_года).определить_окончаніе_імени_по_полу()
    return соеденить_імена_багитовъ(начало, букова_соеденитель, окончаніе)


def определить_наградное_імя(время):
    # за заслуги перед урантіей
    # за заслуги перед отечеством
    # за заслуги перед народом
    # за заслуги перед губерніей
    # за заслуги перед городом район
    # за заслуги перед приходом

    # кратшее время + длительнее время

    return 1


def определить_посміертное_імя(время, итог_воплощенія):
    # опущеные - год смерти + год рожденія -ил
    # не выполнившие предназначеное - год смерти + год рожденія -им
    # обычное - длительнее время + кратшее время -их

    return 1


def время_григоріан_в_правильное(время, широта, долгота):
    # долгота места рожденія
    # декретное время
    # летне зимнее время

    return время


def время_местное(широта, долгота, время):
    # восход зенит сумерки закат сумерки по местному времени
    # продолжительность дня/ночи

    return 1


def время_местное_украина(время):
    # восход зенит сумерки закат сумерки по местному времени
    # продолжительность дня/ночи

    return 1


настоящее_імя = определить_настоящее_імя(время_выход_из_утробы_и_увидел_свет)
отчество = определить_настоящее_імя(время_выход_из_утробы_и_увидел_свет_отца)
обережество = определить_настоящее_імя(время_выход_из_утробы_и_увидел_свет_матери)
сакральное_імя_выход_из_утробы_и_увидел_свет = определить_сакральное_імя(время_выход_из_утробы_и_увидел_свет, *место_рожденія)
сакральное_імя_впервые_взяли_в_руки_или_коснулся_семли = определить_сакральное_імя(время_впервые_взяли_в_руки_или_коснулся_семли, *место_рожденія)
сакральное_імя_первый_вдохъ = определить_сакральное_імя(время_первый_вдохъ, *место_рожденія)
сакральное_імя_впервые_коснулся_воды = определить_сакральное_імя(время_впервые_коснулся_воды, *место_рожденія)
сакральное_імя_первый_пищеприёмъ = определить_сакральное_імя(время_первый_пищеприёмъ, *место_рожденія)
непроизносимое_імя = определить_непроизносимое_імя(время_зачатія, *место_зачатія)
родовое_імя = определить_родовое_імя(время_выход_из_утробы_и_увидел_свет)
віечное_імя = определить_віечное_імя(время_зачатія)
духовное_імя = определить_духовное_імя(время_зачатія)

# print('сакральное выход_из_утробы_и_увидел_свет =', сакральное_імя_выход_из_утробы_и_увидел_свет)
# print('сакральное впервые_взяли_в_руки_или_коснулся_семли =', сакральное_імя_впервые_взяли_в_руки_или_коснулся_семли)
# print('сакральное первый_вдохъ =', сакральное_імя_первый_вдохъ)
# print('сакральное впервые_коснулся_воды =', сакральное_імя_впервые_коснулся_воды)
# print('сакральное первый_пищеприёмъ =', сакральное_імя_первый_пищеприёмъ)
# print('непроизносимое зачатія =', непроизносимое_імя)
# print('родовое_імя =', родовое_імя)
# print('віечное_імя =', віечное_імя)


def определить_числа_багитов_імени(імя):
    for i, sign in enumerate(імя[1:].upper()):
        if sign == імя[1:][i]:
            break
    багит1_короткое_імя = імя[:i].lower()
    багит2_окончаніе_імя = імя[i + 1:].lower()
    for i in багиты:
        if i.начало_імени == багит1_короткое_імя:
            i = багиты.index(i) + 1
            break
    for j in багиты:
        if j.начало_імени in багит2_окончаніе_імя:
            j = багиты.index(j) + 1
            break
    return i, j


def определить_самонаріечённое_імя(настоящее, отчество, обережество, сакральное_выход_из_утробы_и_увидел_свет, родовое, віечное, духовное):
    # недостающие числа для ратки 4*4

    ратка = [
        *определить_числа_багитов_імени(настоящее),
        *определить_числа_багитов_імени(отчество),
        *определить_числа_багитов_імени(обережество),
        *определить_числа_багитов_імени(сакральное_выход_из_утробы_и_увидел_свет),
        *определить_числа_багитов_імени(родовое),
        *определить_числа_багитов_імени(віечное),
        *определить_числа_багитов_імени(духовное),
    ]
    ратка.sort()

    # add x and y

    # for i in range(0, 15, 4):
    #     print(ратка[i:i + 4])
    # print('-' * 40)

    for i in range(1, 12):
        if i in [2, 4, 5, 8, 9, 11]:
            if (ратка[i + 1] - ратка[i]) >= 2:
                # print('add -1 in diagonal')
                ратка.insert(i + 1, -1)
                break

    if -1 not in ратка:
        for i in range(1, 12):
            if (ратка[i + 1] - ратка[i]) >= 2:
                # print('add -1')
                ратка.insert(i + 1, -1)
                break

    for i in range(1, 13):
        if i in [2, 4, 5, 8, 9, 11]:
            if ратка[i] > 0 and (ратка[i + 1] - ратка[i]) >= 2:
                # print('add -2 in diagonal')
                ратка.insert(i + 1, -2)
                break

    if -2 not in ратка:
        for i in range(ратка.index(-1) + 1, 13):
            if (ратка[i + 1] - ратка[i]) >= 2:
                # print('add -2')
                ратка.insert(i + 1, -2)
                break

    if -2 not in ратка:
        ратка.insert(ратка.index(-1) + 1, -2)
        # print('add -2 simply')

    # for i in range(0, 15, 4):
    #     print(ратка[i:i + 4])
    # print('-' * 40)

    # переворот диагоналей

    for i, j in ((0, 15), (3, 12), (5, 10), (6, 9)):
        _tmp1 = ратка[i]
        _tmp2 = ратка[j]
        ратка[j] = _tmp1
        ратка[i] = _tmp2

    # суми по строкам

    среднее = -6  # без учёта -2 -2 -1 -1
    счётчик_строк_столбцов_діагоналей_без_х_у = 0

    for i in range(0, 15, 4):
        suma = sum(ратка[i:i + 4])
        if -1 in ратка[i:i + 4] or -2 in ратка[i:i + 4]:
            suma += 1
            if -2 in ратка[i:i + 4]:
                suma += 1
        else:
            среднее += suma
            счётчик_строк_столбцов_діагоналей_без_х_у += 1
        print('  ', ' '.join('{0:2}'.format(i) for i in ратка[i:i + 4]), end='')
        print(' = {}'.format(suma))

    # суми по діагонали

    діагональ1 = ратка[0], ратка[5], ратка[10], ратка[15]
    діагональ2 = ратка[3], ратка[6], ратка[10], ратка[12]

    сума_діагональ1 = sum(діагональ1)
    if -1 in діагональ1 or -2 in діагональ1:
        сума_діагональ1 += 1
        if -2 in діагональ1:
            сума_діагональ1 += 1
    else:
        среднее += сума_діагональ1
        счётчик_строк_столбцов_діагоналей_без_х_у += 1

    сума_діагональ2 = sum(діагональ2)
    if -1 in діагональ2 or -2 in діагональ2:
        сума_діагональ2 += 1
        if -2 in діагональ2:
            сума_діагональ2 += 1
    else:
        среднее += сума_діагональ2
        счётчик_строк_столбцов_діагоналей_без_х_у += 1

    # суми по столбцам

    print(сума_діагональ2, end='')

    for i in range(0, 4):
        _tmp = ратка[i], ратка[i + 4], ратка[i + 8], ратка[i + 12]
        suma = sum(_tmp)
        if -1 in _tmp or -2 in _tmp:
            suma += 1
            if -2 in _tmp:
                suma += 1
        else:
            среднее += suma
            счётчик_строк_столбцов_діагоналей_без_х_у += 1
        print(' {}'.format(suma), end='')

    print('', сума_діагональ1, '=', среднее / счётчик_строк_столбцов_діагоналей_без_х_у)

    return среднее


def определить_настоящее_імя_кона(время_пробужденія_от_растоса):
    # месяц + год
    return 1


def определить_сакральное_імя_кона(время_пробужденія_от_растоса):
    # час + пятиминутка
    return 1


def определить_духовное_імя_кона(время_впаденія_в_растос):
    # год + месяц
    return 1


def определить_касту(год_рожденія):
    # год_рожденія + месяц

    число_багита = определить_число_багита_года_по_номеру_месяца_григоріан(год_рожденія)

    if число_багита in range(1, 25, 4):
        return 'веси'
    elif число_багита in range(2, 25, 4):
        return 'рахманы'
    elif число_багита in range(3, 25, 4):
        return 'кошдары'
    elif число_багита in range(4, 25, 4):
        return 'судари'
    return


def определить_божественое_этическое_імя(год_зачатія):

    багит_эпохи = 'Яв'
    букова_соеденитель = 'э'

    номер_года = определить_число_багита_года_по_номеру_месяца_григоріан(год_зачатія)
    окончаніе = '{}{}'.format(багиты[номер_года].начало_імени, "исъ" if полъ else "иса")

    return соеденить_імена_багитовъ(багит_эпохи, букова_соеденитель, окончаніе)


print('настоящее =', настоящее_імя)
print('отчество =', отчество)
print('обережество =', обережество)
print('духовное =', духовное_імя)
print("этическое =", определить_божественое_этическое_імя(1992))
print("каста = ", определить_касту(1993))

# определить_самонаріечённое_імя('ВелоЖель', 'ВелоЖель', 'ВелоЖель', 'ВелоЖель', 'ВелоЖель', 'ВелоЖель', 'ВелоЖель')
# определить_самонаріечённое_імя('ВелоНава', 'СѣмоЖель', 'ЯвоЖеля', 'РадwРадъ', 'ПравёЯръ', 'ЯреРадип', 'КострѣВела')
# определить_самонаріечённое_імя('ВелоКостръ', 'СѣмоЖель', 'КостроЖеля', 'РадwРадъ', 'СлавёЯръ', 'КапеРадип', 'КострѣВела')
# определить_самонаріечённое_імя('ВелоКостръ', 'СѣмоЖель', 'ЯроЖеля', 'РадwРадъ', 'РодёЯръ', 'ЯреРадип', 'ЛелеСлава')

# print('кострома+жель', определить_настоящее_імя(datetime.datetime(1968, 2, 5)))
# print('правь+лада', определить_настоящее_імя(datetime.datetime(1955, 7, 7)))
# print('троян+таня', определить_настоящее_імя(datetime.datetime(1925, 8, 27)))
# print('ярило+хорс', определить_настоящее_імя(datetime.datetime(1930, 3, 20)))
# print('радегастъ+радегастъ', определить_настоящее_імя(datetime.datetime(1990, 11, 1)))
# print('стрибог+купала', определить_настоящее_імя(datetime.datetime(1961, 1, 25)))
# print('вей+правь', определить_настоящее_імя(datetime.datetime(1962, 2, 15)))
