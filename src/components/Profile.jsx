import React from 'react';
import PropTypes from 'prop-types';

function Profile(props){
  let fullQuote = props.quote;
  if(props.quoteAuthor) {
    fullQuote+=` - ${props.quoteAuthor}`;
  } else {
    fullQuote+=` - ${props.name}`;
  }
  return (
    <div>
      <h3>{props.name}</h3>
      <img src={props.photo}/>
      <p>{fullQuote}</p>
      <hr/>
      <p>{props.about}</p>
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
