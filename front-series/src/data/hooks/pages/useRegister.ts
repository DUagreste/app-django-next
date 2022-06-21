import { useState } from "react";
import { ApiService } from "../../services/ApiService";
import { AxiosError } from "axios";

export function useRegister(){
    const [title, setTitle] = useState(''),
        [network, setNetwork] = useState(''),
        [cast, setCast] = useState(''),
        [genre, setGenre] = useState(''),
        [seasons, setSeasons] = useState(''),
        [episodes, setEpisodes] = useState(''),
        [rating, setRating] = useState(''),
        [photo, setPhoto] = useState(''),
        [message, setMessage] = useState('');


    function register(){
        if(validateForm()){
            ApiService.post('', {
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
                    clean();
                    setMessage('Série cadastrada com sucesso!')
                })
                .catch((error: AxiosError<any>) => {
                    setMessage(error.response?.data.message);
                })
        } else {
            setMessage('Preencha todos os campos corretamente!')
        }
    }

    function validateForm(){
        return title.length > 0 && genre.length > 0 && photo.length > 0
    }

    function clean(){
        setTitle('');
        setNetwork('');
        setCast('');
        setGenre('');
        setSeasons('');
        setEpisodes('');
        setRating('');
        setPhoto('');
    }

    return {
        register,
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
    }
}