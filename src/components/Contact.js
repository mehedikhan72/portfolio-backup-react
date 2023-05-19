import React, { forwardRef } from 'react'

function Contact(props) {
    return (
        <div ref={props.contactRef} className='m-5'>
            <p className='text-4 text-center px-5'>Interested in working with me?</p>
            {/* TODO: email link here */}
            <p className='text-3 text-center p-5'>Please email me at lopingcard@gmail.com</p>
        </div>
    )
}

export default forwardRef(Contact);
