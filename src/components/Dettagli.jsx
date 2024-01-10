import { useParams } from "react-router-dom"
import { useEffect, useState } from "react"
import SingleMovie from "./SingleMovie";
import MovieList from "./MovieList";



export function Dettagli({fetchComments}){
    const params=useParams()
    const [filmData, setFilmData] = useState(null);
    const [comments,setComments] = useState("")
    const [loading,setLoading] = useState(true)

    useEffect(() => {
        const fetchFilmDetails = async () => {
          try {
            const response = await fetch(`http://www.omdbapi.com/?apikey=7dcf0c13&i=${params.idfilm}`);
            if (response.ok) {
              const data = await response.json();
              setFilmData(data);
              setLoading(false)
              console.log(data)
            } else {
              console.error("Failed to fetch film details");
            }
          } catch (error) {
            console.error("An error occurred while fetching film details:", error);
          }
        };
    
        fetchFilmDetails();
      }, [params.idfilm]);
     useEffect(()=>{
        const fetchComments = async () => {
            const COMMENTS_URL =
                "https://striveschool-api.herokuapp.com/api/comments/";
            try {
                const response = await fetch(COMMENTS_URL + params.idfilm, {
                    headers: {
                        Authorization:
                            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTljMTVlYWUwZGQxZDAwMTgyZDE4MzUiLCJpYXQiOjE3MDQ3MjgwNDIsImV4cCI6MTcwNTkzNzY0Mn0.d3NYogX9x1Trv4HDeBugXlpKHp-yZ-GurJVZjxwKc_w",
                    },
                });
                if (response.ok) {
                    setComments(await response.json());
                } else {
                    console.log("an error occurred");
                }
            } catch (error) {
                console.log(error);
            }
        };
        fetchComments()
     },[filmData]) 
      useEffect(() => {
        console.log("filmData changed:", filmData);
      }, [filmData]);
    
    console.log(params.idfilm)
    if(filmData===null)
    {
        return("API is loading")
    }
    return(

        //  <SingleMovie
		//  					data={filmData}
		//  					key={filmData.imdbID}
		// 					 comments={comments}
		// 					 fetchComments={filmData}
		// 				 />
        <MovieList
												title={filmData.title}
												loading={loading}
												fetchComments={comments}
												comments={comments}
												movies={filmData}
											/>
        
    )

}
