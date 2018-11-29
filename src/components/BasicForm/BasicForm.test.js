import React from "react";
import { shallow } from "enzyme";
import BasicForm from "./BasicForm";
import { expect } from "code";
import sinon from "sinon";

describe("Given Basic Form", () => {
  let component;
  let handleSubmitSpy;
  let mockText;
  beforeEach(() => {
    handleSubmitSpy = sinon.spy();
    component = shallow(<BasicForm handleSubmit={handleSubmitSpy} />);
    mockText = "hello";
    component.find("input").simulate("change", { target: { value: mockText } });
  });

  it("should be a form", () => {
    expect(component.type()).to.equal("form");
  });

  it("should contain an input", () => {
    expect(component.find("input")).to.have.length(1);
  });

  it("should contain an button", () => {
    expect(component.find("button")).to.have.length(1);
  });

  it("should update the state", () => {
    expect(component.state().inputText).to.equal(mockText);
  });

  it("should call handleSubmit()", () => {
    component.simulate("submit", { preventDefault: sinon.spy() });
    sinon.assert.calledOnce(handleSubmitSpy);
    sinon.assert.calledWithExactly(handleSubmitSpy, mockText);
  });
});
