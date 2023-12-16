import Form from "./components/Form"
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import Previewer from "./components/Previewer"


function App() {
  return (<>
    <nav>
      <Navbar/>
    </nav>
    
    <main className="flex flex-col w-full">
      <Form/>
      <div className="divider m-auto"></div> 
      
    </main>

    {/* <Footer/> */}
  </>)
}

export default App