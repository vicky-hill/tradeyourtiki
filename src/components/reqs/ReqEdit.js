'use client';

import { useRef, useEffect } from 'react'

const ReqEdit = ({ rows = 2, value, setValue }) => {

    const input = useRef();

    useEffect(() => {
        if (input) {
            input.current.focus();
            input.current.setSelectionRange(value.length, value.length);
        } 

    }, [input])

    const onChange = (e) => {
        setValue(e.target.value)
    }

    const adjustRows = () => {
        input.current.rows = Math.max(rows, input.current.value.split('\n').length + rows - 1);
    }

    return (
        <textarea
            ref={input}
            className='w-full outline-none '
            value={value}
            onChange={onChange}
            onInput={adjustRows}
            rows={rows}
        />
    )
}

export default ReqEdit;
