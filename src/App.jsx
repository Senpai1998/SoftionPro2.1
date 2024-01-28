import { useUserContext } from "./context/UseContext"

function App() {

  const {allData} = useUserContext();

  console.log(allData)

  return (
   <>
   <p>Hola bienvenido seas  </p>
   </>
  )
}

export default App
