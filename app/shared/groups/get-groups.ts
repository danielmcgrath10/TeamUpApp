import { Group } from "./group";

//function to export list of groups from firestore
export function getGroupsFromFirestore(): Group[]
{
    return ([
        {
            userID: '1a2b3c4d',
            gameID: '234n',
            active: true,
            sport: 'hockey',
            region: {
                lat: 25,
                lon: 24,
                latDelta: 1,
                lonDelta: 1,
            },
            skillLevel: 'intermediate',
            openSpots: 5,
            playingCurrently: [],
            message: '',    
        }
    ])



}