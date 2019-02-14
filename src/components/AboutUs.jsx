import React from 'react';
import NorseGods from '../assets/god-array';

function AboutUs(){
  return (
    <div>
      {NorseGods.map((profile, index) =>
        <Month
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
