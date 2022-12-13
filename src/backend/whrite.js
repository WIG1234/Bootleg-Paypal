import {db} from"./firebase";
import { set ,ref} from "firebase/database";

export const WriteToDatabase=(user,Nom,Familly,Mail,Pwd)=>{
   
    //,`/${uiid}`
    
    set(ref(db,`${user}`),{
      Nom,
      Familly,
      Mail,
      user,
      Pwd,
      sold:20,
   
      
    });
    
}