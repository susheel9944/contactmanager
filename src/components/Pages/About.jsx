import React from 'react';

const About = (props) => {
    return(
        <>
            
            <h1>Susheel kumar</h1>
            <h2>{props.match.params.id}</h2>
        </>
    )
}
export default About;