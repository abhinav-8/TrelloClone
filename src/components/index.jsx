import React , {useEffect,useState} from "react";
import Navbar from "./navbar";
import Board from "./board";
import { getData } from "../utils/mockData";
function App() {
    let [data,setData] = useState([])
    const mockData = () => {
        const tempdata = getData();
        setData(tempdata);
        return data;
    }
    useEffect(()=>{
        const daddta = mockData();
        console.log("temp",daddta);
    },[]);
  return (
    <>
    <div className="h-[100vh] bg-[#843DF5]">
    <Navbar/>
    <Board data={data}/>
    </div>
    </>    
  );
}

export default App;