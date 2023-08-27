import './Trailer.sass'

interface Trailer {
    url: string
}

export const Trailer = ({ url }: Trailer) => {
    return (
        <dialog id="trailer-dialog" popover="auto">
            <button type="button">
                <i className="ph ph-x"></i>
            </button>
            <iframe width="560" height="315" src={url} title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
        </dialog>
    )
}