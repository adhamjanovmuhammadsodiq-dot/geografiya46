import React, { useState } from 'react';
import {
  Map,
  Compass,
  Layers,
  MapPin,
  Building2,
  Droplets,
  Mountain,
  Users,
  Maximize,
  Sparkles,
  Star,
  Check,
  Palette
} from 'lucide-react';
import { REGIONS_DATA, GEOGRAPHIC_LANDMARKS } from '../data/regionsData';
import { RegionInfo } from '../types';
import { useProgress } from '../context/ProgressContext';

export const MapPage: React.FC<{ initialRegionId?: string }> = ({ initialRegionId }) => {
  const { theme } = useProgress();
  const [selectedRegionId, setSelectedRegionId] = useState<string>(
    initialRegionId || 'tashkent-city'
  );
  const [colorMode, setColorMode] = useState<'atlas' | 'unified'>('atlas');
  const [showCities, setShowCities] = useState(true);
  const [showLabels, setShowLabels] = useState(true);
  const [hoveredRegionId, setHoveredRegionId] = useState<string | null>(null);

  const selectedRegion: RegionInfo =
    REGIONS_DATA.find((r) => r.id === selectedRegionId) || REGIONS_DATA[0];

  return (
    <div className="space-y-8 animate-in fade-in duration-300 pb-16">
      {/* Top Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div>
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-100 dark:bg-blue-950 text-blue-700 dark:text-blue-300 text-xs font-semibold mb-2">
            <Compass className="w-3.5 h-3.5" />
            <span>O‘zbekiston ma’muriy-hududiy xaritasi</span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            O‘zbekiston Respublikasi interaktiv xaritasi
          </h1>
          <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 mt-1">
            Xaritadagi viloyatlarni bosing, hududlar chegaralari, yirik shaharlar va tabiiy boyliklarni o‘rganing.
          </p>
        </div>

        {/* View Controls */}
        <div className="flex items-center gap-2 self-start md:self-auto flex-wrap">
          {/* Color Mode Switcher */}
          <div className="flex items-center p-1 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl shadow-xs">
            <button
              onClick={() => setColorMode('atlas')}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                colorMode === 'atlas'
                  ? 'bg-blue-600 text-white shadow-xs'
                  : 'text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800'
              }`}
            >
              <Palette className="w-3.5 h-3.5" />
              <span>Atlas ranglari</span>
            </button>
            <button
              onClick={() => setColorMode('unified')}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                colorMode === 'unified'
                  ? 'bg-blue-600 text-white shadow-xs'
                  : 'text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800'
              }`}
            >
              <Layers className="w-3.5 h-3.5" />
              <span>Yagona ko‘k</span>
            </button>
          </div>

          {/* Toggle Cities */}
          <button
            onClick={() => setShowCities(!showCities)}
            className={`px-3 py-2 rounded-2xl border text-xs font-bold transition-all cursor-pointer flex items-center gap-1.5 ${
              showCities
                ? 'bg-emerald-50 dark:bg-emerald-950/60 border-emerald-300 dark:border-emerald-800 text-emerald-800 dark:text-emerald-300'
                : 'bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-800 text-slate-500'
            }`}
          >
            <Building2 className="w-3.5 h-3.5" />
            <span>Shaharlar</span>
          </button>
        </div>
      </div>

      {/* Main Map + Inspector Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        {/* Map Canvas Frame */}
        <div className="lg:col-span-8 bg-white dark:bg-slate-900 rounded-3xl border border-slate-200/80 dark:border-slate-800 p-4 sm:p-6 shadow-xs relative overflow-hidden flex flex-col justify-between min-h-[500px]">
          {/* Top Right: Header & Uzbekistan National Flag (matching uploaded image!) */}
          <div className="absolute top-4 right-4 sm:top-6 sm:right-6 z-20 flex items-center gap-3 bg-white/95 dark:bg-slate-900/95 backdrop-blur-md px-3.5 py-2 rounded-2xl border border-slate-200/90 dark:border-slate-800 shadow-md">
            <div>
              <span className="block text-sm sm:text-base font-black tracking-wider text-slate-900 dark:text-white uppercase font-sans">
                UZBEKISTAN
              </span>
              <span className="block text-[10px] text-slate-500 dark:text-slate-400 font-medium">
                Respublika xaritasi
              </span>
            </div>

            {/* Official Flag of Uzbekistan */}
            <div className="w-12 h-7 rounded border border-slate-200 dark:border-slate-700 overflow-hidden shadow-xs shrink-0 flex flex-col">
              {/* Blue stripe with crescent and stars */}
              <div className="h-[30%] bg-[#1EB53A] order-3" />
              <div className="h-[4%] bg-[#D52B1E] order-2" />
              <div className="h-[32%] bg-white order-2" />
              <div className="h-[4%] bg-[#D52B1E] order-1" />
              <div className="h-[30%] bg-[#0099B5] order-1 relative flex items-center px-1">
                {/* Crescent Moon */}
                <div className="w-1.5 h-1.5 rounded-full border border-white border-r-transparent mr-1" />
                {/* Stars hint */}
                <div className="flex gap-0.5 text-[5px] text-white leading-none">
                  ★★★
                </div>
              </div>
            </div>
          </div>

          {/* Compass Rose */}
          <div className="absolute top-4 left-4 z-20 bg-white/90 dark:bg-slate-800/90 backdrop-blur-xs px-2.5 py-1.5 rounded-xl border border-slate-200 dark:border-slate-700 shadow-xs flex items-center gap-1.5 text-xs font-bold text-slate-700 dark:text-slate-200">
            <Compass className="w-4 h-4 text-blue-600 animate-spin-slow" />
            <span>Shimol ↑</span>
          </div>

          {/* SVG Map Container */}
          <div className="w-full aspect-[16/11] my-auto relative pt-8 sm:pt-6">
            <svg
              viewBox="0 0 940 700"
              className="w-full h-full select-none"
              preserveAspectRatio="xMidYMid meet"
            >
              <defs>
                <filter id="activeShadow" x="-10%" y="-10%" width="120%" height="120%">
                  <feDropShadow dx="0" dy="4" stdDeviation="6" floodOpacity="0.3" />
                </filter>
              </defs>

              {/* Neighboring Country Labels */}
              <text x="460" y="80" textAnchor="middle" className="text-[11px] font-bold fill-slate-300 dark:fill-slate-600 uppercase tracking-widest pointer-events-none">
                Qozog‘iston Respublikasi (Shimol)
              </text>
              <text x="140" y="520" textAnchor="middle" className="text-[11px] font-bold fill-slate-300 dark:fill-slate-600 uppercase tracking-widest pointer-events-none">
                Turkmaniston (G‘arb va Janub)
              </text>
              <text x="730" y="650" textAnchor="middle" className="text-[11px] font-bold fill-slate-300 dark:fill-slate-600 uppercase tracking-widest pointer-events-none">
                Afg‘oniston / Tojikiston
              </text>

              {/* Regions Layer */}
              <g id="regions-layer">
                {REGIONS_DATA.map((region) => {
                  const isSelected = selectedRegionId === region.id;
                  const isHovered = hoveredRegionId === region.id;

                  // Determine fill color based on mode and state
                  let fillColor = region.color;
                  if (colorMode === 'unified') {
                    fillColor = isSelected ? '#0284c7' : '#94a3b8';
                  } else if (theme === 'dark') {
                    fillColor = region.darkColor;
                  }

                  return (
                    <g
                      key={region.id}
                      className="cursor-pointer transition-transform"
                      onClick={() => setSelectedRegionId(region.id)}
                      onMouseEnter={() => setHoveredRegionId(region.id)}
                      onMouseLeave={() => setHoveredRegionId(null)}
                    >
                      <path
                        d={region.pathData}
                        fill={fillColor}
                        className={`transition-all duration-200 ${
                          isSelected
                            ? 'stroke-white dark:stroke-slate-100 stroke-[3] brightness-110 drop-shadow-lg'
                            : isHovered
                            ? 'stroke-white/90 stroke-2 brightness-105'
                            : 'stroke-white/80 dark:stroke-slate-900/60 stroke-1'
                        }`}
                        style={{
                          filter: isSelected ? 'url(#activeShadow)' : undefined
                        }}
                      />

                      {/* Region Name Label (matching reference atlas!) */}
                      {showLabels && region.id !== 'tashkent-city' && (
                        <text
                          x={region.labelX}
                          y={region.labelY}
                          textAnchor="middle"
                          pointerEvents="none"
                          className="text-[9px] sm:text-[10px] font-extrabold fill-white uppercase tracking-tight drop-shadow-[0_1px_2px_rgba(0,0,0,0.6)] select-none"
                        >
                          {region.atlasName}
                        </text>
                      )}
                    </g>
                  );
                })}
              </g>

              {/* Cities Layer (matching uploaded image!) */}
              {showCities && (
                <g id="cities-layer">
                  {REGIONS_DATA.flatMap((r) =>
                    r.cities.map((city, idx) => {
                      const isCapital = city.isCapital || city.name.includes('Tashkent');

                      return (
                        <g
                          key={`${r.id}-city-${idx}`}
                          className="cursor-pointer group"
                          onClick={(e) => {
                            e.stopPropagation();
                            setSelectedRegionId(r.id);
                          }}
                        >
                          {isCapital ? (
                            <>
                              {/* Capital Star Marker */}
                              <polygon
                                points={`${city.x},${city.y - 7} ${city.x + 2},${city.y - 2} ${city.x + 7},${city.y - 2} ${city.x + 3},${city.y + 1} ${city.x + 5},${city.y + 6} ${city.x},${city.y + 3} ${city.x - 5},${city.y + 6} ${city.x - 3},${city.y + 1} ${city.x - 7},${city.y - 2} ${city.x - 2},${city.y - 2}`}
                                className="fill-amber-300 stroke-blue-900 stroke-1 drop-shadow-sm group-hover:scale-125 transition-transform"
                              />
                              <text
                                x={city.x - 10}
                                y={city.y - 10}
                                textAnchor="end"
                                className="text-[11px] font-black fill-slate-900 dark:fill-white drop-shadow-[0_1px_1px_rgba(255,255,255,0.8)] dark:drop-shadow-[0_1px_1px_rgba(0,0,0,0.8)]"
                              >
                                Tashkent ★
                              </text>
                            </>
                          ) : (
                            <>
                              {/* Standard City Square / Dot Marker as in reference image */}
                              <rect
                                x={city.x - 2.5}
                                y={city.y - 2.5}
                                width="5"
                                height="5"
                                className="fill-slate-900 dark:fill-white stroke-white dark:stroke-slate-900 stroke-[0.8] group-hover:scale-150 transition-transform"
                              />
                              <text
                                x={city.x + 5}
                                y={city.y + 3}
                                textAnchor="start"
                                className="text-[9px] font-bold fill-slate-900 dark:fill-white drop-shadow-[0_1px_1px_rgba(255,255,255,0.7)] dark:drop-shadow-[0_1px_1px_rgba(0,0,0,0.8)]"
                              >
                                {city.name}
                              </text>
                            </>
                          )}
                        </g>
                      );
                    })
                  )}
                </g>
              )}
            </svg>
          </div>

          {/* Quick Region Pill Selector Bar */}
          <div className="pt-4 border-t border-slate-100 dark:border-slate-800">
            <div className="flex items-center justify-between mb-2">
              <span className="text-[11px] font-bold text-slate-500 uppercase tracking-wider">
                Tezkor tanlash (14 ta hudud):
              </span>
              <span className="text-[11px] text-blue-600 dark:text-blue-400 font-semibold">
                Tanlangan: {selectedRegion.name}
              </span>
            </div>
            <div className="flex flex-wrap gap-1.5 max-h-24 overflow-y-auto pr-1">
              {REGIONS_DATA.map((r) => {
                const isSelected = selectedRegionId === r.id;
                return (
                  <button
                    key={r.id}
                    onClick={() => setSelectedRegionId(r.id)}
                    className={`px-2.5 py-1 rounded-xl text-xs font-bold transition-all cursor-pointer flex items-center gap-1.5 ${
                      isSelected
                        ? 'bg-blue-600 text-white shadow-xs scale-102'
                        : 'bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700'
                    }`}
                  >
                    <span
                      className="w-2.5 h-2.5 rounded-full"
                      style={{ backgroundColor: r.color }}
                    />
                    <span>{r.name.replace(' viloyati', '').replace(' Respublikasi', '')}</span>
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* Detailed Region Inspector Card */}
        <div className="lg:col-span-4 bg-white dark:bg-slate-900 rounded-3xl border border-slate-200/80 dark:border-slate-800 p-6 shadow-xs space-y-6">
          <div className="space-y-1">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span
                  className="w-3.5 h-3.5 rounded-full"
                  style={{ backgroundColor: selectedRegion.color }}
                />
                <span className="text-[10px] font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400">
                  {selectedRegion.atlasName}
                </span>
              </div>
              <span className="text-[10px] px-2 py-0.5 rounded-md bg-slate-100 dark:bg-slate-800 font-mono text-slate-500">
                14 ma’muriy birlik
              </span>
            </div>

            <h2 className="text-xl sm:text-2xl font-black text-slate-900 dark:text-white">
              {selectedRegion.name}
            </h2>

            <p className="text-xs text-slate-500 dark:text-slate-400 flex items-center gap-1.5 pt-1">
              <MapPin className="w-3.5 h-3.5 text-blue-600 shrink-0" />
              <span>
                Markazi: <strong className="text-slate-800 dark:text-slate-200">{selectedRegion.center}</strong>
              </span>
            </p>
          </div>

          {/* Key Metrics */}
          <div className="grid grid-cols-2 gap-3">
            <div className="p-3.5 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/60 dark:border-slate-700/60">
              <div className="flex items-center gap-1.5 text-slate-500 text-[11px] mb-1">
                <Maximize className="w-3.5 h-3.5 text-blue-500" />
                <span>Maydoni</span>
              </div>
              <p className="text-sm font-bold text-slate-900 dark:text-white font-mono">
                {selectedRegion.areaKm2.toLocaleString()} km²
              </p>
            </div>

            <div className="p-3.5 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/60 dark:border-slate-700/60">
              <div className="flex items-center gap-1.5 text-slate-500 text-[11px] mb-1">
                <Users className="w-3.5 h-3.5 text-emerald-500" />
                <span>Aholisi</span>
              </div>
              <p className="text-sm font-bold text-slate-900 dark:text-white font-mono">
                {selectedRegion.population}
              </p>
            </div>
          </div>

          {/* Yirik shaharlari */}
          <div className="space-y-1.5 text-xs">
            <h4 className="font-bold text-slate-900 dark:text-white flex items-center gap-1.5">
              <Building2 className="w-3.5 h-3.5 text-blue-500" />
              <span>Xaritada belgilangan shaharlar</span>
            </h4>
            <div className="flex flex-wrap gap-1.5">
              {selectedRegion.cities.map((city, idx) => (
                <span
                  key={idx}
                  className="px-2.5 py-1 rounded-lg bg-blue-50 dark:bg-blue-950/60 text-blue-700 dark:text-blue-300 border border-blue-200/60 dark:border-blue-800/60 font-semibold text-xs flex items-center gap-1"
                >
                  {city.isCapital && <Star className="w-3 h-3 text-amber-500 fill-amber-500" />}
                  <span>{city.name}</span>
                </span>
              ))}
            </div>
          </div>

          {/* Relyefi va Tabiati */}
          <div className="space-y-1.5 text-xs">
            <h4 className="font-bold text-slate-900 dark:text-white flex items-center gap-1.5">
              <Mountain className="w-3.5 h-3.5 text-amber-500" />
              <span>Relyefi va geografik tabiati</span>
            </h4>
            <p className="text-slate-600 dark:text-slate-300 leading-relaxed bg-slate-50 dark:bg-slate-800/50 p-3 rounded-xl border border-slate-200/50 dark:border-slate-700/50">
              {selectedRegion.landscape}
            </p>
          </div>

          {/* Daryolari */}
          <div className="space-y-1.5 text-xs">
            <h4 className="font-bold text-slate-900 dark:text-white flex items-center gap-1.5">
              <Droplets className="w-3.5 h-3.5 text-sky-500" />
              <span>Daryolari va suvlari</span>
            </h4>
            <div className="flex flex-wrap gap-1.5">
              {selectedRegion.rivers.map((river, idx) => (
                <span
                  key={idx}
                  className="px-2.5 py-1 rounded-lg bg-sky-50 dark:bg-sky-950/60 text-sky-800 dark:text-sky-300 border border-sky-200/60 dark:border-sky-800/60 text-xs font-semibold"
                >
                  {river}
                </span>
              ))}
            </div>
          </div>

          {/* Diqqatga sazovor joylari */}
          <div className="space-y-2 text-xs">
            <h4 className="font-bold text-slate-900 dark:text-white flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5 text-amber-500" />
              <span>Mashhur joylari va obidalari</span>
            </h4>
            <ul className="space-y-1.5">
              {selectedRegion.notableFeatures.map((item, idx) => (
                <li
                  key={idx}
                  className="flex items-start gap-2 text-slate-600 dark:text-slate-300"
                >
                  <span className="text-blue-500 font-bold mt-0.5">•</span>
                  <span className="leading-snug">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
