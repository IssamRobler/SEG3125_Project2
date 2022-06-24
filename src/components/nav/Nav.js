import {Link} from 'react-router-dom'
import styled from 'styled-components'
import { PageTitle, Text } from '../typography/Typography'
import Typography from '@mui/material/Typography';
import { Button } from '@mui/material';
export function Nav() {
    return (
        <NavBar>
            <Title>
                    <Link to="/">
                        <Typography variant='h3'>
                            <PageTitle>BestRecipe</PageTitle>
                        </Typography>
                    </Link>
            </Title>
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
            <Usercontent>
                <Link to="/sharerecipe">
                    <Typography variant='subtitle1'>
                            <Text>Share a recipe</Text>
                    </Typography>
                </Link>
                <Link to="/login">
                    <SignupLoginButton>
                        <Button variant="container">
                            <Typography variant='subtitle2'>
                                <Text>Sign Up / Login</Text>
                            </Typography>
                        </Button>
                    </SignupLoginButton>
                </Link>
            </Usercontent>
        </NavBar>
    )
}

const SignupLoginButton = styled.div`
    background-color:#CC9933 ;
    border: none ;
    border-radius: 5px ;
`

const Usercontent = styled.div`
    display:flex ;
    flex-direction:row ;
    padding:10px;
    background-color:#339999 ;
    margin-left:auto ;
    justify-content: space-around ;
    width:20%;
    margin-right:2%;
`
const Links = styled.div`
    display:flex ;
    flex-direction:row ;
    padding:10px;
    background-color:#339999 ;
    width: 15% ;
    justify-content: space-between ;
`
const Title = styled.div`
    display:flex ;
    flex-direction:row ;
    padding:10px;
    background-color:#339999 ;
    margin-left:3% ;
    margin-right:5%
`
const NavBar = styled.div`
    display:flex ;
    flex-direction:row ;
    padding:10px;
    background-color:#339999 ;

    a:link { text-decoration: none; }
    a:visited { text-decoration: none; }
    a:hover { text-decoration: none; }
    a:active { text-decoration: none; }
    a {
        margin:auto ;
    }
`