import { Component } from "react";

class Form extends Component {
    constructor (props) {
        super(props)

        this.state = {input : '' , type : '' , media_type : ''}

        this.input_handler = this.input_handler.bind(this)
    }

    /**
     * 
     * @param {String} value 
     */
    input_handler(value) {
        const spotify_regex = /^https:\/\/open.spotify.com\/.*/;
        const youtube_regex = /^(https:\/\/www.|www.)youtube.com\/.*/;

        if (value.match(spotify_regex)) {
            
        }
        else if (value.match(youtube_regex)) {

        }
        else {

        }

        this.setState({input : value})
        
    }

    while_request() {

    }

    request() {

    }

    render() {
        return <div className="card w-96 bg-base-100 shadow-xl m-auto">
            <div className="card-body">
                <p>Paste or type a valid Spotify or Youtube URL</p>

                <input 
                    onChange={(e) => {this.input_handler(e.target.value)}} 
                    type="text" 
                    placeholder="Type here" 
                    className="input input-bordered input-sm w-full max-w-xs" 
                />

                <select className="select select-bordered select-sm w-full max-w-xs">
                        <option disabled selected>Media Type</option>
                        <option>MP3</option>
                        <option>MP4</option>
                </select>

                <div className="card-actions justify-center">
                    <button className="btn btn-outline btn-success">
                        Download
                    </button>
                </div>
            </div>
      </div>
    }
}

export default Form;