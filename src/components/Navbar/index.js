import React from "react"
import icon from '../../assets/image/Daily.gif'
import {
    Alignment,
    Button,
    Navbar,
} from "@blueprintjs/core";

const Nav = () => {
    return (
        <Navbar className="bp3-dark">
            <Navbar.Group align={Alignment.LEFT}>
                <img src={icon} alt="this slowpoke moves" width="50" />
                <Navbar.Heading>DailyWatch</Navbar.Heading>
            </Navbar.Group>
            <Navbar.Group align={Alignment.RIGHT}>
                <Navbar.Divider />
                <Button className="bp3-minimal" icon="home" text="Home" />
                <Button className="bp3-minimal" icon="document" text="Files" />
            </Navbar.Group>
        </Navbar>
    )
}
export default Nav