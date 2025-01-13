import RolesComponent from './roles-section/roles-component';
import AgentsComponent from './agents-section/agents-component';
import '../../style/AgentsStyle.css';


function Agents() {
  return (
    <div>
      <section className="roles-container">
        <RolesComponent />
      </section>
      
      <section className="agents-container" style={{backgroundImage:'url("/img/valorant-conceptart-contract-screen.png")',backgroundSize:'',backgroundRepeat:'no-repeat'}}>
        <AgentsComponent />
      </section>
    </div>
  );
}

export default Agents;