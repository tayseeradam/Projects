
import Input from "../components/Input"
import Button from "../components/Button"
import Error from "../components/Error"
import Heading from "../components/Heading"

const Bookmarks =() =>{
    return(
    <div>
        <Heading  content={'Bookmarks System'} className={`text-2xl text-center font-bold text-blue-400 my-4
            w-[100%] mx-auto  p-3`}/>

    <form className=" w-[70%]  rounded-[60px] bg-blue-300 flex items-center m-auto " >
        <Input type={'text'} placeholder={" Website Name"} />
        <Input type={'URL'}placeholder={"Website Link"}/>
        <Button buttonText={"Add"} />
        {/* <Button /> */}
        <p className="text"></p>
    </form>
    <Error content={""}/>
        </div>
    )
};

export default Bookmarks;
