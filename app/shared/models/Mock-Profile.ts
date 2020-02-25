import { Rating } from "react-native-elements"

export type UserProfile = {
    name: string,
    friends?: number,
    rating?: number, 
    summary?: string,
}

export const MockProfile: UserProfile = {
    name: 'Daniel McGrath',
    friends: 5,
    rating: 4.5,
    summary: 'Huge Sports Guy'
}

export const mockUserGroup: UserProfile[] = [
    {
        name: 'Bob Smith',
        friends: 20,
        rating: 3,
        summary: 'Huge Sports Guy'
    },
    {
        name: 'Bob Smith',
        friends: 20,
        rating: 3,
        summary: 'Huge Sports Guy'
    },
    {
        name: 'Bob Smith',
        friends: 20,
        rating: 3,
        summary: 'Huge Sports Guy'
    },
    {
        name: 'Bob Smith',
        friends: 20,
        rating: 3,
        summary: 'Huge Sports Guy'
    }
]