import { render, fireEvent } from "react-native-testing-library";
import React from "react";
import { InputSearch, IInputSearch } from "./InputSearch";

const createTestProps = (props: IInputSearch) => ({
  ...props,
});

const mockProps = {
  value: "",
  placeholder: "search",
  onChangeText: jest.fn(),
  onSubmitValue: jest.fn(),
  onClear: jest.fn(),
};

describe("InputSearch Component", () => {
  const props = createTestProps(mockProps);

  it("should change the text", () => {
    const { getByPlaceholder } = render(<InputSearch {...props} />);
    const change_text = "mock content";
    fireEvent.changeText(getByPlaceholder(mockProps.placeholder), change_text);
    expect(mockProps.onChangeText).toHaveBeenCalled();
  });

  it("should call clear button", () => {
    const { getByText } = render(<InputSearch {...props} />);
    fireEvent.press(getByText("Cancel"));
    expect(mockProps.onClear).toHaveBeenCalled();
  });
});
