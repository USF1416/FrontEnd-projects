import RolesComponent from './roles-component';
import AgentsComponent from './agents-component';
import '../../style/AgentsStyle.css';


function Agents() {
  return (
    <>
      <section className="roles-container">
        <RolesComponent />
      </section>
      
      <section className="agents-container-1">
        <AgentsComponent />
      </section>
    </>
  );
}

export default Agents;