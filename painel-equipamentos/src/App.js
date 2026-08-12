import EquipamentoCard from "./components/EquipamentosCard";
import { equipamentos } from "./data/equipamentos";
import "./style/visual.css";

function App(){
  return(
    <div className="principal">
      <h1>Status dos Equipamentos</h1>
      {equipamentos.map(equipamento => (
        <EquipamentoCard key={equipamento.id} equipamento={equipamento}/>
      ))}
    </div>
  );
}
export default App;