import React from 'react';

const Charanteres = ({charanteres =[]}) =>{
    return(
        <div className='row'>
            {
                charanteres.map((item, index) => (
                    <div key={index} className='col mb-4'>
                        <div className='card' style={{ minWidth:"200px"}}>
                            <img src={item.image} alt=''/>
                            <div className='card-body'>
                                <h5 className='card-title'>{item.name}</h5>
                                <hr/>
                                <p>{item.species}</p>
                                <p>{item.location.name}</p>
                            </div>
                        </div>
                    </div>
                ))
            }

        </div>
    )
}

export default Charanteres;