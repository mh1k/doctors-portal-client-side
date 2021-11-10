import { Container, Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import MuiButton from '../../../StyledComponent/MuiButton';

const Banner = () => {

    const verticalCenterMain = {
        display: 'flex',
        alignItems: 'center',
        minHeight: 500,
        height: "100vh",
        background: `url("https://i.ibb.co/Tg0jGMY/bg.png")`,
        backgroundSize: 'cover'

    }

    const verticalCenter = {
        display: 'flex',
        alignItems: 'center',

    }

    return (
        <div style={verticalCenterMain}>
            <Container >
                <Grid container spacing={2}>
                    <Grid item xs={12} md={5} lg={5} style={{ ...verticalCenter, textAlign: 'left' }}>
                        <Box>
                            <Typography variant="h4" sx={{ fontWeight: 600, mb: 3 }}>
                                Your New Smile <br />
                                Starts Here
                            </Typography>
                            <Typography sx={{ lineHeight: 2 }} variant="body1">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ea corrupti ab non odio dolor necessitatibus dignissimos a, maxime voluptas voluptatum!
                            </Typography>
                            <MuiButton sx={{ mt: 3 }}>GET APPOINTMENT</MuiButton>
                        </Box>
                    </Grid>
                    <Grid item xs={12} md={7} lg={7} style={verticalCenter}>
                        <img src="https://i.ibb.co/gw850PM/chair.png" style={{ width: "100%" }} alt="" />
                    </Grid>
                </Grid>
            </Container>
        </div>
    );
};

export default Banner



// const Banner = () => {

//     const verticalCenterMain = {
//         display: 'flex',
//         alignItems: 'center',
//         minHeight: 500,
//         height: "150vh",
//         background : `url("https://i.ibb.co/Tg0jGMY/bg.png")`

//     }

//     const verticalCenter = {
//         display: 'flex',
//         alignItems: 'center',

//     }

//     return (
//         <div style={ verticalCenterMain }>
//             <Container >
//                 <Grid container spacing={2}>
//                     <Grid item xs={12} md={5} lg={5} style={{ ...verticalCenter, textAlign: 'left' }}>
//                         <Box>
//                             <Typography variant="h4" sx={{ fontWeight: 600, mb: 3 }}>
//                                 Your New Smile <br />
//                                 Starts Here
//                             </Typography>
//                             <Typography sx={{ lineHeight: 2 }} variant="body1">
//                                 Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ea corrupti ab non odio dolor necessitatibus dignissimos a, maxime voluptas voluptatum!
//                             </Typography>
//                             <MuiButton sx={{ mt: 3 }}>GET APPOINTMENT</MuiButton>
//                         </Box>
//                     </Grid>
//                     <Grid item xs={12} md={7} lg={7} style={verticalCenter}>
//                         <img src="https://i.ibb.co/gw850PM/chair.png" style={{ width: "100%" }} alt="" />
//                     </Grid>
//                 </Grid>
//             </Container>
//         </div>
//     );
// };

// export default Banner



// const Banner = () => {

//     const verticalCenterMain = {
//         // display: 'flex',
//         // alignItems: 'center',
//         minHeight: '400px',
//         height: "150vh",

//         // background : `url("https://i.ibb.co/Tg0jGMY/bg.png")`

//     }

//     const verticalCenter = {
//         display: 'flex',
//         alignItems: 'center',


//     }
//     const verticalCenterSub = {
//         display: 'flex',
//         alignItems: 'center',
//         justifyContent: 'center'



//     }

//     return (
//         <div>
//         <div style={{...verticalCenterMain, display:'grid', gridTemplateColumns:'2fr 1fr', position: 'relative'}}>
//            <div style={{background : `url("https://i.ibb.co/Tg0jGMY/bg.png")`, objectFit:'cover'}}>

//            </div>
//            <div style={{backgroundColor:'gray'}}>

//            </div>
//         </div>

//         <Container  style={{...verticalCenterSub,position:'absolute', top: '55%', width:'auto',left :'6%'}} >
//                 <Grid container spacing={2}>
//                     <Grid item xs={12} md={5} lg={5} style={{ ...verticalCenter, textAlign: 'left' }}>
//                         <Box>
//                             <Typography variant="h4" sx={{ fontWeight: 600, mb: 3 }}>
//                                 Your New Smile <br />
//                                 Starts Here
//                             </Typography>
//                             <Typography sx={{ lineHeight: 2 }} variant="body1">
//                                 Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ea corrupti ab non odio dolor necessitatibus dignissimos a, maxime voluptas voluptatum!
//                             </Typography>
//                             <MuiButton sx={{ mt: 3 }}>GET APPOINTMENT</MuiButton>
//                         </Box>
//                     </Grid>
//                     <Grid item xs={12} md={7} lg={7} style={verticalCenter}>
//                         <img src="https://i.ibb.co/gw850PM/chair.png" style={{ width: "100%" }} alt="" />
//                     </Grid>
//                 </Grid>
//             </Container>

//         </div>
//     );
// };

// export default Banner;