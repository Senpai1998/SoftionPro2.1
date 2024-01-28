import { LiaUserPlusSolid } from "react-icons/lia";
import { FaRegCalendarAlt } from "react-icons/fa";
import { MdOutlineFlagCircle } from "react-icons/md";



function List() {
  return (
    <div className="p-20 flex justify-around h-[8vh] items-center flex-wrap md:flex-nowrap">
        <div>
          <h1 className="p-2 text-1xl font-bold md:text-2xl">Pendientes</h1>
          <div className="ml-3">
            {["Tarea 1", "Tarea 2", "Tarea 3", "Tarea 4", "Tarea 5", "Tarea 6", "Tarea 7", "Tarea 8"].map((tarea, index) => (
              <h4 key={index} className="p-3 text-1xl md:text-2xl h-[8vh] font-medium">{tarea}</h4>
            ))}
          </div>
        </div>
        <div>
          <h1 className="p-2 text-1xl font-bold md:text-2xl">Personas asignadas</h1>
            <div className="flex flex-col ml-24">
              {Array(7).fill(<button className="mb-2"><LiaUserPlusSolid className="text-4xl h-[8vh]" /></button>)}
            </div>
        </div>
        <div>
          <h1 className="p-2 text-1xl font-bold md:text-2xl">Fecha</h1>
          <div className="ml-4 p-2">
            {Array(8).fill(<FaRegCalendarAlt className="text-3xl h-[8vh]" />)}
          </div>
        </div>
        <div>
          <h1 className="p-2 text-1xl font-bold md:text-2xl">Prioridad</h1>
          <div className="ml-9 p-2">
            {Array(8).fill(<MdOutlineFlagCircle className="text-4xl h-[8vh]" />)}
          </div>
        </div>
    </div>
  )
}

export default List
