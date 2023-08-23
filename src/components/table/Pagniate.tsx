import * as React from 'react';
import 'styles/paginate.scss';

type Props = {
    postsPerPage: number
    totalPosts: number,
    currentPage: number,
    paginate: Function,
    previousPage: Function,
    nextPage: Function,
};

const Paginate = ({
                      postsPerPage,
                      totalPosts,
                      currentPage,
                      paginate,
                      previousPage,
                      nextPage,
                  }: Props) => {
    const pageNumbers = [];

    for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
        pageNumbers.push(i);
    }
    return (
        <div className="pagination-container">
            <ul className="pagination">
                <li onClick={() => previousPage()} className="page-number page-prev">
                    Prev
                </li>
                {pageNumbers.map((number) => (
                    <li
                        key={number}
                        onClick={() => paginate(number)}
                        className={
                            'page-number ' + (number === currentPage ? 'active' : '')
                        }
                    >
                        {number}
                    </li>
                ))}
                <li onClick={() => nextPage()} className="page-number page-next">
                    Next
                </li>
            </ul>
        </div>
    );
};

export default Paginate;