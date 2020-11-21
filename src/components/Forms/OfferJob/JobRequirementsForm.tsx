import { ErrorMessage, Field, Form, Formik } from "formik";
import React, { FunctionComponent } from "react";
import styled from "styled-components";
import * as Yup from "yup";
import { devices } from "../../../constants";
import { JobRequirements } from "../../../pages/OfferJobPage";

const RequiredMessage = "مطلوب";

interface Props {
  onSubmit: (values: JobRequirements) => void;
  initialValues: JobRequirements;
}

const JobRequirementsForm: FunctionComponent<Props> = (props) => {
  const validationSchema = Yup.object({
    description: Yup.string().required(RequiredMessage),
  });

  const onSubmit = (values: JobRequirements) => {
    props.onSubmit(values);
  };

  return (
    <Container>
      <FormTitle>
        أعلن عن وظيفة /<Grey> المتطلبات</Grey>
      </FormTitle>
      <Formik initialValues={props.initialValues} validationSchema={validationSchema} onSubmit={onSubmit}>
        <Form>
          <Container>
            <FieldContainer>
              <Label htmlFor="description">وصف الوظيفة *</Label>
              <Field as={StyledField} id="description" name="description" />
              <ErrorMessage name="description" render={(msg) => <StyledErrorMessage>{msg}</StyledErrorMessage>} />
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

const StyledField = styled.textarea`
  min-width: 378px;
  width: 378px;
  max-width: 378px;
  min-height: 50px;
  height: 273px;
  max-height: 418px;
  border: 2px solid #e3dfe8;
  box-sizing: border-box;
  border-radius: 6px;
  font-size: 14px;
  line-height: 27px;
  color: #37333e;
  padding: 9.5px 16px;
  font-family: inherit;

  @media ${devices.mobile} {
    min-width: 100%;
    width: 100%;
    max-width: 100%;
    flex-grow: 1;
    min-height: 50px;
    height: 273px;
    max-height: 418px;
    resize: none;
  }
`;

export default JobRequirementsForm;
