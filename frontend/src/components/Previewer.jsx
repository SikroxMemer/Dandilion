function Previewer({src}) {
    return <div className="card w-96 bg-base-100 shadow-xl m-auto">
    <div className="card-body">
      <h2 className="card-title">Preview</h2>

      <audio controls>
        <source src={src}/>
      </audio>

      <div className="card-actions justify-center">
        
        <button className="btn btn-success">Download</button>

      </div>

    </div>
  </div>
}

export default Previewer;