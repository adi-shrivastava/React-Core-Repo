import React from 'react'
import Card from './components/card'
import { Bookmark } from 'lucide-react'
const jobopenings = () => {
  const jobOpenings = [
    {
      brandLogo: "https://logo.clearbit.com/google.com",
      companyName: "Google",
      datePosted: "5 days ago",
      post: "Frontend Developer",
      tag1: "Full Time",
      tag2: "Junior Level",
      pay: "$45/hr",
      location: "Bangalore, India"
    },
    {
      brandLogo: "https://logo.clearbit.com/apple.com",
      companyName: "Apple",
      datePosted: "2 weeks ago",
      post: "iOS Developer",
      tag1: "Full Time",
      tag2: "Mid Level",
      pay: "$55/hr",
      location: "Hyderabad, India"
    },
    {
      brandLogo: "https://logo.clearbit.com/microsoft.com",
      companyName: "Microsoft",
      datePosted: "10 days ago",
      post: "Software Engineer",
      tag1: "Full Time",
      tag2: "Junior Level",
      pay: "$50/hr",
      location: "Noida, India"
    },
    {
      brandLogo: "https://logo.clearbit.com/amazon.com",
      companyName: "Amazon",
      datePosted: "1 week ago",
      post: "Backend Developer",
      tag1: "Full Time",
      tag2: "Mid Level",
      pay: "$48/hr",
      location: "Chennai, India"
    },
    {
      brandLogo: "https://logo.clearbit.com/meta.com",
      companyName: "Meta",
      datePosted: "3 days ago",
      post: "React Developer",
      tag1: "Full Time",
      tag2: "Junior Level",
      pay: "$52/hr",
      location: "Mumbai, India"
    },
    {
      brandLogo: "https://logo.clearbit.com/netflix.com",
      companyName: "Netflix",
      datePosted: "2 weeks ago",
      post: "UI Engineer",
      tag1: "Part Time",
      tag2: "Senior Level",
      pay: "$70/hr",
      location: "Remote, India"
    },
    {
      brandLogo: "https://logo.clearbit.com/adobe.com",
      companyName: "Adobe",
      datePosted: "4 days ago",
      post: "Full Stack Developer",
      tag1: "Full Time",
      tag2: "Mid Level",
      pay: "$60/hr",
      location: "Noida, India"
    },
    {
      brandLogo: "https://logo.clearbit.com/uber.com",
      companyName: "Uber",
      datePosted: "6 days ago",
      post: "Software Developer",
      tag1: "Full Time",
      tag2: "Junior Level",
      pay: "$47/hr",
      location: "Bangalore, India"
    },
    {
      brandLogo: "https://logo.clearbit.com/salesforce.com",
      companyName: "Salesforce",
      datePosted: "8 days ago",
      post: "Cloud Engineer",
      tag1: "Full Time",
      tag2: "Senior Level",
      pay: "$65/hr",
      location: "Hyderabad, India"
    },
    {
      brandLogo: "https://logo.clearbit.com/tesla.com",
      companyName: "Tesla",
      datePosted: "12 days ago",
      post: "Embedded Systems Engineer",
      tag1: "Full Time",
      tag2: "Mid Level",
      pay: "$68/hr",
      location: "Pune, India"
    }
  ];
}
const app = () => {
  console.log(jobopenings)
  return (
    <div classname='parent'>
      {jobopenings.map(function (elem) {
        return <Card/>
      })}
    </div>
  )
}

const App = () => {
  return (
    <div className='parent'>
      <div className="card">
        <div className='top'>
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQUrq7g6hxhtaFMgqmanZqIobMaBBOcb-GlJdFSWTAKw&s" />
          <button>Save<Bookmark size={15} /></button>
        </div>
        <div className="center">
          <h3>Amazon</h3>
          <h2>Senior UI/UX Designer</h2>
          <button><span>Part-time</span></button>
          <button><span>Senior Level</span></button>
        </div>
        <div className="bottom">
          <h3>120$/hr</h3>
          <span>Mumbai India</span>
        </div>
      </div>
    </div>
  )
}

export default App