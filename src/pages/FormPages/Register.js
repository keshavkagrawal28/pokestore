import { useContext } from 'react';
import { AuthContext } from '../../context/AuthContext';
import { Button, Col, Form, Row, Stack } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Register = () => {
  const {
    registerInfo,
    updateRegisterInfo,
    registerUser,
    registerError,
    isRegisterLoading,
  } = useContext(AuthContext);

  return (
    <Form onSubmit={registerUser}>
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
            <h2 style={{ textAlign: 'center' }}>Create an account</h2>
            <Form.Control
              style={{ width: 'auto', padding: '20px' }}
              type='firstname'
              placeholder='First name'
              onChange={(e) =>
                updateRegisterInfo({
                  ...registerInfo,
                  firstname: e.target.value,
                })
              }
            />
            <Form.Control
              style={{ width: 'auto', padding: '20px' }}
              type='lastname'
              placeholder='Last name'
              onChange={(e) =>
                updateRegisterInfo({
                  ...registerInfo,
                  lastname: e.target.value,
                })
              }
            />
            <Form.Control
              style={{ width: 'auto', padding: '20px' }}
              type='email'
              placeholder='Email'
              onChange={(e) =>
                updateRegisterInfo({ ...registerInfo, email: e.target.value })
              }
            />
            <Form.Control
              style={{ width: 'auto', padding: '20px' }}
              type='password'
              placeholder='Password'
              onChange={(e) =>
                updateRegisterInfo({
                  ...registerInfo,
                  password: e.target.value,
                })
              }
            />
            <Button
              type='submit'
              className='custom-submit-button'
              disabled={isRegisterLoading}
            >
              {isRegisterLoading ? 'Registering user...' : 'REGISTER'}
            </Button>

            {registerError?.error && (
              <p style={{ color: 'red', fontWeight: '400' }}>
                {' '}
                {registerError?.message}
              </p>
            )}

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

export default Register;
