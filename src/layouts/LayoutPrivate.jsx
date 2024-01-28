import { Outlet,  Navigate } from "react-router-dom";
import Contenido from "../components/Contenido";
import Sidebar from "../components/Sidebar";
import Header from "../components/Head";
import MigaPan from "../components/migaPan";
import Ctarea from "../components/createTarea";

const LayoutPrivate = () => {

          return ((!document.cookie.includes('x-access-user'))? <Navigate to="/" /> :
          <div className="grid lg:grid-cols-4 xl:grid-cols-6 min-h-screen">
    <Sidebar /> 
    <main className="lg:col-span-3 xl:col-span-5 bg-gray-100 flex flex-col ">
      <div className="h-[23vh]">
        <Contenido/>
        <Header />
        <MigaPan />
      </div>
      <div className="mt-[250px]">
        <Outlet />
      </div>
      <Ctarea />
    </main>
</div>)
          }


export default LayoutPrivate


