import React, {useEffect, useState}from 'react';


const Team = ({handleChange,handleSubmit, teamMember}) => {
  
//    useEffect=(()=>{
//      const [team, teamMember] = useEffect(memberToEdit 
//       || {name: '', email:'', role:''})
//   }) 

   

   return (
      <div>
         <form onSubmit={event=>handleSubmit(event)}>
            <label>
               Name:
               <input type='text'
               name='name'
               value={teamMember.name}
               onChange={event=>handleChange(event)}/>
            </label>
            <label>
               Email:
               <input type='text'
               name='email'
               value={teamMember.email}
               onChange={event=>handleChange(event)}/>
            </label>
            <label>
               Role:
               <input type='text'
               name='role'
                value={teamMember.role}
               onChange={event=>handleChange(event)}/>
            </label>
            <button type='submit'>Submit</button>
       
            
         </form>
      </div>
   )
}

export default Team
