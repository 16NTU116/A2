import React, {Component} from "react";

class Header extends Component {

    state = {
        clock : new Date(),
        task : ""
    }

    setTime = () => {
        this.setState({clock : new Date()});
    }

    componentDidMount() {
        console.log("Clock", "componentDidMount");
        this.interval = setInterval(this.setTime, 500);
    }
    componentWillUnmount() {
        console.log("Clock", "componentWillUnmount");
        clearInterval(this.interval);
      }

    render() {
        return (
            <div  style={putStyle.whole}>
                <input type="text" name="messageShow" value="Enter Task" readOnly  style={Object.assign({}, putStyle.inputField)} />
                <input type="text" name="writen" value={this.state.task} placeholder="Task Name" style={putStyle.inputField} onChange={(e) => this.setState({task : e.target.value})}/>
                <button style={putStyle.buttonField} onClick={ () => {
                    if(this.state.task !== ""){
                        this.props.addTask(this.state.task);
                        this.setState({task : ""});
                    }
                    }
                }>Add Task</button>
                <button style={putStyle.restButtonField} onClick={() => this.props.resetAll()} >Reset Number of Persons</button>
                <p style={putStyle.timeClock}>{this.state.clock.toLocaleString()}</p>
            </div>
        )
    }
}

export default Header;

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
    },
    restButtonField : {
        backgroundColor : "#DC3545",
        fontSize : "12px",
        marginTop : "14px",
        marginLeft : "7%",
        borderRadius : "4px",
        padding : "8px 14px",
        color : "white",
        border : "none"
    },
    timeClock : {
        backgroundColor : "#dc3545",
        fontSize : "30px",
        fontWeight : "bold",
        display : "inline",
        float : "right",
        color : "white",
        marginTop : "4px",
        marginRight : "15px",
        borderRadius : "4px",
        padding : "5px 11px",
    },
    whole : {
        backgroundColor : "#F8F9FA",
        padding : "0px 0px 14px 0px"
    }
}