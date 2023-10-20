import React, { Component } from 'react'


class Enfant extends Component {

    state = {
        enfantSommeParent: 0,
        enfantSommeEnfant: 0,
        enfantSommeTotal: 0
    }

    handleForm = (event) => {
        this.setState({ [event.target.name]: event.target.value });
    }


    handleAdd2 = (nb) => {
        this.setState((state) => ({
            enfantSommeEnfant : state.enfantSommeEnfant + nb
        }))
    }


    handleAddEnfantSommeTotal = () => {
        this.setState({ parentSommeTotal: Number(this.state.enfantSommeParent) + Number(this.state.enfantSommeEnfant) });
    }

    handleAdd3 = () => {
        console.log("handle add")
        this.props.fonctionAddFromChildren(this.state.enfantSommeParent, this.state.enfantSommeEnfant)
    }


    render() {

        return (
            <div>
                <button onClick={() => this.handleAdd2(2)}> +2 Enfant </button>
                <label>Enfant somme Parent : </label>
                <input type="number" name="nombre4"  value={this.state.enfantSommeParent} onChange={this.handleForm}  />
                <label>Enfant somme Enfant : </label>
                <input type="number" name="nombre5"  value={this.state.enfantSommeEnfant} onChange={this.handleForm}  />
                <label>Enfant somme Total : </label>
                <input type="number" name="nombre6"  value={this.state.enfantSommeTotal} onChange={this.handleAddEnfantSommeTotal}  />
            </div>
        )
    }
}

export default Enfant;