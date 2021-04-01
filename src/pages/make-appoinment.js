import React from "react";
import Sidebar from "@/components/makeAppSidebar";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
const MakeAppoinment = () => {
	return (
		<>
			<div className="page-dicussion">
				<div className="page-discussion__inner ">
					{/* SIDEBAR */}
					<Sidebar />
				</div>
				<div className="calander">
					<h2>Book an appoinment with IT Department</h2>
					<div className="calander-sheet">
						<div>
							<h3>30 Minutes meeting</h3>
							<p>Web conferencing will be provided after confirmation</p>
						</div>
						<div className="cal">
							<Calendar />
						</div>
					</div>
				</div>
			</div>

			<style jsx>
				{`
					.calander {
						margin-left: 280px;
					}

					.calander-sheet {
						background-color: white;
						width: 70%;
						padding: 20px;
					}
					h3,
					p {
						color: #838383;
					}
					p {
						font-size: 10px;
						margin-top: -10px;
					}

					.react-calendar__month-view__days__day--weekend {
						color: #757575;
					}
				`}
			</style>
		</>
	);
};

export default MakeAppoinment;
