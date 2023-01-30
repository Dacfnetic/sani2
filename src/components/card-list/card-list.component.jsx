import Card from "../card/card.component";

const CardList = ({quest, questions, cantidad}) => {
    const getRandomInt = (max) => {
        return Math.floor(Math.random() * max);
    }
    const obtenerRespuestas = () => {
        let respuestas = [];
        respuestas.push(quest);
        for (let i = 0; i < 3; i++){
            let respuestaIncorrecta = questions[getRandomInt(cantidad)];
            if(quest.pregunta !== respuestaIncorrecta.pregunta){
                respuestas.push(respuestaIncorrecta);
            }
        }
        const shuffledArray = respuestas.sort((a, b) => 0.5 - Math.random());

        return (
            shuffledArray.map((card) => (
                <Card key={card.id} properties={card} correcta={quest}/>
            ))
        );
    }
    return(
        obtenerRespuestas()
    );
}
export default CardList