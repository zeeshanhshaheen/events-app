import Sidebar from "@/components/resourcessidebar";
import ActionBar from "@/components/actionBar";
import FloatingActions from "@/components/floatingActions";
import SectionResources from "@/components/resourcessection";

const Resources = () => {
	return (
		<>
			<div className="page-discussion">
				<div className="page-discussion__header action-bar">
					<div />
					<ActionBar />
					<div />
				</div>
				<div className="page-discussion__inner">
					<Sidebar />
					<SectionResources linkHref="/" linkLabel="View more resources" className="resources">
						<SectionResources.Item
							title="Tips and tricks on Google Drive"
							topic="Teaching Online"
							date="4th July 2020"
							time="4:24PM"
						>
							Google Drive is a cloud storage solution with 15GB of storage available for free and
							paid plans with additional storage and features. Google Drive is a… user-friendly
							option thanks to its simple interface and integration with Google Docs.
						</SectionResources.Item>
						<SectionResources.Item
							title="23 Essential Tips for Working Remotely"
							topic="Teaching Online"
							date="4th July 2020"
							time="4:24PM"
						>
							Cut yourself some slack. Working from home can be a big transition. You might feel any
							combination of lonely, isolated, stressed, frustrated, anxious, unmotivated, or — on
							the other hand — relieved, relaxed, energized, or productive. It’s all OK and normal.
							Any transition takes time to get used to, so try to be easy on yourself.
						</SectionResources.Item>
						<SectionResources.Item
							title="Stay Connected While Working from Home and Remotely"
							topic="Health and Wellness"
							date="4th July 2020"
							time="4:24PM"
						>
							Times being what they are, you may have found that you’re suddenly leading a remote
							team, and now you’re wondering how to lead from afar. Or you’re concerned that
							suddenly splitting your team physically will result in a fractured, less-efficient
							team.
						</SectionResources.Item>
						<SectionResources.Item
							title="Cardinal Group Case study for-Google Drive "
							topic="Teaching Online"
							date="4th July 2020"
							time="4:25PM"
						>
							Google Drive is a cloud storage solution with 15GB of storage available for free and
							paid plans with additional storage and features. Google Drive is a… user-friendly
							option thanks to its simple interface and integration with Google Docs.
						</SectionResources.Item>
						<SectionResources.Item
							title="Getting Started with Zoom Calls "
							topic="Health and Wellness"
							date="4th July 2020"
							time="4:25PM"
						>
							Cut yourself some slack. Working from home can be a big transition. You might feel any
							combination of lonely, isolated, stressed, frustrated, anxious, unmotivated, or — on
							the other hand — relieved, relaxed, energized, or productive. It’s all OK and normal.
							Any transition takes time to get used to, so try to be easy on yourself.
						</SectionResources.Item>
						<SectionResources.Item
							title="Tips on how to increase efficiency with Zoom"
							topic="Health and Wellness"
							date="4th July 2020"
							time="4:24PM"
						>
							Times being what they are, you may have found that you’re suddenly leading a remote
							team, and now you’re wondering how to lead from afar. Or you’re concerned that
							suddenly splitting your team physically will result in a fractured, less-efficient
							team.
						</SectionResources.Item>
						<SectionResources.Item
							title="How to effectively use Canva"
							topic="Teaching Online"
							date="4th July 2020"
							time="4:25PM"
						>
							Google Drive is a cloud storage solution with 15GB of storage available for free and
							paid plans with additional storage and features. Google Drive is a… user-friendly
							option thanks to its simple interface and integration with Google Docs.
						</SectionResources.Item>
						<SectionResources.Item
							title="How to remotly conduct online classes"
							topic="Health and Wellness"
							date="4th July 2020"
							time="4:25PM"
						>
							Cut yourself some slack. Working from home can be a big transition. You might feel any
							combination of lonely, isolated, stressed, frustrated, anxious, unmotivated, or — on
							the other hand — relieved, relaxed, energized, or productive. It’s all OK and normal.
							Any transition takes time to get used to, so try to be easy on yourself.
						</SectionResources.Item>
						<SectionResources.Item
							title="Stay Connected with google meet"
							topic="Health and Wellness"
							date="4th July 2020"
							time="4:24PM"
						>
							Times being what they are, you may have found that you’re suddenly leading a remote
							team, and now you’re wondering how to lead from afar. Or you’re concerned that
							suddenly splitting your team physically will result in a fractured, less-efficient
							team.
						</SectionResources.Item>
					</SectionResources>
				</div>
				<FloatingActions />
			</div>

			<style jsx>
				{`
					.action-bar {
						margin-left: -100px;
					}

					.resources {
						margin-left: 140px;
						padding: 0px 10px;
					}
				`}
			</style>
		</>
	);
};

export default Resources;
