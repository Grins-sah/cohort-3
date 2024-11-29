interface User {
    id:string;
    name: string;
    age :number;
    password:string;
};
function sumOfAge(user1:User,user2:User){
    return user1.age+user2.age;
}

// Pick is only used in types not in interface output not input get both type and interface
type UpdateProps = Pick<User ,"name"|"age"|"id">
type UpdatePropsOptional = Partial<UpdateProps>

const u:Readonly<User> = {
    name:"grins",
    age:18,
    id:"1",
    password:"Grins123"
}
type alpha ={
    readonly name:string;

}
console.log(u);

type UsersAge = {
    [key:string]:number;
}
type UsersAge2 = Record<string,{age:string}>
const users :UsersAge = {
    "ads":21,
    "dsa":140
}
const User3  = new Map<string,string>();
User3.set