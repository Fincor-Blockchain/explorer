import React from 'react';

import {
  Pagination as RsPagination,
  PaginationItem,
  PaginationLink
} from 'reactstrap';

import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
`;
const Dots = styled.span`
  margin-right: 7px;
`;
const Link = styled(PaginationLink)`
  // padding: 8px 9.2px 8.4px 10px;
  // border-radius: 2px;
  box-shadow: none;
  background-color: none;
  border: none;
  font-family: PoppinsRegular;
  font-size: 12px;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.22;
  letter-spacing: 0.27px;
  color: #a9a9a9;
  background-color: #f1f2f2 !important;
  &:focus {
    z-index: 3;
    outline: 0;
    box-shadow: none;
  }
  &:hover {
    z-index: 2;
    color: #24234d;
    text-decoration: none;
  }
`;

const Item = styled(PaginationItem)`
  font-family: Gilroy;
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 17px;
  margin-right: 7px;
  align-items: center !important;

  &.active .page-link {
    background: #ffffff !important;
    box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.06), 0px 1px 3px rgba(0, 0, 0, 0.1);
    border-radius: 10px;
    font-size: 14px;
    color: #24234d;
    padding: 10px 14px;
  }
`;

const LinkWrapper = styled(Link)`
  font-size: 28px;
`;

const Pagination = ({
  count = 100,
  limit = 10,
  pageHandler,
  // changeLimit,
  currentPage = 1
}) => {
  const pagesCount = Math.ceil(count / limit);

  function paginationItem(index) {
    return (
      <Item active={index - 1 === currentPage} key={index}>
        <Link onClick={(e) => pageHandler(e, index)} href="#">
          {index}
        </Link>
      </Item>
    );
  }
  function dotsItem() {
    return <Dots key="">...</Dots>;
  }

  function displayPagination() {
    let resultArray = [];
    if (pagesCount === 1) {
      resultArray.push(paginationItem(1));
    } else if (pagesCount < 8 && pagesCount > 1) {
      for (let i = 1; i <= pagesCount; i++) {
        resultArray.push(paginationItem(i));
      }
    } else if (pagesCount >= 8) {
      if (currentPage - 1 > 2 && currentPage + 2 < pagesCount - 1) {
        resultArray.push(
          paginationItem(1),
          dotsItem(),
          paginationItem(currentPage - 1),
          paginationItem(currentPage),
          paginationItem(currentPage + 1),
          paginationItem(currentPage + 2),
          dotsItem(),
          paginationItem(pagesCount)
        );
      } else if (currentPage <= 3) {
        resultArray.push(
          paginationItem(1),
          paginationItem(2),
          paginationItem(3),
          paginationItem(4),
          paginationItem(5),
          dotsItem(),
          paginationItem(pagesCount)
        );
      } else if (currentPage >= pagesCount - 3) {
        resultArray.push(
          paginationItem(1),
          dotsItem(),
          paginationItem(pagesCount - 4),
          paginationItem(pagesCount - 3),
          paginationItem(pagesCount - 2),
          paginationItem(pagesCount - 1),
          paginationItem(pagesCount)
        );
      }
    }
    return resultArray;
  }

  return (
    <Wrapper>
      <RsPagination
        aria-label="Page navigation "
        style={{ alignItems: 'center' }}>
        <Item disabled={currentPage + 1 <= 1}>
          <LinkWrapper
            onClick={(e) => pageHandler(e, currentPage)}
            previous
            href="#"
          />
        </Item>
        {pagesCount !== 0 ? displayPagination() : ''}
        <Item disabled={currentPage >= pagesCount - 1}>
          <LinkWrapper
            onClick={(e) => pageHandler(e, currentPage + 2)}
            next
            href="#"
          />
        </Item>
      </RsPagination>
    </Wrapper>
  );
};

export default Pagination;
