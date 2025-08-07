import { useDispatch, useSelector } from "react-redux";
import c from "../../utils/nullCheck";
import { open } from "../../redux/slices/detailSlice";
import ReactPaginate from "react-paginate";
import { useState } from "react";

const List = () => {
  // uçuş verilerine abone ol
  const { isLoading, flights } = useSelector((store) => store.flights);
  const dispatch = useDispatch();

  // kaçıncı elemandan itibaren gösterilecek
  const [start, setStart] = useState(0);

  // sayfa başına eleman sayısı
  const perPage = 12;

  // kaçıncı elemana kadar gösterilecek
  const end = start + perPage;

  // slice methoud ile ekrana basılacak elemanları al
  const currentFlights = flights.slice(start, end);

  // yeni sayfa geçildiğinde state değerini güncelle
  const handleChange = (e) => {
    setStart(e.selected * perPage);
  };

  return (
    <div className="list-container ">
      <div className="table-responsive">
        <table class="table table-hover ">
          <thead>
            <tr>
              <th scope="col">id</th>
              <th scope="col">Kod</th>
              <th scope="col">Enlem</th>
              <th scope="col">Boylam</th>
              <th scope="col">Derece</th>
              <th scope="col">Hız</th>
              <th scope="col">İrtifa</th>
              <th scope="col"></th>
            </tr>
          </thead>

          <tbody>
            {isLoading
              ? new Array(12).fill("").map(() => (
                  <tr>
                    <td scope="row" className="text-white">
                      .
                    </td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                  </tr>
                ))
              : currentFlights.map((flight) => (
                  <tr>
                    <td>{c(flight.flightId)}</td>
                    <td>{c(flight.callsign)}</td>
                    <td>{c(flight.lat)}</td>
                    <td>{c(flight.lon)}</td>
                    <td>{c(flight.direction)}</td>
                    <td>{c(flight.speed)} kt</td>
                    <td>{c(flight.altitude)} ft</td>
                    <td>
                      <button onClick={() => dispatch(open(flight.flightId))}>Detay</button>
                    </td>
                  </tr>
                ))}
          </tbody>
        </table>

        <div className="pagination-container">
          <ReactPaginate
            breakLabel="..."
            nextLabel=">"
            previousLabel="<"
            onPageChange={handleChange}
            pageRangeDisplayed={5}
            pageCount={Math.ceil(flights.length / perPage)}
            renderOnZeroPageCount={null}
            className="pagination"
            pageClassName="page-item"
            previousClassName="page-item"
            nextClassName="page-item"
            pageLinkClassName="page-link"
            previousLinkClassName="page-link"
            nextLinkClassName="page-link"
            activeClassName="active"
          />
        </div>
      </div>
    </div>
  );
};

export default List;
