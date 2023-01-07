import React from 'react'
import Header from "../components/Header";
import StartContent from "../components/StartContent";
import { useAuth } from "../context/AuthContext";
import Row from "../components/Row"
import requests from "../services/Request";
const Dashboard = () => {
    const {logout, updateFilm, user} = useAuth()
    const salir = () =>{
        logout()
    }
    const updateMovie = (n:any) => {
        updateFilm(n)
    }
  return         <div className="flex flex-col">
  <Header logout={salir}/>
  {/*Top content*/}
  
  <div>
      <StartContent />
  </div>
  <hr />
  {/* My list */}
  <div className="">
      
      <Row title={"Keep Watching"} fetchUrl={requests.fetchNetflixOriginals} isLargeRow={false} update={updateMovie} />
  </div>
  

</div>
}

export default Dashboard