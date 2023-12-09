'use client'
import { useState, useEffect } from 'react';
import { Droppable, Draggable, DragDropContext } from 'react-beautiful-dnd'
import ReqItem from './ReqItem';
import ReqListHeader from './ReqListHeader'
import ReqAdd from './ReqAdd';
import { useReq } from '@/hooks';

const ReqList = ({ reqs, feature }) => {
    const { editMode } = useReq();
    const [isBrowser, setIsBrowser] = useState(false);
 
    useEffect(() => {
        setTimeout(() => {
            if (typeof window !== "undefined") {
                setIsBrowser(true);
            }
        }, 100)
    }, []);

    return (
        <div className='ml-10 w-[40rem]'>
            <ReqListHeader title={feature.name} />

            <DragDropContext>
                {
                    isBrowser ? (
                        <Droppable droppableId="reqs">
                            {(provided) => (
                                <div {...provided.droppableProps} ref={provided.innerRef} id="reqs" className='h-[78vh] overflow-scroll scrollbar-hidden'>
                                    {reqs.map((req, i) => (
                                        <Draggable draggableId={req._id} index={i} key={i}>
                                            {(provided) => (
                                                <ReqItem
                                                    provided={provided}
                                                    req={req}
                                                />
                                            )}
                                        </Draggable>
                                    ))}
                                    {provided.placeholder}
                                </div>
                            )}
                        </Droppable>
                    ) : null
                }
            </DragDropContext>
            { editMode && <ReqAdd editMode={editMode} feature={feature._id.toString()} /> } 
        </div>
    )
}

export default ReqList;
