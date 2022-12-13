import {Link} from'react-router-dom';
import{useState,useEffect} from'react';
import Profil from './Profil';

import {db} from"../backend/firebase";
import { getDatabase, ref, onValue} from "firebase/database";

function Login() {
  let [first, setfirst] = useState('loginf');
  let [email, setemail] = useState('')
  let [mail,setmail] = useState('');
  let [PWD, setPWD] = useState('');
  let [Valide, setValide] = useState(false)
  let [Solde, setSolde] = useState('')
  let [PROF, setPROF] = useState(false)
  const [check, setcheck] = useState(false)
  useEffect(() => {
    const db = getDatabase();
  const starCountRef = ref(db);
  onValue(starCountRef, (snapshot) => {
    const data = snapshot.val();
    let word=data[mail].Pwd;
    setSolde(data[mail].sold);
    
    setemail(data[mail].Mail);
  

    
  if(word===PWD)
   setValide(true)
   
   
   
  }, [])
  
 
 
   
  //function dataCheck(){
   // let word=data[mail].Pwd;
  //if(word===PWD){
   // setValide(true)
  //}
//}
  });
  

  
  //const Familly="AAA";
  //const dbRef = ref(getDatabase());
//get(child(dbRef, `MAIL/${Familly}`)).then((snapshot) => {
  //if (snapshot.exists()) {
   // console.log(snapshot.val());
  //} else {
   // console.log("No data available");
  //}
//}).catch((error) => {
  ///console.error(error);
///});
function handleClick(e){
  e.preventDefault();
  if(Valide){
    setfirst('hidder')
    setPROF(true)
    
  }
  else{
setcheck(true)
  }
}
  
  return (
    
    <div className='loginh'>
     
       <div className={first} >
       
       <h4>BOOT LEG PAYPAL</h4>
      <label >username:</label>
      <input type="text" value={mail} onChange={(e)=>{setmail(e.target.value)} }/>
      <label >password:</label>
      <input type="password" value={PWD} onChange={(e)=>{setPWD(e.target.value)} } />
      {check && <div style={{background:"white",borderColor:"red"}}><p style={{color:"red"}}>try again please</p></div>}
      <button onClick={handleClick}>get in</button>
      
     <Link to={{pathname:'/sign'}}>register here</Link>


    </div>
    
    
    
    {PROF && <Profil usename={mail} email={email} sold={Solde}/>}
   
    
    </div>
  )
}

export default Login