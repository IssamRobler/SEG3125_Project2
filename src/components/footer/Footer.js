import {Link} from 'react-router-dom'
import styled from 'styled-components'
import { PageTitle, Text } from '../typography/Typography'
import Typography from '@mui/material/Typography';
import { Button } from '@mui/material';
export function Footer() {
    return (
        <FooterContainer>
            <Links>
                <Link to="/breakfast">
                    <Typography variant='subtitle1'>
                        <Text>Breakfast</Text>
                    </Typography>
                </Link>
                <Link to="/lunch">
                    <Typography variant='subtitle1'>
                        <Text>Lunch</Text>
                    </Typography>
                </Link>
                <Link to="/dinner">
                    <Typography variant='subtitle1'>
                        <Text>Dinner</Text>
                    </Typography>
                </Link>
                <Link to="/snacks">
                <Typography variant='subtitle1'>
                        <Text>Snacks</Text>
                </Typography>
                </Link>
            </Links>
            <Typography variant='subtitle1'>
                <Text>Copyright</Text>
            </Typography>
        </FooterContainer>
    )
}


const Links = styled.div`
    display:flex ;
    flex-direction:row ;
    padding:10px;
    background-color:#339999 ;
    width: 15% ;
    justify-content: space-between ;
`

const FooterContainer = styled.div`
    display:flex ;
    flex-direction:column ;
    padding:10px;
    background-color:#339999 ;
    align-items: center ;

    a:link { text-decoration: none; }
    a:visited { text-decoration: none; }
    a:hover { text-decoration: none; }
    a:active { text-decoration: none; }
    a {
        margin:auto ;
    }
`