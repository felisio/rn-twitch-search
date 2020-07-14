import { shallow } from "enzyme";
import React from "react";
import { Loading } from "./Loading";

describe("Loading Component", () => {
  const wrapper = shallow<typeof Loading>(<Loading />);

  describe("rendering", () => {
    it("should render a <View />", () => {
      expect(wrapper.find("View")).toHaveLength(1);
    });
  });
});
