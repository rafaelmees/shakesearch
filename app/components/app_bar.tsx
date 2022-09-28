import { AppBar, Box, Container, Divider, Fade, Grid, Icon, IconButton, InputAdornment, TextField, useScrollTrigger } from '@mui/material';
import { useEffect, useState } from 'react';

const ShakesearchAppBar = ({
  window,
  onSubmitSearch,
}: {
  window?: () => Window;
  onSubmitSearch: (searchText: string) => void;
}) => {
  let [ inputValue, setInputValue ] = useState<string>('');

  const { width } = useWindowDimensions();

  const trigger = useScrollTrigger({
    target: window ? window() : undefined,
    disableHysteresis: true,
    threshold: width && width < 600 ? 0 : 136,
  });

  const submit = async (event: any) => {
    event.preventDefault();
    onSubmitSearch(inputValue);
  };

  return (
    <>
      <AppBar
        color='secondary'
        position={trigger ? 'fixed' : 'absolute'}
        elevation={trigger ? 4 : 0}
        sx={{
          top: {
            xs: 0,
            sm: trigger ? '-136px' : '0',
          },
        }}
      >
        <Box
          sx={{
            display: {
              xs: 'none',
              sm: 'flex',
            },
            justifyContent: 'center',
            paddingTop: 2,
          }}
        >
          <img
            src='/shakesearch_logo.svg'
            height={120}
          />
        </Box>
        <Container>
          <Grid
            container
            spacing={1}
            sx={{
              paddingTop: 2,
              paddingBottom: 2,
            }}
          >
            <Grid
              item
              xs='auto'
              sm={2}
              sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              <Box
                sx={{
                  display: {
                    xs: 'block',
                    sm: 'none',
                  },
                }}
              >
                <img
                  src='/shakesearch_icon.svg'
                  height={40}
                />
              </Box>
              <Box
                sx={{
                  display: {
                    xs: 'none',
                    sm: 'block'
                  },
                }}
              >
                <Fade
                  in={trigger}
                >
                  <img
                    src='/shakesearch_logo.svg'
                    height={40}
                  />
                </Fade>
              </Box>
            </Grid>
            <Grid item xs sm={8}>
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
            </Grid>
            <Grid item xs={false} sm={2}>
            </Grid>
          </Grid>
        </Container>
      </AppBar>
      <Box
        sx={{
          height: {
            xs: '88px',
            sm: '224px',
          },
        }}
      />
      <Divider />
    </>
  );
}

export default ShakesearchAppBar;

const useWindowDimensions = () => {
  const hasWindow = typeof window !== 'undefined';

  const getWindowDimensions = () => {
    const width = hasWindow ? window.innerWidth : null;
    const height = hasWindow ? window.innerHeight : null;
    return {
      width,
      height,
    };
  }

  const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());

  const handleResize = () => {
    setWindowDimensions(getWindowDimensions());
  }

  useEffect(() => {
    if (hasWindow) {
      window.addEventListener('resize', handleResize);
      return () => window.removeEventListener('resize', handleResize);
    }
  }, [hasWindow]);

  return windowDimensions;
}