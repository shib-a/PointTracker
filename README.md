<h1 align="left">PointTracker</h1>

<h2 align="left">Описание:</h2>
PointTracker — это веб-приложение, позволяющее пользователям авторизоваться, вводить координаты точек и радиус области, а также визуализировать и отслеживать попадание точек в заданную область на координатной плоскости.
Приложение включает в себя стартовую и основную страницы, адаптированные для различных устройств.

<h2 align="left">Технологический стек:</h2>

- Back-end: Java 17, Spring Boot, Spring Security, Spring Data JPA, PostgreSQL, Hibernate

- Front-end: React, Redux, PrimeReact, ES6, JSX

- API: RESTful API для взаимодействия между клиентом и сервером

- Контейнеризация: Docker, Docker Compose

<h2 align="left">Функциональные возможности:</h2>
<h3 align="left">Стартовая страница:</h3>

- Форма для ввода логина и пароля

- Аутентификация пользователей с использованием хэширования паролей

- Защита основной страницы от неавторизованного доступа​

<h3 align="left">Основная страница:</h3>

- Поля ввода для координат X (Spinner), Y (Slider) и радиуса R (Spinner)

- Валидация вводимых данных

- Динамическая визуализация области и точек на координатной плоскости

- Определение попадания точек в область с изменением цвета точек

- Таблица с результатами предыдущих проверок

- Кнопка выхода для завершения сессии

<h3 align="left">Адаптивность:</h3>
Приложение адаптировано для отображения на различных устройствах:​

- Десктопный режим: ширина экрана ≥ 1137 пикселей

- Планшетный режим: 701 ≤ ширина экрана < 1137 пикселей

- Мобильный режим: ширина экрана < 701 пикселей
  
<h3 align="left">Взаимодействие с базой данных:</h3>

- Для хранения данных пользователей и результатов проверок используется PostgreSQL 

- Для взаимодействия с базой данных используется Spring Data JPA в реализации Hibernate

- Хранение паролей выполняется в виде хэш-сумм для обеспечения безопасности​

<h2 align="left">Установка и запуск:</h2>

1) Клонирование репозитория:
 git clone https://github.com/shib-a/PointTracker.git |
 cd PointTracker

2) Сборка проекта с помощью Gradle:
 ./gradlew build

3) Запуск приложения с использованием Docker Compose:
 docker-compose up

После запуска бэкенд будет доступен по адресу http://localhost:8080, а фронтенд - по адресу http://localhost:3000.
<h2 align="left">Скриншоты приложения:</h2>
Стартовая страница:

![image](https://github.com/user-attachments/assets/ee53c616-4660-4105-8568-ad6159c6c887)

Основная страница:

![image](https://github.com/user-attachments/assets/5f77e0b6-0526-457c-aaf9-7c4f07f9074f)

![image](https://github.com/user-attachments/assets/944cd02d-1cdb-4e0b-9de6-3f1ee378332d)
