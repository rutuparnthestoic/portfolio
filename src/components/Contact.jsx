import { useState, useRef } from "react"
import {motion} from 'framer-motion'
import emailjs from "@emailjs/browser"
import {styles} from '../style'
import {BallCanvas, EarthCanvas} from './canvas'
import {SectionWrapper} from '../hoc'
import {slideIn} from '../utils/motion'
import { socialLinks } from "../constants"
import { Image } from "@react-three/drei"

//gowvYiti3Wnbh_iL1
//service_ify75h9
//template_qw432sq

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
   const { name,value } = e.target;
   setForm({...form, [name]: value});
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs.send(
      "service_ify75h9",
      "template_qw432sq",
      {
        from_name: form.name,
        to_name: 'Rithvik',
        from_email: form.email,
        to_email: 'rutuparnthestoic@gmail.com',
        message: form.message,
      },
      'gowvYiti3Wnbh_iL1'
    )
    .then(() => {
      setLoading(false);
      alert('Thank you for contacting, I will get back to you as soon as possible!');

      setForm(
        {
          name: '',
          email: '',
          message: ''
        }
      )
    }, (error) => {
      setLoading(false)
      console.log(error)
      alert('Something went wrong !')
    })
  };

  return (
    <div className="xl:mt-12 xl:flex-row flex-col-reverse flex gap-10 overlfow-hidden">
    <motion.div
     variants={slideIn('left', 'tween', 0.2, 1)}
     className=" flex-[0.50] bg-black-100 p-8 rounded-2xl">
      <p className={styles.heroSubText}>
        Get in touch
      </p>
      <h3 className={styles.heroHeadText}>
        Contact
      </h3>
      <form 
       ref={formRef}
       onSubmit={handleSubmit}
       className="mt-12 flex flex-col gap-8"
       >
        <label className="flex flex-col">
          <span className="text-white font-medium mb-4">Your Name</span>
          <input 
           type="text"
           name="name"
           value={form.name}
           onChange={handleChange}
           placeholder="What's your name?"
           className="bg-tertiary py-4 px-6
           placeholder:text-secondary
           text-white rounded-lg outlined-none
           border-none">

           </input>
        </label>
        <label className="flex flex-col">
          <span className="text-white font-medium mb-4">Your Email</span>
          <input 
           type="email"
           name="email"
           value={form.email}
           onChange={handleChange}
           placeholder="What's your email?"
           className="bg-tertiary py-4 px-6
           placeholder:text-secondary
           text-white rounded-lg outlined-none
           border-none">

           </input>
        </label>
        <label className="flex flex-col">
          <span className="text-white font-medium mb-4">Your Message</span>
          <textarea 
          rows='7'
           name="message"
           value={form.message}
           onChange={handleChange}
           placeholder="What's your message?"
           className="bg-tertiary py-4 px-6
           placeholder:text-secondary
           text-white rounded-lg outlined-none
           border-none">

           </textarea>
        </label>
        <button
        type="submit"
        className="bg-tertiary py-3 px-8 outline-none w-fit text-white font-bold shadow-md shadow-primary rounded-xl"
        >
        {loading ? "Sending..." : "Send"}
        </button>
       </form>
       <div className="flex flex-col items-center justify-center gap-4">
       
        <hr className="mt-10 border-1 border-gray-500 opacity-50 w-[80%]" />
        <div className="mt-2">
        <span className="text-white font-medium mb-4">Other links</span>
        </div>
        <div className="flex justify-center  gap-10">
        {socialLinks.map((item) => (
        <a href={item.link} key={item.name}>
          <img src={item.icon} className="max-w-[50px]"/>
        </a>
      ))}
     </div>
       </div>
     </motion.div>
    </div>
  )
}

export default SectionWrapper(Contact, "contact");