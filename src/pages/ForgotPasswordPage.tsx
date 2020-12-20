import React, { FunctionComponent } from "react";
import styled from "styled-components";
import { ReactComponent as Logo } from "../assets/icons/Logo.svg";
import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from "yup";
import Link from "../utils/UnstyledLink";
import { sendPasswordResetEmail } from "../firebase/authentication";
import { useHistory } from "react-router-dom";
import { devices } from "../constants";

const emailPlaceholder = "عنوان البريد الإلكتروني";

const RequiredMessage = "مطلوب";
const InvalidEmailMessage = "بريد الالكتروني غير صحيح";

const ForgotPasswordPage: FunctionComponent = () => {
  const history = useHistory();
  const initialValues = { email: "" };

  const validationSchema = Yup.object({
    email: Yup.string().email(InvalidEmailMessage).required(RequiredMessage),
  });

  async function onSubmit({ email }: { email: string }) {
    try {
      await sendPasswordResetEmail(email);
      history.push("/");
    } catch (err) {
      alert("Something went wrong. Please try again.");
    }
  }

  return (
    <PageContainer>
      <Link to="/">
        <Logo />
      </Link>
      <FormContainer>
        <Title>إعادة تعيين كلمة المرور</Title>
        <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}>
          <Form>
            <FieldsContainer>
              <FieldContainer>
                <Field as={StyledField} id="email" name="email" placeholder={emailPlaceholder} />
                <ErrorMessage name="email" render={(msg) => <StyledErrorMessage>{msg}</StyledErrorMessage>} />
              </FieldContainer>

              <SubmitButton type="submit">إرسال بريد الكتروني</SubmitButton>
            </FieldsContainer>
          </Form>
        </Formik>
      </FormContainer>
    </PageContainer>
  );
};

const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #efebf5;
  align-items: center;
  padding: 55px 0 55px 0;
  flex: 1 1 0;
`;

const Title = styled.p`
  font-size: 22px;
  line-height: 42px;
  color: #37333e;
  margin-bottom: 16px;

  @media ${devices.mobile} {
    font-size: 18px;
  }
`;

const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 40px 40px;
  background: #ffffff;
  box-shadow: 0px 34px 74px rgba(39, 52, 107, 0.12);
  border-radius: 20px;
  margin-top: 23px;
  margin-bottom: 28px;
  width: 350px;

  @media ${devices.mobile} {
    width: 70vw;
  }
`;

const FieldsContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 24px;
`;

const FieldContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
`;

const StyledField = styled.input`
  flex: 1;
  height: 46px;
  border: 2px solid #e3dfe8;
  box-sizing: border-box;
  border-radius: 6px;
  font-size: 14px;
  line-height: 27px;
  color: #37333e;
  padding: 9.5px 16px;
  font-family: inherit;

  @media ${devices.mobile} {
    font-size: 12px;
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

const SubmitButton = styled.button`
  background: linear-gradient(138.12deg, #a783e2 -0.01%, #7749c2 94.77%);
  border-radius: 6px;
  font-family: inherit;
  font-size: 12px;
  line-height: 23px;
  font-weight: bold;
  color: #ffffff;
  padding: 14px;
  border: none;
  cursor: pointer;
  flex: 1;

  @media ${devices.mobile} {
    font-size: 10px;
  }
`;

export default ForgotPasswordPage;
