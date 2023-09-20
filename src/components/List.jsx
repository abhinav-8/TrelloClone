import { Card } from "../templates/Card";

export default function List(props) {
    return (
        <Card className="rounded !w-[400px] max-h-[80vh] overflow-y-scroll bg-[#FCFCFC] shadow p-3 mx-10">
            <div className="text-lg font-bold">{props.title}</div>
            {props.tasks.map((data,index) => {
            return (
                <Card draggable
                    onDragEnd={() => props.dragEnded(props.id, data.id)}
                    onDragStart={() => props.dragEntered(props.id, data.id)}

                    id = {data.id} 
                    key={index} 
                    className="bg-[#bcbcbc] rounded shadow-lg whitespace-pre-line mt-4 p-3 hover:bg-zinc-200"
                >
                    {data.title}
                </Card>
            )
        })}
        </Card>
    );
}