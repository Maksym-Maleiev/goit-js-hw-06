# Критерії приймання

- Створено репозиторій `goit-js-hw-06`.
- Домашня робота містить два посилання: на вихідні файли і робочу сторінку на
  `GitHub Pages`.
- Завдання виконані у точній відповідності до ТЗ (забороняється змінювати
  вихідний HTML завдання).
- В консолі відсутні помилки і попередження під час відкриття живої сторінки
  завдання.
- Імена змінних і функцій - зрозумілі та описові.
- Код відформатований за допомогою `Prettier`.

## Стартові файли

У [папці src](./src) знайдеш стартові файли з готовою розміткою і підключеними
файлами скриптів для кожного завдання. Скопіюй їх собі у проект. Для цього
завантаж цей репозиторій як архів або використовуй
[сервіс DownGit](https://downgit.github.io/) для завантаження окремої папки з
репозиторія.

## Завдання 1

HTML містить список категорій `ul#categories`.

```html
<ul id="categories">
  <li class="item">
    <h2>Animals</h2>
    <ul>
      <li>Cat</li>
      <li>Hamster</li>
      <li>Horse</li>
      <li>Parrot</li>
    </ul>
  </li>
  <li class="item">
    <h2>Products</h2>
    <ul>
      <li>Bread</li>
      <li>Prasley</li>
      <li>Cheese</li>
    </ul>
  </li>
  <li class="item">
    <h2>Technologies</h2>
    <ul>
      <li>HTML</li>
      <li>CSS</li>
      <li>JavaScript</li>
      <li>React</li>
      <li>Node.js</li>
    </ul>
  </li>
</ul>
```

Напиши скрипт, який:

1. Порахує і виведе в консоль кількість категорій в `ul#categories`, тобто
   елементів `li.item`.
2. Для кожного элемента `li.item` у спику `ul#categories`, знайде і виведе в
   консоль текст заголовку елемента (тегу `<h2>`) і кількість елементів в
   категорії (усіх `<li>`, вкладених в нього).

Для виконання цього завдання потрібно використати метод forEach() і властивості
навігації по DOM.

В результаті, в консолі будуть виведені наступні повідомлення.

```bash
Number of categories: 3

Category: Animals
Elements: 4

Category: Products
Elements: 3

Category: Technologies
Elements: 5
```

## Завдання 2

HTML містить порожній список `ul#ingredients`.

```html
<ul id="ingredients"></ul>
```

JavaScript містить масив рядків.

```js
const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
```
