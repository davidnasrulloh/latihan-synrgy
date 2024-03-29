import styled from '@emotion/styled';
import { Button, TextField, Alert, AlertProps } from '@mui/material';
import { FormEvent, useState } from 'react';
import axios, { AxiosError } from 'axios';


const LoginContainerStyled = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: stretch;
  height: 100vh;
`;

const Form = styled.form`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 1;
`;

const Background = styled.div`
  flex: 1;
`;

interface IAlert extends AlertProps {
    message: string;
}
  

export default function Login() {
    const [username, setUsername] = useState<string>();
    const [password, setPassword] = useState<string>();
    const [alert, setAlert] = useState<IAlert>();

    
    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        try {
            const response = await axios.post(
              'http://localhost:8000/api/auth/login',
              { username, password }
            );
      
            localStorage.setItem('token', response?.data?.data);
      
            setAlert({
              message: 'Login success!',
              severity: 'success',
            });
            window.location.href = 'http://localhost:5175/'
          } catch (error:any) {
            if (error instanceof AxiosError) {
              return setAlert({
                message: error?.response?.data?.message,
                severity: 'error',
              });
            }
            setAlert({
              message: 'Failed',
              severity: 'error',
            });
        }
    }

  


    return (
        <LoginContainerStyled>
            <Form onSubmit={handleSubmit}>
                <div
                style={{
                    width: '50%',
                }}
                >
                {alert && alert.message && (
                    <Alert severity={alert.severity}>{alert.message}</Alert>
                )}
        
                <h3>School Library</h3>
                <h4>Welcome Readers</h4>
                <TextField
                    label="Username"
                    name="username"
                    id="username"
                    placeholder="Type your username"
                    sx={{ width: '100%', mb: 3 }}
                    onChange={(e) => setUsername(e.target.value)}
                />
                <TextField
                    label="Password"
                    name="password"
                    id="password"
                    placeholder="Type your password"
                    type="password"
                    sx={{ width: '100%', mb: 3 }}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <Button
                    type="submit"
                    variant="contained"
                    size="large"
                    sx={{ width: '100%' }}
                >
                    Go to My Account
                </Button>
                </div>
            </Form>
            <Background>
                <img
                src="https://picsum.photos/id/119/3264/2176"
                alt="bg"
                style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                }}
                />
            </Background>
        </LoginContainerStyled>
    );
}
