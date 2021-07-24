import React from 'react'
import { ProfileData } from '../../data/ProfileData'
import { Buttons, Card, Container, Image, Placeholder, Section, Title4 } from '../styled-components/StyledComponents'
import EditIcon from '@material-ui/icons/Edit';

function ProfileOverview() {
    return (
        <Section
            position="absolute"
            background="#f4f5f7"
            width="100%"
            height="100%"
            display="flex"
            alignItems="center"
        >
            <Card
                background="primary"
                width="385"
                height="712"
            >
                {/* Victor Githui Logo */}
                <Container display="flex">
                    <Image
                        src="https://res.cloudinary.com/emacon-production/image/upload/v1626694192/Victor%20Githui%20Portfolio/victor_githui_white_background_wjx2oa.png"
                        alt="Victor Githui Logo"
                        width="110"
                        margin="2-0-0-0"
                    />
                </Container>

                {/* Profile OverView */}
                <Container
                    background="white"
                    height="525"
                    borderRadius="30-30-0-0"
                    margin="1.5-0-0-0"
                >
                    {/* Greetings Text */}
                    <Container 
                        display="flex"
                        padding="2-3-0-3"
                    >
                        <Title4>Hello Victor Githui!</Title4>
                    </Container>

                    {/* Profile OverView */}
                    <Container padding="0-2-0-2">

                        {/* Profile Picture */}
                        <Container display="flex">
                            <Image
                                src="https://res.cloudinary.com/emacon-production/image/upload/v1627045050/Victor%20Githui%20Portfolio/DSC_4223_oypfrm.jpg"
                                alt="profile image"
                                width="100"
                                height="100"
                                margin="1-0-0-0"
                                borderRadius="50"
                            />
                        </Container>

                        {/* Profile Details */}
                        <Container margin="1.5-0-0-0">
                            {ProfileData.map(profile => (
                                <Placeholder key={profile.id}>
                                    {`${profile.head} :   ${profile.value}`}
                                </Placeholder>
                            ))}
                        </Container>

                        {/* Update Button */}
                        <Buttons>
                            <EditIcon/> Update Profile
                        </Buttons>
                    </Container>
                </Container>
            </Card>
        </Section>
    )
}

export default ProfileOverview
