'use client';

import { useState, useRef, startTransition } from 'react'
import classNames from 'classnames'
import ReqEditBar from './ReqEditBar'
import { useReq } from '@/hooks'
import ReqEdit from './ReqEdit'
import { changeReq } from '@/actions/reqs';

const ReqItem = ({ req, provided }) => {
    const { editMode, isFocused } = useReq();
    const focused = isFocused(req._id);

    const [text, setText] = useState(req.text);
    const [rows, setRows] = useState(null);
    const container = useRef(null);

    const getClasses = id => classNames('req bg-white', {
        'req__edit': editMode,
        'req__focused': focused
    });

    const handleEditRows = () => {
        if (!rows) {
            const textHeight = container.current?.offsetHeight;
            const estimatedRowHeight = 27;

            const numberOfRows = Math.ceil(textHeight / estimatedRowHeight);

            setRows(numberOfRows);
        }
    }


    const onSubmit = () => {
        startTransition(async () => {
            await changeReq(req._id, { text })
        });
    }

    return (
        <div ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps} className={getClasses(req._id.toString())} >
            <div className='flex justify-between' >
                <p className='req__key'>{req.key}</p>

                {editMode && <ReqEditBar handleEditRows={handleEditRows} req={req} onSubmit={onSubmit} />}

            </div>
            <div ref={container}>
                {
                    focused ?
                        <ReqEdit
                            req={req}
                            rows={rows}
                            value={text}
                            setValue={setText}
                        /> :
                        req.text.split('\n').map((text, i) => <p key={i} className='mb-3'>{text}</p>)
                }
            </div>

        </div>
    )
}

export default ReqItem;
