import "../style/visual.css"

const EquipamentoCard = ({ equipamento }) => {
    const corStatus = {
        "Em Operação" : "#2EC4B6",
        "Em Manutenção" : "#d0d311",
        "Parado" : "#E63946"
    };

    return(
        <div className="card">
            <img className="imagem" src={equipamento.image} alt={equipamento.nome} />
            <div className="card-info">        
                <h3>{equipamento.nome}</h3>
                <h5>{equipamento.funcao}</h5>
                <p>
                    Status: <b style={{color: corStatus[equipamento.status]}}> {equipamento.status}</b>
                </p>
            </div>
        </div>

    );
}

export default EquipamentoCard;