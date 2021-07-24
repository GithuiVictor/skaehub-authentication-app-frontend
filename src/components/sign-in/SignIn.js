import { Checkbox, FormControl, FormControlLabel, IconButton, Input, InputAdornment, InputLabel } from '@material-ui/core';
import React, { useState } from 'react'
import { Buttons, Card, Column, Container, Form, Image, InputField, Placeholder, Rows, Section, TargetLink, Title1, Title3 } from '../styled-components/StyledComponents'
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({
    textField: {
      width: '100%',
    },
  }));


function SignIn() {
    const classes = useStyles();

    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [showPassword, setShowPassword] = useState(false);
    const [rememberMe, setRememberMe] = useState(false);

    const handlePasswordVisibility = () => {
        setShowPassword(!showPassword)
    }
    
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
                        <Title1>Welcome Back!</Title1>
                        <Placeholder>Sign In to continue</Placeholder>
                    </Container>

                    {/* Sign In Form */}
                    <Form>
                        <InputField
                            fullWidth
                            id = "email"
                            label="Email Address"
                            value={email}
                            onChange={e => setEmail(e.target.value)}
                        />
                        <FormControl className={`${classes.textField} mt-3`}>
                            <InputLabel htmlFor="password">Password</InputLabel>
                            <Input
                                id="password"
                                type={showPassword ? "text" : "password"}
                                value={password}
                                onChange={e => setPassword(e.target.value)}
                                endAdornment={
                                    <InputAdornment position="end">
                                        <IconButton
                                            onClick={handlePasswordVisibility}
                                        >
                                            {showPassword ? <Visibility/> : <VisibilityOff/>}
                                        </IconButton>
                                    </InputAdornment>
                                }
                            />
                        </FormControl>

                        <Rows>
                            <Column md={3}>
                                <FormControlLabel
                                    className="mt-2"
                                    control={
                                    <Checkbox
                                        checked={rememberMe}
                                        onChange={() => setRememberMe(!rememberMe)}
                                        name="remmberMe"
                                        color="primary"
                                    />
                                    }
                                    label="Remember Me"
                                />
                            </Column>

                            <Column md={3}>
                                <TargetLink>Forgot Password ?</TargetLink>
                            </Column>
                        </Rows>

                        <Buttons
                            margin="1-0-0-0"
                        >Sign In</Buttons>
                    </Form>

                    <Container display="flex" padding="2-3-0-3">
                        <Placeholder>
                            Don't have an account ? 
                            <TargetLink>Sign Up</TargetLink>
                        </Placeholder>
                    </Container>
                </Container>
            </Card>
        </Section>
    )
}

export default SignIn
