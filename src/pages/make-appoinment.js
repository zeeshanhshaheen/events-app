import React from "react";
import Sidebar from "@/components/makeAppSidebar";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
const MakeAppoinment = () => {
	return (
		<>
			<div className="page-dicussion appoinment">
				<div className="page-discussion__inner ">
					{/* SIDEBAR */}
					<Sidebar />
				</div>
				<div className="calander">
					<h2>Book an appoinment with IT Department</h2>
					<div>
						<div className="calander-sheet">
							<div className="cal-width">
								<div>
									<h3>30 Minutes meeting</h3>
									<p>Web conferencing will be provided after confirmation</p>
								</div>
								<div className="cal">
									<Calendar />
								</div>
							</div>
						</div>
						<button className="btn-book">Book</button>
					</div>
				</div>
			</div>

			<style jsx>
				{`
					.appoinment {
						margin-top: 90px;
					}
					.calander {
						margin-left: 280px;
					}

					.calander-sheet {
						background-color: white;
						width: 80%;
						padding: 20px;
						box-shadow: 0 0 3px 3px rgba(0, 0, 0, 0.05);
						border-radius: 10px;
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
					.btn-book {
						border-radius: 40px;
						width: 140px;
						padding: 15px;
						margin-left: 1180px;
						margin-top: 30px;
						background-color: #787878;
						color: white;
						font-weight: bold;
					}

					.cal-width {
						display: flex;
						flex-direction: column;
						justify-content: center;
						align-items: center;
					}
				`}
			</style>
		</>
	);
};

export default MakeAppoinment;
