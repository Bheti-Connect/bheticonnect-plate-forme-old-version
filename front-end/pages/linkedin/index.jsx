import { useRouter } from 'next/router';
import React from 'react';
import { useEffect } from 'react';

const index = () => {
    const router = useRouter();
    useEffect(() => {
        const search = new URLSearchParams(window.location.search);
        const getUser = async () => {
            const headers = {
                "Content-Type": "application/json",
                "Accept": "application/json",
                'Authorization': `Bearer ${search.get('token')}`
            };
            let response = await fetch(`https://bheti-connect.smirltech.com/api/user`, {
                method: 'GET',
                headers,
            });
            let data = await response.json();
            let user = {
                ...data,
                token: search.get('token'),
                token_type: 'Bearer',
            }
            localStorage.setItem('user-info', JSON.stringify(user));
            if (user.data.role == null) {
                router.push('/Etape-Suivante')
            } else if (user.data.role == 'investisseur') {
                router.push('/Investisseur/Accueil');
            } else if (user.data.role == 'entrepreneur') {
                router.push('/Entrepreneur/Accueil');
            } else if (user.data.role == 'administrateur') {
                router.push('/Administrateur/Accueil');
            }
        }
        getUser();
    }, [])
}

export default index;