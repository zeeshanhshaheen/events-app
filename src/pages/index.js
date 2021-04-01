import { Fragment } from "react";
import "react-calendar/dist/Calendar.css";

import Timeline from "@/components/timeline";
import SectionUpdate from "@/components/sectionUpdate";
import SectionRequest from "@/components/sectionRequest";
import SectionAppointments from "@/components/sectionAppointment";
import { Otter, Slack } from "@/components/icons";
import SectionResources from "@/components/sectionResources";

const Home = () => {
	return (
		<Fragment>
			{/* SECTION LATEST UPDATE */}
			<SectionUpdate>
				<SectionUpdate.Title>
					Fall 2020 Reopening Guidelines, Policies, Procedures and Protocols
				</SectionUpdate.Title>
				<SectionUpdate.Text>
					On July 1, the College announced plans for a partial return to campus for the Fall 2020
					term. We recently posted reopening guidelines, policies, procedures and protocols that
					will be in place beginning in the Fall term. Current campus access protocols remain in
					place until the Fall term begins. See the pages linked below and in the left hand column
					for details. Please contact ehsxx with questions regarding safety and/or the guidelines
					and protocols established by the College for the Fall term.
				</SectionUpdate.Text>
				<SectionUpdate.Date>6th August 2020</SectionUpdate.Date>
			</SectionUpdate>

			{/* SECTION SOFTWARE REQUEST STATUS */}
			<SectionRequest>
				<Timeline>
					<Timeline.Item
						Icon={<Otter />}
						brandName="Otter"
						helpText="Estimated Completion August 03, 2020 5 Days"
						step={1}
					/>
					<Timeline.Item
						Icon={<Slack />}
						brandName="Slack"
						helpText="You have unlimited access when using school email"
						step={4}
					/>
				</Timeline>
			</SectionRequest>

			{/* SECTION UPCOMING APPOINTMENTS */}
			<SectionAppointments>
				<SectionAppointments.Item
					date="Aug 23, 2020"
					time="1:00PM - 1:30PM"
					createdAt="August 8th, 2020"
				>
					Appointment with Alex Monroe
				</SectionAppointments.Item>
				<SectionAppointments.Item isEmpty>Add a new Appointment</SectionAppointments.Item>
			</SectionAppointments>

			{/* SECTION RESOURCES */}
			<SectionResources linkHref="/" linkLabel="View more resources">
				<SectionResources.Item
					title="Tips and tricks on Google Drive"
					topic="Teaching Online"
					date="4th July 2020"
					time="4:24PM"
				>
					Google Drive is a cloud storage solution with 15GB of storage available for free and paid
					plans with additional storage and features. Google Drive is a… user-friendly option thanks
					to its simple interface and integration with Google Docs.
				</SectionResources.Item>
				<SectionResources.Item
					title="23 Essential Tips for Working Remotely"
					topic="Teaching Online"
					date="4th July 2020"
					time="4:24PM"
				>
					Cut yourself some slack. Working from home can be a big transition. You might feel any
					combination of lonely, isolated, stressed, frustrated, anxious, unmotivated, or — on the
					other hand — relieved, relaxed, energized, or productive. It’s all OK and normal. Any
					transition takes time to get used to, so try to be easy on yourself.
				</SectionResources.Item>
				<SectionResources.Item
					title="Stay Connected While Working from Home and Remotely"
					topic="Health and Wellness"
					date="4th July 2020"
					time="4:24PM"
				>
					Times being what they are, you may have found that you’re suddenly leading a remote team,
					and now you’re wondering how to lead from afar. Or you’re concerned that suddenly
					splitting your team physically will result in a fractured, less-efficient team.
				</SectionResources.Item>
			</SectionResources>
		</Fragment>
	);
};

export default Home;
