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
                const existingAddedParam = params.get(name);

                if (existingAddedParam) {
                    const values = [...existingAddedParam.split(','), value];
                    const queryString = `${name}=${values.join(',')}`;

                    return updateQueryParams(name, queryString);

                } else {
                    params.set(name, value)
                }
            }


            if (action === 'remove') {
                if (name && value) {
                    const paramValues = params.getAll(name).toString().split(',').filter(v => v !== value);

                    if (!paramValues.length) {
                        params.delete(name);
                    } else {
                        return updateQueryParams(name, `${name}=${paramValues.join(',')}`);
                    }

                } else {
                    const allParamValues = Array.from(params.entries()).map(entry => entry[1].split(',')).flat();

                    if (allParamValues.includes(name)) {
                        for (const [key, value] of params.entries()) {
                            if (value.split(',').includes(name)) {
                                const updatedQueryValues = value.split(',').filter(value => value !== name);

                                if (!updatedQueryValues.length) {
                                    params.delete(key);

                                } else {
                                    return updateQueryParams(key, `${key}=${updatedQueryValues.join(',')}`);
                                }
                            }
                        }

                    } else {
                        params.delete(name);
                    }
                }
            }

            if (action === 'replace') {
                params.set(name, value)
            }

            return params.toString().replace(/%2C/g, ',')

        },
        [searchParams]
    )

    const updateQueryParams = (name, params) => {
        const existingParams = searchParams.toString().replace(/%2C/g, ',').split('&');

        if (existingParams.length > 1) {
            const updatedParamIndex = existingParams.findIndex(value => value.startsWith(name));
            existingParams.splice(updatedParamIndex, 1, params);

            return existingParams.join('&');
        } else {
            return params;
        }
    }

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
    const remove = (name, value) => {
        router.push(pathname + '?' + createQueryString('remove', name, value))
    }

    /**
     * Removes a query param from the url
     * @param {string} name 
     */
    const replace = (name, value) => {
        router.push(pathname + '?' + createQueryString('replace', name, value))
    }

    const path = pathname;

    return {
        get,
        add,
        remove,
        replace,
        path
    }
}


