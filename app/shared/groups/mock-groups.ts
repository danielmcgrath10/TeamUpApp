import { Group } from "./group";

export default function getMockList(): Group[] {
    return ([
        {
            userID: '1a2b3c4d',
            active: true,
            region: {
                lat: 25,
                lon: 24,
                latDelta: 1,
                lonDelta: 1,
            },
            skillLevel: 'Intermediate',
            openSpots: 5,
            playingCurrently: [],
            message: '',    
        }
    ])
}