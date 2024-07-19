/* eslint-disable react/prop-types */
import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component"
import { motion } from "framer-motion"
import 'react-vertical-timeline-component'
import { styles } from "../style"
import { experiences } from '../constants/index'
import {SectionWrapper} from '../hoc'
import { textVariant } from "../utils/motion"

const ExperienceCard = ({experience}) => (
  <div className="mb-10 ">
  <VerticalTimelineElement
   contentStyle={{background: '#1d1836', color: '#fff'}}
   contentArrowStyle={{ borderRight: '7px solid #232631'}}
   date={experience.date}
   iconStyle={{background: experience.iconBg}}
   >
    <div>
    <h3 className="text-white text-[24px] font-bold">
      {experience.title}
    </h3>
    </div>
    <p className="text-secondary text-[16px] font-semibold" style={{margin: 0}}>{experience.company_name}</p>
    <ul className="mt-5 list-disc ml-5 space-y-2">
      {experience.points.map((point, index) =>(
        <li 
         key={`experience-point-${index}`}
         className="text-white-100 text-[14px] pl-1 tracking-wider">
          {point}
         </li>
      ))}
    </ul>
   </VerticalTimelineElement>
   </div>
)

const Experience = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
      <p className={styles.sectionSubText}>What i have done so far</p>
      <h2 className={styles.sectionHeadText}>Experience/Projects</h2>
      </motion.div>
      <div className="mt-20 flex flex-col">
        <VerticalTimeline>
          {experiences.map((experience, index) => (
            <ExperienceCard key={index} experience={experience} />
          ))}
        </VerticalTimeline>
      </div>
    </>
  )
}

export default SectionWrapper(Experience, 'work');