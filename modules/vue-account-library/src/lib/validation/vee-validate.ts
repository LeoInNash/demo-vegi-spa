import { defineRule, configure } from "vee-validate";
import AllRules from "@vee-validate/rules";
interface FieldContext {
  field: string; // The field's name or label (see next section)
  value: any; // the field's current value
  form: Record<string, any>; // other values in the form
  rule: {
    name: string; //the rule name
    params?: any[]; // any params sent to it
  };
}
// type ValidationgenerateMessage = (ctx: FieldContext) => string;
Object.keys(AllRules).forEach((rule) => {
  defineRule(rule, AllRules[rule]);
});
configure({
  generateMessage: (context: any) => {
    switch (context.rule.name) {
      case "required":
        return `This field field is required`;
      case "email":
        return `This field field must be email`;
      case "confirmed":
        return `This field is not matched`;
      default:
        return "This field is invalid";
    }
  },
});
