import React from 'react';
import NorseGods from '../assets/god-array';
import Profile from './Profile';
import {aboutUsStyles} from '../css/styles.jsx';

function AboutUs(){
  return (
    <div>
      <dl>
        {NorseGods.map((profile, index) =>
          <dd style={aboutUsStyles.dd}>
            <Profile
              name={profile.name}
              photo={profile.photo}
              about={profile.about}
              quote={profile.quote}
              quoteAuthor={profile.quoteAuthor}
              key={index}
            />
          </dd>
        )}
      </dl>
    </div>
  );
}

export default AboutUs;
