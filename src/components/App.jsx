import React, { Component } from 'react';
import { Section } from './Section/Section';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { Statistics } from './Statistic/Statistics';
const message = 'There is no feedback';
export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };
  countTotalFeedback = () => {
    const totalFeedback = Object.values(this.state);
    return totalFeedback.reduce((acc, item) => {
      acc += item;
      return acc;
    }, 0);
  };
  countPositiveFeedbackPercentage = () => {
    return Math.round((this.state.good / this.countTotalFeedback()) * 100);
  };

  sendFeedback = e => {
    let updateState = e.currentTarget.name;
    return this.setState(prevState => {
      return { [updateState]: prevState[updateState] + 1 };
    });
  };

  render() {
    const options = Object.keys(this.state);
    const { good, neutral, bad } = this.state;
    return (
      <Section tittle="Please leave feedback">
        <FeedbackOptions
          options={options}
          onLiveFeedBack={this.sendFeedback}
        ></FeedbackOptions>
        <br />
        {this.countTotalFeedback() ? (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={this.countTotalFeedback()}
            positivePercentage={this.countPositiveFeedbackPercentage()}
          ></Statistics>
        ) : (
          message
        )}
      </Section>
    );
  }
}
