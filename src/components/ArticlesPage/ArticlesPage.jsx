import React from 'react'
import "./ArticlesPage.scss"

export default function ArticlesPage(props) {
  return (

     <div className="card">
     
         <h1>{props.title}</h1>
         <p>{props.description}</p>
       </div>
      
       

    
  )
}
