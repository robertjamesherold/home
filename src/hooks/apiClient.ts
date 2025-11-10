const DEFAULT_BASE_URL = 'http://localhost:4000'

const getBaseUrl = (): string =>
{
    if ( typeof import.meta !== 'undefined' && import.meta.env?.VITE_API_BASE_URL )
    {
        return import.meta.env.VITE_API_BASE_URL
    }
    return DEFAULT_BASE_URL
}

const buildUrl = ( path: string ): string =>
{
    const base = getBaseUrl().replace( /\/$/, '' )
    const normalizedPath = path.startsWith( '/' ) ? path : `/${ path }`
    return `${ base }${ normalizedPath }`
}

async function handleResponse<T> ( response: Response ): Promise<T>
{
    const contentType = response.headers.get( 'content-type' )
    const payload =
        contentType && contentType.includes( 'application/json' )
            ? await response.json()
            : await response.text()

    if ( !response.ok )
    {
        const message = typeof payload === 'string' ? payload : payload?.message
        throw new Error( message || 'API request failed' )
    }

    return payload as T
}

export const apiClient = {
    get: async <T>( path: string ) =>
    {
        const response = await fetch( buildUrl( path ), {
            method: 'GET',
            headers: {
                Accept: 'application/json',
            },
        } )
        return handleResponse<T>( response )
    },
    post: async <T>( path: string, body: unknown ) =>
    {
        const response = await fetch( buildUrl( path ), {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                Accept: 'application/json',
            },
            body: JSON.stringify( body ),
        } )
        return handleResponse<T>( response )
    },
}

export type ApiClient = typeof apiClient
