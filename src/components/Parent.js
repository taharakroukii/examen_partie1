import React, { Component } from 'react'
import Enfant from './Enfant'


class Parent extends Component {
    state = {
        parentSommeParent: 0,
        parentSommeEnfant: 0,
        parentSommeTotal: 0,
    }

    handleForm = (event) => {
        this.setState({ [event.target.name]: event.target.value });
    }

    handleAdd1 = (nb) => {
        this.setState((state) => ({
            parentSommeParent : state.parentSommeParent + nb
        }))
    }

    handleAdd = () => {
        this.props.fonctionAddFromChildren(this.state.parentSommeParent, this.state.parentSommeEnfant)
    }


    handleAddParentSommeTotal = () => {
        this.setState({ parentSommeTotal: Number(this.state.parentSommeParent) + Number(this.state.parentSommeEnfant) });
    }






    render() {
        return (
            <div>

                <button onClick={() => this.handleAdd1(1)}> +1 Parent </button>
                <label>Parent somme Parent : </label>
                <input type="number" name="nombre1"  value={this.state.parentSommeParent} onChange={this.handleForm} />
                <label>Parent somme Enfant : </label>
                <input type="number" name="nombre2"  value={this.parentSommeEnfant} onChange={this.handleForm}/>
                <label>Parent somme Total : </label>
                <input type="number" name="nombre3"  value={this.state.parentSommeTotal} onChange={this.handleAddParentSommeTotal}/><br />

                <Enfant fonctionaddFromChildren={this.handleAddParentSommeTotal} > </Enfant>


                





            </div>
        );
    }
}

export default Parent;