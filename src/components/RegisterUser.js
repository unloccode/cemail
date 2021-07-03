import React from 'react';
import {withRouter} from 'react-router-dom';

class RegisterUser extends React.Component{
    emptyUser = {
        email: '',
        confirmed: false
    };
    constructor(props){
        super(props);
        this.state = {user: this.emptyUser};
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleChange(e){
        const value = e.target.value;
        const name = e.target.name;
        //match each form to each data field
        let user = {...this.state.user};
        user[name] = value;
        this.setState({user});
    }
    async handleSubmit(e){
        e.preventDefault();
        await fetch(`/api/user`, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(this.state.user)
        });
        this.props.history.push('/users');
    }
    render(){
        const {user} = this.state;
        return(
            <div className="container">
                <div className="row">
                    <div className="col-sm-12">
                        <form onSubmit={this.handleSubmit}>
                            <div className="form-group">
                                <label htmlFor="email">Email</label>
                                <input type="text" name="email" value={user.email} onChange={this.handleChange} className="form-control" />
                            </div>
                            <div className="form-group">
                                <button type="submit" className="btn btn-primary">Confirm</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}

export default withRouter(RegisterUser);