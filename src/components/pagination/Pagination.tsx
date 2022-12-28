import React from "react";

interface Props{
  totalPost: number,
  postPerPage: number,
  handleClick: Function
}

const  Pagination: React.FC<Props> = ({ totalPost, postPerPage, handleClick }: Props) => {
  let pages = [];
  for (let i = 1; i <= Math.ceil(totalPost / postPerPage); i++) {
    pages.push(i);
  }

  return (
    <div title='paginator' className="flex justify-center items-center w-full mt-4">
      <div className="w-full flex justify-center items-center">
        {pages.map((page, index) => {
          return (
            <button
              key={index}
              className="bg-gray-100 text-black-200 p-4  rounded m-1"
              onClick={() => handleClick(page)}
            >
              {page}
            </button>
          );
        })}
      </div>
    </div>
  );
}

export default Pagination;
