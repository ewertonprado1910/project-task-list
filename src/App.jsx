import { useState } from "react"
import { v4 as uuid } from "uuid"
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


import { Container, ContainerList, Input, Button, ListItem, Trash, Check, H3 } from './components/style'


function App() {
  const [list, setList] = useState([])
  const [inputTask, setInputTask] = useState("")


  const inputChange = (event) => {
    setInputTask(event.target.value)
  }

  const buttonClick = () => {
    if (inputTask) {
      setList([...list, { id: uuid(), task: inputTask, finished: false }])
      toast.success("Tarefa adicionada com sucesso ✅")
      setInputTask("")
    } else {
      toast.error("Ops, digite uma tarefa...✍🏻")
    }
  }

  const finishedTask = (id) => {
    const newList = list.map(item => (
      item.id === id ? { ...item, finished: !item.finished } : item
    ))
    setList(newList)
    toast.success("Tarefa marcada como concluida ✅")
  }

  const deleteTask = (id) => {
    const newList = list.filter(item => (
      item.id !== id
    ))
    setList(newList)
    toast.warn("Tarefa removida ❌")
  }


  return (

    <Container>
      <ContainerList>
        <Input onChange={inputChange} placeholder='O que tenho para fazer...' />

        <Button onClick={buttonClick}>
          Adicionar
        </Button>

        <ul>
          {
            list.length > 0 ? (
              list.map(item => (
                <ListItem isFinished={item.finished} key={item.id}>
                  <Check onClick={() => finishedTask(item.id)} />
                  <li>{item.task}</li>
                  <Trash onClick={() => deleteTask(item.id)} />
                </ListItem>
              ))
            ) : (
              <H3>Não há tarefas na lista...</H3>
            )
          }
        </ul>
      </ContainerList>
      <ToastContainer position="top-center" autoClose={2000} theme="colored" />

    </Container>
  )
}


export default App
