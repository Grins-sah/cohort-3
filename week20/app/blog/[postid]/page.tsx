import axios from "axios"

export default async function Blog({params}:any){
    const res = await axios.get(`https://jsonplaceholder.typicode.com/posts/${ params.postid}`)
    return <div>
        <b>
            Blog page {res.data.title }
        </b>
    </div>
}