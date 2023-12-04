import { useState } from 'react';
import Section from './Section/Section';
import Feedback from './Feedback/Feedback';
import Notification from './Notification/Notification';
import Statistics from './Statistics/Statistics';

export const App = () => {
  const [state, setState] = useState({ good: 0, neutral: 0, bad: 0 });

  const onLeaveFeedback = el => {
    setState(prevState => ({ ...prevState, [el]: prevState[el] + 1 }));
  };

  const countTotalFeedback = () => {
    return Object.values(state).reduce((total, number) => total + number, 0);
  };

  const countPositiveFeedback = () => {
    return Math.round((state.good / countTotalFeedback()) * 100);
  };

  const optionsKeys = Object.keys(options);

  return (
    <>
      <Section title="Please leave feedback">
        <Feedback options={optionsKeys} onLeaveFeedback={onLeaveFeedback} />
      </Section>

      <Section title="Statistics">
        {countTotalFeedback() === 0 ? (
          <Notification message="There is no feedback" />
        ) : (
          <Statistics
            good={state.good}
            neutral={state.neutral}
            bad={state.bad}
            total={countTotalFeedback()}
            positiveFeedback={`${countPositiveFeedback()}%`}
          />
        )}
      </Section>
    </>
  );
};
