import React, { Component } from "react";

class AddPerson extends Component {

    handleData() {
        console.log("");
    }

    render() {
        return (
            <div  style={putStyle.whole}>
                <input type="text" name="messageShow" value="Enter Task" readOnly  style={Object.assign({}, putStyle.inputField)} />
                <input type="text" name="writen" placeholder="Task Name" style={putStyle.inputField}/>
                <button style={putStyle.buttonField}>hl</button>
                <p>{this.props.location.state.persons}</p>
            </div>
        );
    }
}

export default AddPerson;

const putStyle = {
    inputField : {
        padding : "9px",
        border : "1px solid #CED4DA",
        marginTop : "8px",
        marginLeft : "15px",
        borderRadius : "4px",
        fontSize : "15px",
        ':focus' : {
            boxShadow : "0 0 5px #51cbee",
        }
    },
    buttonField : {
        backgroundColor : "#007BFF",
        fontSize : "15px",
        marginTop : "8px",
        marginLeft : "15px",
        borderRadius : "4px",
        padding : "12px 14px",
        color : "white",
        border : "none"
    }
}