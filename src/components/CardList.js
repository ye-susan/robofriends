import React from 'react';
import Card from './Card';

const CardList = ({ robots }) => {
    // THIS IS ONE WAY TO DO IT
    // const cardArray = robots.map((user, i) => {
    //     return <Card key={i} id ={robots[i].id} name={robots[i].name} email={robots[i].email} />
    // })
    // return (
    //     <div>
    //         {cardArray}
    //     </div>
    // );
    

    //ANOTHER WAY TO APPROACH
    return(
        <div>
            {robots.map((user, i) => {
                return (
                    <Card
                        key={i}
                        id={robots[i].id}
                        name={robots[i].name}
                        email={robots[i].email}
                    />
                );
            })
        }
        </div>
    );
}

export default CardList;