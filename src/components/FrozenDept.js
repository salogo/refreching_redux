import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import updateFrozen from "../actions/frozenInvUpdate";

class FrozenDept extends Component {

    increment = (operation, index) => {
        //console.log(operation, index);
       this.props.updateFrozen(operation, index);
       // this.props: will send it to dispatch and reduces
    }

    render() {
        
        const frozenInventory = this.props.frozenData.map((item, i) => {
            return (
                <div key={i}>
                     <li> {item.food}{item.quantity}</li>
                     <input type="button" onClick={()=> {this.increment("+",i)}} value="+" />
                     <input type="button" onClick={()=> {this.increment("-",i)}} value="-" />
                </div>
            )          
        })
        return (
            <div>
                <h1>The frozen food department!</h1>
                <ul>{frozenInventory}</ul>
            </div>
        )
    }
}
//console.log("THIS IS CONNECT", connect)
function mapStateToProps(state) {
    return {
        frozenData: state.frozen
    }
}
function mapDispatchToProps(dispatch){
    return bindActionCreators({
        updateFrozen: updateFrozen
        //import updateFrozen from "../actions/frozenInvUpdate";
    }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(FrozenDept);