const COLORS = ['primary', 'secondary', 'tertiary']

export const getRandomColor = () => {
    const index = Math.floor(Math.random() * 3)
    return COLORS[index]
}