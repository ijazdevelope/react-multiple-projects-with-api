import React, { useState } from 'react'
import Child from './Child'
import '../../scss/lifting-state-up/lifting-state-up.scss'

const LiftingStateUp = () => {
    const [value, setValue] = useState('');

    const myStyles = {
        inputClass: 'c-state__wrapper__field',
        parentClass: 'c-state__wrapper__child',
    }

    return (
        <div className='c-state'>
            <h2>Lifting State Up</h2>
            <section className='c-state__wrapper'>
                <div>
                    <p>Parent Component</p>
                    <input
                        className='c-state__wrapper__field'
                        value={value}
                        placeholder='get value from child component'
                    />
                </div>
                <Child
                    setValue={setValue}
                    customClass={myStyles}
                />
            </section>

        </div>
    )
}

export default LiftingStateUp
