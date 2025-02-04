import React, {useState} from 'react'
import { Link } from 'react-router-dom';
import teamsLogo from '@/assets/svg/teams-logo.svg';
import locationIcon from '@/assets/svg/location.svg';
import timeIcon from '@/assets/svg/time.svg';
import saveIcon from '@/assets/svg/save.svg';

const JobPosts = () => {
    const [featuredJobs, setFeaturedJobs] = useState([
        {isPromoted: true, title: 'UI/UX Designer', company: 'Teams', location: 'Seattle, USA (Remote)', applicants: 22, posted: '1 day ago'},
        {isPromoted: true, title: 'Frontend Developer', company: 'Teams', location: 'Seattle, USA (Remote)', applicants: 100, posted: '1 day ago'},
        {isPromoted: true, title: '.NET Developer', company: 'Teams', location: 'Seattle, USA (Remote)', applicants: 31, posted: '1 day ago'},
        {isPromoted: true, title: 'Backend Developer', company: 'Teams', location: 'Seattle, USA (Remote)', applicants: 92, posted: '1 day ago'},
        {isPromoted: true, title: 'MERN Stack Develeper', company: 'Teams', location: 'Seattle, USA (Remote)', applicants: 56, posted: '1 day ago'},
    ])
    const [recomendedJobs, setRecomendedJobs] = useState([
        {isPromoted: false, title: 'MERN Stack Develeper', company: 'Teams', location: 'Seattle, USA (Remote)', applicants: 32, posted: '1 day ago'},
        {isPromoted: false, title: 'Backend Developer', company: 'Teams', location: 'Seattle, USA (Remote)', applicants: 78, posted: '1 day ago'},
        {isPromoted: false, title: '.NET Developer', company: 'Teams', location: 'Seattle, USA (Remote)', applicants: 220, posted: '1 day ago'},
        {isPromoted: false, title: 'Frontend Developer', company: 'Teams', location: 'Seattle, USA (Remote)', applicants: 172, posted: '1 day ago'},
        {isPromoted: false, title: 'UI/UX Designer', company: 'Teams', location: 'Seattle, USA (Remote)', applicants: 10, posted: '1 day ago'},
    ])
    
  return (
    <div>
        <div className='flex sm:items-center items-start justify-start sm:flex-row flex-col flex-wrap gap-y-2.5 text-teriatory mt-5'>
            <span className='mr-3.5 text-sm'>Similiar:</span>
            <button className='sm:w-fit w-full border border-[#737A91] rounded-[5px] text-xs hover:bg-[#737A91] hover:text-white transition-all duration-150 mr-3 py-2 px-3.5'>Frontend</button>
            <button className='sm:w-fit w-full border border-[#737A91] rounded-[5px] text-xs hover:bg-[#737A91] hover:text-white transition-all duration-150 mr-3 py-2 px-3.5'>Backend</button>
            <button className='sm:w-fit w-full border border-[#737A91] rounded-[5px] text-xs hover:bg-[#737A91] hover:text-white transition-all duration-150 mr-3 py-2 px-3.5'>Graphic Designer</button>
        </div>
        
        <div className='w-full h-px bg-[#E9ECEF] mt-2.5 mb-5'></div>

        {/* Featured Jobs */}
        <div className='flex items-center gap-3.5 mt-5 mb-3'>
            <h4 className='sm:text-lg'>Featured Jobs</h4>
            <Link to='/' className='sm:text-sm text-xs text-primary relative before:absolute before:bottom-0 before:h-px before:w-full before:bg-primary'>See Featured Jobs</Link>
        </div>
        <div className='flex items-center gap-4 flex-wrap justify-start'>
            {featuredJobs.map((item, index) => (
                <div key={index} className='w-full custom:max-w-[200px] bg-white py-2.5 px-5 rounded-[10px]'>
                    {item.isPromoted && <span className='text-[10px] font-semibold'>Promoted</span>}
                    <div className='flex items-start gap-2.5 mt-1'>
                        <div className='size-[40px] bg-[#FAFAFA] rounded-[10px] flex items-center justify-center'>
                            <img src={teamsLogo} alt="company logo" />
                        </div>
                        <div>
                            <h5 className='text-sm font-medium line-clamp-1'>{item.title}</h5>
                            <p className='text-xs font-medium -mt-1'>{item.company}</p>
                        </div>
                    </div>
                    <div className='flex items-center text-xs font-medium text-teriatory mt-1.5 gap-2.5'>
                        <img src={locationIcon} alt="location icon" />
                        <p>{item.location}</p>
                    </div>
                    <div className='flex items-center text-xs font-medium text-teriatory mt-1.5'>
                        <div className='flex items-center gap-2 pr-1'>
                            <img src={timeIcon} alt="clock icon" />
                            <p>{item.posted}</p>
                        </div>
                        <div className='text-primary border-l border-territory pl-1 whitespace-nowrap'>
                            {item.applicants} applicants
                        </div>
                    </div>
                    <div className='flex items-center justify-between mt-4'>
                        <button className='py-2.5 px-[30px] bg-primary hover:bg-hover-primary transition-all duration-200 rounded-[5px] text-white text-xs leading-[1.3em]'>Apply Now</button>
                        <button>
                            <img src={saveIcon} alt="save icon" />
                        </button>
                    </div>
                </div>
            ))}
        </div>

        <div className='w-full h-px bg-[#E9ECEF] my-6'></div>

        {/* Recommended Jobs */}
        <div className='flex items-center gap-3.5 mb-3'>
            <h4 className='sm:text-lg'>Recommended Jobs</h4>
            <Link to='/' className='sm:text-sm text-xs text-primary relative before:absolute before:bottom-0 before:h-px before:w-full before:bg-primary'>See Recommended Jobs</Link>
        </div>
        <div className='flex items-center gap-4 flex-wrap justify-start'>
            {recomendedJobs.map((item, index) => (
                <div key={index} className='w-full custom:max-w-[200px] bg-white py-2.5 px-5 rounded-[10px]'>
                    {item.isPromoted && <span className='text-[10px] font-semibold'>Promoted</span>}
                    <div className='flex items-start gap-2.5 mt-1'>
                        <div className='size-[40px] bg-[#FAFAFA] rounded-[10px] flex items-center justify-center'>
                            <img src={teamsLogo} alt="company logo" />
                        </div>
                        <div>
                            <h5 className='text-sm font-medium line-clamp-1'>{item.title}</h5>
                            <p className='text-xs font-medium -mt-1'>{item.company}</p>
                        </div>
                    </div>
                    <div className='flex items-center text-xs font-medium text-teriatory mt-1.5 gap-2.5'>
                        <img src={locationIcon} alt="location icon" />
                        <p>{item.location}</p>
                    </div>
                    <div className='flex items-center text-xs font-medium text-teriatory mt-1.5'>
                        <div className='flex items-center gap-2 pr-1'>
                            <img src={timeIcon} alt="clock icon" />
                            <p>{item.posted}</p>
                        </div>
                        <div className='text-primary border-l border-territory pl-1 whitespace-nowrap'>
                            {item.applicants} applicants
                        </div>
                    </div>
                    <div className='flex items-center justify-between mt-4'>
                        <button className='py-2.5 px-[30px] bg-primary hover:bg-hover-primary transition-all duration-200 rounded-[5px] text-white text-xs leading-normal'>Apply Now</button>
                        <button>
                            <img src={saveIcon} alt="save icon" />
                        </button>
                    </div>
                </div>
            ))}
        </div>
    </div>
  )
}

export default JobPosts