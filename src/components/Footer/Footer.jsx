import './Footer.scss';

export default function Footer() {
  return (
    <div className='footer'>
      <div className='navigation'>
        <div>
          <a href="/home">Home</a>
        </div>
        <div>
          <a href="/about">About</a>
        </div>
        <div>
          <a href="/experiences">Experiences</a>
        </div>
        <div>
          <a href="/contact">Contact</a>
        </div>
      </div>
    </div>
  );
}
