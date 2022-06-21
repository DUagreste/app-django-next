import { NextPage } from "next";
import { useRegister } from "../data/hooks/pages/useRegister";
import Title from "../ui/components/title/title";
import { Paper, Grid, Button, TextField, Snackbar } from "@mui/material";

const Register: NextPage = () => {
    const {
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
        register
    } = useRegister();
    return (
        <>
            <Title
                title={'Cadastro de Séries'}
                subtitle={'Preencha os dados para cadastrar novas séries'}
            />

            <Paper sx={{maxWidth: 970, mx: 'auto', p: 5}}>
                <Grid container spacing={3}>
                    <Grid item xs={12}>
                        <TextField
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                            label={'Título'}
                            placeholder={'Digite o título da série'}
                            fullWidth
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            value={network}
                            onChange={(e) => setNetwork(e.target.value)}
                            label={'Emissoras'}
                            placeholder={'Digite a emissora da série'}
                            fullWidth
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            value={cast}
                            onChange={(e) => setCast(e.target.value)}
                            label={'Elenco'}
                            placeholder={'Digite o elenco da série'}
                            fullWidth
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            value={genre}
                            onChange={(e) => setGenre(e.target.value)}
                            label={'Gêneros'}
                            placeholder={'Digite os gêneros da série'}
                            fullWidth
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            value={seasons}
                            onChange={(e) => setSeasons(e.target.value)}
                            label={'N° Temporadas'}
                            placeholder={'Digite quantas temporadas tem a série'}
                            fullWidth
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            value={episodes}
                            onChange={(e) => setEpisodes(e.target.value)}
                            label={'Nº Episódios'}
                            placeholder={'Digite quantos episódios tem a série'}
                            fullWidth
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            value={rating}
                            onChange={(e) => setRating(e.target.value)}
                            label={'Nota'}
                            placeholder={'Insira a nota da série'}
                            fullWidth
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            value={photo}
                            onChange={(e) => setPhoto(e.target.value)}
                            label={'Foto'}
                            placeholder={'Insira a URL de uma imagem da série'}
                            fullWidth
                        />
                    </Grid>
                    <Grid item xs={12} sx={{textAlign: 'center'}}>
                        <Button
                            onClick={register}
                            fullWidth
                            variant={'contained'}
                            sx={{maxWidth: {md: 200}, mt: 4}}
                        >
                            Cadastrar
                        </Button>
                    </Grid>
                </Grid>
            </Paper>

            <Snackbar
                open={message?.length > 0}
                autoHideDuration={2500}
                onClose={() => setMessage('')}
                message={message}
            />
        </>
    )
}

export default Register;