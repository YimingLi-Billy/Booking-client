import useFetch from "../../hooks/useFetch";
import "./featured.css";

const Featured = () => {
  const { data, loading, error } = useFetch(
    "/hotels/countByCity?cities=berlin,madrid,london"
  );

  return (
    <div className="featured">
      {loading ? (
        "Loading please wait"
      ) : (
        <>
          <div className="featuredItem">
            <img
              className="featuredImg"
              src="https://cdn.audleytravel.com/3625/2589/79/1322689-grafton-street-dublin.jpg"
              alt=""
            />
            <div className="featuredTitles">
              <h1>Berlin</h1>
              <h1>{data[0]} properties</h1>
            </div>
          </div>
          <div className="featuredItem">
            <img
              className="featuredImg"
              src="https://centralins.com/wp-content/uploads/2017/11/austin-texas-skyline.jpg"
              alt=""
            />
            <div className="featuredTitles">
              <h1>Madrid</h1>
              <h1>{data[1]} properties</h1>
            </div>
          </div>
          <div className="featuredItem">
            <img
              className="featuredImg"
              src="https://wallpaperaccess.com/full/5867911.jpg"
              alt=""
            />
            <div className="featuredTitles">
              <h1>London</h1>
              <h1>{data[2]} properties</h1>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Featured;
