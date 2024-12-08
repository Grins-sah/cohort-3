import axios from "axios"
export default async function Blogs(){
    const blogs = await axios.get("https://jsonplaceholder.typicode.com/todos/");
    return (
        <div>
            {blogs.data.map((blog: iTodo) => <Todo title={blog.title} completed={blog.completed} />)}

        </div>
    )
}
interface iTodo{
    title :string;
    completed:boolean;
}
function Todo({title,completed}:iTodo){
    return <div>
        { title}
        <br/>
        {completed ? <span className="bg-green-700">
            Done
        </span>: <span className="bg-red-500">
            "Not Done"
        </span>}
    </div>
}