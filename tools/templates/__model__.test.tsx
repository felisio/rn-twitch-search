import { shallow } from "enzyme";
import React from "react";
import { __model__, I__model__ } from "./__model__";

const createTestProps = (props: I__model__) => ({
  ...props,
});

describe("__model__ Component", () => {
  const props = createTestProps({ title: "__model__ Component" });
  const wrapper = shallow<typeof __model__>(<__model__ {...props} />);

  describe("rendering", () => {
    it("should render a <View />", () => {
      expect(wrapper.find("View")).toHaveLength(1);
    });
  });
});
