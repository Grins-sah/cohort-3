import  {Client} from 'pg'
const pgClient = new  Client("postgresql://alpha_owner:2wHBpd5WSvFT@ep-billowing-lake-a5ho8cec.us-east-2.aws.neon.tech/alpha?sslmode=require");
async function main(){
    await pgClient.connect();
    const response  = await pgClient.query("SELECT * FROM users;");
    console.log(response.rows);
    console.log(2);
}
main();
