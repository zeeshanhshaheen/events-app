import Link from "next/link";
import React from "react";

const ResourceDetail = () => {
	return (
		<>
			<div className="detail">
				<div className="left-detail">
					<Link href="/resources">
						<img src="/icons/cross.png" alt="" className="cross" />
					</Link>

					<div className="person-detail">
						<img src="/icons/dp.png" alt="" className="dp" />
						<div className="name">
							<p>Dave Smith</p>
							<p className="date"> 4th July 2020 | 4:25 PM</p>
							<div className="paragraph-video">
								<p>
									Google Drive is a cloud storage solution with 15GB of storage available for free
									and paid plans with additional storage and features. Google Drive is a…
									user-friendly option thanks to its simple interface and integration with Google
									Docs, Sheets, and Slides, cloud-native apps that enable your team to collaborate
									effectively in real time. Create and share content eith your team on Day 1, with
									no need to migrate from excisting tools. <br /> <br /> Drive integrates with and
									complements your team's existing technology. Collaborate in Microsift Office files
									without the need to convert file formats, and edit and store over 100 additional
									file types, including PDFs, CAD files, images, and more. Google's powerful search,
									performance, and reliability. And features like Priority use AI to predict what
									you're looking for and surface the mose relavent content.
								</p>

								<img src="/icons/video.png" alt="" className="video-img" />
							</div>
						</div>
					</div>
				</div>

				<div className="image">
					<img src="/icons/star.png" alt="" className="star" />
				</div>
			</div>

			<style jsx>
				{`
					.left-detail {
						display: flex;
					}
					.detail {
						display: flex;
						justify-content: space-between;
						margin-top: 50px;
						padding-left: 50px;
						padding-right: 50px;
					}

					.date {
						font-size: 10px;
						margin-top: -15px;
					}

					.name {
						margin-top: -8px;
						margin-left: 10px;
					}

					.cross {
						width: 30px;
						height: 30px;
						cursor: pointer;
					}

					.star {
						width: 30px;
						height: 30px;
					}

					.dp {
						width: 40px;
						height: 40px;
						border-radius: 50%;
					}

					.person-detail {
						display: flex;
						padding-left: 20px;
					}

					.person-detail > p {
						margin-top: -5px;
						padding-left: 8px;
					}

					.paragraph-video {
						display: flex;
					}

					.paragraph-video > p {
						width: 500px;
						font-size: 20px;
						margin-right: 500px;
					}

					.video-img {
						width: 550px;
						height: 400px;
						margin-top: 50px;
					}
				`}
			</style>
		</>
	);
};

export default ResourceDetail;
