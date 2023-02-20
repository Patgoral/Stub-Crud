import { Icon } from '@iconify/react';
import "./Map.css"


export default function Map() {
	return (
		
		<div className="map-container">
			<iframe className="map"
				title="start"
				src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3337.415349918206!2d-83.52590748363679!3d33.22942048083764!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88f6a19ebd48a5e1%3A0x68f1171bc11fc9bf!2sCedar%20Creek%20WMA%20Check%20Station!5e0!3m2!1sen!2sus!4v1676823987656!5m2!1sen!2sus"
				width="600"
				height="450"
				style={{
					border: 0
				}}
			></iframe>
		
		<div className="info-container">

		<Icon icon="material-symbols:calendar-today-rounded" width="60" height="60" />
		<h4>Date and Time</h4>
		<h5>Sat, Mar 25, 2023, 8:00 AM EDT</h5>
				<br></br>
		<Icon icon="material-symbols:person-pin-circle" width="60" height="60" />
		<h4>Location</h4>
		<h5>Cedar Creek WMA Check Station Checking Station Road Southwest Eatonton, GA 31024</h5>
		
		</div>
		</div>
	
	)
}

