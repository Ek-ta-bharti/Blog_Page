import { Box, Typography, styled } from '@mui/material';
import { useMediaQuery } from '@mui/material';

const leftMargin = 120; // Define the left margin value

const Image = styled(Box)(({ theme }) => ({
    background: `url(https://images.pexels.com/photos/1714208/pexels-photo-1714208.jpeg) center/55% repeat-x #000`,
    width: `calc(100% - ${2 * leftMargin}px)`, // Adjusted width to accommodate margins
    height: '50vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    marginLeft: leftMargin,
    marginRight: leftMargin, // Set right margin equal to left margin
}));

const Heading = styled(Typography)`
   font-size: 70px;
   color: #FFFFFF;
   line-height: 1;
`;

const SubHeading = styled(Typography)`
   font-size: 70px;
   background: #FFFFFF;
`;

const Banner = () => {
    return (
        <Image>
            <Heading> blog </Heading>
            <SubHeading> ektabharti </SubHeading>
        </Image>
    );
};

export default Banner;
