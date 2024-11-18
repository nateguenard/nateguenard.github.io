import styles from './Splash.module.css';

const Splash = () => {
    return (
        <section className='splash'>
            <h1>Nathaniel Guenard</h1>
            <img src="images/NateGuenardHeadshot.jpg" width="200" alt="Nate's headshot"/>
            <p className = 'address'>945 College Ave Unit D1, Athens GA
                &bull; 215&hyphen;353&hyphen;6282
                &bull; nathanielguenard&commat;gmail.com
            </p>
            <p className = 'tagline'>I am passionate about working in a collaborative to solve business problems with technology solutions </p>
        </section>
    );
  };
  
  export default Splash;