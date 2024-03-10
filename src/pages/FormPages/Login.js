import { useContext } from 'react';
import { AuthContext } from '../../context/AuthContext';
import { Button, Col, Form, Row, Stack } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Login = () => {
  const { loginInfo, updateLoginInfo, loginUser, loginError, isLoginLoading } =
    useContext(AuthContext);

  return (
    <Form onSubmit={loginUser}>
      <Row
        style={{
          justifyContent: 'center',
          paddingTop: '5%',
          paddingLeft: '20px',
          paddingRight: '20px',
        }}
      >
        <Col lg={6} md={8} sm={12}>
          <Stack gap={3}>
            <h2 style={{ textAlign: 'center' }}>Login</h2>
            <Form.Control
              style={{ width: 'auto', padding: '20px' }}
              type='email'
              placeholder='Email'
              onChange={(e) =>
                updateLoginInfo({ ...loginInfo, email: e.target.value })
              }
            />
            <Form.Control
              style={{ width: 'auto', padding: '20px' }}
              type='password'
              placeholder='Password'
              onChange={(e) =>
                updateLoginInfo({ ...loginInfo, password: e.target.value })
              }
            />
            <Link
              to='/forgotpass'
              style={{
                fontSize: '12px',
                color: '#c5b358',
                margin: 'auto',
                borderBottom: '1px solid #c5b358',
                width: 'fit-content',
              }}
            >
              Forgot your password?
            </Link>
            <Button
              type='submit'
              className='custom-submit-button'
              disabled={isLoginLoading}
            >
              {isLoginLoading ? 'Signing in...' : 'SIGN IN'}
            </Button>

            {loginError?.error && (
              <p style={{ color: 'red', fontWeight: '400' }}>
                {' '}
                {loginError?.message}
              </p>
            )}

            <Link
              to='/register'
              style={{
                fontSize: '12px',
                color: '#c5b358',
                margin: 'auto',
                borderBottom: '1px solid #c5b358',
                width: 'fit-content',
              }}
            >
              Create Account
            </Link>

            <Link
              to='/'
              style={{
                fontSize: '12px',
                color: '#c5b358',
                margin: 'auto',
                borderBottom: '1px solid #c5b358',
                width: 'fit-content',
              }}
            >
              Return to Store
            </Link>
          </Stack>
        </Col>
      </Row>
    </Form>
  );
};

export default Login;
