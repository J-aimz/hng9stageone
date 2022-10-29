
import Links from './componet/Links';

import profileImg from './imgs/jaimz.jpg'
import slack from './imgs/slack.png'
import github from './imgs/github-logo.png'
import ingressImg from './imgs/ingress.webp'
import zuriImg from './imgs/zuri-internship-img.svg'

function App() {
  return (
    <div className='body'>
      <div className='body-con'>

        <header className="hearder">
          <img id='profile__img' src={profileImg} alt="headshoot image of james adah(j_aimz)" />
          <h3 id='twitter'>@j_aimz</h3>
        </header>
        
        <main className="main-con">
            <Links id={'twitter'} title={'Twitter Link'} link={'https://twitter.com/j_amiz'}/>
            <Links id={'btn__zuri'} title={'Zuri Team'} link={'https://training.zuri.team'}/>
            <Links id={'books'} title={'Zuri Books'} link={'http://books.zuri.team'}/>
            <Links id={'book__python'} title={'Python Books'} link={'https://books.zuri.team/python-for-beginners?ref_id=j_aimz'}/>
            <Links id={'pitch'} title={'Background Check for Coders'} link={'https://background.zuri.team'}/>
            <Links id={'book__design'} title={'Design Books'} link={'https://books.zuri.team/design-rules'}/>

            <div className='logo-con'>
              <img src={slack} />
              <img src={github} />
            </div>
        </main>

      </div>
      <footer className='footer'>
        <img className='footer-logo' src={zuriImg} />
        <h5>HNG Internship 9 Frontend Task</h5>
        <img className='footer-logo' src={ingressImg} />
      </footer>
    </div>
  );
}

export default App;
