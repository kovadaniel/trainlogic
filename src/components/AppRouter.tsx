import { FC } from 'react'
import { Routes, Route } from 'react-router-dom'
import { rootRoutes } from '../router';

const AppRouter:FC = () => {
    return (
        <Routes>
            {rootRoutes.map(route => 
                <Route 
                    key={route.path}
                    element={route.component}
                    path={route.path}
                />
            )}
        </Routes>
    );
}
 
export default AppRouter;