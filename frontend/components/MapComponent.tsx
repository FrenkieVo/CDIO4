"use client";

import React, { useEffect, useState } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

interface MapComponentProps {
  onClick: () => void;
}

export default function MapComponent({ onClick }: MapComponentProps) {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  // Fix icon Leaflet
  const customIcon = L.icon({
    iconUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
    iconRetinaUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png",
    shadowUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [41, 41],
  });

  // Chưa mount → tránh lỗi hydrate
  if (!isMounted) {
    return (
      <div className="w-full h-full bg-gray-200 rounded-xl flex items-center justify-center">
        <p className="text-gray-600 font-medium">Đang tải bản đồ...</p>
      </div>
    );
  }

  return (
    <div className="relative w-full h-full rounded-xl overflow-hidden">
      {/* Bản đồ */}
      <MapContainer
        key="danang-map"
        center={[16.0471, 108.2068]}
        zoom={10}
        scrollWheelZoom
        className="w-full h-full z-0"
      >
        <TileLayer
          url="https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> &copy; <a href="https://carto.com/attributions">CARTO</a>'
        />

        <Marker position={[16.0471, 108.2068]} icon={customIcon}>
          <Popup>
            <div className="text-center p-3">
              <strong className="text-lg font-semibold">Đà Nẵng</strong>
              <p className="text-sm text-gray-600 mt-1">
                Nhấp để khám phá các điểm đến
              </p>
            </div>
          </Popup>
        </Marker>
      </MapContainer>

      {/* OVERLAY — đặt ở ngoài MapContainer */}
      <div
        className="absolute inset-0 z-10 cursor-pointer"
        onClick={onClick}
      />
    </div>
  );
}
