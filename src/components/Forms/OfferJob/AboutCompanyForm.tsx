import { ErrorMessage, Field, Form, Formik } from "formik";
import React, { FunctionComponent } from "react";
import styled from "styled-components";
import * as Yup from "yup";
import { devices } from "../../../constants";
import { Company } from "../../../types";
import EnglishInput from "../../EnglishInput";
import Input from "../../Input";
import Select from "../../Select";

const RequiredMessage = "مطلوب";
const PhoneLengthMessage = "رقم الهاتف يجب ان يحتوي على ٨ اعداد";
const InvalidEmailMessage = "بريد الالكتروني غير صحيح";

// prettier-ignore
const CompanySizes = [
  "",
  "1-9 موظفين",
  "10-49 موظف",
  "50-249 موظف",
  "250+ موظف",
];

interface Props {
  onSubmit: (values: Company) => void;
  initialValues: Company;
}

const AboutCompanyForm: FunctionComponent<Props> = (props) => {
  const validationSchema = Yup.object({
    name: Yup.string().required(RequiredMessage),
    description: Yup.string().required(RequiredMessage),
    size: Yup.string(),
    phone: Yup.string().length(8, PhoneLengthMessage),
    email: Yup.string().email(InvalidEmailMessage).required(RequiredMessage),
  });

  const onSubmit = (values: Company) => {
    props.onSubmit(values);
  };

  return (
    <Container>
      <FormTitle>
        أعلن عن وظيفة /<Grey> عن الشركة</Grey>
      </FormTitle>
      <Formik initialValues={props.initialValues} validationSchema={validationSchema} onSubmit={onSubmit}>
        <Form>
          <Container>
            <FieldContainer>
              <Label htmlFor="name">اسم الشركة*</Label>
              <Field as={Input} id="name" name="name" />
              <ErrorMessage name="name" render={(msg) => <StyledErrorMessage>{msg}</StyledErrorMessage>} />
            </FieldContainer>

            <FieldContainer>
              <Label htmlFor="description">وصف الشركة*</Label>
              <Field as={StyledTextArea} id="description" name="description" />
              <ErrorMessage name="description" render={(msg) => <StyledErrorMessage>{msg}</StyledErrorMessage>} />
            </FieldContainer>

            <FieldContainer>
              <Label htmlFor="size">حجم الشركة</Label>
              <Field as={Select} id="size" name="size">
                {CompanySizes.map((size) => (
                  <option key={size} value={size}>
                    {size}
                  </option>
                ))}
              </Field>
              <ErrorMessage name="size" render={(msg) => <StyledErrorMessage>{msg}</StyledErrorMessage>} />
            </FieldContainer>

            <FieldContainer>
              <Label htmlFor="phone">رقم الهاتف</Label>
              <Field as={EnglishInput} id="phone" name="phone" type="number" />
              <ErrorMessage name="phone" render={(msg) => <StyledErrorMessage>{msg}</StyledErrorMessage>} />
            </FieldContainer>

            <FieldContainer>
              <Label htmlFor="email">البريد الالكتروني*</Label>
              <Field as={EnglishInput} id="email" name="email" type="email" />
              <ErrorMessage name="email" render={(msg) => <StyledErrorMessage>{msg}</StyledErrorMessage>} />
            </FieldContainer>

            <Button type="submit">متابعة</Button>
          </Container>
        </Form>
      </Formik>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;

  /* Remove Arrows from type="number" fields for Firefox*/
  input[type="number"] {
    -moz-appearance: textfield;
  }

  @media ${devices.mobile} {
    flex-grow: 1;
  }
`;

const FormTitle = styled.div`
  font-size: 22px;
  line-height: 42px;
  color: #37333e;
  margin-bottom: 24px;

  @media ${devices.mobile} {
    font-size: 18px;
    margin-bottom: 20px;
  }
`;

const Grey = styled.span`
  color: #afa9b8;
`;

const FieldContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 24px;

  @media ${devices.mobile} {
    margin-bottom: 20px;
  }
`;

const Label = styled.label`
  font-size: 12px;
  line-height: 23px;
  color: #a19baa;

  @media ${devices.mobile} {
    font-size: 10px;
  }
`;

const StyledTextArea = styled(Input).attrs({ as: "textarea" })`
  height: 80px;
  max-width: 378px;
`;

const StyledErrorMessage = styled.p`
  font-size: 12px;
  line-height: 23px;
  color: #d1365d;

  @media ${devices.mobile} {
    font-size: 10px;
  }
`;

const Button = styled.button`
  background: linear-gradient(138.12deg, #a783e2 -0.01%, #7749c2 94.77%);
  border-radius: 6px;
  font-size: 12px;
  line-height: 23px;
  font-family: inherit;
  color: #ffffff;
  padding: 14px 171px;
  border: none;
  cursor: pointer;

  @media ${devices.mobile} {
    padding: 14px;
  }
`;

export default AboutCompanyForm;
