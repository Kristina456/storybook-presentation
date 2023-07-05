import React from "react";
import { Button } from '../../../../common/components';
import "./Form.scss";

interface FormProps {
  placeholder?: string;
  label?: string;
  name?: string;
}

export function Form(props: FormProps) {

  const [details, setDetails] = React.useState(false);

  const onClick = () => {
    setDetails(true);
  };

  return (
    <div className="form__wrapper">
      <input
        autoComplete="off"
        placeholder="Enter your email address"
        className={"storybook-input"}
        name="email"
        aria-label="email"
        id="email"
        data-testid="email"
        {...props}
      />
      <input
        autoComplete="off"
        placeholder="Enter your password"
        className={"storybook-input"}
        name="password"
        id="password"
        data-testid="password"
        {...props}
      />
      <Button onClick={() => onClick()} label="Submit"></Button>
      {details === true ? (
        <p>
          You have successfully submitted the form 😊 
        </p>
      ) : (
        ""
      )}
    </div>
  );
};