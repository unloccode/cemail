import React from 'react';
import { notify } from 'react-notify-toast';
import Spinner from './Spinner.js';
import { APP_URL } from '../config';
import { Label } from '@material-ui/icons';

export default class Landing extends React.Component{
    state = {
        sendingEmail: false
    };

    onSubmit = e => {
        e.preventDefault();
        this.setState({sendingEmail: true});
        fetch(`$(API_URL)/email`, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({email: this.email.value})
        }).then(res=>res.json()
        ).then(data=>{
            this.setState({sendingEmail: false});
            notify.show(data.msg)
            this.form.reset()
        }).catch(error=>console.log(error));
    }
    render(){
        const { sendingEmail } = this.state;
        return(
            <form onSubmit={this.onSubmit} ref={form=>this.form = form}>
                <div>
                    <input
                        type="email"
                        name="email"
                        ref={input=>this.email = input}
                        required
                    />
                    <Label htmlFor="email">email</Label>
                </div>
                <div>
                    <button type="submit" className="btn" disabled={sendingEmail}>
                        {sendingEmail ? <Spinner size="lg" spinning="spinning"/> : "Let's Go!" }
                    </button>
                </div>
            </form>
        );
    }
}