import React, { useState } from 'react'
import { Checkbox, FormControlLabel } from '@material-ui/core';
import { Buttons, Card, Container, Form, Image, InputField, Placeholder, Section, TargetLink, Title1 } from '../styled-components/StyledComponents'

function SignUp() {

    const [name, setName] = useState();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [confirmPassword, setConfirmPassword] = useState();
    const [privacyPolicy, setPrivacyPolicy] = useState(false);

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

                {/* Sign In Form Section */}
                <Container
                    background="white"
                    height="525"
                    borderRadius="30-30-0-0"
                    margin="1.5-0-0-0"
                >
                    {/* Title */}
                    <Container
                        padding="2-3-0-3"
                    >
                        <Title1>Join US!</Title1>
                        <Placeholder>Create an account to continue</Placeholder>
                    </Container>

                    {/* Sign Un Form */}
                    <Form>
                        <InputField
                            fullWidth
                            id = "email"
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
                            id = "email"
                            label="Password"
                            type="password"
                            value={password}
                            onChange={e => setPassword(e.target.value)}
                        />
                        <InputField
                            className="mt-2"
                            fullWidth
                            id = "email"
                            label="Confirm Password"
                            type="password"
                            value={confirmPassword}
                            onChange={e => setConfirmPassword(e.target.value)}
                        />
                        <FormControlLabel
                            className="mt-2"
                            control={
                            <Checkbox
                                checked={privacyPolicy}
                                onChange={() => setPrivacyPolicy(!privacyPolicy)}
                                name="privacyPolicy"
                                color="primary"
                            />
                            }
                            label="I agree with the Privacy Policy"
                        />
                        <Buttons
                            margin="1-0-0-0"
                        >
                            Sign Up
                        </Buttons>
                    </Form>

                    <Container display="flex" padding="2-3-0-3">
                        <Placeholder>
                            Already have an account ? 
                            <TargetLink>Sign in</TargetLink>
                        </Placeholder>
                    </Container>
                </Container>
            </Card>
        </Section>
    )
}

export default SignUp
