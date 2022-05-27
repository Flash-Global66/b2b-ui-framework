import { PillType } from "../../components/Pill";
import { Template } from "./Pill.template";

const Normal = Template.bind({});
Normal.args = {
  type: PillType.Normal,
  text: 'Normal'
};

const Success = Template.bind({});
Success.args = {
  type: PillType.Success,
  text: 'Success'
};

const Error = Template.bind({});
Error.args = {
  type: PillType.Error,
  text: 'Error'
};

export {
  Normal,
  Success,
  Error
}