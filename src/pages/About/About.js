import './About.scss';
import pokemon_battle from './../../assets/pokemon_battle.jpg';
import pokemon_inside from './../../assets/pokemon_inside.jpg';
import ballscluster from './../../assets/ballscluster.jpeg';
import pxfuel from './../../assets/pxfuel.jpeg';
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <div className='about-container'>
      <div className='about-1'>
        <div className='about-section-1'>
          <div className='about-section-description'>
            <div className='about-section-title'>ABOUT US</div>
            <p>Let's face it gentlemen - having balls is BADASS</p>
            <p>It's a power move.</p>
            <p>
              Eve seen a man with a pair of balls back down from a challange?
              Give up? Retreat?
            </p>
            <p>Didn't think so.</p>
            <p>
              That's because our balls and our power go hand in hand - and
              everyone knows it.
            </p>
          </div>
          <img
            className='about-section-image'
            src={pokemon_inside}
            alt='about-poke-1'
          ></img>
        </div>
      </div>
      <div className='about-2'>
        <div className='about-section-2'>
          <img
            className='about-section-image'
            src={ballscluster}
            alt='about-poke-2'
          ></img>
          <div className='about-section-description'>
            <p>
              No weapon on earth makes as much of a statement as having balls
              does
            </p>
            <p>
              And yet, those poor guys with all of their artilliery weapons and
              machine guns spend all their money on securing uncountable number
              of bullets.... while men of culture like us get ready to face the
              world with just a pair of balls.
            </p>
            <p>and that's why POKESTORE was founded</p>
          </div>
        </div>
      </div>
      <div className='about-1'>
        <div className='about-section-1'>
          <div className='about-section-description'>
            <p>
              Balls like ours deserve an experience that's just as badass as we
              are
            </p>
            <p>
              These balls are different, you may many lying in forests or on a
              quest, but to completely own it, the balls made just for us, tat
              are specifically formulated for us and us only.
            </p>
            <p>And us men don't settle.</p>
          </div>
          <img
            className='about-section-image'
            src={pxfuel}
            alt='about-poke-3'
          ></img>
        </div>
      </div>
      <div className='about-2'>
        <div className='about-section-2'>
          <img
            className='about-section-image'
            src={pokemon_battle}
            alt='about-poke-4'
          ></img>
          <div className='about-section-description'>
            <div className='about-section-title'>
              Meet our famed ball residents
            </div>
            <p>
              Seasoning themselves in fights all the time, after looking for
              various places to rest and getting disturbed in their peaceful
              time, they got frustrated and created for themselves, these ball
              shaped homes for their comfort and peace.
            </p>
            <p>
              And after creating a home for themselves, unlike most of us who
              hire tenants, they hire landlords whom they figh for, whom they
              play with, whom they call family.
            </p>
            <p>
              Let's be the proud landlords this time and show every other
              landlord how they should care for their tenant.
            </p>
            <p>
              To get your balls gentlemen,{' '}
              <Link to='/products'> CLICK HERE</Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
