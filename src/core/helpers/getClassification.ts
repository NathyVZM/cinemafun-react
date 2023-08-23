const CLASSIFICATIONS: { [key: string]: string[] } = {
    'friendly': ['A', 'PG', '12'],
    'teen': ['PG-13', '16']
}

export const getClassificationClass = (classification: string) => {
    for (const _classification in CLASSIFICATIONS) {
        if (CLASSIFICATIONS[_classification].includes(classification)) return _classification
    }

    return 'adult'
}