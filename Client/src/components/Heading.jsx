import { Component } from "react"
import Spotify from "../assets/Spotify.svg"
import Youtube from "../assets/Youtube.svg"
import Apple from "../assets/Apple.svg"


class Heading extends Component {
    constructor (props) {
        super(props)
    }
    render() {
        return <section>
            <div className="flex m-auto p-5 justify-center">
                <img src={Spotify}/>
                
                <img src={Youtube}/>
            </div>
        </section>
    }
}

export default Heading;