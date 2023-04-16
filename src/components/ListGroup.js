import axios from 'axios';
import React, { useEffect } from 'react'
import { useState } from 'react';
import Loader from './loader/Loader';

const ListGroup = () => {
    const [name, setName] = useState();
    const [selectedIndex, setSelectedIndex] = useState(0);
    const [isLoading, setLoading] = useState(false)

    const getItem = async () => {
        setLoading(true)
        const response = await axios.get('https://jsonplaceholder.typicode.com/users')
            .catch(error => console.log('Error', error));
        setLoading(false)
        setName(response?.data);
    }

    useEffect(() => {
        getItem();
    }, []);

    return (
        <div className='d-flex flex-column align-items-center'>
            <h2 className='w-50 my-2'>List Group</h2>
            <ul className="list-group w-100" style={{ maxWidth: '50%' }}>
                {isLoading ? <div className='text-center'> <Loader colors={['blue']} /> </div> :
                    name?.map((item, index) =>
                        <li
                            style={{ cursor: 'pointer' }}
                            onClick={() => setSelectedIndex(index)}
                            key={item?.id}
                            className={selectedIndex === index ? 'list-group-item active' : 'list-group-item'}>{item?.name}
                        </li>
                    )
                }
            </ul>
        </div>
    )
}

export default ListGroup;
