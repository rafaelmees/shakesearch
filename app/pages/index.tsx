import { CircularProgress } from '@mui/material';
import type { NextPage } from 'next';
import { useEffect, useState } from 'react';
import ShakesearchAppBar from '../components/app_bar';
import BackToTopButton from '../components/back_to_top_button';
import ResultList from '../components/result_list';

const Home: NextPage = () => {
  let [ results, setResults ] = useState<Array<string>>([]);
  let [ searchText, setSearchText ] = useState<string>('');
  let [ isLoading, setIsLoading ] = useState<boolean>(false);

  useEffect(() => {
    search();
  }, [searchText]);

  const search = async () => {
    setResults([]);
    if (!searchText) {
      return;
    }
    setIsLoading(true);
    await fetch(`/search?q=${searchText}`).then(async (response: Response) => {
      let results = await response.json();
      setResults(results);
    });
    setIsLoading(false);
  }

  return (
    <>
      <div id='back-to-top-anchor' />
      <ShakesearchAppBar
        onSubmitSearch={(value) => setSearchText(value)}
      />
      {isLoading ? (
        <CircularProgress />
      ) : (
        <ResultList
          results={results}
          searchText={searchText}
        />
      )}
      <BackToTopButton />
    </>
  );
}

export default Home;