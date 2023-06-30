interface JobTypeInterface {
    id: number;
    name: string;
    value: number;
}

export const JOB_TYPE: Array<JobTypeInterface> = [
    {
        id: 0,
        name: 'シッター',
        value: 0,
    },
    {
        id: 1,
        name: 'クッカー',
        value: 1,
    },
    {
        id: 2,
        name: '両方',
        value: 2,
    }
]
