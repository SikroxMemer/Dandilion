import { Component } from "react";
import Heading from "./components/Heading";
import Form from "./components/Form";


class App extends Component {
    constructor (props) {
        super(props)
    }
    render () {
        return <section>
            <Heading/>
            <Form/>
        </section>
    }
}

export default App
