import React, {Component} from 'react'
import styles from './Quiz.module.scss'
import ActiveQuiz from '../../components/ActiveQuiz/ActiveQuiz'

class Quiz extends Component {
	onAnswerClickHandler = (answerId) => {
		console.log(`Answer ID: ${answerId}`)
	}

	constructor(props) {
		super(props);
		this.state = {
			quiz: [
				{
					question: `Какого цвета небо?`,
					rightAnswerId: 2,
					answers: [
						{text: `Черный`, id: 1},
						{text: `Синий`, id: 2},
						{text: `Красный`, id: 3},
						{text: `Зелёный`, id: 4}
					]
				}
			]
		}
	}

	render() {
		return (
			<div className={styles.Quiz}>
				<div className={styles.QuizWrapper}>
					<h1>Ответьте на все вопросы</h1>

					<ActiveQuiz
						answers={this.state.quiz[0].answers}
						question={this.state.quiz[0].question}
						onAnswerClick={this.onAnswerClickHandler}
					/>
				</div>
			</div>
		)
	}
}

export default Quiz