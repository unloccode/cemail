import React from 'react';
import { FontAwesome } from '@fortawesome/react-fontawesome';
import { faSync } from '@fortawesome/free-solid-svg-icons';

export default props => 
<div className={`fadeIn ${props.spinning}`}>
    <FontAwesome icon={faSync} size={props.size} />
</div>