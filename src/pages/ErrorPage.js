import { Container, Button } from "react-bootstrap"
import { NavLink } from "react-router-dom"



export default function ErrorPage(){
    return(
        <Container fluid className="p-5 vh-100">
            <Container className="p-5 d-flex flex-column justify-content-center align-items-center vh-100">
                <h1 className="display-3 fw-bold">Page NOT FOUND</h1>
                <p className="mb-5 display-6">The page you are trying to view does not exist.</p>
                <Button className="px-5 rounded-pill" as ={NavLink} to="/">Home</Button>
            </Container>
        </Container>
    )
}