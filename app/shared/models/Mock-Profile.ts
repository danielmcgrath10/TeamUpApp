
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