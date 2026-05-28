"use client";

import Image from "next/image";
import { useState } from "react";
import { Mail, Phone } from "lucide-react";

import mapImage from "@/assset/map-images.svg";
import pinImage from "@/assset/pin.png";

const offices = {
	global: [
		{ name: "Mumbai Office", location: "Mumbai 400 001, India", phone: "+91 22 6752 5899", email: "mumbai@elomagroup.com", cx: 630, cy: 248 },
		{ name: "Delhi Office", location: "New Delhi 110 001, India", phone: "+91 11 4123 4567", email: "delhi@elomagroup.com", cx: 624, cy: 225 },
		{ name: "Bengaluru Office", location: "Bengaluru 560 001, India", phone: "+91 80 4123 4567", email: "bengaluru@elomagroup.com", cx: 632, cy: 262 },
		{ name: "Dubai Office", location: "Business Bay, Dubai, UAE", phone: "+971 4 555 0123", email: "dubai@elomagroup.com", cx: 585, cy: 233 },
		{ name: "Singapore Office", location: "Raffles Place, Singapore", phone: "+65 6123 4567", email: "singapore@elomagroup.com", cx: 710, cy: 278 },
		{ name: "London Office", location: "Canary Wharf, London, UK", phone: "+44 20 7123 4567", email: "london@elomagroup.com", cx: 468, cy: 145 },
		{ name: "New York Office", location: "Midtown, New York, USA", phone: "+1 212 555 0199", email: "newyork@elomagroup.com", cx: 235, cy: 178 }
	],
	australia: [
		{ name: "Sydney Office", location: "Sydney NSW 2000, Australia", phone: "+61 2 5550 1234", email: "sydney@elomagroup.com", cx: 778, cy: 358 },
		{ name: "Melbourne Office", location: "Melbourne VIC 3000, Australia", phone: "+61 3 5550 2234", email: "melbourne@elomagroup.com", cx: 768, cy: 375 },
		{ name: "Perth Office", location: "Perth WA 6000, Australia", phone: "+61 8 5550 3234", email: "perth@elomagroup.com", cx: 722, cy: 355 },
		{ name: "Brisbane Office", location: "Brisbane QLD 4000, Australia", phone: "+61 7 5550 4234", email: "brisbane@elomagroup.com", cx: 790, cy: 340 },
		{ name: "Adelaide Office", location: "Adelaide SA 5000, Australia", phone: "+61 8 5550 5234", email: "adelaide@elomagroup.com", cx: 750, cy: 365 }
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
								<Image src={mapImage} alt="World map" width={1170} height={780} priority />
								<div className="gpm-map-overlay">
									{currentOffices.map((office) => {
										const left = `${(office.cx / 960) * 100}%`;
										const top = `${(office.cy / 500) * 100}%`;
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
