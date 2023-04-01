import React from 'react'

const FontAwesom = ({ className, onClick }) => {
    return (
        <>
            <span onClick={onClick} className={`fa ${className} c-wrapper__form__field__user`}></span>
        </>
    )
}

export default FontAwesom
