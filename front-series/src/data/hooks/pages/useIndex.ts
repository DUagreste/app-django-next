import { AxiosError } from 'axios';
import { useState, useEffect } from 'react';
import { Serie } from '../../@types/Series';
import { ApiService } from '../../services/ApiService';

export function useIndex(){
    const [listSeries, setListSeries] = useState<Serie[]>([]),
        [serieSelected, setSerieSelected] = useState<Serie | null>(null),
        [serieDeleted, setSerieDeleted] = useState<Serie | null>(null),
        [title, setTitle] = useState(''),
        [network, setNetwork] = useState(''),
        [cast, setCast] = useState(''),
        [genre, setGenre] = useState(''),
        [seasons, setSeasons] = useState(''),
        [episodes, setEpisodes] = useState(''),
        [rating, setRating] = useState(''),
        [photo, setPhoto] = useState(''),
        [message, setMessage] = useState('');


    useEffect(() => {
        ApiService.get('')
            .then((response) => {
                setListSeries(response.data)
            })
    },[])

    useEffect(() => {
        if(serieSelected === null){
            clearForm();
        }
    }, [serieSelected])

    useEffect(() => {
        if(serieDeleted === null){
        }
    }, [serieDeleted])

    function remove(){
            if(serieDeleted !== null){
                    ApiService.delete('/' + serieDeleted.id, {
                    })
                        .then(() => {
                            setSerieDeleted(null);
                            setMessage('Série deletada com sucesso!');
                        })
                        .catch((error: AxiosError<any>) => {
                            setMessage(error.response?.data.message);
                        })
            }
        }
    
    function edit(){
        if(serieSelected !== null){
                ApiService.put('/' + serieSelected.id, {
                    serie_id: serieSelected.id,
                    title,
                    network,
                    cast,
                    genre,
                    seasons,
                    episodes,
                    rating,
                    photo
                })
                    .then(() => {
                        setSerieSelected(null);
                        setMessage('Série editada com sucesso!');
                    })
                    .catch((error: AxiosError<any>) => {
                        setMessage(error.response?.data.message);
                    })
        }
    }

    function clearForm(){
        setTitle('');
        setNetwork('');
        setCast('');
        setGenre('');
        setSeasons('');
        setEpisodes('');
        setRating('');
        setPhoto('');
    }

    return{
        listSeries,
        edit,
        remove,
        serieSelected,
        serieDeleted,
        setSerieSelected,
        setSerieDeleted,
        title,
        network,
        cast,
        genre,
        seasons,
        episodes,
        rating,
        photo,
        message,
        setTitle,
        setNetwork,
        setCast,
        setGenre,
        setSeasons,
        setEpisodes,
        setRating,
        setPhoto,
        setMessage,
    };
}