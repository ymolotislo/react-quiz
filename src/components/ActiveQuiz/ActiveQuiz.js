import React from 'react'
import styles from './ActiveQuiz.module.scss'
import AnswersList from "./AnswersList/AnswersList";

const ActiveQuiz = props => (
	<div className={styles.ActiveQuiz}>
		<p className={styles.Question}>
			<span>
				<strong>2.</strong>
				&nbsp; {props.question}
			</span>
			<small>4 из 12</small>
		</p>

		<AnswersList
			answers={props.answers}
			onAnswerClick={props.onAnswerClick}
		/>
	</div>
);

export default ActiveQuiz