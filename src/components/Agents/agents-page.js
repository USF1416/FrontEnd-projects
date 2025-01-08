import RolesComponent from './roles-section/roles-component';
import AgentsComponent from './agents-section/agents-component';
import '../../style/AgentsStyle.css';


function Agents() {
  return (
    <div  style={{backgroundImage:'url("/img/valorant-conceptart-haven.png")',backgroundSize:'cover',backgroundRepeat:'no-repeat'}}>
      <section className="roles-container">
        <RolesComponent />
      </section>
      
      <section className="agents-container">
        <AgentsComponent />
      </section>
    </div>
  );
}

export default Agents;