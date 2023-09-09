import './Trailer.sass'
import { X } from '@phosphor-icons/react'
import { useContext } from 'react'
import { TrailerContext } from '../../core/context'

interface Trailer {
    url: string
    isOpened: boolean
}

export const Trailer = ({ url, isOpened }: Trailer) => {
    const { trailer, setTrailer } = useContext(TrailerContext)

    const close = () => setTrailer({ ...trailer, key: '', isOpened: !trailer.isOpened })

    return (
        <dialog id="trailer-dialog" open={isOpened}>
            <button type="button" onClick={close}>
                <X color='white' weight='regular' size={24} />
            </button>
            <iframe src={url} title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
        </dialog>
    )
}