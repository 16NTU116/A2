import React,{Component} from "react";
import { withRouter } from "react-router-dom";

class Body extends Component {

    constructor(props) {
        super(props);

        this.navigate = this.navigate.bind(this);
        this.navigate = this.navigate.bind(this);
    }

    state = {
        task : "",
        enabled : false,
        persons : ["eiehi", "Jiciei"]
    };

    edit = () => {
        if(this.state.enabled)
        {
            console.log(this.props.tasks, this.state.task);
            this.props.editTask(this.props.tasks, this.state.task);
        }
        this.setState({task : this.props.tasks, enabled : !this.state.enabled});
    }

    delete = (id) => {
        console.log(id);
        console.log(this.props.tasks);
        this.props.deleteTask(id);
        console.log(this.props.tasks);
    }

    navigate() { this.props.history.push('/addperson', {persons : this.state.persons}) }
    
    // handleChange(person) {
    //     this.setState((prevState) => ({persons : prevState.persons.concat(person)}))
    // }

    persons = () => {
        const { value } = this.props.counter;
        return value === 0 ? "Zero" : value;
    }

    render() {
        return (
            <div style={putStyles.container}>
                <button style={putStyles.button} onClick={() => this.props.increment(this.props.counter)}>+</button>
                <button style={putStyles.button} onClick={() => this.props.decrement(this.props.counter)}>-</button>
                <p style={Object.assign(putStyles.p) }>Persons <span>{this.persons()}</span></p>
                <div>
                    {
                        this.state.enabled === true ?
                        <input style={putStyles.inputField} value={this.state.task} type="text" name="edit" size="60" onChange={(e) => this.setState({task : e.target.value})} /> 
                        : <span style={putStyles.span}>{this.props.tasks}</span>
                    }
                </div>
                <button style={putStyles.editButton} onClick={() => this.edit()}>{this.state.enabled === false ? "edit" : "save"}</button>
                <button style={putStyles.deleteButton} onClick={() => this.delete(this.props.index)}>Delete</button>
                <button
                    style={putStyles.deleteButton}
                      type='button'
                      onClick={ this.navigate }
                    >
                      View
                    </button>
            </div>
        )
    }
}

export default withRouter(Body);

const putStyles = {
    container : {
        display : "flex",
        alignItems: "center"
    },

    button : {
        padding : "8px 10px",
        backgroundColor : "#6C757D",
        border : "none",
        color : "white",
        borderRadius : "4px"
    },
    editButton : {
        padding : "8px 10px",
        backgroundColor : "#17A2B8",
        border : "none",
        color : "white",
        borderRadius : "4px",
        marginLeft : "6px"
    },
    deleteButton : {
        padding : "8px 10px",
        backgroundColor : "#DC3545",
        border : "none",
        color : "white",
        borderRadius : "4px",
        marginLeft : "14px"
    },
    p : {
        fontSize : "12px",
        fontWeight : "650",
        borderRadius : "4px",
        backgroundColor : "#FFC107",
        paddingLeft : "14px",
        paddingRight : "14px",
        paddingTop : "1px",
        paddingBottom : "1px",
        marginLeft : "6px"
    },
    span : {
        fontSize : "15px",
        marginLeft : "6px"
    },
    inputField : {
        padding : "5px 0px",
        fontSize : "15px",
        marginLeft : "6px",
        ':focus' : {
            boxShadow : "0 0 5px #51cbee",
        }
    }
};