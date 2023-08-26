// const STATUS = {
//     'Released': 'Estrenada'
// }

const STATUS_OPTIONS = new Map<string, string>([
    ['Released', 'Estrenada']
])

export const getMovieStatus = (status: string) => {
    return STATUS_OPTIONS.get(status)
}