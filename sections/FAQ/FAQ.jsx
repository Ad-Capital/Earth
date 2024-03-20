'use client';


import React, { useState } from 'react'
import { TriviaQuestion } from '@/constants';
import { AiOutlinePlus, AiOutlineMinus } from 'react-icons/ai'
import styles from "./style.module.scss"

const FAQ = () => {
  const [isClicked, setIsClicked] = useState(null);
  const revealAnswer = index => {
    if (index === isClicked) {
      return setIsClicked(null);
    }
    setIsClicked(index);
  }

  const toggleBtn = (index) => {
    if (index === isClicked) {
      return <AiOutlineMinus />
    } else {
      return <AiOutlinePlus />
    }
  }

  const screenReaderInstructions = (trivia, index) => {

    if (index === TriviaQuestion.length - 2 && index === isClicked) {
      return trivia.answer + "... Press tab to hear the final question.";
    }

    else if (index === isClicked) {
      return trivia.answer + "... Press tab to hear the next question."
    }

    else {
      return trivia.question + "... Press enter to reveal the answer."
    }
  }

  const accordionClosed = "hidden rounded-2xl overflow-y-hidden max-w-6xl leading-snug opacity-0"
  const accordionOpen = "block max-h-[400px] overflow-y-visible opacity-100 mr-auto"

  return (
    <>
      <section id="FAQ" className={styles.FAQ}>
        <h2 className={styles.headline}>FAQ</h2>
        {
          TriviaQuestion.map((trivia, index) => (
            <div key={trivia.question} className={styles.question}>
              <div className={styles.questiondiv}>
                <h3>
                  <button
                    className={styles.button}
                    id={trivia.headingID}
                    aria-label={screenReaderInstructions(trivia, index)}
                    aria-expanded={isClicked === index ? 'true' : false}
                    aria-controls={trivia.answerID}
                    onClick={() => revealAnswer(index)}>{trivia.question}
                  </button>
                </h3>
                <span>
                  {toggleBtn(index)}
                </span>
              </div>

              {
                <section
                  id={trivia.answerID}
                  aria-labelledby={trivia.headingID}
                  className={isClicked === index ? accordionOpen : accordionClosed}>
                  <p className={styles.answer}>{trivia.answer}</p>
                </section>
              }

            </div>
          ))}
      </section>
    </>
  )
}
export default FAQ;