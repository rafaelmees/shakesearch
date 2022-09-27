import type { NextPage } from 'next';
import { Grid, Icon, IconButton, InputAdornment, TextField } from '@mui/material';
import { useState } from 'react';

const Home: NextPage = () => {
  let [results, setResults] = useState<Array<string>>([]);

  const submit = async (event: any) => {
    event.preventDefault();
    await fetch('/search?q=Hamlet').then(async (response: Response) => {
      setResults(await response.json());
    });
  };

  return (
    <>
      <Grid
        container
        spacing={2}
        alignItems='center'
        justifyContent='center'
        style={{ minHeight: '100vh' }}
      >
        <Grid item xs={3}>
          <form onSubmit={submit}>
            <TextField
              fullWidth
              autoFocus
              id='outlined-basic'
              variant='outlined'
              placeholder='Shakesarch'
              InputProps={{
                endAdornment: (
                  <InputAdornment position='end'>
                    <IconButton
                      onClick={submit}
                      edge='end'
                    >
                      <Icon>search</Icon>
                    </IconButton>
                  </InputAdornment>
                )
              }}
            />
          </form>
        </Grid>
        <Grid item xs={12}>
          {results.map((result: string, index: number) => (
            <div key={index}>
              Teste - 
              {result}
            </div>
          ))}
        </Grid>
      </Grid>
    </>
  );
}

export default Home