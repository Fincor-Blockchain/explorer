import React, { useState } from 'react';
import { search } from 'src/assets/fincoreassests';
import { filtericon } from 'src/assets/fincoreassests';
import { InputGroup, InputGroupAddon, Input, Button, Form } from 'reactstrap';
import styled from 'styled-components';
import colors from 'src/vars/colors';
import history from 'src/utils/history';
import Select from 'react-select';
import { useSelector } from 'react-redux';

const Wrapper = styled.div``;
const FilterWrapper = styled.div`
  display: flex;
  align-items: center;
`;
const FilterText = styled.span`
  font-family: GilroySemiBold;
  font-size: 14px;
  text-align: center;
  color: #24234d;
  @media (max-width: 576px) {
    font-size: 12px;
  }
`;

const VerticalLine = styled.span`
  height: 40px;
  border: 0.5px solid black;
  opacity: 0.1;
  display: inline-block;
  vertical-align: middle;
  color: ${colors.black};
  margin: 8px 4px;
  @media (max-width: 500px) {
    display: none;
  }
`;
const SearchIcon = styled.img`
  width: 20px;
  height: 20px;
`;
const FilterIcon = styled.img`
  margin-right: 3px;
  width: 20px;
  height: 20px;
  @media (max-width: 576px) {
    width: 15px;
    height: 15px;
  }
`;
const SearchBox = styled(InputGroup)`
  background: white;
  border-radius: 10px;
  border: solid 1px ${colors.borderGrey};
  align-items: center;

  @media (max-width: 991px) {
    margin: 1.5rem 0px;
  }
  input.form-control {
    padding-left: 20px !important;
    @media (max-width: 576px) {
      padding-left: 0px !important;
    }
  }
  .form-control {
    padding: 0;
    border: none;
    font-family: 'GilroyMedium';
    opacity: 0.4;
    color: #24234d;
    font-size: 14px;
    box-shadow: none;
  }
  .btn-secondary:not(:disabled):not(.disabled):active,
  .btn-secondary:not(:disabled):not(.disabled).active,
  .show > .btn-secondary.dropdown-toggle {
    color: ${colors.black};
    background-color: ${colors.white};
    border-color: ${colors.white};
  }
  .btn-secondary:not(:disabled):not(.disabled):active:focus,
  .btn-secondary:not(:disabled):not(.disabled).active:focus,
  .show > .btn-secondary.dropdown-toggle:focus {
    box-shadow: none !important;
    color: ${colors.black} !important;
  }
  ..btn-secondary.dropdown-toggle:hover,
  .btn-secondary:hover {
    color: ${colors.black};
    background-color: ${colors.white};
    border-color: ${colors.white};
  }
  .btn-secondary {
    color: ${colors.black};
    background-color: ${colors.white};
    border-color: ${colors.white};
  }
  .btn-secondary:focus,
  .btn-secondary.focus {
    box-shadow: none !important;
  }
`;
const IconButton = styled(Button)`
  background-color: #d5da43 !important;
  padding: 20px 30px;
  line-height: 1.27;
  letter-spacing: 0.66px;
  color: ${colors.white};
  box-shadow: none;
  border: none;
  text-align: center;
  border-radius: 0px 10px 10px 0px;
  @media (max-width: 576px) {
    padding: 16px;
  }
  @media (max-width: 320px) {
    padding: 12px 10px;
  }
`;

const SelectExp = styled(Select)`
  .css-1layoqn-control {
    opacity: 1 !important;
    font-family: 'GilroyRegular' !important;
    font-size: 14px !important;
    color: #495057;
    background-color: #fff;
    cursor: pointer;
    width: 116px;
  }
  ,
  .css-1wa3eu0-placeholder {
    margin-left: 2px;
    margin-right: 2px;
    position: absolute;
    top: 50%;
    opacity: 1 !important;
    font-family: 'GilroyMedium' !important;
    font-size: 15px !important;
    color: #495057;
  }
  ,
  .css-1layoqn-control:hover {
    border-color: transparent !important;
  }
  ,
  .css-15habef-control {
    min-width: 120px !important;
    outline: none;
    border-color: transparent !important;
    border-radius: 7px;
    caret-color: transparent;
    z-index: 4 !important;
    font-family: 'GilroyRegular' !important;
    font-size: 14px !important;
    color: #495057;
    background-color: #fff;
    cursor: pointer !important;
    @media (max-width: 576px) {
      min-width: 108px !important;
    }
    @media (max-width: 320px) {
      min-width: 94px !important;
    }
  }
  ,
  .css-1okebmr-indicatorSeparator {
    background-color: #fff;
    margin-bottom: 0;
    margin-top: 0;
    width: 0px;
    box-sizing: border-box;
  }
  .css-1uccc91-singleValue {
    opacity: 1 !important;
    font-family: 'GilroyMedium' !important;
    font-size: 14px !important;
    color: #495057;
    background-color: #fff;
  }
`;

const InputWrapper = styled(Form)``;

const style = {
  control: (base) => ({
    ...base,
    border: 0,
    boxShadow: 'none',
    borderRadius: '7px',
    marginTop: ' 2px !important',
    cursor: 'pointer'
  }),
  option: (styles, { isFocused, isSelected, isActive }) => {
    return {
      ...styles,

      backgroundColor: isFocused
        ? '#fff !important'
        : isSelected
        ? 'none !important'
        : isActive
        ? '95e7ec'
        : null,
      color: '#24234D'
    };
  }
};

const SearchInput = () => {
  const [state, setState] = useState({ filterName: 'Filter', keyword: '' });
  const supply = useSelector((state) => state.supply.totalSupply);

  const handleSearch = (e) => {
    e.preventDefault();
    if (state.keyword !== '') {
      if (state.keyword.includes('fincor') && state.keyword.length === 45) {
        history.push(`/account-details/${state.keyword}`);
      } else {
        if (isNaN(state.keyword) && state.keyword.length === 64) {
          history.push(`/txs/${state.keyword}`);
        } else if (
          isNaN(state.keyword) === false &&
          state.keyword.length <= supply?.height.length &&
          state.keyword <= supply?.height
        ) {
          history.push(`/blocks/${state.keyword}`);
        } else history.push(`/not_found`);
      }
      setState({ ...state, keyword: '' });
    }
  };
  const hanldeDropDown = (e) => {
    setState({ ...state, filterName: e.value });
  };
  const handleChange = (e) => {
    setState({ ...state, keyword: e.target.value });
  };

  const filter = (
    <FilterWrapper>
      <FilterIcon src={filtericon} alt="Filter-Icon" />
      <FilterText>All filter</FilterText>
    </FilterWrapper>
  );

  return (
    <Wrapper>
      <InputWrapper onSubmit={handleSearch}>
        <SearchBox>
          <SelectExp
            styles={style}
            options={Options}
            placeholder={filter}
            onChange={hanldeDropDown}
          />
          <VerticalLine />

          <Input
            placeholder="Search by Address / Txn Hash / Block"
            type="text"
            value={state.keyword}
            name="Txs"
            onChange={handleChange}
          />

          <InputGroupAddon addonType="append" onClick={handleSearch}>
            <IconButton>
              <SearchIcon src={search} alt="search-logo" />
            </IconButton>
          </InputGroupAddon>
        </SearchBox>
      </InputWrapper>
    </Wrapper>
  );
};

export default SearchInput;

const Options = [
  {
    value: 'Txs',
    label: 'Txn Hash'
  },
  {
    value: 'Address',
    label: 'Address'
  },
  {
    value: 'Blocks',
    label: 'Blocks'
  }
];
