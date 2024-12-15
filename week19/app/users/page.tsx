import axios from "axios"

export default async function User(){
    const res = await axios.get("http://localhost:3000/api/v1/user/details");
    return <div>
        {res.data.email}
        <br/>
        <br/>
        {res.data.user}
    </div>
}