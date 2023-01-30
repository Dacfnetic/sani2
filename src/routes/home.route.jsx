import CardList from "../components/card-list/card-list.component";

import './home.styles.css';
import { useContext } from 'react';
import { QuestionContext } from '../contexts/question.context.jsx'
const Home = () => {
    const { currentQuestion, questions } = useContext(QuestionContext);
    return(
        <>  
            <section className="pregunta">
                <h1>{currentQuestion.pregunta}</h1>
            </section>
            <section className='answers'>
                <CardList quest={currentQuestion} questions={questions} cantidad={questions.length}/>
            </section>
        </>
    );
    
}
export default Home;