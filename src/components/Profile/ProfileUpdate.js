import React, { useState } from 'react'
import { Buttons, Card, Container, Form, Image, InputField, Section, Title4 } from '../styled-components/StyledComponents'
import { ProfileData } from '../../data/ProfileData'
import EditIcon from '@material-ui/icons/Edit';

function ProfileUpdate() {
    const [name, setName] = useState("Victor Githui Maina");
    const [email, setEmail] = useState("victorgithuim@gmail.com");
    const [phoneNumber, setPhoneNumber] = useState(701230892);
    const [gender, setGender] = useState("Male");
    const [occupation, setOccupation] = useState("Self Employed");
    const [address, setAddress] = useState("Nairobi, Kenya");

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
                height="800"
            >
                {/* Victor Githui Logo */}
                <Container display="flex">
                    <Image
                        src="https://res.cloudinary.com/emacon-production/image/upload/v1626694192/Victor%20Githui%20Portfolio/victor_githui_white_background_wjx2oa.png"
                        alt="Victor Githui Logo"
                        width="100"
                        margin="2-0-0-0"
                    />
                </Container>

                {/* Profile OverView */}
                <Container
                    background="white"
                    height="535"
                    borderRadius="30-30-0-0"
                    margin="1.5-0-0-0"
                >
                    {/* Title */}
                    <Container 
                        display="flex"
                        padding="2-3-0-3"
                    >
                        <Title4>Profile</Title4>
                    </Container>

                    {/* Profile Update Form */}
                    <Container padding="0-2-0-2">
                        <Form>
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

                            <InputField
                                className="mt-3"
                                fullWidth
                                id = "name"
                                label="Name"
                                type="text"
                                value={name}
                                onChange={e => setName(e.target.value)}
                            />
                            <InputField
                                className="mt-2"
                                fullWidth
                                id = "email"
                                label="Email Address"
                                type="email"
                                value={email}
                                onChange={e => setEmail(e.target.value)}
                            />
                            <InputField
                                className="mt-2"
                                fullWidth
                                id = "phoneNumber"
                                label="PhoneNumber"
                                type="number"
                                value={phoneNumber}
                                onChange={e => setPhoneNumber(e.target.value)}
                            />
                            <InputField
                                className="mt-2"
                                fullWidth
                                id = "gender"
                                label="Gender"
                                type="text"
                                value={gender}
                                onChange={e => setGender(e.target.value)}
                            />
                            <InputField
                                className="mt-2"
                                fullWidth
                                id = "occupation"
                                label="Occupation"
                                type="text"
                                value={occupation}
                                onChange={e => setOccupation(e.target.value)}
                            />
                            <InputField
                                className="mt-2"
                                fullWidth
                                id = "address"
                                label="Address"
                                type="text"
                                value={address}
                                onChange={e => setAddress(e.target.value)}
                            />
                            {/* Update Button */}
                            <Buttons margin="1-0-0-0">
                                <EditIcon/> Update Profile
                            </Buttons>  
                        </Form>
                        
                        
                    </Container>
                </Container>
            </Card>
        </Section>
    )
}

export default ProfileUpdate
