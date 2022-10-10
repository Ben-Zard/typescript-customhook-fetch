import  './Section.css';
type Props = {
  children: React.ReactNode;
}
const Section = ({children}:Props) => {
  return <section className='section'>{children}</section>;
};

export default Section;
