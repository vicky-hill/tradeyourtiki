import { Edit, X, Save } from 'react-feather'
import { useReq } from '@/hooks'

export default function ReqEditBar({ req, handleEditRows, onSubmit }) {
    const { isFocused, focus, blur } = useReq();

    const handleFocus = () => {
        handleEditRows && handleEditRows();
        focus(req._id);
    }

    return isFocused(req._id) ? (
        <div className='flex'>
            <div onClick={blur} className='flex items-center cursor-pointer text-gray-400 hover:text-gray-500'>
                <X
                    className='transition-all cursor-pointer '
                    size={17}
                />
                <span className='text-xs mr-5'>Cancel</span>
            </div>
            <div onClick={onSubmit} className='flex items-center cursor-pointer text-blue-500 hover:text-blue-600' >
                <Save
                    className='transition-all cursor-pointer'
                    size={17}
                />
                <span className='text-xs ml-1'>Update</span>
            </div>
        </div>
    ) : (
        <Edit
            className='transition-all cursor-pointer text-gray-400'
            size={17}
            onClick={handleFocus}
        />
    )
}