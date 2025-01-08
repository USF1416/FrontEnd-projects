import RolesComponent from './roles-section/roles-component';
import AgentsComponent from './agents-section/agents-component';
import '../../style/AgentsStyle.css';


function Agents() {
  return (
    <>
      <section className="roles-container">
        <RolesComponent />
      </section>
      
      <section className="agents-container">
        <AgentsComponent />
      </section>
    </>
  );
}

export default Agents;