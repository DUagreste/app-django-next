import { NextPage } from "next";
import Title from "../ui/components/title/title";
import { Paper, Table,
        TableContainer,
        TableHead,
        TableRow,
        TableCell,
        TableBody, 
} from "@mui/material";
import { useDetail } from '../data/hooks/pages/useDetail'


const Detail: NextPage = () => {
    const { detailSeries } = useDetail();
    return (
        <>
            <Title
                title={'Registro de séries'}
                subtitle={'Informações detalhadas'}
            />
            <TableContainer 
                component={Paper}
                sx={{maxWidth: 1600,
                    mx: 'auto', 
                    p:{ xs: 3, md: 5},
                    border: 2,
                }}
            >
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell sx={{ fontSize: 19 }}>Série</TableCell>
                            <TableCell sx={{ fontSize: 19 }}>Emissora</TableCell>
                            <TableCell sx={{ fontSize: 19 }}>Elenco</TableCell>
                            <TableCell sx={{ fontSize: 19 }}>Gêneros</TableCell>
                            <TableCell sx={{ fontSize: 19 }}>N° Temporadas</TableCell>
                            <TableCell sx={{ fontSize: 19 }}>N° Episódios</TableCell>
                            <TableCell sx={{ fontSize: 19 }}>Nota</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {detailSeries.map((serie) => (
                            <TableRow key={serie.id} >
                                <TableCell sx={{ fontSize: 15 }}>{serie.title}</TableCell>
                                <TableCell sx={{ fontSize: 15 }}>{serie.network}</TableCell>
                                <TableCell sx={{ fontSize: 15 }}>{serie.cast}</TableCell>
                                <TableCell sx={{ fontSize: 15 }}>{serie.genre}</TableCell>
                                <TableCell sx={{ fontSize: 15 }}>{serie.seasons}</TableCell>
                                <TableCell sx={{ fontSize: 15 }}>{serie.episodes}</TableCell>
                                <TableCell sx={{ fontSize: 15 }}>{serie.rating}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </>
    )
}

export default Detail;