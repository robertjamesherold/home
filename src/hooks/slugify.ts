export const slugify = ( value: string ): string =>
{
    const normalized = value
        .toLowerCase()
        .normalize( 'NFD' )
        .replace( /[\u0300-\u036f]/g, '' )
        .replace( /[^a-z0-9]+/g, '-' )
        .replace( /(^-|-$)+/g, '' )

    if ( !normalized )
    {
        return 'produkt'
    }

    return normalized
}

export const ensureUniqueSlug = (
    baseSlug: string,
    existingSlugs: Set<string>
): string =>
{
    if ( !existingSlugs.has( baseSlug ) )
    {
        return baseSlug
    }

    let counter = 2
    let candidate = `${ baseSlug }-${ counter }`

    while ( existingSlugs.has( candidate ) )
    {
        counter += 1
        candidate = `${ baseSlug }-${ counter }`
    }

    return candidate
}
