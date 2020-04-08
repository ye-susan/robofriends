import React from 'react';

const Card = ({name, email, id}) => {
    {/*can also do: const {name, email, id} = props; */}
    return (
        <div className='bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5'>
            <img alt="robots" src={`https://robohash.org/${id}test?200x200`} /> 
            {/*using template strings to randomize our robot images*/}
            <div>
                <h2>{name}</h2> 
                <p>{email}</p>
                {/*without destructuring, can also do
                {props.name}, {props.email}...etc. */}
            </div>
        </div>
    );
}

export default Card;