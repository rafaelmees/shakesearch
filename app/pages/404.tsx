import { Box, Link } from '@mui/material';

const FourOhFour = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        height: '100vh',
      }}
    >
      <h1>404 - Page Not Found</h1>
        <Link
          href='/'
          variant='button'
        >
          GO BACK HOME
        </Link>
    </Box>
  );
}

export default FourOhFour;