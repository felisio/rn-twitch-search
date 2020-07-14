import { render, fireEvent } from "react-native-testing-library";
import React from "react";
import { Button, IButton } from "./Button";

const createTestProps = (props: IButton) => ({
  ...props,
});

const onPressMock = jest.fn();
const textMock = "Button Component text";
describe("Button Component", () => {
  const props = createTestProps({
    text: textMock,
    onPress: onPressMock,
  });

  const { getByText } = render(<Button {...props} />);

  describe("Events", () => {
    it("should call press event", () => {
      fireEvent.press(getByText(textMock));
      expect(onPressMock).toHaveBeenCalled();
    });
  });
});
