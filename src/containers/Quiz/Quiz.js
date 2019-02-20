import React, {Component} from 'react'
import styles from './Quiz.module.scss'
import ActiveQuiz from '../../components/ActiveQuiz/ActiveQuiz'

class Quiz extends Component {
  onAnswerClickHandler = (answerId) => {
    const question = this.state.quiz[this.state.activeQuestion];

    if (question.rightAnswerId === answerId) {

      this.setState({answerState: {[answerId]: `success`}});

      const timeout = setTimeout(() => {

        if (this.isQuizFinished()) {
          console.log(`quiz is finished`)
        } else {
          this.setState({
            activeQuestion: this.state.activeQuestion + 1,
            answerState: null
          });
        }

        window.clearTimeout(timeout);
      }, 1000);
    } else {
      this.setState({
        answerState: {[answerId]: `failure`}
      });

      const timeout = setTimeout(() => {
        this.setState({answerState: null});
        clearTimeout(timeout);
      }, 1000)
    }
  };

  constructor(props) {
    super(props);

    this.state = {
      activeQuestion: 0,
      answerState: null,
      quiz: [
        {
          id: 1,
          question: `Какого цвета небо?`,
          rightAnswerId: 2,
          answers: [
            {text: `Черный`, id: 1},
            {text: `Синий`, id: 2},
            {text: `Красный`, id: 3},
            {text: `Зелёный`, id: 4}
          ]
        },
        {
          id: 2,
          question: `В каком году основали Санкт-Петербург?`,
          rightAnswerId: 4,
          answers: [
            {text: `1700`, id: 1},
            {text: `1705`, id: 2},
            {text: `1702`, id: 3},
            {text: `1703`, id: 4}
          ]
        },
      ]
    }
  }

  isQuizFinished() {
    return this.state.activeQuestion + 1 === this.state.quiz.length
  }

  render() {
    return (
      <div className={styles.Quiz}>
        <div className={styles.QuizWrapper}>
          <h1>Ответьте на все вопросы</h1>

          <ActiveQuiz
            answers={this.state.quiz[this.state.activeQuestion].answers}
            question={this.state.quiz[this.state.activeQuestion].question}
            onAnswerClick={this.onAnswerClickHandler}
            quizLength={this.state.quiz.length}
            answerNumber={this.state.activeQuestion + 1}
            state={this.state.answerState}
          />

        </div>
      </div>
    )
  }
}

export default Quiz