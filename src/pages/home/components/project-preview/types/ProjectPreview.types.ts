export type PreviewDataProps = {
    isReversed: boolean
    subtitle: string
    title: string
    paragraph: string | string[]
    button: LinkButtonProps
    image: number
}

export type PreviewMapping = {
    data: PreviewDataProps | PreviewDataProps[]
    }


export type LinkButtonProps = {
    entry: string
    label: string
    icon?: string
}
