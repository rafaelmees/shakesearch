import type { NextPage } from 'next';
import { Box, Container, Divider, Grid, Icon, IconButton, InputAdornment, ListItem, TextField, Typography } from '@mui/material';
import { useEffect, useState } from 'react';
import Highlighter from 'react-highlight-words';

const Home: NextPage = () => {
  let [ results, setResults ] = useState<Array<string>>([]);
  let [ searchText, setSearchText ] = useState<string>('');
  let [ inputValue, setInputValue ] = useState<string>('');

  const submit = async (event: any) => {
    event.preventDefault();
    setSearchText(inputValue);
  };

  useEffect(() => {
    search();
  }, [searchText]);

  const search = async () => {
    // await fetch(`/search?q=${searchText}`).then(async (response: Response) => {
    await fetch(`http://localhost:3001/search?q=${searchText}`).then(async (response: Response) => {
      let results = await response.json();
      setResults(results);

      var regexp = RegExp(searchText, 'g');
      var match, matches = [];

      while ((match = regexp.exec(results)) != null) {
        matches.push(match.index);
      }

      console.log(matches);
    });
  }

  return (
    <>
      <Grid
        container
        spacing={2}
      >
        <Grid item xs={12}>
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'center',
              paddingTop: 10,
            }}
          >
            <img
              src='/shakesearch_logo.svg'
              height={120}
            />
          </Box>
          <Container
            maxWidth='sm'
            sx={{
              paddingTop: 10,
              paddingBottom: 5,
            }}
          >
            <form onSubmit={submit}>
              <TextField
                fullWidth
                autoFocus
                id='outlined-basic'
                variant='outlined'
                placeholder='Search in the complete works of William Shakespeare'
                value={inputValue}
                onChange={(event) => setInputValue(event.target.value)}
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
          </Container>
        </Grid>
        {results.length > 0 && (
          <Grid item xs={12}>
            {results.map((result: string, index: number) => (
              <>
                <ListItem key={index}>
                  <Box
                    sx={{
                      padding: 1,
                      fontStyle: 'italic',
                    }}
                  >
                    "...
                    <Highlighter
                      highlightClassName='highlightedText'
                      searchWords={[searchText]}
                      autoEscape={true}
                      textToHighlight={result}
                    />
                    ..."
                  </Box>
                </ListItem>
                {index+1 < results.length && (
                  <Divider />
                )}
              </>
            ))}
          </Grid>
        )}
      </Grid>
    </>
  );
}

export default Home