import { useState } from "react";
import axios from 'axios'
import Previewer from "./Previewer";
import Error from "./Error";



function Form() {

  const [link, setUrl] = useState('')
  const [format, setFormat] = useState('')
  const [preview , setPreview] = useState([])


  function submit() {
    const url = "http://localhost:8080/data"
  
    const options = {
      link: link,
      type: format
    }
  
    
    try {
      axios.post(url, options , {

        onDownloadProgress : () => {
          return <span className="loading loading-spinner loading-xs"></span>
        }

      }).then(function (response) {
        
        console.log(response.data)
        setPreview([true , response.data.output])  
      
    
      }).catch(function (error) {
        return error
      })

    }
    catch (error) {
      return <Error error={error}/>
    }
  
  }

  return (
    <>

      <div className="card w-96 bg-base-100 shadow-xl m-auto">
        <form onSubmit={e => e.preventDefault()} method="POST" className="flex flex-col">
        <div className="card-body">
          <h2 className="card-title text-center">Youtube Convertion</h2>
          <input type="text" onChange={e => setUrl(e.target.value)} required={true} 
            placeholder="Paste URL here" className="input input-bordered input-sm w-full max-w-xs" />

          <div>
            <label className="label cursor-pointer">
              <span className="label-text">Audio Form</span> 
              <input value={'mp3'} onClick={() => setFormat('MP3')} 
                type="radio" name="radio-10" className="radio checked:bg-green-500" />
            </label>
          </div>

          <div>
            <label className="label cursor-pointer">
              <span className="label-text">Video Form</span> 
              <input value={'mp4'} onClick={() => setFormat('MP4')} 
                type="radio" name="radio-10" className="radio checked:bg-green-500"/>
            </label>
          </div>
  
          <div onClick={submit}  className="card-actions justify-center">
            <button className="btn btn-success">Convert and Download</button>
          </div>
        </div>
        </form>
      </div> 

      <div className="divider m-auto"></div>

      {
        preview[0] ? <Previewer src={preview[1]}/> : null
      }

    </>
  )
}


export default Form;