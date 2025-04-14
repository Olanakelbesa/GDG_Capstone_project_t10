import { FaArrowRight } from "react-icons/fa6";

function CategoryBox() {
  const scrollToStory = () => {
    const storysection = document.getElementById("stories");
    if (storysection) {
      storysection.scrollIntoView({ behavior: "smooth" });
    }
  };
  const scrollToDestination = () => {
    const destinationsection = document.getElementById("popular");
    if (destinationsection) {
      destinationsection.scrollIntoView({ behavior: "smooth" });
    }
  };
  const scrollToTipsAndArticle = () => {
    const articlesection = document.getElementById("article");
    if (articlesection) {
      articlesection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <div className="mx-0 flex">
        <div className="rounded w-full shadow-lg mx-14 my-14 mr-0">
          <h3 className="text-left font-bold mt-3 mb-3 text-4xl">Categories</h3>

          <div className="flex items-center rounded hover:bg-gray-300 hover:cursor-pointer transform hover:scale-110 transition duration-150">
            <FaArrowRight className="m-5" />
            <p className="m-3">Travel</p>
          </div>

          <hr className="opacity-15" />

          <div
            className="flex items-center rounded hover:bg-gray-300 hover:cursor-pointer transform hover:scale-110 transition duration-150 cursor-pointer" onClick={scrollToTipsAndArticle}>
            <FaArrowRight className="m-5" />
            <p className="m-3">Tips</p>
          </div>

          <hr className="opacity-15" />
          <div className="flex items-center rounded hover:bg-gray-300 hover:cursor-pointer transform hover:scale-110 transition duration-150" onClick={scrollToStory}>
            <FaArrowRight className="m-5" />
            <p>Stories</p>
          </div>
          <hr className="opacity-15" />
          <div className="flex items-center rounded hover:bg-gray-300 hover:cursor-pointer transform hover:scale-110 transition duration-150" onClick={scrollToDestination}>
            <FaArrowRight className="m-5" />
            <p>Destination</p>
          </div>
          <hr className="opacity-15" />
        </div>
      </div>
    </>
  );
}

export default CategoryBox;