# Репозиторий frontend части проекта "Студенческая столовая"

_Портал предназначен для удобного просмотра меню столовых в МГТУ им.Баумана, а также просмотра подробной информации о предоставляемых блюдах, их наличии, ценах и объемах._

Приложение разработано согласно SPA-архитектуре c использованием технологий [React](https://reactjs.org) и [Redux](https://github.com/reduxjs/redux).
Взаимодействие с [backend'ом](https://github.com/yacht-club/canteen-api) осуществялется по средством REST API.

Приложение **развернуто** и **доступно** по следующему адресу: https://bmstu-canteen.now.sh

## Запуcк приложения
В первую очередь, загрузите исходный код и перейдите в директорию проекта:
``` bash
git clone https://github.com/yacht-club/canteen-spa.git && cd canteen-spa
```
Далее возможно осуществить запуск приложения с помощью следующих способов:

### Используя Node.js и npm
1. [Установите](https://nodejs.org/en/download/) Node.js
2. Установите зависимости
  ``` bash
  npm install
  ```
3. Запустите приложение
  ``` bash
  npm start
  ```
4. Перейдите по адресу `http://localhost:3000` в браузере

### Используя Docker
1. Установите Docker
2. Создайте docker-образ
  ``` bash
  docker build -t canteen-spa-image .
  ```
3. Запустите docker-контейнер
  ``` bash
  docker run -p 3000:3000 canteen-spa-image
  ```
4. Перейдите по адресу `http://localhost:3000` в браузере
