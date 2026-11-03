import PrimaryButton from './PrimaryButton';
import heroImage from './image/example.png';

function HeroPage(){
    return(
        <section className="hero-container">
            <div className="hero-content">
                <h1>Зчитування показників зручно</h1>
                <p>
                    Надійний контроль, точність вимірювань та зручна передача показників. 
                    Обирайте найкраще обладнання від Optimeter для води, газу та електроенергії.
                </p>
                <PrimaryButton text="Перейти до каталогу" />
            </div>
            <div className="hero-image">
                <img src={heroImage} alt="example counter" className='hero-iam' />
            </div>
        </section>
    );
}

export default HeroPage;