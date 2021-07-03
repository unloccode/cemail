import React from 'react';

import AppNavbar from './AppNavbar';
import RegisterUser from './RegisterUser';

class Home extends React.Component{
    render(){
        return(
            <div className="container">
                <div className="row">
                    <div className="col-sm-12">
                        <AppNavbar/>
                        <RegisterUser/>
                    </div>
                </div>
            </div>
        );
    }
}

export default Home;