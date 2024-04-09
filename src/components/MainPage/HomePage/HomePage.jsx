import './HomePage.scss';
import '../../../styles/colors.scss';

export default function HomePage() {
  return (
    <div className='home-page white-text grey-background'>
      <div className='space-between-column'>
        <div>
          <h1 className='teal-text'>Hey there!</h1>
          <h2>Nice to meet you</h2>
        </div>
        <div>
          <h2>My name is</h2>
          <h3 className='teal-text'>Mario Edgar Pranata</h3>
          <h4 className=''>I'm a coder and I like to learn new things</h4>
        </div>
      </div>
    </div>
  );
}
