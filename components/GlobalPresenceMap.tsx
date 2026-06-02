"use client";

import Image from "next/image";
import { useState } from "react";
import { Mail, Phone } from "lucide-react";

import pinImage from "@/assset/pin.png";
const mapSrc = "/map-images.svg";

// Natural SVG map size (used to convert lon/lat -> pixels)
const MAP_W = 1170;
const MAP_H = 780;

const offices = {
	global: [
		{ name: "Gurugram Office", location: "Gurugram, Haryana, India", phone: "+91 124 555 0100", email: "gurugram@elomagroup.com", lat: 28.4595, lon: 77.0266 },
		{ name: "Dubai Office", location: "Business Bay, Dubai, UAE", phone: "+971 4 555 0123", email: "dubai@elomagroup.com", lat: 25.2048, lon: 55.2708 },
		{ name: "Singapore Office", location: "Raffles Place, Singapore", phone: "+65 6123 4567", email: "singapore@elomagroup.com", lat: 1.3521, lon: 103.8198 },
		{ name: "Hong Kong Office", location: "Central, Hong Kong", phone: "+852 5550 1234", email: "hongkong@elomagroup.com", lat: 22.3193, lon: 114.1694 },
		{ name: "London Office", location: "Canary Wharf, London, UK", phone: "+44 20 7123 4567", email: "london@elomagroup.com", lat: 51.5072, lon: -0.1276 },
		{ name: "Toronto Office", location: "Toronto, Ontario, Canada", phone: "+1 416 555 0123", email: "toronto@elomagroup.com", lat: 43.6532, lon: -79.3832 },
		{ name: "Washington Office", location: "Washington, D.C., USA", phone: "+1 202 555 0123", email: "washington@elomagroup.com", lat: 38.9072, lon: -77.0369 }
	],
	australia: [
		{ name: "Sydney Office", location: "Sydney NSW 2000, Australia", phone: "+61 2 5550 1234", email: "sydney@elomagroup.com", lat: -33.8688, lon: 151.2093 },
		{ name: "Melbourne Office", location: "Melbourne VIC 3000, Australia", phone: "+61 3 5550 2234", email: "melbourne@elomagroup.com", lat: -37.8136, lon: 144.9631 },
		{ name: "Perth Office", location: "Perth WA 6000, Australia", phone: "+61 8 5550 3234", email: "perth@elomagroup.com", lat: -31.9505, lon: 115.8605 },
		{ name: "Brisbane Office", location: "Brisbane QLD 4000, Australia", phone: "+61 7 5550 4234", email: "brisbane@elomagroup.com", lat: -27.4698, lon: 153.0251 },
		{ name: "Adelaide Office", location: "Adelaide SA 5000, Australia", phone: "+61 8 5550 5234", email: "adelaide@elomagroup.com", lat: -34.9285, lon: 138.6007 }
	]
} as const;

type TabKey = keyof typeof offices;
type Office = (typeof offices)[TabKey][number];

function Tooltip({ office }: { office: Office }) {
	return (
		<div className="map-tooltip">
			<p className="map-tooltip-name">{office.name}</p>
			<p className="map-tooltip-loc">{office.location}</p>
			<div className="map-tooltip-row">
				<Phone size={11} />
				<span>{office.phone}</span>
			</div>
			<div className="map-tooltip-row">
				<Mail size={11} />
				<span>{office.email}</span>
			</div>
		</div>
	);
}

