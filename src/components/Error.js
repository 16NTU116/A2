import React, {Component} from 'react';
import { Link } from "react-router-dom";


class Error extends Component {
    state = {

    }

    render() {
        
        return (
            <div>
            <Link to="/"><button>Home</button></Link>
            <h1 style={styles.h1}>404 Page</h1>
            <p style={styles.p}>Error this page Does not Exists.</p>
            </div>
        );
    }
}

export default Error;

const styles = {
    h1 : {
        width : "100%",
        height : 50,
    color : "red"
    }, 
    p : {
        width : "100%",
        height : 50,
    }
}