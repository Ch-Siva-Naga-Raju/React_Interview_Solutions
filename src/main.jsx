import React from 'react';
import { createBrowserRouter, RouterProvider} from 'react-router-dom'
import {createRoot} from 'react-dom/client';
import {App} from './App';
import AddPokemon from './AddPokemon';
import { QueryClientProvider, QueryClient } from 'react-query';

const queryClient = new QueryClient();
const router = createBrowserRouter([
    {
        path: '/',
        element: <App/>
    },
    {
        path: '/add',
        element: <AddPokemon/>
    }
])
createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <QueryClientProvider client={queryClient}>
            <RouterProvider router={router}/>
        </QueryClientProvider>
    </React.StrictMode>
)