import React, {useState} from 'react';

import Team from'./teamMembers/Team'
import './App.css';
import TeamList from './teamMembers/Teamlist';

function App() {
  const [teamMember, setTeamMember] = useState({
    name:'', 
    email:'', 
    role:''})
  const [team, setTeam] = useState([])
  const [editing, setEditing] = useState(false);
  
   

   const handleChange = event =>{
      setTeamMember({...teamMember, [event.target.name]: event.target.value})
      
   }
   const handleSubmit = (event) => {
      event.preventDefault(event)
      setTeam(oldTeam =>[...oldTeam,teamMember]);
      console.log(teamMember.name)
      console.log(teamMember.email)
      console.log(teamMember.role)
      setTeamMember({name:'', email: '', role:''})
      
    }

    const memberEdit =() =>{
      setEditing(true)
      setTeam({name: team.name, email: team.email,role: team.role})
    }

    const editUser =(name)=>{
      team.map(teams=>(teams.name === name ? editUser: team))
    }
    
    
  return (
    <div className="App">
      <Team handleChange={handleChange} memberToEdit={memberEdit} teamMember={teamMember} setTeamMember={setTeamMember} team={team} handleSubmit={handleSubmit} />
      <TeamList team={team}/>
    </div>
  );
}

export default App;
