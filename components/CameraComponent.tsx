import React, { useState, useRef, useEffect } from "react";
import { Camera, Zap } from "lucide-react";

const CameraComponent = ({ onCapture }) => {
  const [isFlashOn, setFlashOn] = useState(false);
  const videoRef = useRef(null);
  const canvasRef = useRef(null);

  useEffect(() => {
    const getCameraStream = async () => {
      try {
        const stream = await navigator.mediaDevices.getUserMedia({
          video: { facingMode: "environment" },
        });
        if (videoRef.current) {
          videoRef.current.srcObject = stream;
        }
      } catch (error) {
        console.error("Error accessing camera:", error);
      }
    };

    getCameraStream();

    return () => {
      if (videoRef.current && videoRef.current.srcObject) {
        const tracks = videoRef.current.srcObject.getTracks();
        tracks.forEach((track) => track.stop());
      }
    };
  }, []);

  const toggleFlash = () => {
    setFlashOn((prev) => !prev);
    console.log(`Flash turned ${isFlashOn ? "off" : "on"}`);
  };

  const captureImage = () => {
    if (canvasRef.current && videoRef.current) {
      const canvas = canvasRef.current;
      const context = canvas.getContext("2d");
      context.drawImage(videoRef.current, 0, 0, canvas.width, canvas.height);
      canvas.toBlob((blob) => {
        if (blob) {
          onCapture(blob);
        }
      }, "image/jpeg");
    }
  };

  return (
    <div className="w-full h-full relative">
      {/* Camera View */}
      <video
        ref={videoRef}
        autoPlay
        playsInline
        muted
        className="absolute inset-0 w-full h-full object-cover"
      />
      <canvas ref={canvasRef} className="hidden" width={1280} height={720}></canvas>

      {/* Controls */}
      <div className="absolute top-4 left-4 flex items-center space-x-4">
        <button
          onClick={toggleFlash}
          className="action-btn bg-white p-2 rounded-full"
        >
          <Zap size={24} className={isFlashOn ? "text-yellow-500" : "text-gray-500"} />
        </button>
      </div>

      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2">
        <button
          onClick={captureImage}
          className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-lg"
        >
          <Camera size={32} />
        </button>
      </div>
    </div>
  );
};

export default CameraComponent;
