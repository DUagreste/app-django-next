import { Link, Box } from '@mui/material';
import Image from 'next/image';
import NextLink from 'next/link'
import {
    HeaderContainer,
    Logo,
    LinksContainer
} from './header-admin.style';


export default function HeaderAdmin(){
    return (
        <HeaderContainer>
            <div>
                <Link component={NextLink} href={'/'}>
                        <a>
                            <Image
                                src={'/images/logo.png'}
                                alt={'Adote um pet'}
                                width={'125px'}
                                height={'100px'}
                            />
                        </a>
                </Link>
                <LinksContainer>
                    <Link component={NextLink} href={'/register'}>
                        <a>Cadastrar</a>
                    </Link>
                    <Link component={NextLink} href={'/detail'}>
                        <a>
                            {'  '}
                            <Box component={'span'}
                                sx={{display: { sm: 'initial', xs: 'none'}}}>
                            Informações
                            </Box>
                        </a>
                    </Link>
                </LinksContainer>
                
                
            </div>
        </HeaderContainer>
)}