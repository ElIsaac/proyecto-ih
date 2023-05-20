import React, { createContext, useState, useEffect } from 'react';

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
    const [users, setUsers] = useState([]);
    const [products, setProducts] = useState([]);
    const [updateUsersFlag, setUpdateUsersFlag] = useState(false);
    const [updateProductsFlag, setUpdateProductsFlag] = useState(false);


    useEffect(() => {
        const getUsers = async () => {
            try {
                const response = await fetch('https://proyecto-ihc.fly.dev/usuarios/');
                const data = await response.json();
                setUsers(data);
            } catch (error) {
                console.error('Error al obtener los users:', error);
            }
        };

        getUsers();
    }, [updateUsersFlag]);

    useEffect(() => {
        const getProducts = async () => {
            try {
                const response = await fetch('https://proyecto-ihc.fly.dev/productos/');
                const data = await response.json();
                setProducts(data);
            } catch (error) {
                console.error('Error al obtener los prods:', error);
            }
        };

        getProducts();
    }, [updateProductsFlag]);

    const updateUsers = () => {
        setUpdateUsersFlag(!updateUsersFlag);
    };

    const updateProducts = () => {
        setUpdateProductsFlag(!updateProductsFlag);
    };

    return (
        <AppContext.Provider value={{ users, products, updateUsers, updateProducts }}>
            {children}
        </AppContext.Provider>
    );
};
