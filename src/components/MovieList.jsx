import { Row, Spinner } from "react-bootstrap";
import SingleMovie from "./SingleMovie";

const MovieList = ({ title, loading, fetchComments, comments, movies }) => (
	<>
		<h4>{title}</h4>
		<Row className="row-cols-1 row-cols-sm-2 row-cols-lg-4 row-cols-xl-6 mb-4 text-center">
			{loading
				? [...Array(6).keys()].map((movie) => (
						<div className="spinner-container" key={movie}>
							<Spinner animation="border" variant="light" />
						</div>
				  ))
				  
				: movies.length>0
				? movies.map((movie) => (
						<SingleMovie
							data={movie}
							key={movie.imdbID}
							comments={comments}
							fetchComments={fetchComments}
						/>
				  ))
				:<SingleMovie
				data={movies}
				key={movies.imdbID}
				comments={comments}
				fetchComments={fetchComments}
			/>
				}
		</Row>
	</>
);

export default MovieList;
