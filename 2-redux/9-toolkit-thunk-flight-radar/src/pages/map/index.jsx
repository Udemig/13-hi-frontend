import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { useDispatch, useSelector } from "react-redux";
import getIcon from "../../utils/getIcon";
import { open } from "../../redux/slices/detailSlice";

const Map = () => {
  const { flights } = useSelector((store) => store.flights);
  const dispatch = useDispatch();

  return (
    <MapContainer center={[38.960621, 35.452065]} zoom={6} scrollWheelZoom={true}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />

      {flights.map((flight) => (
        <Marker icon={getIcon(flight.direction)} position={[flight.lat, flight.lon]}>
          <Popup>
            <div className="popup">
              <span>Kod: {flight.callsign}</span>
              <button onClick={() => dispatch(open(flight.flightId))}>Detay</button>
            </div>
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
};

export default Map;
