import {Bookmark} from 'lucide-react'
const Card = (Cname) => {
  return (
    <div className="card">
      <div className="top">
         <img src={Cname.img}/>
         <button>Save<Bookmark /></button>
         {Cname.name}
         <h4>{Cname.role}</h4>
      </div>
       <button>Apply</button>
    </div>
  )
}

export default Card