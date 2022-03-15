import Navbar from "./Navbar";

export default function Layout({ children, withOutLogin , navCondition}) {
    return (
        <>
             <Navbar />
            {children}
        </>
    )
}