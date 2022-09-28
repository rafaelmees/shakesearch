import { Fab, Fade, Icon, useScrollTrigger } from '@mui/material';

const BackToTopButton = ({
  window,
}: {
  window?: () => Window;
}) => {
  const trigger = useScrollTrigger({
    target: window ? window() : undefined,
    disableHysteresis: true,
    threshold: 136,
  });

  return (
    <Fade in={trigger}>
      <Fab
        color='primary'
        size='small'
        sx={{
          position: 'fixed',
          bottom: '24px',
          right: '24px',
        }}
        onClick={(event) => {
          const anchor = (
            (event.target as HTMLDivElement).ownerDocument || document
          ).querySelector('#back-to-top-anchor');
      
          if (anchor) {
            anchor.scrollIntoView({
              block: 'center',
            });
          }
        }}
      >
        <Icon>
          keyboard_arrow_up
        </Icon>
      </Fab>
    </Fade>
  );
}

export default BackToTopButton;