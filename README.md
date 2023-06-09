# Знакомство с веб-технологиями
## Урок 1. Веб-технологии: вчера, сегодня, завтра

1. Определите, на каком протоколе работает сайт youtube.com.
Сделайте скриншот с названием 1_protocol.jpg, по которому станет понятно, как вы определили протокол сайта. [Скриншот](less_1/1_protocol.jpg)

2. Создайте файл 2_analyze.txt, в котором проанализируйте структуру страницы сайта https://ru.wikipedia.org/, а именно нужно описать (коротко, своими словами), какие блоки есть на сайте, что в этих блоках находится. Есть ли на сайте шапка, подвал, что в них содержится? Как и где расположен контент? Есть ли дополнительные элементы на странице? [Текстовый файл](less_1/2_analyze.txt)

3. Внесите не менее 10 изменений на страницу любой статьи сайта https://ru.wikipedia.org/, с помощью инструмента разработчика и представьте два скриншота было/стало (скриншоты должны иметь названия 3_before.jpg, 3_after.jpg соответственно). Желательно поработать с изменением текста на странице, заменой картинки, изменением стилей.[Скриншот до](less_1/3_before.jpg) [Скриншот после](less_1/3_after.jpg)

4. Создайте прототип низкой детализации сайта https://dzen.ru/ с помощью сайта https://wireframe.cc/. Предоставьте скриншот того, что получилось (скриншот должен быть назван 4_proto.jpg). [Скриншот прототипа низкой детализации](less_1/4_proto.jpg)

## Урок 2. HTML, CSS

Создать сайт (html-документ с названием index.html), с рассказом о чём угодно. Например, о себе или о любимом коте.
### Страница должна содержать как минимум:
1. Два заголовка.
2. Два абзаца (параграфа).
3. Одну картинку из интернета, которая находится в свободном доступе, то есть которая будет доступна без регстранции и смс ;)
4. Одну картинку, которая будет браться локально. Все локальные картинки должны храниться в папке img, которая должна лежать рядом с html-документом.
5. Один нумерованный список со значениями.
6. Один маркированный список со значениями.
7. Одну ссылку.
8. Один локальный, подключенный css-файл, в котором прописаны пара стилей, применяемых на странице.

[Расположение страницы](less_2/)

## Урок 3. Основы JavaScript
1. Необходимо создать html-страницу с названием 1.html, в которой подключить файл 1.js (его тоже необходимо создать рядом с html-файлом). В js-файле необходимо создать следующий скрипт:
Необходимо пользователя попросить ввести температуру в градусах Цельсия, преобразовать введенное пользователем значение в соответствующую температуру в градусах по Фаренгейту и вывести в alert сообщение с текстом (пример): Цельсий: 21, Фаренгейт: 69.8 Где вместо 21 и 69.8 должны быть подставлены соответствующие значения, которые были получены ранее. [Расположение страницы](less_3/1.html)

2. Необходимо создать html-страницу с названием 2.html, в которой подключить файл 2.js (его тоже необходимо создать рядом с html-файлом). В js-файле необходимо создать следующий скрипт:
Cоздать функцию greeting, которая принимает в качестве аргумента имя человека и выводит приветствие, используя переданное ей имя, в консоль. Необходимо у пользователя запросить имя и вызвать функцию greeting, передав туда полученное от пользователя значение. [Расположение страницы](less_3/2.html)

## Урок 5. JSON и XML
1. Проверить XML, правильно ли он составлен, не имеет ли он ошибок, если есть какие-либо недочеты, предоставьте правильный вариант в файле 1.xml:
<user>
<name>"Иван"</name>
<surname>"Иванов"</surname>
<patronymic>"Иванович"</patronymic>
<age>"30"</age>
<phone>"Москва"</phone>
<birthplace>"+7 926 766 48 48"</birthplace>
</user>
[Расположение файла](less_5/1.xml)

2. Проверить JSON, правильно ли он составлен, не имеет ли он ошибок, если есть какие-либо недочеты, предоставьте правильный вариант в файле 2.json:
name: "Иван",
surname: "Иванов",
patronymic: "Иванович",
age: "30",
birthplace: "Москва",
phone: +7 926 766 48 48
[Расположение файла](less_5/2.json)
