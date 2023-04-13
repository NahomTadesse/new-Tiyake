import Header from "../components/Header/Header"
import Login from "../components/Login/Login"

export default function LoginPage(){
    return(
        <div className='max-w-[400px] w-full mx-auto bg-white p-4'>
             {/* <Header
                heading="Login to your account"
                paragraph="Don't have an account yet? "
                linkName="Signup"
                linkUrl="/signup"
                /> */}
            <Login/>
        </div>
    )
}
