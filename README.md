###APP
--------------------------------

## Алгоритм действий
- 1. Постановка задачи
- 2. Создание архктектуры
- 3. Перейти в терминале в папку сервер
- 4. Инициализируем сервер
```npm init -y```
- 5. Устанавливаем библиотек express
```npm install express ```
- 6. Создаем gitignore и помещаем туда node_modules
- 7. Переход на ES6 modules ("type": "module"); в файле package.json
- 8. Делаем структуру сервера
- 9. Запускаем ноду 
```node app.js ```
----------------------------------

## Helper (не обязательно)
- 1. Устонавливаем nodemon
```npm i -D nodemon ```
- 2. Редактируем script в pascage.json   на  "dev": "nodemon app.js"
 "scripts": {
    "dev": "nodemon app.js"
  },
- 3. Запускаем через nodemon
```npm run dev```


----------------------------------

## Server
1. Делаем обработчик запроса
``` app.post("/user", (req, res) => {})```
2. Убираем ошибку CORS
- Устоновить библиотеку Cors в папку server
```npm i cors ```
- Подключаем ее 
```import cors from "cors"```
-Используем
```app.use(cors()); ```
3. Делаем bodyparser
```app.post(express.json());```
4. Реализация логики


----------------------------------
## Git
-Создание новой ветки
```git branch <name>```
-Посмотреть ветки
```gin branch```
-Перейти в другую ветку
```git checkout <name>```

