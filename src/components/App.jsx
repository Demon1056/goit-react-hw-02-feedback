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
    return Object.values(this.state).reduce((acc, item) => {
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
    return (
      <Section tittle="Please leave feedback">
        <FeedbackOptions
          options={options}
          onLiveFeedBack={this.sendFeedback}
        ></FeedbackOptions>
        <br />
        {this.countTotalFeedback() ? (
          <Statistics
            good={this.state.good}
            neutral={this.state.neutral}
            bad={this.state.bad}
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
