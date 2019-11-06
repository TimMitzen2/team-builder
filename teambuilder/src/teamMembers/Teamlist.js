import React from 'react';
//    useEffect=(()=>{
//      const [team, teamMember] = useEffect(memberToEdit 
//       || {name: '', email:'', role:''})
//   }) 


const TeamList = ({team, handleEdit})=>{
 return(
    <div onSubmit={event =>handleEdit(event)}>
       {team.map((teams,index) =>(
             <div key={index}>
             <h1>{teams.name}<button>Edit</button></h1>
             <h2>{teams.email}<button>Edit</button></h2>
             <h3>{teams.role}<button>Edit</button></h3>
             </div>
          )
       )}
    </div>

 );
};


export default TeamList;