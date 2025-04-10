

function Recent_posts(props) {


  return (
    <div className="flex flex-col gap-4 p-4 bg-gray-100 rounded overflow-hidden hover:shadow-2xl transition-shadow duration-300 ease-in m-3"> 
      
       <div className="flex w-full h-full  ">
          <img src={props.img} alt="RECENT POSTS" className="float-left rounded overflow-hidden pl-0  pr-6  w-full h-32 object-cover sm:w-1/2 sm:h-24 md:w-1/3 md:h-28 lg:w-full"/>
          <div>
            <p className="font-bold">{props.text}</p>
            <br />
            <span>{props.date}</span>

          </div>
       </div>
       
        
        
      
    </div>
  );
}
Recent_posts.defaultProps = {
  img: "https://via.placeholder.com/150",
  text: "Default post text",
  date: "No date provided"
};
export default Recent_posts;