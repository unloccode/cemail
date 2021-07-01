import React from 'react';
import { Link } from 'react-router-dom';
import { notify } from 'react-notify-toast';
import Spinner from './Spinner.js';
import { API_URL } from '../config';

export default class Confirm extends React.Component{
    state = {
        confirming: true
    };
    componentDidMount = () => {
        const { id } = this.props.match.params;
        fetch(`$(API_URL)/email/confirm/${id}`).then(res=>res.json())
        .then(data=>{
            this.setState({confirm: false});
            notify.show(data.msg);
        }).catch(error=>console.log(error));
    }
    render = () => <div className="confirm">
        {this.state.confirming ? <Spinner size="8x" spinning={'spinning'} /> : <Link to='/'><Spinner size="8x" spinning={''} /></Link>}
    </div>
}