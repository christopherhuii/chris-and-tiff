import React from 'react';
import SectionWrapper from './../SectionWrapper';
import ReadingWell from './../ReadingWell';
import Fade from 'react-reveal/Fade';
import Media from 'react-media';
import './styles.css';

class Countdown extends React.Component {
  constructor(props) {
    super(props);
  
    this.state = {
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0,
    }
  }

  countdown = () => {
    const currentTime = new Date().getTime();
    const targetTime = new Date('Dec 14, 2018 17:00:00').getTime();

    const timeRemaining = targetTime - currentTime;
  
    this.setState({
      days: Math.floor(timeRemaining / (1000 * 60 * 60 * 24)),
      hours: Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
      minutes: Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60)),
      seconds: Math.floor((timeRemaining % (1000 * 60)) / 1000),
      rendered: true
    });
  }

  componentDidMount() {
    this.countdownInterval = setInterval(() => {
      this.countdown()
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.countdownInterval);
  }

  render() {
    const {
      days,
      hours,
      minutes,
      seconds,
      rendered
    } = this.state;
    return (
      <SectionWrapper className="countdown">
        <Fade>
          <ReadingWell>
            <Media query={{ minWidth: 480 }}>
              {matches =>
                matches ? (
                  <div>
                    <span className="countdown__heading">Celebrate With Us</span>
                    <span className="countdown__date">Friday, December 14th, 2018</span>
                    <span className="countdown__date countdown__datetime">5:00PM - 11:00PM</span>
                  </div>
                ) : (
                  <div>
                    <span className="countdown__heading">Celebrate With Us</span>
                    <span className="countdown__date">Friday</span>
                    <span className="countdown__date">12 / 14 / 2018</span>
                    <span className="countdown__date countdown__datetime">5:00PM - 11:00PM</span>
                  </div>
                )
              }
            </Media>
            {rendered && (
              <div className="countdown__time-wrapper">
                <span>
                  <span className="countdown__time">{days}</span>&nbsp;
                  <span className="countdown__time-unit">{`day${days === 1 ? '' : 's'}`}</span>&nbsp;
                </span>
                <span>
                  <span className="countdown__time">{hours}</span>&nbsp;
                  <span className="countdown__time-unit">{`hour${hours === 1 ? '' : 's'}`}</span>&nbsp;
                </span>
                <span>
                  <span className="countdown__time">{minutes}</span>&nbsp;
                  <span className="countdown__time-unit">{`minute${minutes === 1 ? '' : 's'}`}</span>&nbsp;
                </span>
                <span>
                  <span className="countdown__time">{seconds}</span>&nbsp;
                  <span className="countdown__time-unit">{`second${seconds === 1 ? '' : 's'}`}</span>&nbsp;
                </span>
              </div>
            )}
          </ReadingWell>
        </Fade>
      </SectionWrapper>
    );
  }
}

export default Countdown;
