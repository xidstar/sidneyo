import { HiOutlineCode, HiOutlinePencil } from "react-icons/hi";
import { GrPaint } from "react-icons/gr";
import dev from './img/dev.gif';
import collaborate from './img/collaborate.gif';
import custom from './img/custom-art.gif';

const cardInfo = [
  {
    logo: <HiOutlineCode />,
    img: dev,
    heading: 'Web Development',
    text: 'I plan, design, build, test and maintain scalable front end web applications.'
  },
  {
    logo: <HiOutlinePencil />,
    img: collaborate,
    heading: 'Interactive Design/ Animation',
    text: 'I collaborate with designers to plan and execute interactions and animations on web applications using modern front end libraries and technologies.'
  },
  {
    logo: <GrPaint />,
    heading: 'Custom Art',
    img: custom,
    text: 'I do custom illustrations, logo designs and artwork, leveraging design tools like Figma, Adobe CS and Procreate.'
  }
]

export default cardInfo;