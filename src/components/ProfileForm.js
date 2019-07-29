import React, { Component } from 'react';

class ProfielForm extends Component {
    state = {
        values: {
            username: ''
        }
    }
    updateValues = (event) => {
        //dispatch UPDATE_NAME action to store

    }
    render() {
        return ( 
            <div>
                <form style={{ padding: 20, border: '1px solid black', margin: 5 }}>
                    <div>
                        Name: <input type="text" name="username" value={this.props.username} onChange={( event ) => this.props.updateName( event.target.value ) } />
                    </div>
                    <div>
                        Name entered is {this.props.username}
                    </div>
                </form>
            </div>
        );
    }
}

export default ProfielForm;