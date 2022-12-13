import {WriteToDatabase} from '../backend/whrite';
import {Link} from'react-router-dom';
import{useState,useEffect} from 'react';
import Profil from './Profil'
export default function Test() {

const [user, setuser] = useState(null)
const [Nom, setnom] = useState('')
const [Familly, setfam] = useState('')
const [Mail, setmail] = useState('')
const [Pwd, setpwd] = useState('') 
const [prof,setprof] = useState("hidder")
const [show, setshow] = useState('')

function handleSubmit(e) {
  e.preventDefault();
  WriteToDatabase(user,Nom,Familly,Mail,Pwd)
  setprof("displayer")
  setshow("hidder")
}

  return (
    <div>
      <div className={show}>
      <label>Prenom</label>
    <input type="text" value={Nom} onChange={(e)=>setnom(e.target.value)}/>
    <label>Nom</label>
    <input type="text" value={Familly} onChange={(e)=>setfam(e.target.value)}/>
    <label>username</label>
    <input type="text" value={user} onChange={(e)=>setuser(e.target.value)}/>
    <label>mail</label>
    <input type="text" value={Mail} onChange={(e)=>setmail(e.target.value)}/>
    <label>password</label>
    <input type="password"  value={Pwd} onChange={(e)=>setpwd(e.target.value)}/>
    <button onClick={handleSubmit}>here</button>
    <div className={prof}>
    </div>
    <div className={prof}>
      <Profil usename={Nom} />
    </div>
    </div></div>
  )
}
