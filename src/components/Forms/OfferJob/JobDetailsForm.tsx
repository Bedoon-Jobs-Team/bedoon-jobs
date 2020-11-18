import { ErrorMessage, Field, Form, Formik, FormikHelpers, useFormikContext } from "formik";
import React, { FunctionComponent } from "react";
import styled from "styled-components";
import * as Yup from "yup";
import { areas, fields } from "../../../constants";
import { JobDetails } from "../../../pages/OfferJobPage";

const RequiredMessage = "مطلوب";
const SalaryRangeErrorMessage = "حد الاعلى للراتب يجب ان يكون اعلى من الحد الادنى";
const EmployeesNeededErrorMessage = "عمليات التوظيف يجب ان تكون واحد او اكثر";
const NumberErrorMessage = "يجب ان يكون رقم";

const JobTypes = ["دوام كامل", "دوام جزئي", "مؤقت", "عقد", "فترة تدريب", "عمولة", "لحديثي التخرج", "دائم"];
const SalaryPeriods = ["شهرياً", "اسبوعياً"];
const Urgencies = ["1 - 3 أيام"];

interface Props {
  onSubmit: (values: JobDetails) => void;
  initialValues: JobDetails;
}

const JobDetailsForm: FunctionComponent<Props> = (props) => {
  const validationSchema = Yup.object({
    title: Yup.string().required(RequiredMessage),
    type: Yup.string().required(RequiredMessage),
    field: Yup.string().required(RequiredMessage),
    salaryLowerEnd: Yup.number().typeError(NumberErrorMessage).required(RequiredMessage),
    salaryHigherEnd: Yup.number()
      .typeError(NumberErrorMessage)
      .min(Yup.ref("salaryLowerEnd"), SalaryRangeErrorMessage)
      .required(RequiredMessage),
    salaryPeriod: Yup.string().required(RequiredMessage),
    area: Yup.string().required(RequiredMessage),
    employeesNeeded: Yup.number()
      .typeError(NumberErrorMessage)
      .min(1, EmployeesNeededErrorMessage)
      .required(RequiredMessage),
    urgency: Yup.string().required(RequiredMessage),
  });

  function handleNumberInputChange(e: React.ChangeEvent<any>, callback: (value: string) => void) {
    const { value } = e.target;
    const englishValue = value.replace(/[٠-٩]/g, (arabicNumber: string) =>
      "٠١٢٣٤٥٦٧٨٩".indexOf(arabicNumber).toString()
    );
    if (Number(englishValue) || englishValue === "") callback(englishValue);
  }

  const onSubmit = (values: JobDetails, { setSubmitting }: FormikHelpers<JobDetails>) => {
    props.onSubmit(values);
  };

  return (
    <Container>
      <FormTitle>
        أعلن عن وظيفة /<Grey> تفاصيل الوظيفة</Grey>
      </FormTitle>
      <Formik initialValues={props.initialValues} validationSchema={validationSchema} onSubmit={onSubmit}>
        {(formikProps) => (
          <Form>
            <Container>
              <FieldContainer>
                <Label htmlFor="title">اسم الوظيفة</Label>
                <Field as={StyledField} id="title" name="title" />
                <ErrorMessage name="title" render={(msg) => <StyledErrorMessage>{msg}</StyledErrorMessage>} />
              </FieldContainer>

              <FieldContainer>
                <Label htmlFor="type">نوع الوظيفة</Label>
                <Field as={StyledSelect} id="type" name="type">
                  {JobTypes.map((jobType) => (
                    <option key={jobType} value={jobType}>
                      {jobType}
                    </option>
                  ))}
                </Field>
                <ErrorMessage name="type" render={(msg) => <StyledErrorMessage>{msg}</StyledErrorMessage>} />
              </FieldContainer>

              <FieldContainer>
                <Label htmlFor="field">مجال الوظيفة</Label>
                <Field as={StyledSelect} id="field" name="field">
                  {fields.map((field) => (
                    <option key={field} value={field}>
                      {field}
                    </option>
                  ))}
                </Field>
                <ErrorMessage name="field" render={(msg) => <StyledErrorMessage>{msg}</StyledErrorMessage>} />
              </FieldContainer>

              <FieldContainer>
                <Label>راتب الوظيفة</Label>
                <RangeContainer>
                  <Field
                    as={StyledMiniField}
                    id="salaryLowerEnd"
                    name="salaryLowerEnd"
                    placeholder="500 Kd"
                    onChange={(e: React.ChangeEvent<any>) =>
                      handleNumberInputChange(e, (value: string) => formikProps.setFieldValue("salaryLowerEnd", value))
                    }
                  />
                  <ToText>إلى</ToText>
                  <Field
                    as={StyledMiniField}
                    id="salaryHigherEnd"
                    name="salaryHigherEnd"
                    placeholder="2000 Kd"
                    onChange={(e: React.ChangeEvent<any>) =>
                      handleNumberInputChange(e, (value: string) => formikProps.setFieldValue("salaryHigherEnd", value))
                    }
                  />
                  <Field as={StyledMiniSelect} id="salaryPeriod" name="salaryPeriod">
                    {SalaryPeriods.map((period) => (
                      <option key={period} value={period}>
                        {period}
                      </option>
                    ))}
                  </Field>
                </RangeContainer>
                <ErrorMessage name="salaryLowerEnd" render={(msg) => <StyledErrorMessage>{msg}</StyledErrorMessage>} />
                <ErrorMessage name="salaryHigherEnd" render={(msg) => <StyledErrorMessage>{msg}</StyledErrorMessage>} />
              </FieldContainer>

              <FieldContainer>
                <Label htmlFor="area">مكان الوظيفة</Label>
                <Field as={StyledSelect} id="area" name="area">
                  {areas.map((area) => (
                    <option key={area} value={area}>
                      {area}
                    </option>
                  ))}
                </Field>
                <ErrorMessage name="area" render={(msg) => <StyledErrorMessage>{msg}</StyledErrorMessage>} />
              </FieldContainer>

              <FieldContainer>
                <Label htmlFor="employeesNeeded">كم عدد عمليات التوظيف المطلوبة لهذا المنصب؟</Label>
                <Field
                  as={StyledField}
                  id="employeesNeeded"
                  name="employeesNeeded"
                  onChange={(e: React.ChangeEvent<any>) =>
                    handleNumberInputChange(e, (value: string) => formikProps.setFieldValue("employeesNeeded", value))
                  }
                />
                <ErrorMessage name="employeesNeeded" render={(msg) => <StyledErrorMessage>{msg}</StyledErrorMessage>} />
              </FieldContainer>

              <FieldContainer>
                <Label htmlFor="email">ما مدى سرعة احتياجك للقيام بالتوظيف؟</Label>
                <Field as={StyledSelect} id="email" name="email" type="email">
                  {Urgencies.map((urgency) => (
                    <option key={urgency} value={urgency}>
                      {urgency}
                    </option>
                  ))}
                </Field>
                <ErrorMessage name="email" render={(msg) => <StyledErrorMessage>{msg}</StyledErrorMessage>} />
              </FieldContainer>

              <Button type="submit">متابعة</Button>
            </Container>
          </Form>
        )}
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
`;

const Grey = styled.span`
  color: #afa9b8;
`;

const FieldContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 24px;
`;

const Label = styled.label`
  font-size: 12px;
  line-height: 23px;
  color: #a19baa;
`;

const StyledField = styled.input`
  width: 378px;
  height: 46px;
  border: 2px solid #e3dfe8;
  box-sizing: border-box;
  border-radius: 6px;
  font-size: 14px;
  line-height: 27px;
  color: #37333e;
  padding: 9.5px 16px;
  font-family: inherit;

  /* Remove Arrows from type="number" fields */
  ::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
  ::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
`;

const StyledSelect = styled.select`
  width: 378px;
  height: 46px;
  border: 2px solid #e3dfe8;
  box-sizing: border-box;
  border-radius: 6px;
  font-size: 14px;
  line-height: 27px;
  color: #37333e;
  padding: 9.5px 16px;
  font-family: inherit;

  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none; /* Remove default arrow */
`;

const RangeContainer = styled.div`
  display: flex;
  align-items: center;
`;

const StyledMiniField = styled(StyledField)`
  width: 95px;
`;

const StyledMiniSelect = styled(StyledSelect)`
  width: 113px;
  background: #efebf5;
  margin-right: 21px;
  border: 1px solid #efebf5;
`;

const ToText = styled.p`
  margin: 0 8px;
  font-size: 12px;
  line-height: 23px;
  color: #37333e;
`;

const StyledErrorMessage = styled.p`
  font-size: 12px;
  line-height: 23px;
  color: #d1365d;
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
`;

export default JobDetailsForm;
