export default function Stats() {
	return (
		<div className='flex items-center space-x-8 pt-4'>
			<div>
				<div className='text-3xl font-bold text-gray-900'>Fast</div>
				<div className='text-sm text-gray-600'>Booking in minutes</div>
			</div>
			<div>
				<div className='text-3xl font-bold text-gray-900'>Secure</div>
				<div className='text-sm text-gray-600'>Stellar escrow</div>
			</div>
			<div>
				<div className='text-3xl font-bold text-gray-900'>Trusted</div>
				<div className='text-sm text-gray-600'>On-chain ratings</div>
			</div>
		</div>
	);
}
