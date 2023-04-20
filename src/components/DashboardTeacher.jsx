import { React, useState, useEffect } from "react";
import StudentExam from "./StudentExam";
import img1 from "../assets/images/profile.png";
import Button from "@mui/material/Button";
import TeachersProfile from "./TeachersProfile";
import AddExamComponent from "./AddExamComponent";
import Leaderboard from "./LeaderBoard";
import Stat from "./stat";
import rankingImg from "../assets/images/ranking.png";
import statImg from "../assets/images/stat.png";
import examImg from "../assets/images/exam.png";
import Notifications from './Notifications/Notifications.jsx'

export default function DashBoard() {
	const [showExam, setShowExam] = useState(false);
	const [showProfile, setShowProfile] = useState(true);
	const [showLeaderboard, setShowLeaderboard] = useState(false);
	const [stat, setStat] = useState(false);
    const [showNotif, setShowNotif] = useState(false)

	return (
		<div style={{ display: "flex", flexDirection: "row" }}>
			<div
				style={{
					display: "flex",
					flexDirection: "column",
					backgroundColor: "#ff5f1f",
					width: "35%",
					height: window.innerHeight,
				}}
			>
				<div
					style={{
						display: "flex",
						alignSelf: "center",
						marginTop: 20,
						flexDirection: "column",
					}}
				>
					<img src={img1} alt="" width={100} height={100} style={{}} />
					<button
						onClick={() => {
							setShowProfile(true);
							setShowExam(false);
							setShowLeaderboard(false);
                            setShowNotif(false);
						}}
						style={{
							marginTop: 5,
							backgroundColor: "#040720",
							borderWidth: 1,
							borderColor: "#040720",
							borderRadius: 10,
							color: "white",
						}}
					>
						View Profile
					</button>
				</div>

				<div
					style={{
						display: "flex",
						alignSelf: "center",
						marginTop: 20,
						flexDirection: "column",
					}}
				>
					<div
						style={{ display: "flex", flexDirection: "row", marginBottom: 20 }}
					>
						<Button
							onClick={() => {
								setShowExam(true);
								setShowProfile(false);
								setShowLeaderboard(false);
								setStat(false);
                                setShowNotif(false);
							}}
							style={{ color: "white" }}
						>
							{" "}
							Add Exam
							<img
								src={examImg}
								alt=""
								height={30}
								width={30}
								style={{ marginLeft: 5, marginBottom: 10 }}
							/>
						</Button>
					</div>
					<div
						style={{ display: "flex", flexDirection: "row", marginBottom: 20 }}
					>
						<Button
							style={{ color: "white" }}
							onClick={() => {
								setShowExam(false);
								setShowProfile(false);
								setShowLeaderboard(true);
								setStat(false);
                                setShowNotif(false);
							}}
						>
							Leader Board
							<img
								src={rankingImg}
								alt=""
								height={30}
								width={30}
								style={{ marginLeft: 5, marginBottom: 10 }}
							/>
						</Button>
					</div>
					<div
						style={{ display: "flex", flexDirection: "row", marginBottom: 20 }}
					>
						<Button
							style={{ color: "white" }}
							onClick={() => {
								setShowExam(false);
								setShowProfile(false);
								setShowLeaderboard(false);
								setStat(true);
                                setShowNotif(false);
							}}
						>
							Statistics
							<img
								src={statImg}
								alt=""
								height={30}
								width={30}
								style={{ marginLeft: 5, marginBottom: 15 }}
							/>
						</Button>
                    </div>
                    <div>
                        <Button
							style={{ color: "white" }}
							onClick={() => {
								setShowExam(false);
								setShowProfile(false);
								setShowLeaderboard(false);
								setStat(false);
                                setShowNotif(true);
							}}
						>
							Notifications
							<img
								src={statImg}
								alt=""
								height={30}
								width={30}
								style={{ marginLeft: 5, marginBottom: 15 }}
							/>
						</Button>
					</div>
				</div>
			</div>
			<div style={{ width: window.innerWidth }}>
				{showExam ? (
					<AddExamComponent />
				) : showProfile ? (
					<TeachersProfile />
				) : showLeaderboard ? (
					<Leaderboard />
				) : stat ? (
					<Stat />
				) : showNotif ? (
                    <Notifications />
                ) : (
					""
				)}
			</div>
		</div>
	);
}
