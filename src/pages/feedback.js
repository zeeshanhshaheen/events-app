import Sidebar from "@/components/feedbackSideBar";

const Feedback = () => {
	return (
		<>
			<div className="page-dicussion">
				<div className="page-discussion__inner ">
					{/* SIDEBAR */}
					<Sidebar />
				</div>

				<div className="feedback">
					<h1>Take a quick survey.</h1>
					<p className="feedback-p">Help us understand how you help better</p>

					<div className="card">
						<div className="card-inner">
							<h3>How do you enjoy using Zoom?</h3>
							<p>Select in reaction you have</p>
							<img src="/icons/emoji.png" alt="" />
						</div>
					</div>

					<div className="card">
						<div className="card-inner">
							<h3>How many different note taking softwares do you have?</h3>
							<p>Select in reaction you have</p>
							<div className="radio-buttons">
								<div>
									<input type="radio" id="0" name="drone" value="0" />
									{/* <label htmlFor="huey">0-2</label> */}
									<p className="radio-p">0 - 2</p>
								</div>

								<div>
									<input type="radio" id="2" name="drone" value="2" />
									<p className="radio-p">2 - 4</p>{" "}
								</div>
								<div>
									<input type="radio" id="2" name="drone" value="2" />
									<p className="radio-p">4 - 6</p>{" "}
								</div>
								<div>
									<input type="radio" id="0" name="drone" value="0" />
									<p className="radio-p">6 - 8</p>{" "}
								</div>
							</div>
						</div>
					</div>
					<div className="card">
						<div className="card-inner">
							<h3>Rate these features on Google meet.</h3>
							<p>Select in reaction you have</p>
							<div className="options">
								<div>
									<p>Video</p>
									<img src="/icons/emoji.png" alt="" />
								</div>
								<div>
									<p>Chatting</p>
									<img src="/icons/emoji.png" alt="" />
								</div>
								<div>
									<p>Connection</p>
									<img src="/icons/emoji.png" alt="" />
								</div>
								<div>
									<p>Audio</p>
									<img src="/icons/emoji.png" alt="" />
								</div>
								<div>
									<p>Breakout Room</p>
									<img src="/icons/emoji.png" alt="" />
								</div>
								<div>
									<p>Privacy</p>
									<img src="/icons/emoji.png" alt="" />
								</div>
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
						width: 200%;
						box-shadow: 0 3px 5px 3px rgba(0, 0, 0, 0.05);
					}

					.card-inner {
						margin-left: 20px;
					}

					.radio-buttons {
						display: flex;
						justify-content: space-around;
						margin-left: -190px;
						padding: 20px;
					}

					label {
						font-size: 1.5rem;
						margin: 10px;
					}

					.options {
						display: grid;
						grid-template-columns: 1fr 1fr 1fr;
					}

					.card-inner > p {
						font-size: 10px;
						color: grey;
					}

					input[type="radio"] {
						width: 20px;
						height: 20px;
					}

					.radio-p {
						float: right;
						margin-top: -2px;
						margin-left: 10px;
						font-size: 1.5rem;
					}
				`}
			</style>
		</>
	);
};

export default Feedback;
