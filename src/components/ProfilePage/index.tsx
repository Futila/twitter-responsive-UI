import React from 'react';
import Feed from '../Feed';
import { 
    Container,
    Banner,
    Avatar,
    ProfileData, 
    LocationIcon,
    CakeIcon, 
    Followage,
    EditButton,
 } from './styles';

const ProfilePage: React.FC = () => {
  return (
    <Container>
        <Banner>
            <Avatar/>
        </Banner>

        <ProfileData>
            <EditButton outlined>Editar Perfil</EditButton>

            <h1>Fernando Futila</h1>
            <h2>@fernando_futila</h2>

            <p>
                Developer at <a href="https://rocketseat.com.br">@Rockeseat</a>

            </p>

            <ul>
                <li>
                    <LocationIcon/>
                    Luanda, Angola
                </li>
                <li>
                    <CakeIcon/>
                    Nascido(a) em Março de 1999
                </li>
            </ul>

           
            <Followage>
                <span>
                    seguindo <strong>94</strong>
                </span>
                <span>
                    <strong>94</strong> seguidores
                </span>
            </Followage>
        </ProfileData>

        <Feed />
    </Container>
 )
}

export default ProfilePage;