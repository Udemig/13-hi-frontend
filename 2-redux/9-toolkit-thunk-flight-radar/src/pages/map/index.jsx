import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  Polyline,
} from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { useDispatch, useSelector } from "react-redux";
import getIcon from "../../utils/getIcon";
import { open } from "../../redux/slices/detailSlice";
import AirportMarker from "../../components/marker/airport-marker";
import { useEffect } from "react";
import { getFlights } from "../../redux/actions";

const Map = () => {
  const { flights } = useSelector((store) => store.flights);
  const { isLoading, info, route } = useSelector((store) => store.detail);
  const dispatch = useDispatch();

  // useEffect(() => {
  //   // her 5 saniyede bir api'dan güncel veriyi alır
  //   const id = setInterval(() => dispatch(getFlights()), 5000);

  //   // kullanıcı sayfadan ayrığında sayacı durdurur
  //   return () => clearInterval(id);
  // }, []);

  return (
    <MapContainer
      center={[38.960621, 35.452065]}
      zoom={6}
      scrollWheelZoom={true}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />

      {/* Uçağın rotasını çiz */}
      {!isLoading && (
        <Polyline positions={route} pathOptions={{ color: "red" }} />
      )}

      {/* Kalkış noktasını işaretle */}
      {!isLoading && info && (
        <AirportMarker info={info?.airport?.origin} title="Kalkış" />
      )}

      {/* İniş noktasını işaretle */}
      {!isLoading && info && (
        <AirportMarker info={info?.airport?.destination} title="İniş" />
      )}

      {flights.map((flight) => (
        <Marker
          key={flight.flightId}
          icon={getIcon(
            flight.direction,
            flight.flightId === info?.identification?.id,
            info?.identification?.id
          )}
          position={[flight.lat, flight.lon]}
        >
          <Popup>
            <div className="popup">
              <span>Kod: {flight.callsign}</span>
              <button onClick={() => dispatch(open(flight.flightId))}>
                Detay
              </button>
            </div>
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
};

export default Map;
