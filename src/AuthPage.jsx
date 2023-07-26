import PropTypes from 'prop-types';
import axios from 'axios';

const AuthPage = ({ onAuth }) => {
  const onSubmit = async (e) => {
    e.preventDefault();
    const { value } = e.target[0];

    try {
      const r = await axios.post('http://localhost:3001/authenticate', {
        username: value,
      });
      onAuth({ ...r.data, secret: value });
    } catch (e) {
      console.log('error', e);
    }
  };

  return (
    <div className='background'>
      <form onSubmit={onSubmit} className='form-card'>
        <div className='form-title'>Welcome 👋</div>

        <div className='form-subtitle'>Set a username to get started</div>

        <div className='auth'>
          <div className='auth-label'>Username</div>
          <input className='auth-input' name='username' />
          <button className='auth-button' type='submit'>
            Enter
          </button>
        </div>
      </form>
    </div>
  );
};

// Prop-type validation
AuthPage.propTypes = {
  onAuth: PropTypes.func.isRequired,
};

export default AuthPage;