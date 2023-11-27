import "./header.css"

export default function Header() {
  return (
    <div className='header'>
        <div className="headerItems">
            <span className="headerItemSmall">Empresa Junior</span>
            <span className="headerItemBig">BIT</span>
        </div>
        <img className="headerImage" src="https://images.pexels.com/photos/270623/pexels-photo-270623.png?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
    </div>
  )
}
