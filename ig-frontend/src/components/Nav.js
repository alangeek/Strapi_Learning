import {NavLink} from 'react-router-dom';

export default () => (
  <div className="Nav">
    <NavLink to="/" exact>Home  </NavLink>
    <NavLink to="/create" exact>Create</NavLink>
  </div>
)