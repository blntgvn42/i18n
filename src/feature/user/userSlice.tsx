import {createSlice, PayloadAction} from "@reduxjs/toolkit"
import {User} from "../../ts/interface/User";
import {faker} from "@faker-js/faker";
import {UserLoginType, UserRegisterType} from "../../ts/type/User";

export interface UserState {
    users: User[],
    loggedInUser: User
}

const initialState: UserState = {
    users: [
        {
            userId: faker.datatype.uuid(), avatar: faker.image.avatar(),
            username: "blntgvn42", email: "bulentguven97@hotmail.com",
            password: "bulent1775"
        },
        {
            userId: faker.datatype.uuid(), avatar: faker.image.avatar(),
            username: faker.internet.userName(), email: faker.internet.email(),
            password: faker.internet.password()
        },
        {
            userId: faker.datatype.uuid(), avatar: faker.image.avatar(),
            username: faker.internet.userName(), email: faker.internet.email(),
            password: faker.internet.password()
        },
        {
            userId: faker.datatype.uuid(), avatar: faker.image.avatar(),
            username: faker.internet.userName(), email: faker.internet.email(),
            password: faker.internet.password()
        },
        {
            userId: faker.datatype.uuid(), avatar: faker.image.avatar(),
            username: faker.internet.userName(), email: faker.internet.email(),
            password: faker.internet.password()
        },
        {
            userId: faker.datatype.uuid(), avatar: faker.image.avatar(),
            username: faker.internet.userName(), email: faker.internet.email(),
            password: faker.internet.password()
        },
        {
            userId: faker.datatype.uuid(), avatar: faker.image.avatar(),
            username: faker.internet.userName(), email: faker.internet.email(),
            password: faker.internet.password()
        },
        {
            userId: faker.datatype.uuid(), avatar: faker.image.avatar(),
            username: faker.internet.userName(), email: faker.internet.email(),
            password: faker.internet.password()
        },
        {
            userId: faker.datatype.uuid(), avatar: faker.image.avatar(),
            username: faker.internet.userName(), email: faker.internet.email(),
            password: faker.internet.password()
        },
        {
            userId: faker.datatype.uuid(), avatar: faker.image.avatar(),
            username: faker.internet.userName(), email: faker.internet.email(),
            password: faker.internet.password()
        },
        {
            userId: faker.datatype.uuid(), avatar: faker.image.avatar(),
            username: faker.internet.userName(), email: faker.internet.email(),
            password: faker.internet.password()
        }
    ],
    loggedInUser: {} as User
}
export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        signIn: (state, action: PayloadAction<UserLoginType>) => {
            if (state.users.find(user => user.username === action.payload.username && user.password === action.payload.password)) {
                state.loggedInUser = {...state.users.find(user => user.username === action.payload.username && user.password === action.payload.password)} as User
            }
        },
        signUp: (state, action: PayloadAction<UserRegisterType>) => {
            if (state.users.find(user => user.username === action.payload.username || user.email === action.payload.email)) {
            } else {
                state.users = [...state.users, action.payload]
            }
        },
        signOut: (state) => {
            state.loggedInUser = {} as User
        }
    },
})

export const {signIn, signUp, signOut} = userSlice.actions

export default userSlice.reducer