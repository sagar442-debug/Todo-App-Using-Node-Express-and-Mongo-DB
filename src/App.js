import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Todo from './pages/Todo';
import TodoPage from './pages/TodoPage';
import AppContext from './Context/MyContext';
import { useState } from 'react';



function App() {
  const[todos, setTodos] = useState([])
  const [value, setValue] = useState("");
  const [loading, setLoading] = useState(false)
  const [edit, setEdit] = useState({});

  const providers = {
    todos,
    setTodos,
    value,
    setValue,
    loading,
    setLoading,
    edit,
    setEdit

  }

  return (
    <Router>
      <AppContext.Provider value={providers}>
      <Routes>
        <Route path="/" element={<Todo />} />
        <Route path="/todo/:todoId" element={<TodoPage />} />
      </Routes>
      </AppContext.Provider>
    </Router>
  );
}

export default App;
