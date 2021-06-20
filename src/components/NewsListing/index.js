import React from "react"
import {
    Button, Card, H5
} from "@blueprintjs/core";

const NewsListing = ({topNews}) => {
    return (
        <section>
      {topNews && topNews.length>=0 && topNews.map((news) =>{
          return(
            <Card elevation="4">
            <H5>
                <a href={news.url} target="_blank">{news.title}</a>
            </H5>
            <p>
               {news.description}
            </p>
    </Card>
          )
      })   } 
      </section>
    )
}
export default NewsListing