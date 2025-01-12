import { navLinks } from "../../constants"

function NavItems() {
  return (
    <ul className="nav-ul">
      {
        navLinks.map(({id, href, name}) =>(
          <li key={id} className="nav-li">
            <a href={href} className="nav-li_a">{name}</a>
          </li>
        ))
      }
    </ul>
  )
}

export default NavItems