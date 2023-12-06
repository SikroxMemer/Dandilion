import { useState } from "react";
import axios from 'axios'

function Form() {
    const [example , setExample] = useState('')

    function submit() {
        const url = "http://localhost:8080/data"
    
        const options = {
          link : example
        }
    
        axios.post(url , options).then(function(response) {
          console.log(response.data)
        }).catch(function(error) {
          console.log(error)
        })
      
      }
    
      return (
        <>
           <form onSubmit={e => e.preventDefault()} method="POST">

              <input onChange={e => setExample(e.target.value)} type="text"/>
              <input onChange={e => setExample(e.target.value)} type="text"/>

              <input type="submit" onClick={submit} value={"try !"}/>
          </form>
        </>
      )
}