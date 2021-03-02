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
      <div className="header">Список всех списков:</div>
        <div className="imgBlock">{loading ?
            <div className="load">Если ты понизил скорость, то наверное видешь этот текст :)</div> : (
          todos.map((todo) => {
            return (
                <div className="img">
                    <div><button onClick={() => handleDelete(todo.id)}>✕</button></div>
                    <div className="imgCard"><img src={todo.thumbnailUrl} /></div>

                    <div className="block">wdw</div>
                </div>
            )
          })
      )}

      </div>
    </div>
  );
}

export default App;
