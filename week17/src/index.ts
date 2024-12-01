import  {Client} from 'pg'
const pgClient = new  Client("");
async function main(){
    await pgClient.connect();
    const response  = await pgClient.query("SELECT * FROM users;");
    console.log(response.rows);
    console.log(2);
}
main();
