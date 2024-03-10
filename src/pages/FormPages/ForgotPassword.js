import { useContext, useState } from 'react';
import { Button, Col, Form, Row, Stack } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../context/AuthContext';

const ForgotPassword = () => {
  const {
    resetPassInfo,
    updateResetPassInfo,
    sendPassResetLink,
    forgotPassError,
    isForgotPassLoading,
  } = useContext(AuthContext);

  const [urlSent, setUrlSent] = useState(null);

  const submitForm = (event) => {
    setUrlSent(true);
    sendPassResetLink(event);
  };

  return (
    <Form onSubmit={submitForm}>
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
            <h2 style={{ textAlign: 'center' }}>Forgot password?</h2>
            {!urlSent && (
              <>
                <p style={{ fontWeight: '400', textAlign: 'center' }}>
                  {' '}
                  {'We will send you an email to reset your password.'}
                </p>
                <Form.Control
                  style={{ width: 'auto', padding: '20px' }}
                  type='email'
                  placeholder='Email'
                  onChange={(e) =>
                    updateResetPassInfo({
                      ...resetPassInfo,
                      email: e.target.value,
                    })
                  }
                />
                <Button
                  type='submit'
                  className='custom-submit-button'
                  disabled={isForgotPassLoading}
                >
                  {isForgotPassLoading
                    ? 'Sending password reset link....'
                    : 'SUBMIT'}
                </Button>
              </>
            )}
            {urlSent && (
              <p style={{ fontWeight: '400', textAlign: 'center' }}>
                {' '}
                {
                  'An email containing Password reset link will be sent to your email Id if your email is registered with us.'
                }
              </p>
            )}

            {forgotPassError?.error && (
              <p style={{ color: 'red', fontWeight: '400' }}>
                {' '}
                {forgotPassError?.message}
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
              Camcel
            </Link>
          </Stack>
        </Col>
      </Row>
    </Form>
  );
};

export default ForgotPassword;
