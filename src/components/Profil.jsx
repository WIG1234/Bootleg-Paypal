import { getDatabase, ref, onValue,update, remove} from "firebase/database";
import { useNavigate } from 'react-router-dom';
import{useState} from'react';
//import {bill} from './calculate'

function Profil({usename,email,sold}) {
  let [Client, setClient] = useState(null)
  const [acte, setacte] = useState(false)
  let [solde, setsolde] = useState()
  let [pay, setpay] = useState()
  let [ClientMoney, setClientMoney] = useState(0)
  const [actorMoney, setactorMoney] = useState(1)
  const [first, setfirst] = useState(sold)
  const [Send, setSend] = useState(false)
  const [use, setuse] = useState(usename)
  const navigate = useNavigate();
    //let pay=data[Client].sold;
    //setpay(data[Client].sold)
   
  function refreshPage() {
    navigate("/")
    window.location.reload(false);
    
  }
  const db = getDatabase();
    const starCountRef = ref(db);
  function handleEvent(e){
    e.preventDefault();
    if(Client){ 
     
  
 
    setsolde(sold)
    onValue(starCountRef, (snapshot) => {
     
      let data = snapshot.val();
      if(data[usename].sold>=pay){ 
      let i=data[usename].sold-parseInt(pay)
      console.log(i)
      if(i<0){
        setactorMoney(0)
      }
      else{ 
      setactorMoney(i)
    }
      
      let j=data[Client].sold+parseInt(pay)
     console.log("client:",Client)
      setClientMoney(j)
      setacte(true)
     setpay('')
    

     
   
     } })
  }


      
    

      
  }
  if(acte){ 
    console.log(use)
    update(ref(db,`/${use}`),{
      sold: actorMoney
      
     });
    console.log(Client)
  update(ref(db,`/${Client}`),{
    sold: ClientMoney
    
   });
   console.log(actorMoney)
 
   setSend(true)
   setacte(false)
   setfirst(actorMoney)
  }
  
     //emailjs.sendForm('gmail', 'template_0yandlg', form.current, 'nCztlgth2zeUJDplC')
      //.then((result) => {
        //  console.log(result.text);
      //}, (error) => {
        //  console.log(error.text);
      //});
      
  function deleteUser(e){
    console.log(usename)
    remove(ref(db,`/${usename}`))
    navigate("/")
    window.location.reload(false);
    e.preventDefault();
  }
  return (
    <div className='ProfilMain'>
      
      
      <div className='middle'>
        
        search for transaction:
        <input placeholder='user' value={Client} onChange={(e)=>setClient(e.target.value)}></input>
         montant:
         <input placeholder='money' value={pay} onChange={(e)=>setpay(e.target.value)}></input>
        <button onClick={handleEvent}>give</button>
        {Send && <h2 style={{color:"green"}}>DONE</h2>}
        
        </div>
       
      <div className='ProfilInfo'>
       <span> Username: {usename}</span>
       <span> Gmail: {email}</span>
       <span>solde: {first} token</span>
        
    
       <button  className='n'onClick={refreshPage}>disconnect  </button>
       <button  className='n'onClick={deleteUser}>delete  </button>
    </div>
    </div>
    
  )
}

export default Profil