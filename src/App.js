import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Todo from './pages/Todo';
import TodoPage from './pages/TodoPage';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Todo />} />
        <Route path="/todo/:todoId" element={<TodoPage />} />
      </Routes>
    </Router>
  );
}

export default App;
