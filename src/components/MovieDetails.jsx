import { Outlet, Link } from "react-router-dom";
import { Cast } from "./Cast";
import { Reviews } from "./Reviews";

export const MovieDetails = () => {
    return(
        <div>
                <p>
                Movie details
                </p>
            
                <Link to="cast" element={<Cast/>} />
                <Link to="reviews" element={<Reviews/>} />
                <Outlet/>
        </div>
    );
}