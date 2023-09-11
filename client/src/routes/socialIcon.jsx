import React from 'react';
import Grid from '@mui/material/Grid';
import IconButton from '@mui/material/IconButton';
import FacebookIcon from '@mui/icons-material/Facebook';
import GoogleIcon from '@mui/icons-material/Google';
import Container from '@mui/material/Container';
import { styled } from '@mui/system'; // Import styled from @mui/system

const SocialIconsContainer = styled(Container)({
  display: 'flex',
  justifyContent: 'flex-end',
  marginTop: (theme) => theme.spacing(2),
});

const IconContainer = styled(Grid)(({ theme }) => ({
  fontSize: '12rem',
  color: theme.palette.primary.main,
  marginLeft: theme.spacing(1),
}));

const SocialIcons = () => {
  return (
    <SocialIconsContainer>
      <Grid container justifyContent="center">
        <IconContainer item>
          <IconButton>
            <FacebookIcon />
          </IconButton>
        </IconContainer>
        <IconContainer item>
          <IconButton>
            <GoogleIcon />
          </IconButton>
        </IconContainer>
      </Grid>
    </SocialIconsContainer>
  );
};

export default SocialIcons;
