import { useEffect, useState, useContext } from 'react';
import { TokenStore } from '../utils/TokenStore';

const SERVER_IP = "http://localhost:8080"; //000.000.0.000

export const API = {
    fetchToken: () => {
        const [newToken, setNewToken] = useContext(TokenStore);
        const [isLoading, setIsLoading] = useState(true)
        useEffect(() => {
            fetch(`${SERVER_IP}/auth/token`)
                .then(response => response.text())
                .then(token => { setIsLoading(true), setNewToken(token) })
                .catch(error => console.log("error", error))
                .finally(() => setIsLoading(false))
        }, [])
        return isLoading;
    },

    fetchCreateAccount: (activeToken, nameText) => {
        fetch(`${SERVER_IP}/user/name`, {
            method: "POST",
            headers: {
                token: activeToken,
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(nameText)
        })
            .catch(error => console.log("error", error))
    },

    fetchCreateGame: (activeToken) => {
        fetch(`${SERVER_IP}/games/start`, {
            method: "GET",
            headers: {
                token: activeToken,
            }
        })
            .catch(error => console.log("error", error))
    },

    fetchJoinGame: async (activeToken, gameId) => {
        fetch(`${SERVER_IP}/games/join/${gameId}`, {
            headers: {
                token: activeToken
            }
        })
            .catch(error => console.log(error))
    },

    fetchMakeMove: (activeToken, sign) => {
        fetch(`${SERVER_IP}/games/move/${sign}`, {
            headers: {
                token: activeToken
            }
        })
            .catch(error => console.log(error))
    },

    fetchGetAvailableGames: async (activeToken) => {
        let response = fetch(`${SERVER_IP}/games`, {
            headers: {
                token: activeToken,
                'Content-Type': 'application/json',
            }
        })
            .catch(error => console.log(error))
        return response;
    },

    fetchGetActiveGame: async (activeToken) => {
        return fetch(`${SERVER_IP}/games/status`, {
            method: "GET",
            headers: {
                token: activeToken,
            }
        })
            .catch(error => console.log(error))
    },

    fetchUserGames: async (activeToken) => {
        return fetch(`${SERVER_IP}/user`, {
            method: "GET",
            headers: {
                token: activeToken,
                'Content-Type': 'application/json',
            }
        })
            .catch(error => console.log(error))
    },

    fetchDeleteGame: async (activeToken) => {
        fetch(`${SERVER_IP}/games/delete`, {
            method: "DELETE",
            headers: {
                token: activeToken,
            }
        })
            .catch(error => console.log(error))
    },
}
