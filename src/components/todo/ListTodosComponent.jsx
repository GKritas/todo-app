import { useEffect, useState } from "react";
import { deleteTodoApi, retrieveAllTodosForUsernameApi, updateTodoApi } from "./api/TodoApiService";
import { useAuth } from "./security/AuthContext";
import { useNavigate } from "react-router-dom";

export function ListTodosComponent() {
    const authContext = useAuth()

    const username = authContext.username

    const navigate = useNavigate()

    const [todos, setTodos] = useState([])

    const [message, setMessage] = useState(null)

    useEffect(() => refreshTodos(), [])

    function refreshTodos() {
        retrieveAllTodosForUsernameApi(username)
            .then(response => {
                setTodos(response.data)
            })
            .catch(error => console.log(error))
    }

    function deletTodo(id) {
        deleteTodoApi(username, id)
            .then(
                () => {
                    setMessage(`Delete of todo with id = ${id} successful`)

                    refreshTodos()
                }
            )
            .catch()
    }

    function updateTodo(id) {
        navigate(`/todo/${id}`)
    }

    function addNewTodo(){
        navigate('/todo/-1')
    }



    return (
        <div className='container'>
            <h1>Things You Want to do!</h1>
            {message && <div className="alert alert-warning">{message}</div>}
            <div>
                <table className='table'>
                    <thead>
                        <tr>
                            <th>Description</th>
                            <th>Is Done?</th>
                            <th>Target Date</th>
                            <th>Delete</th>
                            <th>Update</th>
                        </tr>
                    </thead>
                    <tbody>
                        {todos.map(
                            todo => (
                                <tr key={todo.id}>
                                    <td>{todo.description}</td>
                                    <td>{todo.done.toString()}</td>
                                    <td>{todo.targetDate.toString()}</td>
                                    <td> <button className="btn btn-warning" onClick={() => deletTodo(todo.id)}>Delete</button></td>
                                    <td> <button className="btn btn-success" onClick={() => updateTodo(todo.id)}>Update</button></td>
                                </tr>
                            )
                        )}

                    </tbody>
                </table>
            </div>
            <div className="btn btn-success m-5" onClick={addNewTodo}>Add New Todo</div>
        </div>
    );
}
