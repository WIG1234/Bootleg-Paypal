
export function bill(client,id,ammount,user,userid){
    let fs=require('fs');
let filepath='../bile.txt'
let hello="hello\n"
let content ="the user "+client+"with"+id+"has received "+ammount+" from your account "+user+"with the id"+userid;
hello=hello+content
console.log(hello);
fs.writeFile(filepath, 'Hello content!', function (err) {
    if (err) throw err;
    console.log('Saved!');
    });
}
