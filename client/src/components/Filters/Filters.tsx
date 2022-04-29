import React from "react";
import Button from "../UI/Button/Button";
import Input from "../UI/Input/Input";
import Select from "../UI/Select/Select";

import { Wrapper } from "./Filters.styles";

import { IoGridSharp } from "react-icons/io5";
import { AiOutlineBars } from "react-icons/ai";

const Filters = () => {
  return (
    <Wrapper>
      <div className='price'>
        <p>Price</p>
        <Input placeholder='From' />
        <Input placeholder='To' />
      </div>
      <div className='sort'>
        <p>Sort</p>
        <Select
          options={[
            "Price: lowest first",
            "Price: highest first",
            "Time: new first",
            "Time: old first",
          ]}
        />
      </div>
      <div className='display'>
        <p>Display</p>
        <div className='buttons'>
          <Button isActive>
            <IoGridSharp />
          </Button>
          <Button>
            <AiOutlineBars />
          </Button>
        </div>
      </div>
    </Wrapper>
  );
};

export default Filters;
