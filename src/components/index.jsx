import React , {useEffect,useState} from "react";
import Navbar from "./navbar";
import Board from "./board";
import { getData } from "../utils/mockData";
function App() {
    const [lists,setLists] = useState([])
    const [lid,setLid] = useState("");
    const [tid,setTid] = useState("");
    const mockData = () => {
        const tempdata = getData();
        setLists(tempdata);
    }
    useEffect(()=>{
        mockData();
    },[]);

    const dragEnded = (e,targetTaskLid, targetTaskTid) => {
        e.preventDefault();

        let s_listIndex, s_taskIndex, t_listIndex, t_taskIndex;
        s_listIndex = lists.findIndex((item) => item.id == lid);
        if (s_listIndex < 0) return;
        s_taskIndex = lists[s_listIndex]?.tasks?.findIndex(
          (item) => item.id == tid
        );
        if (s_taskIndex < 0) return;
    
        t_listIndex = lists.findIndex((item) => item.id == targetTaskLid);
        if (t_listIndex < 0) return;
    
        t_taskIndex = lists[t_listIndex]?.tasks?.findIndex(
          (item) => item.id == targetTaskTid
        );
        const tempLists = [...lists];
        if (t_taskIndex < 0) {
          const sourceTask =  tempLists[s_listIndex].tasks.splice(s_taskIndex, 1);
          tempLists[t_listIndex].push(sourceTask);
        }
        else {
          const sourceTask = tempLists[s_listIndex].tasks[s_taskIndex];
          tempLists[s_listIndex].tasks.splice(s_taskIndex, 1);
          tempLists[t_listIndex].tasks.splice(t_taskIndex, 0, sourceTask);
        }
        setLists(tempLists);
        setLid("");
        setTid("");
    };
    
      const dragEntered = (e,lid, tid) => {
         setLid(lid);
         setTid(tid);
      };
  return (
    <>
    <div className="h-[100vh] bg-[#843DF5]">
    <Navbar/>
    <Board 
        data={lists} 
        dragEnded={dragEnded}
        dragEntered={dragEntered}
    />
    </div>
    </>    
  );
}

export default App;