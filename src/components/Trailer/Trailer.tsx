import './Trailer.sass'
import { X } from '@phosphor-icons/react'

interface Trailer {
    url: string
    isOpened: boolean
    close: () => void
}

export const Trailer = ({ url, isOpened, close }: Trailer) => {
    return (
        <dialog id="trailer-dialog" open={isOpened}>
            <button type="button" onClick={close}>
                <X color='white' weight='regular' size={24} />
            </button>
            <iframe src={url} title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
        </dialog>
    )
}