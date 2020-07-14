import { shallow } from "enzyme";
import React from "react";
import { EmptyState } from "./EmptyState";

describe("EmptyState Component", () => {
  it("should return the empty type", () => {
    const emptyWrapper = shallow<typeof EmptyState>(
      <EmptyState type="empty" text="Empty State" />
    );
    const result = emptyWrapper.find("Text").first().props().children;
    expect(result).toEqual(["🤷", "\n", "Empty State"]);
  });

  it("should return the error type", () => {
    const errorWrapper = shallow<typeof EmptyState>(
      <EmptyState type="error" text="Error State" />
    );
    const result = errorWrapper.find("Text").first().props().children;
    expect(result).toEqual(["😢", "\n", "Error State"]);
  });

  it("should return the inital type", () => {
    const initalWrapper = shallow<typeof EmptyState>(
      <EmptyState type="initial" text="Initial State" />
    );
    const result = initalWrapper.find("Text").first().props().children;
    expect(result).toEqual(["🕵️‍♂️", "\n", "Initial State"]);
  });
});
