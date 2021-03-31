import { Data } from './Data';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';

const Accordion = ({ id, active, setActive }) => {
  return (
    <>
      {Data.map((item) => (
        <div
          onClick={() => {
            setActive(item.id);
          }}
          className='accordion'
          key={item.id}
        >
          <div className='accordion__header'>
            <h2>{item.question}</h2>
            <span>
              {active === item.id ? <FaChevronUp /> : <FaChevronDown />}
            </span>
          </div>
          <div
            className={
              (active === item.id ? 'active' : '') + ' accordion__body'
            }
          >
            <p>{item.answer}</p>
          </div>
        </div>
      ))}
    </>
  );
};

export default Accordion;
