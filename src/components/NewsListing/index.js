import React from "react"
import {
    Button, Card, H5
} from "@blueprintjs/core";

const NewsListing = () => {
    return (
        <Card elevation="4">
                    <H5>
                        <a href="#">Analytical applications</a>
                    </H5>
                    <p>
                        User interfaces that enable people to interact smoothly with data, ask better questions, and
                        make better decisions.
                    </p>
                    <Button text="Explore products"  />
       </Card>
    )
}
export default NewsListing