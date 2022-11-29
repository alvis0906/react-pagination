import BlogPost from "./BlogPost";
import Pagination from "./Pagination";
import {React, useState,useEffect} from "react";
import blogs from "../data/blogs.json";

const PAGE_SIZES = [15, 25, 50, 100,250,500,1000];

function BlogList() {
    const [pageSize, setPageSize] = useState(15);
    const [pageNumber, setPageNumber] = useState(1);
    const [currentPaginationData,setCurrentPaginationData] = useState([])

    const updateRowsPerPage = (value) => {
        setPageSize(parseInt(value));
    };
    const updatePage = (page) => {
        setPageNumber(page);
    };

    useEffect(() => {
        setCurrentPaginationData(blogs.posts.slice((pageNumber -1) * pageSize, pageNumber * pageSize));
    },[pageSize,pageNumber]);

    return (
        <div>
            <Pagination
                currentPage={pageNumber}
                totalCount={blogs.posts.length}
                pageSize={pageSize}
                pageSizeOptions={PAGE_SIZES}
                onPageChange={updatePage}
                onPageSizeOptionChange={updateRowsPerPage}
            />
            <ul
                // Do not modify the aria-label below, it is used for Hatchways automation.
                aria-label="blog list"
            >
                {currentPaginationData.map((blog) => (
                    <BlogPost
                        key={blog.id}
                        author={blog.author}
                        title={blog.title}
                        excerpt={blog.excerpt}
                        featureImage={blog.image}
                    />
                ))}
            </ul>
        </div>
    );
}

export default BlogList;
