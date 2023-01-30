import { createContext, useState } from "react";
import QUESTIONS from '../questions-data.json';

const getRandomInt = (max) => {
    return Math.floor(Math.random() * max);
}
export const QuestionContext = createContext({
    currentQuestion: {},
    setCurrentQuestion: () => {},
    getQuestions: () => {},
    questions: []
});


export const QuestionProvider = ({children}) => {
    const [currentQuestion, setCurrentQuestion] = useState(QUESTIONS[getRandomInt(QUESTIONS.length)]); 
    const questions = QUESTIONS;
    const getQuestions = () => {
        setTimeout(() => {
            setCurrentQuestion(QUESTIONS[getRandomInt(QUESTIONS.length)]);
          }, "250")
    }
    const value = { currentQuestion, setCurrentQuestion, questions, getQuestions};
    return <QuestionContext.Provider value={value}>{children}</QuestionContext.Provider>; 
}