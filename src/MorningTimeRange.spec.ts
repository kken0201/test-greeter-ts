import MorningTimeRange from './MorningTimeRange'

test.each([
    [new Date('2000-01-01T04:00:00.000'), false],
    [new Date('2000-01-01T05:00:00.000'), true],
    [new Date('2000-01-01T10:00:00.000'), true],
    [new Date('2000-01-01T12:00:00.000'), false],
    [new Date('2000-01-01T20:00:00.000'), false],
] as [Date, boolean][])('時間帯に含むかどうか', (d, expected) => {
    const morningTimeRange = new MorningTimeRange()
    expect(morningTimeRange.contains(d)).toEqual(expected)
})
