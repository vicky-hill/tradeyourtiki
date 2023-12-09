import { useCallback } from 'react'
import { useSearchParams, useRouter, usePathname } from 'next/navigation'

export default function useQuery() {
    const router = useRouter()
    const pathname = usePathname()
    const searchParams = useSearchParams()

    const createQueryString = useCallback(
        (action, name, value) => {
            const params = new URLSearchParams(searchParams)

            if (action === 'add') {
                params.set(name, value)
            }

            if (action === 'remove') {
                params.delete(name)
            }

            return params.toString()

        },
        [searchParams]
    )


    /**
     * Get value for a param
     * @param {string} name 
     */
    const get = (name) => {
        return searchParams.get(name);
    }

    /**
     * Adds a query param to the url
     * @param {string} name 
     * @param {string} value 
     */
    const add = (name, value) => {
        router.push(pathname + '?' + createQueryString('add', name, value))
    }

    /**
     * Removes a query param from the url
     * @param {string} name 
     */
    const remove = (name) => {
        router.push(pathname + '?' + createQueryString('remove', name))
    }

    return {
        get,
        add,
        remove
    }
}


