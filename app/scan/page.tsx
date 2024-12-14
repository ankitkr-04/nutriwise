"use client";
import CameraComponent from "@/components/CameraComponent";
import ScannedItem from "@/components/ScannedItem";
import { useState } from "react";

const ScanPage = () => {
  const [loading, setLoading] = useState(false);
  const [isCaptured, setIsCaptured] = useState(false);
  const [scannedItem, setScannedItem] = useState(null);

  const handleCapture = async (imageData) => {
    try {
      setIsCaptured(true); // Immediately show the loading skeleton
      setLoading(true);
      const imageUrl = URL.createObjectURL(imageData);

      const formData = new FormData();
      formData.append("file", imageData);
   

      // const response = await fetch("/api/upload", {
      //   method: "POST",
      //   body: formData,
      // });

      // if (!response.ok) {
      //   throw new Error("Failed to send image to server");
      // }

      // const result = await response.json();
      // console.log("Google Gemini API response:", result);

      // Simulate setting scanned item (replace with actual API response)
      setScannedItem({
        name: "Apple",
        healthScore: 92,
        description:
          "Contains vitamins and minerals that are good for your health and well-being. It is a good source of fiber and antioxidants. It is also low in calories.",
        image: imageUrl,
      });
    } catch (error) {
      console.error("Error capturing and sending image:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="w-full h-[100svh] bg-gray-900 relative overflow-hidden">
      {/* Live Camera Feed */}
      <CameraComponent onCapture={handleCapture} />

      {/* Floating Content */}
      {isCaptured && (
        <div className="absolute bottom-28 left-2 right-2 bg-white/70 rounded-3xl pt-6 px-4 shadow-lg">
          <ScannedItem scannedItem={scannedItem} loading={loading} />
        </div>
      )}
    </section>
  );
};

export default ScanPage;
