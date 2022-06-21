import type { NextPage } from 'next'
import Title from '../ui/components/title/title'
import List from '../ui/components/list/list'
import { Dialog, DialogActions, Grid, TextField, Button, Snackbar } from '@mui/material'
import { useState } from 'react'
import { useIndex } from '../data/hooks/pages/useIndex'


const Home: NextPage = () => { 
  const {
    listSeries,
    remove,
    edit,
    serieSelected,
    setSerieSelected,
    serieDeleted,
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
    setMessage
  } = useIndex();

  return (
    <div>
      <Title 
        title="" 
        subtitle={
          <span>
            Lista com as <strong>séries</strong><br />
            do nosso banco de dados
          </span>
        }
      />

        <List
          series = {listSeries}
          onSelect = {(serie) => setSerieSelected(serie)}
          onDeleted = {(serie) => setSerieDeleted(serie)}
        />

        <Dialog 
          open = {serieSelected !== null}
          fullWidth
          PaperProps = {{ sx: { p: 3} }}
          onClose={() => setSerieSelected(null)}
        >
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                label={'Título'}
                placeholder={serieSelected?.title}
                type={'string'}
                fullWidth
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                label={'Emissora'}
                placeholder={serieSelected?.network}
                type={'string'}
                fullWidth
                value={network}
                onChange={(e) => setNetwork(e.target.value)}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                label={'Elenco'}
                placeholder={serieSelected?.cast}
                type={'string'}
                fullWidth
                value={cast}
                onChange={(e) => setCast(e.target.value)}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                label={'Gêneros'}
                placeholder={serieSelected?.genre}
                type={'string'}
                fullWidth
                value={genre}
                onChange={(e) => setGenre(e.target.value)}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                label={'Temporadas'}
                placeholder={serieSelected?.seasons}
                type={'number'}
                fullWidth
                value={seasons}
                onChange={(e) => setSeasons(e.target.value)}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                label={'Episódios'}
                placeholder={serieSelected?.episodes}
                type={'number'}
                fullWidth
                value={episodes}
                onChange={(e) => setEpisodes(e.target.value)}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                label={'Nota'}
                placeholder={serieSelected?.rating}
                type={'number'}
                fullWidth
                value={rating}
                onChange={(e) => setRating(e.target.value)}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                label={'Foto'}
                placeholder={serieSelected?.photo}
                type={'string'}
                fullWidth
                value={photo}
                onChange={(e) => setPhoto(e.target.value)}
              />
            </Grid>
          </Grid>
          <DialogActions sx={{mt: 5}}>
            <Button
              color={'secondary'}
              onClick={() => setSerieSelected(null)}
            >
              Cancelar
            </Button>
            <Button
              variant={'contained'}
              onClick={() => edit()}
            >
              Confirmar edição
            </Button>
          </DialogActions>
        </Dialog>
        <Dialog
          open = {serieDeleted !== null}
          fullWidth
          PaperProps = {{ sx: { p: 3} }}
          onClose={() => setSerieDeleted(null)}
        >
          Deseja mesmo deletar essa série?
          <DialogActions sx={{mt: 5}}>
            <Button
              color={'secondary'}
              onClick={() => setSerieDeleted(null)}
            >
              Cancelar
            </Button>
            <Button
              variant={'contained'}
              onClick={() => remove()} 
            >
              Deletar
            </Button>
          </DialogActions>
        </Dialog>

        <Snackbar
          open={message?.length > 0}
          message={message}
          autoHideDuration={2500}
          onClose={() => setMessage('')}
        />
    </div>
  )
}

export default Home
