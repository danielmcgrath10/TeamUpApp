export type Group = {
    userID: string,
    active: boolean,
    region: {
        lat: number,
        lon: number,
        latDelta: number,
        lonDelta: number,
    },
    skillLevel?: string,
    openSpots: number,
    playingCurrently: string[]
}