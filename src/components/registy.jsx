import {db} from"../backend/firebase";
import {uid} from "uid";
import { set ,ref} from "firebase/database";
import{useState} from "react";
import Profil from "./Profil";
import { useNavigate } from 'react-router-dom';
function Registy() {
  let [users,setusers] = useState(1)
  const [Nom, setnom] = useState('')
  const [Familly, setfam] = useState('')
  const [Mail, setmail] = useState('')
  const [Pwd, setpwd] = useState('')
  const [user, setuser] = useState('')
  const [Card, setCard] = useState('')
  const [solde, setsold] = useState(20)
  const [show, setshow] = useState('')
  const [prof,setprof] = useState("hidder")
  const navigate = useNavigate();
const WriteToDatabase=()=>{
  
  console.log(solde)
  const uiid=uid()
  //,`/${uiid}`
  set(ref(db,`${user}`),{
    Nom,
    Familly,
    Mail,
    user,
    Pwd,
    sold:solde,
   uiid,
   Card
    
  });
  //setnom('');
  //setfam("")
  //setpwd('')
  //setmail('')
  setusers(users++)
  setprof("displayer")
  setshow("hidder")
}
  return (
  <div>
    <div className={show}>
      <div className="registyFrom">
        <div className="img"> </div>
      <div className="registyIn">
    <label>Prenom</label>
    <input type="text" value={Nom} onChange={(e)=>setnom(e.target.value)}/>
    <label>Nom</label>
    <input type="text" value={Familly} onChange={(e)=>setfam(e.target.value)}/>
    <label>username</label>
    <input type="text" value={user} onChange={(e)=>setuser(e.target.value)}/>
    <label>mail</label>
    <input type="text" value={Mail} onChange={(e)=>setmail(e.target.value)}/>
    <label>carte</label>
    <input type="text" value={Card} onChange={(e)=>setCard(e.target.value)}/>
    <label>password</label>
    <input type="password"  value={Pwd} onChange={(e)=>setpwd(e.target.value)}/>
    <button onClick={WriteToDatabase}>submit</button>
    <button onClick={() => navigate("/")}>Log in</button>
    </div>
    </div>
    </div>
    <div className={prof}>
      <Profil usename={Nom} email={Mail} sold={solde}/>
    </div>
    
    
    </div>
  )
}

export default Registy