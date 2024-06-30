import DisplayLottie from './DisplayLottie';
import coding from './coding.json';

const Lottie = () => {
    return (
        <div className='bg-[#0a192f] flex justify-center items-center'> 
            <DisplayLottie animationData={coding} />
        </div>
    );
}

export default Lottie;