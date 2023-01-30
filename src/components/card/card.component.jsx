import './card.style.css'
import { useContext } from 'react';
import { QuestionContext } from '../../contexts/question.context';
const Card = ({properties, correcta}) => {
    const { getQuestions } = useContext(QuestionContext);
    const {pregunta, respuesta, imagen} = properties;
    console.log(imagen);
    const onClickHandler = (event) => {
        if(correcta.pregunta === pregunta){
            event.target.style='background-color: green'
            getQuestions();
        }else{
            event.target.style='background-color: red'
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