export default function GlobalPresenceMap() {
	const [tab, setTab] = useState<TabKey>("global");
	const [hovered, setHovered] = useState<Office | null>(null);

	const currentOffices = offices[tab];

	return (
		<>
			<style>{`
				.gpm-section { background: transparent; padding: 64px 0; }
				.gpm-container { max-width: 1200px; margin: 0 auto; padding: 0 24px; }

				.gpm-toggle-row { display: flex; align-items: center; justify-content: center; gap: 16px; margin-bottom: 32px; }
				.gpm-tab { font-size: 14px; font-weight: 600; color: #94a3b8; cursor: pointer; transition: color .2s; user-select: none; }
				.gpm-tab.active { color: #0b2342; }
				.gpm-switch { position: relative; width: 52px; height: 28px; }
				.gpm-switch input { opacity: 0; width: 0; height: 0; }
				.gpm-switch-track { position: absolute; inset: 0; border-radius: 14px; cursor: pointer; background: #0b2342; transition: background .3s; }
				.gpm-switch-thumb { position: absolute; top: 4px; left: 4px; width: 20px; height: 20px; border-radius: 50%; background: #fff; transition: transform .3s; box-shadow: 0 1px 4px rgba(0,0,0,.25); }
				.gpm-switch input:checked ~ .gpm-switch-thumb { transform: translateX(24px); }

				.gpm-map-card { border-radius: 20px; overflow: hidden; border: 1px solid transparent; background: transparent; box-shadow: none; }
				.gpm-map-header { padding: 20px 24px 0; }
				.gpm-map-title { font-size: 22px; font-weight: 700; color: #0b2342; }
				.gpm-map-sub { font-size: 13px; color: #64748b; margin-top: 2px; }
				.gpm-map-svg-wrap { position: relative; padding: 12px 16px 20px; }
				.gpm-map-image { position: relative; width: 100%; height: auto; }
				.gpm-map-image img { display: block; width: 100%; height: auto; }
				.gpm-map-overlay { position: absolute; inset: 0; }
				.gpm-map-dot { position: absolute; transform: translate(-50%, -50%); cursor: pointer; }
				.gpm-map-dot-ring { position: absolute; inset: -6px; border-radius: 999px; background: rgba(59, 79, 206, 0.35); animation: ring-pulse 2.4s ease-out infinite; }
				.gpm-map-dot-core { position: relative; width: 30px; height: 30px; }
				.gpm-map-tooltip { position: absolute; bottom: 18px; left: 50%; transform: translateX(-50%); white-space: nowrap; background: #0b2342; color: #ffffff; font-size: 12px; padding: 6px 10px; border-radius: 6px; box-shadow: 0 8px 24px rgba(0,0,0,.25); }

				.map-dot-ring { r: 7; fill: none; stroke: #3b4fce; stroke-width: 1.5; opacity: 0; animation: ring-pulse 2.4s ease-out infinite; }
				.map-dot-core { r: 4.5; fill: #3b4fce; cursor: pointer; transition: r .15s; }
				.map-dot-core:hover { r: 6.5; fill: #1e3a8a; }
				@keyframes ring-pulse { 0% { r: 5; opacity: .6; } 100% { r: 13; opacity: 0; } }

				.map-tooltip { background: #0b2342; color: #fff; border-radius: 10px; padding: 10px 14px; min-width: 190px; box-shadow: 0 8px 24px rgba(0,0,0,.25); font-size: 12px; line-height: 1.5; }
				.map-tooltip-name { font-weight: 700; font-size: 13px; margin-bottom: 2px; }
				.map-tooltip-loc { color: #94a3b8; margin-bottom: 6px; font-size: 11px; }
				.map-tooltip-row { display: flex; align-items: center; gap: 5px; color: #cbd5e1; margin-top: 2px; }
				.map-tooltip-row span { font-size: 11px; }

				.gpm-cards { display: none; }
			`}</style>

			<section className="gpm-section">
				<div className="gpm-container">
					<div className="gpm-toggle-row">
						<span className={`gpm-tab${tab === "australia" ? " active" : ""}`} onClick={() => setTab("australia")}>
							Office in Australia
						</span>
						<label className="gpm-switch">
							<input type="checkbox" checked={tab === "global"} onChange={(e) => setTab(e.target.checked ? "global" : "australia")} />
							<div className="gpm-switch-track" />
							<div className="gpm-switch-thumb" />
						</label>
						<span className={`gpm-tab${tab === "global" ? " active" : ""}`} onClick={() => setTab("global")}>
							Global Presence
						</span>
					</div>

					<div className="gpm-map-card">
						<div className="gpm-map-header">
							<p className="gpm-map-title">{tab === "global" ? "Our Global Presence" : "Our Offices in Australia"}</p>
							<p className="gpm-map-sub">
								{tab === "global"
									? `${currentOffices.length} offices across India, UAE, Singapore, UK & USA`
									: `${currentOffices.length} offices across Australia`}
							</p>
						</div>

						<div className="gpm-map-svg-wrap">
							<div className="gpm-map-image">
										<Image src={mapSrc} alt="World map" width={1170} height={780} unoptimized priority />
								<div className="gpm-map-overlay">
										{currentOffices.map((office) => {
											// project lat/lon to the SVG pixel space (equirectangular)
											const x = ((office.lon + 180) / 360) * MAP_W;
											const y = ((90 - office.lat) / 180) * MAP_H;
											const left = `${(x / MAP_W) * 100}%`;
											const top = `${(y / MAP_H) * 100}%`;
										return (
											<div
												key={office.name}
												className="gpm-map-dot"
												style={{ left, top }}
												onMouseEnter={() => setHovered(office as Office)}
												onMouseLeave={() => setHovered(null)}
											>
												<span className="gpm-map-dot-ring" />
												<span className="gpm-map-dot-core">
													<Image src={pinImage} alt="Location" width={30} height={30} />
												</span>
												{hovered?.name === office.name && (
													<span className="gpm-map-tooltip">{office.name}</span>
												)}
											</div>
										);
									})}
								</div>
							</div>
						</div>
					</div>

					<div className="gpm-cards">
						{currentOffices.map((card) => (
							<div key={card.name} className="gpm-card">
								<p className="gpm-card-name">{card.name}</p>
								<p className="gpm-card-loc">{card.location}</p>
								<div className="gpm-card-row">
									<Phone size={12} />
									{card.phone}
								</div>
								<div className="gpm-card-row">
									<Mail size={12} />
									{card.email}
								</div>
							</div>
						))}
					</div>
				</div>
			</section>

			{hovered ? null : null}
		</>
	);
}
