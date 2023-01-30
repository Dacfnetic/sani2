import Card from "../card/card.component";

const CardList = ({quest, questions, cantidad}) => {
    const getRandomInt = (max) => {
        return Math.floor(Math.random() * max);
    }
    const obtenerRespuestas = () => {
        let respuestas = [];
        respuestas.push(quest);
        let i = 0;
        for (i; i < 3; i++){
            let respuestaIncorrecta = questions[getRandomInt(cantidad)];
            switch (i) {
                case 0:
                    if(respuestas[0].id !== respuestaIncorrecta.id){
                        respuestas.push(respuestaIncorrecta);
                    }else{
                        i--;
                    }
                    break;
                case 1:
                    if(respuestas[0].id !== respuestaIncorrecta.id){
                        if(respuestas[1].id !== respuestaIncorrecta.id){
                            respuestas.push(respuestaIncorrecta);
                        }else{
                            i--;
                        }
                    }else{
                        i--;
                    }
                    
                    break;
                case 2:
                    if(respuestas[0].id !== respuestaIncorrecta.id){
                        if(respuestas[1].id !== respuestaIncorrecta.id){
                            if(respuestas[2].id !== respuestaIncorrecta.id){
                                respuestas.push(respuestaIncorrecta);
                            }else{
                                i--;
                            }
                        }else{
                            i--;
                        }
                    } else{
                        i--;
                    }
                    break;
                default:
                    break;
            }
            
        }
        if(respuestas.length > 4){
            respuestas.pop()
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