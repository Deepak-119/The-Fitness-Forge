import React from 'react'

const WorkoutSessions = () => {
  return (
    <section className="workout_session">
      <div className="wrapper">
        <h1>TOP WORKOUT SESSION</h1>
        <p>
        Strength & Conditioning , HIIT Blast , Power Yoga , Functional Training , Cardio Crush , Bootcamp Challenges 
        </p>
        <img src="/img5.jpg" alt="workout" />
      </div>
      <div className="wrapper">
        <h1>FEATURED BOOTCAMPS</h1>
        <p>
        Ready to level up your fitness? Our bootcamps are designed to challenge, inspire, and transform. 
        From fat-burning intensity to strength-building endurance, there’s a bootcamp for every goal.
        </p>
        <div className="bootcamps">
          <div>
            <h4>Fat Burn Furnace</h4>
            <p>
            High-intensity circuits designed to incinerate calories and build lean muscle—perfect for rapid fat loss.
            </p>
          </div>
          <div>
            <h4>Warrior Weekend Bootcamp</h4>
            <p>
            A hardcore weekend-only challenge that blends strength, endurance, and mental toughness.
            </p>
          </div>
          <div>
            <h4>Core Crusher Bootcamp</h4>
            <p>
            Focused abdominal training to sculpt your core and improve stability, posture, and power.
            </p>
          </div>
          <div>
            <h4>Outdoor Endurance Bootcamp</h4>
            <p>
            Take your workout outside! Run, lift, and push through team drills that boost stamina and full-body strength.
            </p>
          </div>
          <div>
            <h4>Beast Mode Bootcamp</h4>
            <p>
            Push past your limits with advanced-level training for serious athletes and fitness enthusiasts.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkoutSessions;
