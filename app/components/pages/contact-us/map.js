"use client";

import "leaflet/dist/leaflet.css";
import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.webpack.css";
import "leaflet-defaulticon-compatibility";

import {
    MapContainer,
    Marker,
    Popup,
    TileLayer,
} from "react-leaflet";

export default function ContactUsMap() {
    const position = [30.0729, 31.0199];

    return (
        <div className="container mx-auto">
            <div className="relative w-full aspect-video top-[70px] md:top-[140px]">
                <MapContainer
                    center={position}
                    className="absolute top-0 left-0 w-full h-full"
                    zoom={11}
                    scrollWheelZoom
                >
                    <TileLayer
                        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    />
                    <Marker position={position}>
                        <Popup>
                            This Marker icon is displayed correctly with
                            <i>leaflet-defaulticon-compatibility</i>
                        </Popup>
                    </Marker>
                </MapContainer>
            </div>
        </div>
    );
}
