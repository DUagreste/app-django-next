import { useState, useEffect } from "react";
import { Serie } from "../../@types/Series";
import { ApiService } from "../../services/ApiService";


export function useDetail(){
    const[detailSeries, setDetailSeries] = useState<Serie[]>([]);

    useEffect(() => {
        ApiService.get('')
            .then((response) => {
                setDetailSeries(response.data)
            })
    },[])

    return {
        detailSeries
    }
}