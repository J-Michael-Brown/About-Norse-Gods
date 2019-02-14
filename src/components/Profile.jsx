import React from 'react';
import PropTypes from 'prop-types';
import {profileStyles} from '../css/styles.jsx';

function Profile(props){
  let quoteBy;
  if(props.quoteAuthor) {
    quoteBy = props.quoteAuthor;
  } else {
    quoteBy = props.name;
  }
  return (
    <div>
      <div>
        <img style={profileStyles.photo} src={props.photo}/>
      </div>
      <h3 style={profileStyles.name}>{props.name}</h3>
      <p style={profileStyles.quote}>"{props.quote}" - <span style={profileStyles.quoteAuthor}>{quoteBy}</span></p>
      <hr/>
      <p style={profileStyles.about}>{props.about}</p>
    </div>
  );
}

Profile.propTypes = {
  name: PropTypes.string.isRequired,
  about: PropTypes.string.isRequired,
  quote: PropTypes.string.isRequired,
  photo: PropTypes.string,
  quoteAuthor: PropTypes.string
};

export default Profile;
