import prensa from "../image/prensaHidraulica.jpeg"
import torno from "../image/tornoCNC.jpg"
import roboS from "../image/roboSolda.jpg" 

export const equipamentos = [
  { id: 1, nome: "Torno CNC", status: "Em Operação", funcao: "Usinagem de peças metálicas", image: torno},
  { id: 2, nome: "Robô de Solda", status: "Em Manutenção", funcao: "União de estruturas automotivas", image: roboS},
  { id: 3, nome: "Prensa Hidráulica", status: "Parado", funcao: "Estampagem de chapas de aço", image: prensa }
]