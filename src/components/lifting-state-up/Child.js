import React from 'react'

const Child = ({ customClass, setValue }) => {
    const { inputClass, parentClass } = customClass;

    return (
        <div className={parentClass}>
            <p>Child Component</p>
            <input
                className={inputClass}
                onChange={(e) => setValue(e.target.value)}
                placeholder='write you value here'
            />
        </div>
    )
}

export default Child
