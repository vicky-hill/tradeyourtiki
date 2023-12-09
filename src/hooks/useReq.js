import { useQuery } from "@/hooks";

export default function useReq() {
    const query = useQuery();

    const startEdit = () => {
        query.add('mode', 'edit');
    }

    const endEdit = () => {
        query.remove('mode');
    }

    const editMode = query.get('mode') === 'edit';

    const isFocused = (id) => {
        return query.get('focus') === id.toString();
    }

    const focus = (id) => {
        query.add('focus', id)
    }

    const blur = () => {
        query.remove('focus');
    }
    

    return {
        editMode,
        startEdit,
        endEdit,
        isFocused,
        focus,
        blur
    }
}


