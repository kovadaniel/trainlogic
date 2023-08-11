import Trains from '../pages/Trains'
import SingleTrain from '../pages/SingleTrain'
import {Navigate} from 'react-router-dom'

export const rootRoutes = [
    {path: '/trains', component: <Trains/>, },
    {path: '/train/:name', component: <SingleTrain/>, },
    {path: '/*', component: <Navigate to="/trains" replace/>, }
]