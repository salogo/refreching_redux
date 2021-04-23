import React, { Component } from "react";
import { connect } from "react-redux";
import updateMeat from "../actions/meatInvUpdate";

class MeatDept extends Component {
    increment = (operation, index) => {
        //console.log(operation, index);
        if (operation === "+") {

        } else if (operation === "-") {
            
        }
    }

    render() {

        const MeatInventory = this.props.meatData.map((item, i) => {
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
                <h1>The Meat food department!</h1>
                <ul>{MeatInventory}</ul>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        meatData: state.meat
    }
}
export default connect(mapStateToProps)(MeatDept);