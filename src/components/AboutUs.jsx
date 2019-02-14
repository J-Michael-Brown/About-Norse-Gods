import React from 'react';
import NorseGods from '../assets/god-array';
import Profile from './Profile';

function AboutUs(){
  return (
    <div>
      {NorseGods.map((profile, index) =>
        <Profile
          name={profile.name}
          photo={profile.photo}
          about={profile.about}
          quote={profile.quote}
          key={index}
        />
      )}
    </div>
  );
}

export default AboutUs;
