import React from 'react';

const Modal = ({ openModal, closeModal }) => {
    return (
        <>
            {openModal && (
                <div className='c-modal' onClick={closeModal}>
                    <div className='c-modal__content' onClick={(e) => e.stopPropagation()}>
                        <div className="mb-3">
                            <label for="exampleFormControlInput1" className="form-label">Email address</label>
                            <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com" />
                        </div>
                        <div className="mb-3">
                            <label for="exampleFormControlTextarea1" className="form-label">Example textarea</label>
                            <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                        </div>
                        <button className='c-modal__close-btn' onClick={closeModal}>x</button>
                    </div>
                </div>
            )}
        </>
    )
}

export default Modal;
