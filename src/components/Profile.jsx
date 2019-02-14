import React from 'react';
import PropTypes from 'prop-types';

function Profile(props){
  return (
    <div>
      <h3>{props.name}</h3>
      <img src={props.photo}/>
      <p>{props.quote}</p>
      <hr>
      <p>{props.about}</p>
    </div>
  );
}

Profile.propTypes = {
  name: PropTypes.string.isRequired,
  about: PropTypes.string.isRequired,
  quote: PropTypes.string.isRequired,
  photo: PropTypes.string
}

export default Profile;
