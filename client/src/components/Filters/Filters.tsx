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
        <Input name='from' placeholder='From' value='' onChange={() => {}} />
        <Input name='to' placeholder='To' value='' onChange={() => {}} />
      </div>
      <div className='sort'>
        <p>Sort</p>
        <Select
          name='sort'
          options={[
            { label: "Best Match", value: "" },
            { label: "Price: lowest first", value: "asc" },
            { label: "Price: highest first", value: "des" },
            { label: "Time: new first", value: "new" },
            { label: "Time: old first", value: "old" },
          ]}
          value=''
          onChange={() => {}}
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
