import React from "react";
import { Select as AntSelect } from "antd";

const { Option } = AntSelect;

const Select = ({
  options,
  defaultValue,
  onOptionChange,
  placeHolder,
  width,
  withBorder,
  arrow
}) => {
  function change(value) {
    const item = options.filter((s) => s.label === value)[0];
    onOptionChange(item);
  }

  return (
    <>
      <AntSelect
        defaultValue={defaultValue}
        style={{ width: width }}
        size="large"
        onChange={change}
        placeholder={placeHolder}
        bordered={withBorder}
        showArrow={arrow}
        showSearch
      >
        {options.map((item, index) => (
          <Option value={item.label} key={index}>
            {item.label}
          </Option>
        ))}
      </AntSelect>
    </>
  );
};

export default Select;
