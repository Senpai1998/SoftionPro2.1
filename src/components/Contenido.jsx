function Contenido() {
  return (
    <div className="flex justify-around h-[13vh] justify-items-center items-center flex-wrap md:flex-nowrap">
      <h1 className="p-5 text-3xl font-bold md:text-2xl">Tarea 1</h1>
      <div className="flex justify-center justify-items-center flex-col">
        <h1 className="text-3xl font-bold md:text-2xl">Realizado</h1>
        <h3 className="">Estado</h3>
      </div>
      <div className="flex justify-center justify-items-center flex-col">
        <h1 className="text-3xl font-bold md:text-2xl">18/10/24</h1>
        <h3>inicio</h3>
      </div>
      <div className="flex justify-center justify-items-center flex-col">
        <h1 className="text-3xl font-bold md:text-2xl">18/10/24</h1>
        <h3>Finalizado</h3>
      </div>
    </div>
  )
}

export default Contenido
