/* eslint-disable react-hooks/exhaustive-deps */
import './MoviePagination.sass'
import { useState, useEffect } from 'react'
import { Pagination } from 'react-bootstrap'

interface MoviePagination {
    totalPages: number
    page: number
    setPage: (page: number) => void
}

export const MoviePagination = ({ totalPages, page, setPage }: MoviePagination) => {
    const [pages, setPages] = useState<number[]>([])
    const [isGoingForward, setIsGoingForward] = useState<boolean>(true);

    const pageCount = 7

    useEffect(() => {
        getPages()
        scrollTo({ top: 0, left: 0, behavior: 'smooth' })
    }, [totalPages, page, isGoingForward])

    const getPages = () => {
        const start = Math.max(isGoingForward ? page - 1 : page - pageCount, 0)
        const end = start + pageCount;

        if (page > pages[pages.length - 1]) setIsGoingForward(true)
        else if (page < pages[0]) setIsGoingForward(false)

        if (!isGoingForward && page >= pages[0]) return;
        if (isGoingForward && page <= pages[pages.length - 1]) return;

        const _pages = Array.from({ length: totalPages }, (_, i) => i + 1).slice(start, end);
        setPages(_pages);
    }

    const prevPage = () => setPage(page - 1)
    const nextPage = () => setPage(page + 1)
    const selectPage = (_page: number) => setPage(_page);

    return (
        <Pagination data-bs-theme='dark' size='lg'>
            <Pagination.First onClick={() => selectPage(1)} disabled={page === 1 || totalPages === 0} />
            <Pagination.Prev onClick={prevPage} disabled={page === 1 || totalPages === 0} />

            {pages.map(_page => (
                <Pagination.Item
                    key={_page}
                    active={_page === page}
                    onClick={() => selectPage(_page)}>
                    {_page}
                </Pagination.Item>
            ))}

            <Pagination.Next onClick={nextPage} disabled={page === totalPages || totalPages === 0} />
            <Pagination.Last onClick={() => selectPage(totalPages)} disabled={page === totalPages || totalPages === 0} />
        </Pagination>
    );

}