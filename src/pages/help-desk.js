import Sidebar from "@/components/helpdeskSidebar";

const HelpDesk = () => {
	return (
		<>
			<div className="page-dicussion">
				<div className="page-discussion__inner ">
					{/* SIDEBAR */}
					<Sidebar />
				</div>

				<div className="feedback">
					<h3>What do you need help with?</h3>

					<div className="card">
						<div className="card-inner">
							<div className="box">
								<img src="/icons/request_new_software.png" alt="" />
								<p>Request New Software</p>
							</div>
							<div className="box">
								<img src="/icons/view_status.png" alt="" />
								<p>
									Check <br /> Request Status
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>

			<style jsx>
				{`
					.page-dicussion {
						display: flex;
						margin-top: 100px;
					}

					.feedback {
						margin-left: -280px;
					}

					h1 {
						font-size: 4rem;
					}
					.feedback-p {
						color: blue;
						font-size: 3rem;
					}

					.card {
						margin-top: 30px;
						background-color: white;
						padding: 10px;
						border-radius: 10px;
						width: 280%;
						box-shadow: 0 3px 5px 3px rgba(0, 0, 0, 0.05);
					}

					.card-inner {
						display: flex;
						justify-content: center;
						padding: 50px;
					}

					.box {
						display: flex;
						align-items: center;
						flex-direction: column;
						border: 1px solid grey;
						border-radius: 10px;
						width: 150px;
						padding: 10px;
						text-align: center;
						margin-left: 20px;
					}
				`}
			</style>
		</>
	);
};

export default HelpDesk;
