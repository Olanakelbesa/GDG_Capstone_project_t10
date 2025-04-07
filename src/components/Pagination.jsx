export default function Pagination({ currentPage, totalPages, onPageChange }) {
  const renderPageNumbers = () => {
    const pageNumbers = [];
    
    // Always show first page
    pageNumbers.push(
      <button
        key={1}
        onClick={() => onPageChange(1)}
        className={`px-3 py-1 rounded ${
          currentPage === 1 ? "bg-blue-600 text-white" : "bg-gray-200 hover:bg-gray-300"
        }`}
      >
        1
      </button>
    );

    // Show ellipsis if current page is far from start
    if (currentPage > 3) {
      pageNumbers.push(<span key="start-ellipsis" className="px-1">...</span>);
    }

    // Show current page and adjacent pages
    const startPage = Math.max(2, currentPage - 1);
    const endPage = Math.min(totalPages - 1, currentPage + 1);
    
    for (let i = startPage; i <= endPage; i++) {
      if (i > 1 && i < totalPages) { // Avoid duplicating first/last page
        pageNumbers.push(
          <button
            key={i}
            onClick={() => onPageChange(i)}
            className={`px-3 py-1 rounded ${
              currentPage === i ? "bg-blue-600 text-white" : "bg-gray-200 hover:bg-gray-300"
            }`}
          >
            {i}
          </button>
        );
      }
    }

    // Show ellipsis if current page is far from end
    if (currentPage < totalPages - 2) {
      pageNumbers.push(<span key="end-ellipsis" className="px-2">...</span>);
    }

    // Always show last page if there's more than 1 page
    if (totalPages > 1) {
      pageNumbers.push(
        <button
          key={totalPages}
          onClick={() => onPageChange(totalPages)}
          className={`px-3 py-1 rounded ${
            currentPage === totalPages ? "bg-blue-600 text-white" : "bg-gray-200 hover:bg-gray-300"
          }`}
        >
          {totalPages}
        </button>
      );
    }

    return pageNumbers;
  };

  return (
    <div className="flex justify-center items-center space-x-2 mt-6">
      <button
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className={`px-4 py-2 rounded ${
          currentPage === 1 ? "bg-gray-300 cursor-not-allowed" : "bg-blue-500 text-white cursor-pointer hover:bg-blue-600"
        }`}
      >
        Previous
      </button>
      
      <div className="flex space-x-1">
        {renderPageNumbers()}
      </div>
      
      <button
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className={`px-4 py-2 rounded ${
          currentPage === totalPages ? "bg-gray-300 cursor-not-allowed" : "bg-blue-500 text-white cursor-pointer hover:bg-blue-600"
        }`}
      >
        Next
      </button>
    </div>
  );
}