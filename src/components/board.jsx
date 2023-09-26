import React from "react";
import List from "./List";
export default function Board(props) {
    return(
    <div className="bg-[#843DF5]  flex justify-between overflow-x-auto p-20 w-[100vw]"
    >
        {props.data.map((data,index) => {
            return (
                <List title={data.title} id={data.id} tasks={data.tasks} key={index} dragEnded={props.dragEnded}
                dragEntered={props.dragEntered}
                />
            )
        })}

    </div>)
}