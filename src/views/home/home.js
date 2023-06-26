// Import du component et de la navbar
import HomeComponent from "../../components/home.component";
import Navbar from "../../layouts/navbar/navbar";


const HomePage = () => {
    return(
        <>
            <Navbar/>
            <HomeComponent/>
        </>
    )
}
export default HomePage;