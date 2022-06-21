import { Box, Button } from '@mui/material'
import {
    ListStyled,
    ListItem,
    Photo,
    Information,
    Description,
    Name,
} from './list.style'
import { Serie } from '../../../data/@types/Series'
import { TextService } from '../../../data/services/TextService'
import React from 'react';


interface ListProps {
    series: Serie[];
    onSelect: (serie: Serie) => void;
    onDeleted: (serie: Serie) => void;
}

export default function List(props: ListProps) {
    const maximumSizeText = 200;

    return (
        <ListStyled>
            {props.series.map(serie => (
            <ListItem key={serie.id}>
            <Photo src={serie.photo} alt={serie.title} />
                <Information>
                    <Name>{serie.title}</Name>
                    <Description>
                        Emissora: <strong>{TextService.limitText(serie.network, maximumSizeText)}</strong>
                    </Description>
                    <Description>
                        Nota: <strong>{serie.rating}</strong>
                    </Description>
                    <Box sx={{ '& button': { mx: 2 } }}>
                    <div>
                        <Button
                            variant={'contained'}   
                            color={"primary"}
                            size={"large"}
                            onClick = {() => props.onSelect(serie)}
                        >
                        Editar
                        </Button>
                        <Button
                            variant="outlined"
                            size={"large"}
                            onClick = {() => props.onDeleted(serie)}
                        >
                        Delete
                        </Button>
                    </div>
                    </Box>
                </Information>
            </ListItem>
            ))}
        </ListStyled>
    )
}