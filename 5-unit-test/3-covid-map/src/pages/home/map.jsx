import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  ComposableMap,
  Geographies,
  ZoomableGroup,
  Geography,
} from "react-simple-maps";

const Map = () => {
  const navigate = useNavigate();
  const geoUrl =
    "https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json";
  const [hoveredCountry, setHoveredCountry] = useState("");

  // tıklanan ülkenin detay sayfasına yönlendir
  const redirect = (geo) => {
    navigate(`/detail/${geo.properties.name.toLowerCase()}`);
  };

  return (
    <div className="container p-0 mt-14 mb-20">
      <h1 className="px-5 pb-6 text-3xl font-bold bg-gradient-to-r from-blue-900 to-purple-900 bg-clip-text text-transparent">
        Ülke Seçin
      </h1>

      {/* Hovered Country Display */}
      <div className="px-5 mb-4 min-h-[32px]">
        {hoveredCountry && (
          <p className="text-xl font-semibold text-gray-700 transition-all duration-300">
            {hoveredCountry}
          </p>
        )}
      </div>

      <div className="border border-white/30 shadow-modern-lg md:rounded-2xl bg-gradient-to-br from-gray-50 to-gray-100 overflow-hidden backdrop-blur-sm">
        <ComposableMap>
          <ZoomableGroup>
            <Geographies geography={geoUrl}>
              {({ geographies }) =>
                geographies.map((geo) => (
                  <Geography
                    onClick={() => redirect(geo)}
                    onMouseEnter={() => setHoveredCountry(geo.properties.name)}
                    onMouseLeave={() => setHoveredCountry("")}
                    key={geo.rsmKey}
                    geography={geo}
                    style={{
                      default: {
                        fill: "white",
                        stroke: "#d1d5db",
                        strokeWidth: 0.8,
                        outline: "none",
                        transition: "all 0.3s ease",
                      },
                      hover: {
                        fill: "#DB2777",
                        stroke: "#BE185D",
                        strokeWidth: 1,
                        outline: "none",
                        cursor: "pointer",
                      },
                      pressed: {
                        fill: "#9D174D",
                        outline: "none",
                      },
                    }}
                  />
                ))
              }
            </Geographies>
          </ZoomableGroup>
        </ComposableMap>
      </div>
    </div>
  );
};

export default Map;
