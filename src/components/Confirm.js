import React from 'react';
//import { Link } from 'react-router-dom';

export default class Confirm extends React.Component{
    componentDidMount = () => {
        const {id} = this.props.match.params;
        //console.log(id);
        fetch(`/api/user/${id}`)
        .then(res=>res.json())
        .catch(error=>console.log(error));
    }
    render(){
        return(
            <div className="container">
                <div className="row">
                    <div className="col-sm-12">
                        <div className="display-2 text-primary">Confirming Email...</div>
                    </div>
                </div>
            </div>
        );
    }
}