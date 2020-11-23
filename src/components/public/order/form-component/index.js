import { React, Input, Form } from "../../../../global";
import { formItemLayout } from "../form/formLayout";

const FormItem = Form.Item;
export const renderInput = (filed) => {

    return (
        <FormItem {...formItemLayout} label={filed.label}>
            <Input
                autoComplete="nope"
                autoCorrect="nope"
                spellCheck="nope"
                {...filed.input}
                name={filed.input.name}
                placeholder={filed.placeholder}
                required
                rows={10}
                maxLength={10}

            />
        </FormItem>
    );
};