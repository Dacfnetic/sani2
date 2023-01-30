import './card.style.css'
import { useContext } from 'react';
import { QuestionContext } from '../../contexts/question.context';
const Card = ({properties, correcta}) => {
    const { getQuestions } = useContext(QuestionContext);
    const {pregunta, respuesta, imagen} = properties;
    const onClickHandler = (event) => {
        if(correcta.pregunta === pregunta){
            event.target.style='background-color: green'
            setTimeout(() => {
                event.target.style='background-color: rgb(239, 252, 255);';
                getQuestions();
              }, "250");
        }else{
            event.target.style='background-color: red'
            setTimeout(() => {
                event.target.style='background-color: rgb(239, 252, 255);';
              }, "250");
        }
    }
    return(
        <div className="card-container" onClick={onClickHandler}>
            <p>{respuesta}</p>
            <div className='image-container'>
                <img src={`${imagen}`} alt="no hay imagen"/>
            </div>
            
            
        </div>
    );
}
export default Card