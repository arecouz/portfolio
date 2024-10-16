import MyAccordion from './MyAccordion';
import OssuInfo from './OssuInfo';
import FullStackInfo from './FullStackInfo';


const Learnings = () => {
  return (
    <>
      <MyAccordion
        label="Open Source Society University"
        content={<OssuInfo />}
      ></MyAccordion>
      <MyAccordion
        label="Full Stack Open"
        content={<FullStackInfo />}
      ></MyAccordion>
    </>
  );
};

export default Learnings;
