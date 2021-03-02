import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {deleteTodo, loadTodo} from "./action";

function App() {

  const loading = useSelector(state => state.loading);
  const todos = useSelector(state => state.todos);

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(loadTodo())
  }, [])

    const handleDelete = (id) => {
      dispatch(deleteTodo(id))
    }

  return (
    <div className="App">
      <div className="header">Список списка:</div>
      <div className="imgBlock">{loading ? 'Жди...' : (
          todos.map((todo) => {
            return (
                <div className="img">
                  <img src={todo.thumbnailUrl} />
                  <button onClick={() => handleDelete(todo.id)}>✕</button>
                </div>
            )
          })
      )}

      </div>
    </div>
  );
}

export default App;
