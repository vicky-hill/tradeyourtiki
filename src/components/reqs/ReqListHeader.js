import { Edit3, XSquare } from 'react-feather'
import { useReq } from '@/hooks'

export default function ReqListHeader({ title }) {    
    const { editMode, startEdit, endEdit } = useReq();
   
    return (
        <div className='flex justify-between'>
            <h1 className='text-xl font-semibold mb-5'>{title}</h1>
            {
                editMode ? (
                    <div onClick={endEdit} className='flex items-center justify-center h-10 font-bold transition-all text-xs text-blue-500 bg-blue-50  px-4 rounded-md cursor-pointer'>
                        <XSquare className='mr-1' size={17} />
                        Close Edit
                    </div>
                ) : (
                    <div onClick={startEdit} className='transition-all cursor-pointer text-gray-300 flex items-center text-xs pr-5'>
                        <Edit3 size={17} />
                    </div>
                )
            }
        </div>
    )
}