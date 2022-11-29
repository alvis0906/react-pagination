export const DOTS = "...";

function usePagination(params) {
    /*
      Rewrite the logic here to map out the pagination to be displayed.

    */
    const pageLimit = Math.ceil(params.totalCount / params.pageSize);
    let pageOptions = [1];
    switch (pageLimit) {
        case 1:
            return pageOptions;
        case 2:
            return [1,DOTS,2];
        case 3:
            if(params.currentPage === 1)
                return [1,2,DOTS,3];
            else if(params.currentPage === 2)
                return [1,DOTS,2,DOTS,3];
            else
                return [1,DOTS,2,3];
        default:
            let firstPage = 1;
            let lastPage = 1;
            if(params.currentPage === 1){
                // need to add dot at the end
                lastPage = firstPage + 2;
                pageOptions = generatePageItem(firstPage,lastPage,'end')
            }
            else if (params.currentPage > 1 && (pageLimit - params.currentPage) >= 2) {
                firstPage = params.currentPage;
                lastPage = firstPage + 2;
            } else if ((pageLimit - params.currentPage) < 2) {
                pageOptions.push(DOTS);
                firstPage = pageLimit - 2;
                lastPage = pageLimit - 1;
            }
            for (let i = firstPage; i <= lastPage; i++) {
                pageOptions.push(i);
            }
            if (pageLimit - params.currentPage > 1)
                pageOptions.push(DOTS);
            if (pageLimit > 1)
                pageOptions.push(pageLimit);
            console.log('final page==' + pageLimit);
            console.log('current page==' + pageLimit);
            return pageOptions;
    }

}

function generatePageItem(first,last,dotPos) {
    let pageOptions = [1];
    if(dotPos === 'first'||dotPos ==='mid')
        pageOptions.push(DOTS);
    for (let i = first; i <= first; i++) {
        pageOptions.push(i);
    }
    if(dotPos === 'mid' || dotPos === 'last')
        pageOptions.push(DOTS);
    return pageOptions;
}
export default usePagination;
