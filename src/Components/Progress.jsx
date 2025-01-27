export default function Progress({ targetAmount, totalDonations }) {
	return (
		<section className='progress'>
			<h2>
				Raised <span className='secondary'>${totalDonations}</span> of
				<span className='secondary'> ${targetAmount}</span>
			</h2>
		</section>
	);
}
