import React from "react";
import * as pose from "@mediapipe/pose";
import { useEffect } from "react";

//styling
import '../../styles/App.css';

const Canvas = ({ canvasRef, results }) => {
	const dConnect = window.drawConnectors;
	const dLandmarks = window.drawLandmarks;

	useEffect(() => {
		// Setting h , w of canvas

		if (results !== undefined) {
			canvasRef.current.width = 1080;
			canvasRef.current.height = 720;
			const canvasElement = canvasRef.current;
			const canvasCtx = canvasElement.getContext("2d");
			try {
				canvasCtx.save();
				canvasCtx.clearRect(0, 0, canvasElement.width, canvasElement.height);
				canvasCtx.drawImage(results.image, 0, 0, canvasElement.width, canvasElement.height);
				//draw
				if (results.poseLandmarks) {
					//come to the fornt
					canvasCtx.globalCompositeOperation = "source-over";
					//skeleton
					dConnect(canvasCtx, results.poseLandmarks, pose.POSE_CONNECTIONS, {
						color: "#ffffff",
						lineWidth: 2,
					});
					//dots
					dLandmarks(canvasCtx, results.poseLandmarks, {
						color: "pink",
						lineWidth: 0,
            
					});
					canvasCtx.restore();

					// position results (x,y)
					// const poseResults = results.poseWorldLandmarks;
					// console.log(poseResults)
				}
			} catch (error) {}
			// console.log(results);
		}
	}, [canvasRef, dConnect, dLandmarks, results]);

	return (
		<div>
			<canvas className="canvas" ref={canvasRef}></canvas>
		</div>
	);
};

export default Canvas;
