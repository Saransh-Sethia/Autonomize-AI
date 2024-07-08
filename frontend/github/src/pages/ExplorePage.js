import javascript from '../assets/javascript.svg';
import typescript from '../assets/typescript.svg';
import c from '../assets/c.svg';
import python from '../assets/python.svg';
import java from '../assets/java.svg';

const ExplorePage = () => {
	return (
		<div className='px-4'>
			<div className='bg-glass max-w-2xl mx-auto rounded-md p-4'>
				<h1 className='text-xl font-bold text-center'>Explore Popular Repositories</h1>
				<div className='flex flex-wrap gap-2 my-2 justify-center'>
					<img src={javascript} alt='JavaScript' className='h-11 sm:h-20 cursor-pointer' />
					<img src={typescript} alt='TypeScript logo' className='h-11 sm:h-20 cursor-pointer' />
					<img src={c} alt='C++ logo' className='h-11 sm:h-20 cursor-pointer' />
					<img src={python} alt='Python logo' className='h-11 sm:h-20 cursor-pointer' />
					<img src={java} alt='Java logo' className='h-11 sm:h-20 cursor-pointer' />
				</div>
			</div>
		</div>
	);
};

export default ExplorePage
