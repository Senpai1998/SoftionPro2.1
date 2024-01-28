import { Outlet, useNavigate } from "react-router-dom";
import Contenido from "../components/Contenido";
import Sidebar from "../components/Sidebar";
import Header from "../components/Head";
import MigaPan from "../components/migaPan";
import Ctarea from "../components/createTarea";
import { useEffect } from "react";
import { useUserContext } from "../context/UseContext";
import Cookies from 'universal-cookie';

const LayoutPrivate = () => {
  const {allData,setAllData} = useUserContext();
  const navegate = useNavigate();
  
  const cookies = new Cookies();

  useEffect(() => {
    

    const chectTocken = async () => {
      if(!document.cookie.includes('x-access-user')) navegate('/');
    }

    const getData = async() =>{
      try {
        const data = await fetch('localhost:4000/api/projects',{
          method:'GET',
          headers:{
            'Content-Type':'application/json',
            'x-access-token': cookies.get('x-access-user')
          }
        })
        const json = await data.json();
        setAllData(json)
      } catch (error) {
        
      }
    }

    chectTocken();



  }, [allData])
  

          return (
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


