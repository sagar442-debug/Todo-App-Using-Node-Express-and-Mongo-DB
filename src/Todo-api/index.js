const express = require('express')
const app = express()
const port = 8000
const mongoose = require('mongoose');
const { Schema } = mongoose;
const bodyParser = require('body-parser')
const cors = require('cors');

app.use(cors());



app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())




const todoSchema = new Schema({
  title: String,
  status: String,
}, {
  timestamps: true,
});

const Todo = mongoose.model("Todo", todoSchema);

async function main() {
  await mongoose.connect('mongo server')
}

main()
  .then(() => console.log("connected to the database"))
  .catch((error) => console.log("Error", error))



app.post('/api/todos', (req, res) => {
  const todo = new Todo({
    title: req.body.title,
    status: req.body.status,
  });
  todo.save().then((response) => {
    console.log(response);
    res.send({})
  })
})


app.get('/api/todos', (req, res) => {
  const todos = Todo.find();
  todos
    .then((response) => res.send(response))
    .catch((error) => res.send(error))
})




app.get('/api/todos/:todoId', (req, res) => {
  const todoId = req.params.todoId;
  const findTodo = Todo.findById({ _id: todoId });
  findTodo
      .then((response) => res.send(response))
      .catch((error) => res.send(error));

})



app.delete('/api/todos/:todoId',(req, res)=>{
  const todoId = req.params.todoId;
  const deleteTodo = Todo.findByIdAndRemove({_id: todoId});
  deleteTodo
  .then((response)=>{
    res.send(response)
  })

})



app.put(('/api/todos/:todoId'), (req, res) => {
  const todoId = req.params.todoId;
  const updateTodo = Todo.findByIdAndUpdate(
      { _id: todoId },
      {
          title: req.body.title,
          status: req.body.status
      },
      {
          new: true
      }
      );
  updateTodo
  .then((response)=> res.send(response))
  .catch((error)=> res.send(error))
})



app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
