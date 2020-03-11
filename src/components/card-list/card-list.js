import React from 'react'
import './card-list.css'
import Card from '../card/card'

export const CardList = ({monsters}) => (
        <div className='card-list'>
            {
            monsters.map((user, i) => {
              return (
                <Card
                  key={i}
                  id={monsters[i].id}
                  name={monsters[i].name}
                  email={monsters[i].email}
                  />
              );
            })
          }
        </div>
);