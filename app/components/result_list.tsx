import { Box, Container, Divider, Grid, ListItem } from '@mui/material';
import Highlighter from 'react-highlight-words';

const ResultList = ({
  results,
  searchText,
}: {
  results: Array<string>,
  searchText: string,
}) => {
  return (
    <Grid
      container
      spacing={{xs: 0, sm: 2}}
    >
      {results.length == 0 && searchText && (
        <Grid item xs={12}>
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'center',
              paddingTop: '48px',
              fontStyle: 'italic',
            }}
          >
            No results found!
          </Box>
        </Grid>
      )}
      {results.length > 0 && results.map((result: string, index: number) => (
        <Grid
          key={index}
          item
          xs={12}
        >
          <Container
            maxWidth='sm'
            sx={{
              paddingX: {xs: 0, sm: 2}
            }}
          >
            <ListItem
              className='quote'
              sx={{
                fontStyle: 'italic',
                whiteSpace: 'pre-wrap',
                padding: 6,
              }}
            >
              <Highlighter
                highlightClassName='highlightedText'
                searchWords={[searchText]}
                autoEscape={true}
                textToHighlight={result}
              />
            </ListItem>
          </Container>
          {index+1 < results.length && (
            <Divider />
          )}
        </Grid>
      ))}
    </Grid>
  );
}

export default ResultList;