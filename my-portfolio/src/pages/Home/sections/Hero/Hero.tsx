import { Button, Container, Grid, styled, Typography } from "@mui/material";
import Perfil from "../../../../assets/images/perfil.jpg";
import FileDownloadIcon from '@mui/icons-material/FileDownload';
import ForwardToInboxIcon from '@mui/icons-material/ForwardToInbox';

const Hero = () => {
  const StyledHero = styled("div")(() => ({
    backgroundColor: "black",
    height: "100vh"
  }));
  const StyledImg = styled("img")(() => ({
    width: "100%",
    borderRadius: "50%",
  }));

  return (
    <>
      <StyledHero>
        <Container>

        <Grid container spacing={2}>
          <Grid item xs={12} md={4}>
          <StyledImg src={Perfil} />
          </Grid>
          <Grid item xs={12} md={8}>
            <Typography color="primary" variant="h1" textAlign="center">Tazio Arruda</Typography>
            <Typography color="primary" variant="h2" textAlign="center">full stack web developer</Typography>
            <Grid container>
                <Grid item xs={12} nd={6}>
                <Button><FileDownloadIcon/>Download CV</Button>
                </Grid>
                
                <Grid item xs={12} nd={6}>
                <Button><ForwardToInboxIcon/>Contact me</Button>
                </Grid>
            </Grid>
          </Grid>
        </Grid>
       
        </Container>
      </StyledHero>
    </>
  );
};

export default Hero;
