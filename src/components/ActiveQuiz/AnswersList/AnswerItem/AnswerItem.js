import React from 'react'
import styles from './AnswerItem.module.scss'

const AnswerItem = props => {

	return (
		<li className={styles.AnswerItem}
		    onClick={() => props.onAnswerClick(props.answer.id)}
		>
			{props.answer.text}
		</li>
	)
}

export default AnswerItem