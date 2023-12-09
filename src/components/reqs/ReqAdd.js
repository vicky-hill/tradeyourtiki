'use client'
import { useState, useRef, useEffect, startTransition } from 'react'
import classNames from 'classnames'
import { Type, Save } from 'react-feather'
import { addReq } from '@/actions/reqs'

const ReqAdd = ({ editMode, feature }) => {
    const [text, setText] = useState('');
    const [title, setTitle] = useState('');
    const [focused, setFocused] = useState(false);
    const [hasTitle, setHasTitle] = useState(false);

    const textarea = useRef();

    useEffect(() => {
        if (editMode) {
            textarea.current.focus();
        } else {
            setText("");
            setTitle("");
        }

    }, [editMode]);

    const getFormClasses = () => classNames('req__add relative', {
        'border-stone-500': focused
    });

    const getTopBarIconClasses = () => classNames('w-5 h-5 flex items-center justify-center rounded-sm cursor-pointer', {
        'bg-gray-200': hasTitle
    });

    const getSaveButtonClasses = () => classNames('transition-all py-1 px-2 rounded-md flex items-center text-white active:bg-blue-600', {
        'bg-blue-500': text
    })

    const onChange = (e) => {
        setText(e.target.value)
    }

    const onFocus = () => setFocused(true);

    const onBlur = (e) => {
        setFocused(false);
    }

    const adjustRows = () => {
        textarea.current.rows = Math.max(2, textarea.current.value.split('\n').length);
    }

    const toggleTitle = () => {
        setHasTitle(title => !title);
        setTitle('');
    }

    const onSubmit = () => {
        startTransition(async () => {
            await addReq({ text, title, featureID: feature });
        });

        setTitle('');
        setText('');
    }

    return (
        <div className='req__add-container'>
                {hasTitle && <input value={title} onChange={(e) => setTitle(e.target.value)} placeholder='Include a title' className='mb-3' />}

                <div className={getFormClasses()}>
                    <div className='bg-gray-50 px-4 py-2 flex'>
                        <div className={getTopBarIconClasses()} onClick={toggleTitle} title="Include a title">
                            <Type size={14} />
                        </div>
                    </div>

                    <textarea
                        ref={textarea}
                        name="text"
                        value={text}
                        onChange={onChange}
                        onInput={adjustRows}
                        onBlur={onBlur}
                        onFocus={onFocus}
                        rows={2}
                        spellCheck="false"
                        placeholder='Add requirement'
                    />

                    <div className='absolute right-4 bottom-3'>
                        <button disabled={!text} onClick={onSubmit} className={getSaveButtonClasses()}>
                            <span className='text-sm pr-2'>Add Req</span>
                            <Save size={16} color="white" />
                        </button>

                    </div>
                </div>
        </div>
    )
}

export default ReqAdd;
