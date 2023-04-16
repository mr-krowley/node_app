//подключение библиотек
import express from "express"
import cors from "cors"
//включение библиотек
const app = express()
const PORT = 5000;
app.use(cors());

// наша база данных :)
const users = [];

//так сможем читать json
 app.use(express.json())


//обработчик запроса
app.post("/user", (req, res) => {
  const { name, psssword } = req.body;

  let User = users.find((user) => user.name === name)
  if (User) {
    if (User.password === password) {
      res.send("Добро пожаловать")
    } else {
      res.status(401).send("Неверный пароль");
    }
  } else {
   //если такого пользователя нет то сощдаем его
    users.push({ name, psssword })
    res.status(201).send("Пользователь создан");
  }
})


app.listen(PORT, () => {
  console.log(`Server has been started on port ${PORT}...`);
})