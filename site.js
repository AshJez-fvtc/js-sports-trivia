
// import the utility functions "decodeHtml" and "shuffle"
import { decodeHtml, shuffle } from './utils.js' 

// get the elements from the DOM
const questionElement = document.querySelector('#question')
const answersElement = document.querySelector('#answers')
const nextQuestionElement = document.querySelector('#nextQuestion')

// IIFE (so we can use async/await)
;(async () => {

	// todo: create your "getNextQuestion" function

	//Right off the bat nothing displayed for this at all, not in the concsole or on the screen
	const https = require('https')	

		const url = await fetch('https://opentdb.com/api.php?amount=1&category=21&difficulty=easy&type=multiple')
		const json = url.json()
		const trivia = { question, correct_answer: correct, incorrect_answers: incorrect } = json.results[0]

		const getNextQuestion = async url => {
			const answers = shuffle([ ...incorrect, correct ])
			const div = document.querySelector('#questions')
			return { question, answers, correct }

		//I'm not understanding why this is "Unreachable".
		const questions = https.get(url, response => {
			response.on
		})

	}

	// todo: create your "renderQuestion" function

	const renderQuestion = ({ question, answers, correct }) => {
		if (answer === correct) {
			button.classList.add('correct')
			answersElement.querySelectorAll('button').forEach(b => b.disabled = true)
			answersElement.textContent = decodeHtml(question)
			alert('Correct!')
			return
		}
		button.disabled = true
		alert('Incorrect!')
	}

		trivia.forEach(question => {
			let div = ''
			questionElement.textContent = decodeHtml(question)
			//creating the button elements for each answer, but they're not displaying. Nothing is. 
			const p = document.createElement('p')
			p.textContent = question.trivia
			div.append(p)
		});

	// todo: add the event listener to the "nextQuestion" button

	const next = document.querySelector('#nextQuestion')
	next.addEventListener (
	renderQuestion(await getNextQuestion()),
	nextQuestionElement.disabled = true,
	setTimeout(() => nextQuestionElement.disabled = false, 10000))
}
)()

// mimic a click on the "nextQuestion" button to show the first question
nextQuestionElement.click()
