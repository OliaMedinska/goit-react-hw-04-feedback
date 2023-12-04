import React, { Component } from "react";
import Section from "./Section/Section";
import Feedback from "./Feedback/Feedback";
import Notification from "./Notification/Notification";
import Statistics from "./Statistics/Statistics";

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0
  }
  
  onLeaveFeedback = (el) => {
    this.setState((prevState) => ({ [el]: prevState[el] + 1 }))
  }
  
  countTotalFeedback = () => {
    return Object.values(this.state).reduce((total, number) => (total + number), 0)
  }

  countPositiveFeedback = () => {
    return Math.round((this.state.good / this.countTotalFeedback()) * 100);
  }

  render() {
    const { good, neutral, bad } = this.state;

    return (
      <>
        <Section title="Please leave feedback">
          <Feedback
            options={this.state}
            onLeaveFeedback={this.onLeaveFeedback}
          />
        </Section>
        
        <Section title="Statistics">
          {this.countTotalFeedback() === 0
            ? <Notification
              message="There is no feedback" />
            : <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={this.countTotalFeedback()}
              positiveFeedback={`${this.countPositiveFeedback()}%`}
          />
          }
        </Section>
      </>
    )
  }
}

export default App;